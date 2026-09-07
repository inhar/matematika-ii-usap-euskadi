(() => {
  const boardId = "rational-extra-board";
  let graph;
  const colors = {
    ink: "#1b1b18",
    muted: "#74756f",
    guide: "#aaa9a4",
    accent: "#c45f3f",
    blue: "#52758b",
    white: "#ffffff",
  };
  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function init() {
    const container = document.getElementById(boardId);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;

    const compact = window.innerWidth <= 560;
    const bounds = [-6.4, 4.6, 8.1, -4.6];
    const board = JXG.JSXGraph.initBoard(boardId, {
      boundingbox: bounds,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });
    const fixed = { fixed: true, highlight: false };
    const label = (x, y, source, overrides = {}) => board.create("text", [x, y, math(source)], {
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 10 : 13,
      color: overrides.color ?? colors.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: overrides.anchorX ?? "middle",
      anchorY: overrides.anchorY ?? "middle",
    });
    const f = (x) => x / (x * x - 3 * x - 4);

    board.create("line", [[-6.1, 0], [7.8, 0]], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.5 });
    board.create("line", [[0, -4.25], [0, 4.25]], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.5 });
    [-1, 4].forEach((x) => board.create("line", [[x, -4.25], [x, 4.25]], {
      ...fixed,
      strokeColor: colors.guide,
      strokeWidth: 1.35,
      dash: 2,
    }));

    [[-6.1, -1.07], [-0.93, 3.93], [4.07, 7.8]].forEach(([from, to]) => {
      board.create("functiongraph", [f, from, to], {
        ...fixed,
        strokeColor: colors.ink,
        strokeWidth: compact ? 2.5 : 3.1,
        numberPointsHigh: 900,
      });
    });
    board.create("functiongraph", [(x) => -x / 4, -6.0, 7.7], {
      ...fixed,
      strokeColor: colors.blue,
      strokeWidth: compact ? 2.1 : 2.6,
    });
    board.create("point", [0, 0], {
      ...fixed,
      size: compact ? 3.3 : 4,
      face: "o",
      fillColor: colors.accent,
      strokeColor: colors.white,
      strokeWidth: 1.6,
      withLabel: false,
      showInfobox: false,
      name: "",
    });

    const tick = (a, b) => board.create("segment", [a, b], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.2 });
    tick([-1, -0.11], [-1, 0.11]);
    tick([4, -0.11], [4, 0.11]);
    tick([-0.11, 1], [0.11, 1]);
    label(-1, -0.34, "-1", { anchorY: "top", color: colors.muted });
    label(4, -0.34, "4", { anchorY: "top", color: colors.muted });
    label(-0.25, 1, "1", { anchorX: "right", color: colors.muted });
    label(7.65, -0.3, "x", { anchorX: "right", anchorY: "top", color: colors.muted });
    label(0.22, 4.16, "y", { anchorX: "left", anchorY: "top", color: colors.muted });
    label(-1.22, 3.85, "x=-1", { anchorX: "right", color: colors.muted });
    label(4.22, 3.85, "x=4", { anchorX: "left", color: colors.muted });
    label(-5.75, 0.28, "y=0", { anchorX: "left", anchorY: "bottom", color: colors.muted });
    label(5.65, 0.95, "f", { anchorX: "left" });
    label(5.0, -1.6, String.raw`y=-\frac14x`, { anchorX: "left", color: colors.blue });
    label(0.18, -0.24, "O", { anchorX: "left", anchorY: "top", color: colors.accent });

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(310, width * 0.88) : Math.max(350, width * 0.55);
      board.resizeContainer(width, height);
      board.setBoundingBox(bounds, false);
      board.fullUpdate();
    };
    graph = { refresh };
    container.dataset.ready = "true";
    refresh();
  }

  function reveal() {
    requestAnimationFrame(() => {
      init();
      requestAnimationFrame(() => graph?.refresh());
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", reveal, { once: true });
  } else {
    reveal();
  }
})();

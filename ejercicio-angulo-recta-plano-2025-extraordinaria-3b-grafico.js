(() => {
  const boardId = "line-plane-angle-extra-board";
  let graph;
  const colors = {
    ink: "#1b1b18",
    muted: "#74756f",
    guide: "#aaa9a4",
    accent: "#c45f3f",
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
    const bounds = [-5.6, 3.15, 6.4, -2.7];
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
      fontSize: compact ? 11 : 14,
      color: overrides.color ?? colors.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: overrides.anchorX ?? "middle",
      anchorY: overrides.anchorY ?? "middle",
    });

    const alpha = Math.asin(2 / Math.sqrt(101));
    const D = [0, 0];
    const lineStart = [-5.2, -5.2 * Math.tan(alpha)];
    const lineEnd = [6.0, 6.0 * Math.tan(alpha)];

    board.create("line", [[-5.3, 0], [6.1, 0]], {
      ...fixed,
      strokeColor: colors.muted,
      strokeWidth: compact ? 2.1 : 2.5,
    });
    board.create("line", [lineStart, lineEnd], {
      ...fixed,
      strokeColor: colors.accent,
      strokeWidth: compact ? 2.8 : 3.4,
      straightFirst: false,
      straightLast: false,
      firstArrow: true,
      lastArrow: true,
    });
    board.create("segment", [[0, -2.15], [0, 2.55]], {
      ...fixed,
      strokeColor: colors.guide,
      strokeWidth: 1.25,
      dash: 2,
    });
    board.create("curve", [
      (t) => 1.52 * Math.cos(t),
      (t) => 1.52 * Math.sin(t),
      0,
      alpha,
    ], {
      ...fixed,
      strokeColor: colors.ink,
      strokeWidth: 1.6,
    });
    board.create("point", D, {
      ...fixed,
      size: compact ? 3.4 : 4.2,
      face: "o",
      fillColor: colors.ink,
      strokeColor: colors.white,
      strokeWidth: 1.7,
      withLabel: false,
      showInfobox: false,
      name: "",
    });

    label(-4.75, 0.35, String.raw`\pi`, { anchorX: "left", color: colors.muted });
    label(5.15, 1.35, "r", { anchorX: "left", color: colors.accent });
    label(0.18, -0.38, "D", { anchorX: "left", anchorY: "top" });
    label(1.72, 0.35, String.raw`\alpha`, { anchorX: "left" });
    label(0.22, 2.35, String.raw`\vec n`, { anchorX: "left", color: colors.muted });

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(270, width * 0.7) : Math.max(300, width * 0.42);
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

(() => {
  const ID = "skew-lines-2024-board";
  const BOUNDS = [-4.8, 2.7, 4.8, -2.7];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#747670",
    blue: "#55778d",
    accent: "#c95f3f",
    guide: "#bfc1bb",
    white: "#fff",
  };
  let graph;

  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function initGraph() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;
    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(ID, {
      boundingbox: BOUNDS,
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
    const textStyle = (overrides = {}) => ({
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 11 : 15,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: "middle",
      anchorY: "middle",
      ...overrides,
    });
    const r = (x) => -1 + 0.22 * x;
    const s = (x) => 1.15 - 0.13 * x;
    const lower = [-0.45, r(-0.45)];
    const upper = [-0.1, s(-0.1)];

    board.create("functiongraph", [r, -4.45, 4.45], {
      ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.6 : 3.1,
    });
    board.create("functiongraph", [s, -4.45, 4.45], {
      ...fixed, strokeColor: COLORS.blue, strokeWidth: compact ? 2.6 : 3.1,
    });
    board.create("segment", [lower, upper], {
      ...fixed, strokeColor: COLORS.accent, strokeWidth: compact ? 2.7 : 3.3,
    });
    board.create("segment", [[1.25, r(1.25)], [2.4, r(2.4)]], {
      ...fixed, strokeColor: COLORS.ink, strokeWidth: 2, lastArrow: { type: 2, size: 5 },
    });
    board.create("segment", [[1.35, s(1.35)], [2.5, s(2.5)]], {
      ...fixed, strokeColor: COLORS.blue, strokeWidth: 2, lastArrow: { type: 2, size: 5 },
    });
    board.create("segment", [[lower[0], lower[1] - 0.28], [lower[0], upper[1] + 0.28]], {
      ...fixed, strokeColor: COLORS.guide, strokeWidth: 1, dash: 2,
    });

    const pointStyle = {
      ...fixed, size: compact ? 3.5 : 4.2, face: "o", fillColor: COLORS.ink,
      strokeColor: COLORS.white, strokeWidth: 1.5, withLabel: false, showInfobox: false, name: "",
    };
    board.create("point", lower, pointStyle);
    board.create("point", upper, { ...pointStyle, fillColor: COLORS.blue });

    board.create("text", [-4.05, r(-4.05) - 0.3, math("r")], textStyle({ color: COLORS.ink, fontSize: compact ? 15 : 20 }));
    board.create("text", [4.05, s(4.05) + 0.28, math("s")], textStyle({ color: COLORS.blue, fontSize: compact ? 15 : 20 }));
    board.create("text", [2.05, r(2.05) - 0.34, math("\\vec v_r")], textStyle({ color: COLORS.ink }));
    board.create("text", [2.02, s(2.02) + 0.34, math("\\vec v_s")], textStyle({ color: COLORS.blue }));
    board.create("text", [0.02, 0.08, math("d(r,s)")], textStyle({ anchorX: "left", color: COLORS.accent, fontSize: compact ? 12 : 16 }));
    board.create("text", [lower[0] - 0.18, lower[1] - 0.23, math("H_r")], textStyle({ anchorX: "right", anchorY: "top" }));
    board.create("text", [upper[0] + 0.2, upper[1] + 0.2, math("H_s")], textStyle({ anchorX: "left", anchorY: "bottom" }));

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(280, width * 0.82) : Math.max(350, width * 0.5);
      board.resizeContainer(width, height);
      board.setBoundingBox(BOUNDS, false);
      board.fullUpdate();
    };
    graph = { refresh };
    container.dataset.ready = "true";
    refresh();
  }

  function reveal() {
    requestAnimationFrame(() => {
      initGraph();
      requestAnimationFrame(() => graph?.refresh());
    });
  }
  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true });
  else reveal();
})();

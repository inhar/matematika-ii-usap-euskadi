(() => {
  const ID = "quartic-2024-board";
  const BOUNDS = [-0.95, 3.54, 0.95, 2.74];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#c6c7c2",
    accent: "#c95f3f",
    white: "#ffffff",
  };
  let graph;

  const f = (x) => 2 * x ** 4 - x ** 2 + 3;
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
    const guide = {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      dash: 2,
    };
    const textStyle = (overrides = {}) => ({
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 10 : 13,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: "middle",
      anchorY: "middle",
      ...overrides,
    });

    board.create("segment", [[0, 2.76], [0, 3.5]], {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.72,
      strokeWidth: 1.2,
    });
    board.create("segment", [[-0.89, 3], [0.89, 3]], guide);
    board.create("segment", [[-0.89, 23 / 8], [0.89, 23 / 8]], guide);
    [-0.5, 0.5].forEach((x) => board.create("segment", [[x, 2.76], [x, 23 / 8]], guide));

    board.create("functiongraph", [f, -0.92, 0.92], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.6 : 3.2,
    });

    const pointStyle = {
      ...fixed,
      size: compact ? 3.3 : 4,
      face: "o",
      fillColor: COLORS.accent,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      withLabel: false,
      name: "",
    };
    [[-0.5, 23 / 8], [0, 3], [0.5, 23 / 8]].forEach((point) => board.create("point", point, pointStyle));

    board.create("text", [-0.5, 2.775, math("-\\frac12")], textStyle({ anchorY: "bottom", color: COLORS.muted }));
    board.create("text", [0.5, 2.775, math("\\frac12")], textStyle({ anchorY: "bottom", color: COLORS.muted }));
    board.create("text", [-0.87, 3.012, math("3")], textStyle({ anchorX: "left", anchorY: "bottom", color: COLORS.muted }));
    board.create("text", [-0.87, 2.887, math("\\frac{23}{8}")], textStyle({ anchorX: "left", anchorY: "bottom", color: COLORS.muted }));
    board.create("text", [0.69, 3.28, math("f")], textStyle({ color: COLORS.accent, fontSize: compact ? 16 : 21 }));
    board.create("text", [0.035, 3.505, math("f(x)")], textStyle({ anchorX: "left", color: COLORS.muted }));

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(280, width * 0.8) : Math.max(350, width * 0.5);
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

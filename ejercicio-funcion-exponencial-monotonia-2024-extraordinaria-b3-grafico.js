(() => {
  const ID = "exponential-study-2024-board";
  const BOUNDS = [-2.15, 0.92, 2.15, -0.92];
  const COLORS = { ink: "#1b1b18", muted: "#73756f", guide: "#c4c5c0", accent: "#c95f3f", white: "#fff" };
  let graph;
  const f = (x) => 2 * x * Math.exp(-2 * x * x);
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function init() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(ID, { boundingbox: BOUNDS, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const textStyle = (overrides = {}) => ({ ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: COLORS.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: "middle", anchorY: "middle", ...overrides });
    board.create("line", [[-2.15, 0], [2.15, 0]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("line", [[0, -0.92], [0, 0.92]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    [-0.5, 0.5].forEach((x) => {
      const y = f(x);
      board.create("segment", [[x, 0], [x, y]], { ...fixed, strokeColor: COLORS.guide, strokeWidth: 1, dash: 2 });
      board.create("point", [x, y], { ...fixed, size: compact ? 3.3 : 4, face: "o", fillColor: COLORS.ink, strokeColor: COLORS.white, strokeWidth: 1.5, withLabel: false, showInfobox: false, name: "" });
    });
    board.create("functiongraph", [f, -2.15, 2.15], { ...fixed, strokeColor: COLORS.accent, strokeWidth: compact ? 2.8 : 3.3 });
    board.create("text", [-0.58, -0.69, math("\\left(-\\frac12,-\\frac1{\\sqrt e}\\right)")], textStyle({ anchorX: "right", anchorY: "top" }));
    board.create("text", [0.58, 0.69, math("\\left(\\frac12,\\frac1{\\sqrt e}\\right)")], textStyle({ anchorX: "left", anchorY: "bottom" }));
    board.create("text", [1.25, 0.16, math("f(x)=2xe^{-2x^2}")], textStyle({ color: COLORS.accent }));
    board.create("text", [1.98, -0.09, math("x")], textStyle({ color: COLORS.muted }));
    board.create("text", [0.06, 0.84, math("y")], textStyle({ anchorX: "left", color: COLORS.muted }));
    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = innerWidth <= 560 ? Math.max(290, width * 0.84) : Math.max(350, width * 0.48);
      board.resizeContainer(width, height);
      board.setBoundingBox(BOUNDS, false);
      board.fullUpdate();
    };
    graph = { refresh };
    container.dataset.ready = "true";
    refresh();
  }
  function reveal() { requestAnimationFrame(() => { init(); requestAnimationFrame(() => graph?.refresh()); }); }
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true }); else reveal();
})();

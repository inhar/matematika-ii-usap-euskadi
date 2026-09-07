(() => {
  const ID = "cubic-extra-2024-board";
  const BOUNDS = [-1.8, 7.4, 0.72, -9];
  const COLORS = { ink: "#1b1b18", muted: "#73756f", guide: "#c4c5c0", accent: "#c95f3f", white: "#fff" };
  let graph;
  const f = (x) => x ** 3 - 3 * x ** 2 + 4;
  const tangent = (x) => 9 * x + 9;
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function init() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(ID, { boundingbox: BOUNDS, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const textStyle = (overrides = {}) => ({ ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: COLORS.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: "middle", anchorY: "middle", ...overrides });
    board.create("line", [[-1.8, 0], [0.72, 0]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("line", [[0, -9], [0, 7.4]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("segment", [[-1, -0.35], [-1, 0.35]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 });
    board.create("text", [-1, -0.75, math("-1")], textStyle({ anchorY: "top", color: COLORS.muted }));
    board.create("segment", [[-0.025, 4], [0.025, 4]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 });
    board.create("text", [-0.07, 4, math("4")], textStyle({ anchorX: "right", color: COLORS.muted }));
    board.create("segment", [[-1, 0], [-1, 6.6]], { ...fixed, strokeColor: COLORS.guide, strokeWidth: 1, dash: 2 });
    board.create("functiongraph", [f, -1.75, 0.7], { ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.7 : 3.2 });
    board.create("functiongraph", [tangent, -1.72, -0.2], { ...fixed, strokeColor: COLORS.accent, strokeWidth: compact ? 2.7 : 3.2 });
    board.create("point", [-1, 0], { ...fixed, size: compact ? 3.5 : 4.2, face: "o", fillColor: COLORS.ink, strokeColor: COLORS.white, strokeWidth: 1.5, withLabel: false, showInfobox: false, name: "" });
    board.create("text", [-1.08, 0.7, math("(-1,0)")], textStyle({ anchorX: "right", anchorY: "bottom" }));
    board.create("text", [0.25, 5.05, math("f")], textStyle({ fontSize: compact ? 16 : 20 }));
    board.create("text", [-0.47, 5.55, math("y=9x+9")], textStyle({ anchorX: "right", color: COLORS.accent }));
    board.create("text", [0.62, -0.65, math("x")], textStyle({ color: COLORS.muted }));
    board.create("text", [0.06, 7, math("y")], textStyle({ anchorX: "left", color: COLORS.muted }));
    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = innerWidth <= 560 ? Math.max(290, width * 0.86) : Math.max(360, width * 0.52);
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

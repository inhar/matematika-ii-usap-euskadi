(() => {
  const ID = "independent-events-2024-board";
  const BOUNDS = [-0.22, 1.16, 1.12, -0.15];
  const COLORS = { ink: "#1b1b18", muted: "#73756f", accent: "#c95f3f", light: "#f4e5df", pale: "#f5f5f2" };
  let graph;
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function init() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(ID, { boundingbox: BOUNDS, axis: false, keepaspectratio: true, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const textStyle = (overrides = {}) => ({ ...fixed, parse: false, useMathJax: false, fontSize: compact ? 11 : 14, color: COLORS.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: "middle", anchorY: "middle", ...overrides });
    const cell = (corners, color) => board.create("polygon", corners, { ...fixed, fillColor: color, fillOpacity: 1, borders: { strokeColor: "#ffffff", strokeWidth: 2 }, vertices: { visible: false }, hasInnerPoints: true });
    cell([[0, 0], [0.7, 0], [0.7, 0.9], [0, 0.9]], COLORS.light);
    cell([[0.7, 0], [1, 0], [1, 0.9], [0.7, 0.9]], COLORS.pale);
    cell([[0, 0.9], [0.7, 0.9], [0.7, 1], [0, 1]], "#e9c8bc");
    cell([[0.7, 0.9], [1, 0.9], [1, 1], [0.7, 1]], "#e7e7e2");
    board.create("polygon", [[0, 0], [1, 0], [1, 1], [0, 1]], { ...fixed, fillOpacity: 0, borders: { strokeColor: COLORS.ink, strokeWidth: 1.5 }, vertices: { visible: false } });
    board.create("text", [0.35, 1.08, math("A\\;(P=0{,}7)")], textStyle({ anchorY: "bottom", color: COLORS.accent }));
    board.create("text", [0.85, 1.08, math("\\overline A\\;(P=0{,}3)")], textStyle({ anchorY: "bottom", color: COLORS.muted }));
    board.create("text", [-0.035, 0.95, math("B\\;(0{,}1)")], textStyle({ anchorX: "right", color: COLORS.accent, fontSize: compact ? 9 : 12 }));
    board.create("text", [-0.035, 0.45, math("\\overline B\\;(0{,}9)")], textStyle({ anchorX: "right", color: COLORS.muted, fontSize: compact ? 9 : 12 }));
    board.create("text", [0.35, 0.95, math("0{,}07")], textStyle({ color: COLORS.accent, fontSize: compact ? 10 : 13 }));
    board.create("text", [0.85, 0.95, math("0{,}03")], textStyle({ color: COLORS.muted, fontSize: compact ? 10 : 13 }));
    board.create("text", [0.35, 0.45, math("0{,}63")], textStyle({ color: COLORS.accent, fontSize: compact ? 17 : 22 }));
    board.create("text", [0.85, 0.45, math("0{,}27")], textStyle({ color: COLORS.ink, fontSize: compact ? 17 : 22 }));
    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = innerWidth <= 560 ? Math.max(285, width * 0.86) : Math.max(390, width * 0.62);
      board.resizeContainer(width, height);
      board.setBoundingBox(BOUNDS, true);
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

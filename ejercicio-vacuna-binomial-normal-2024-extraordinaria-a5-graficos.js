(() => {
  const COLORS = { ink: "#1b1b18", muted: "#73756f", guide: "#c4c5c0", accent: "#c95f3f", fill: "#dfb3a3", white: "#fff" };
  const graphs = new Map();
  const density = (z) => Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI);
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function createFilledPolygon(board, start, end) {
    const points = [[start, 0]];
    const steps = 44;
    for (let i = 0; i <= steps; i += 1) { const x = start + ((end - start) * i) / steps; points.push([x, density(x)]); }
    points.push([end, 0]);
    board.create("polygon", points, { fixed: true, highlight: false, fillColor: COLORS.fill, fillOpacity: 0.82, borders: { visible: false }, vertices: { visible: false }, hasInnerPoints: true });
  }

  function init(id, mode) {
    const container = document.getElementById(id);
    if (!container || graphs.has(id) || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = [-3.45, 0.47, 3.45, -0.075];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const textStyle = (overrides = {}) => ({ ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: COLORS.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: "middle", anchorY: "middle", ...overrides });
    if (mode === "band") createFilledPolygon(board, 0.82, 0.86); else createFilledPolygon(board, -3.45, -2.68);
    board.create("line", [[-3.45, 0], [3.45, 0]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("functiongraph", [density, -3.45, 3.45], { ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.8 : 3.2 });
    if (mode === "band") {
      [0.82, 0.86].forEach((x) => board.create("segment", [[x, 0], [x, density(x)]], { ...fixed, strokeColor: COLORS.accent, strokeWidth: 1.2, dash: 2 }));
      board.create("text", [0.73, -0.018, math("0{,}82")], textStyle({ anchorX: "right", anchorY: "top", color: COLORS.accent }));
      board.create("text", [0.95, -0.018, math("0{,}86")], textStyle({ anchorX: "left", anchorY: "top", color: COLORS.accent }));
      board.create("text", [1.28, 0.24, math("P\\approx0{,}0112")], textStyle({ color: COLORS.accent, fontSize: compact ? 12 : 16 }));
    } else {
      board.create("segment", [[-2.68, 0], [-2.68, density(-2.68)]], { ...fixed, strokeColor: COLORS.accent, strokeWidth: 1.2, dash: 2 });
      board.create("text", [-2.68, -0.018, math("-2{,}68")], textStyle({ anchorY: "top", color: COLORS.accent }));
      board.create("text", [-2.58, 0.075, math("P\\approx0{,}0037")], textStyle({ color: COLORS.accent, fontSize: compact ? 12 : 16 }));
    }
    board.create("segment", [[0, -0.008], [0, 0.008]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 });
    board.create("text", [0, -0.018, math("0")], textStyle({ anchorY: "top", color: COLORS.muted }));
    board.create("text", [3.22, -0.018, math("z")], textStyle({ anchorY: "top", color: COLORS.muted }));
    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = innerWidth <= 560 ? Math.max(270, width * 0.72) : Math.max(330, width * 0.43);
      board.resizeContainer(width, height);
      board.setBoundingBox(bounds, false);
      board.fullUpdate();
    };
    graphs.set(id, { refresh });
    container.dataset.ready = "true";
    refresh();
  }
  function reveal() {
    requestAnimationFrame(() => {
      init("vaccine-binomial-2024-band-board", "band");
      init("vaccine-binomial-2024-tail-board", "tail");
      requestAnimationFrame(() => graphs.forEach((graph) => graph.refresh()));
    });
  }
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true }); else reveal();
})();

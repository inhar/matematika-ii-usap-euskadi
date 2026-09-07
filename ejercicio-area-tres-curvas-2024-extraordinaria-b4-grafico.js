(() => {
  const ID = "three-curves-extra-2024-board";
  const BOUNDS = [-0.45, 4.15, 3.75, -0.55];
  const COLORS = { ink: "#1b1b18", muted: "#73756f", guide: "#c4c5c0", accent: "#c95f3f", fill: "#ead8d0", white: "#fff" };
  let graph;
  const lower = (x) => x * x / 3;
  const leftUpper = (x) => x * x + 2 * x;
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function init() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(ID, { boundingbox: BOUNDS, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const textStyle = (overrides = {}) => ({ ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: COLORS.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: "middle", anchorY: "middle", ...overrides });

    const boundary = [];
    for (let i = 0; i <= 24; i += 1) { const x = i / 24; boundary.push([x, leftUpper(x)]); }
    for (let i = 1; i <= 24; i += 1) boundary.push([1 + (2 * i) / 24, 3]);
    for (let i = 24; i >= 0; i -= 1) { const x = (3 * i) / 24; boundary.push([x, lower(x)]); }
    board.create("polygon", boundary, { ...fixed, fillColor: COLORS.fill, fillOpacity: 0.74, borders: { visible: false }, vertices: { visible: false }, hasInnerPoints: true });

    board.create("line", [[-0.45, 0], [3.75, 0]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("line", [[0, -0.55], [0, 4.15]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.2 });
    board.create("functiongraph", [lower, -0.05, 3.55], { ...fixed, strokeColor: COLORS.accent, strokeWidth: compact ? 2.8 : 3.3 });
    board.create("functiongraph", [leftUpper, -0.3, 1.35], { ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.8 : 3.3 });
    board.create("line", [[0, 3], [1, 3]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: compact ? 2.2 : 2.7 });
    [[0, 0], [1, 3], [3, 3]].forEach(([x, y]) => board.create("point", [x, y], { ...fixed, size: compact ? 3.2 : 4, face: "o", fillColor: COLORS.ink, strokeColor: COLORS.white, strokeWidth: 1.5, withLabel: false, showInfobox: false, name: "" }));
    [[1, "1"], [3, "3"]].forEach(([x, label]) => { board.create("segment", [[x, -0.04], [x, 0.04]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 }); board.create("text", [x, -0.14, math(label)], textStyle({ anchorY: "top", color: COLORS.muted })); });
    board.create("segment", [[-0.035, 3], [0.035, 3]], { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 });
    board.create("text", [-0.09, 3, math("3")], textStyle({ anchorX: "right", color: COLORS.muted }));
    board.create("text", [-0.07, -0.14, math("O")], textStyle({ anchorX: "right", anchorY: "top" }));
    board.create("text", [0.92, 3.17, math("P")], textStyle({ anchorX: "right", anchorY: "bottom" }));
    board.create("text", [3.08, 3.17, math("Q")], textStyle({ anchorX: "left", anchorY: "bottom" }));
    board.create("text", [2.55, 2.02, math("y=\\frac{x^2}{3}")], textStyle({ color: COLORS.accent }));
    board.create("text", [0.43, 1.48, math("y=x^2+2x")], textStyle({ anchorX: "left" }));
    board.create("text", [2.02, 3.17, math("y=3")], textStyle({ color: COLORS.muted, anchorY: "bottom" }));
    board.create("text", [1.55, 1.78, math("R")], textStyle({ color: COLORS.accent, fontSize: compact ? 16 : 20 }));
    board.create("text", [3.57, -0.12, math("x")], textStyle({ color: COLORS.muted }));
    board.create("text", [0.06, 3.97, math("y")], textStyle({ anchorX: "left", color: COLORS.muted }));

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = innerWidth <= 560 ? Math.max(300, width * 0.9) : Math.max(360, width * 0.53);
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

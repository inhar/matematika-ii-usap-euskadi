(() => {
  const ids = ["symmetry-line-extra-board-foot", "symmetry-line-extra-board-reflection"];
  const graphs = new Map();
  const colors = { ink: "#1b1b18", muted: "#74756f", guide: "#aaa9a4", accent: "#c45f3f", blue: "#52758b", white: "#fff" };
  const math = (source) => window.katex ? window.katex.renderToString(source, { throwOnError: false, output: "html" }) : source;

  function initOne(id) {
    const container = document.getElementById(id);
    if (!container || graphs.has(id) || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;
    const compact = window.innerWidth <= 560;
    const bounds = [-6.4, 3.7, 6.4, -3.7];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const text = (x, y, source, overrides = {}) => board.create("text", [x, y, math(source)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: overrides.color ?? colors.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;", anchorX: overrides.anchorX ?? "middle", anchorY: overrides.anchorY ?? "middle" });
    const point = (coordinates, color = colors.ink) => board.create("point", coordinates, { ...fixed, size: compact ? 3.2 : 4, face: "o", fillColor: color, strokeColor: colors.white, strokeWidth: 1.5, withLabel: false, showInfobox: false, name: "" });

    const M = [-1.1, 0], P = [-1.1, 2.55], reflected = [-1.1, -2.55], A = [2.5, 0], B = [4.6, 0];
    board.create("line", [[-6.1, 0], [6.1, 0]], { ...fixed, strokeColor: colors.ink, strokeWidth: compact ? 2 : 2.4 });
    board.create("segment", [P, reflected], { ...fixed, strokeColor: colors.guide, strokeWidth: 1.4, dash: 2 });
    board.create("segment", [[-1.1, 0], [-0.78, 0]], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.2 });
    board.create("segment", [[-0.78, 0], [-0.78, 0.3]], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.2 });
    board.create("segment", [[-0.78, 0.3], [-1.1, 0.3]], { ...fixed, strokeColor: colors.muted, strokeWidth: 1.2 });
    board.create("segment", [[-1.28, 1.2], [-0.92, 1.2]], { ...fixed, strokeColor: colors.accent, strokeWidth: 2 });
    board.create("segment", [[-1.28, -1.2], [-0.92, -1.2]], { ...fixed, strokeColor: colors.accent, strokeWidth: 2 });
    point(M, colors.ink); point(P, colors.blue); point(reflected, colors.accent); point(A); point(B);
    text(-5.65, 0.3, "r", { anchorX: "left" });
    text(-1.42, 0.18, "M", { anchorX: "right", anchorY: "bottom" });
    text(-0.78, 2.62, "P", { anchorX: "left", color: colors.blue });
    text(-0.78, -2.62, "P'", { anchorX: "left", color: colors.accent });
    text(2.5, -0.28, "A", { anchorY: "top" }); text(4.6, -0.28, "B", { anchorY: "top" });
    text(-1.52, 1.35, String.raw`PM`, { anchorX: "right", color: colors.accent });
    text(-1.52, -1.35, String.raw`MP'`, { anchorX: "right", color: colors.accent });

    const refresh = () => { if (!container.offsetParent || container.clientWidth < 100) return; const width = container.clientWidth; const height = window.innerWidth <= 560 ? Math.max(270, width * 0.76) : Math.max(320, width * 0.43); board.resizeContainer(width, height); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    graphs.set(id, { refresh }); container.dataset.ready = "true"; refresh();
  }
  function reveal() { requestAnimationFrame(() => { ids.forEach(initOne); requestAnimationFrame(() => graphs.forEach((graph) => graph.refresh())); }); }
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true }); else reveal();
})();

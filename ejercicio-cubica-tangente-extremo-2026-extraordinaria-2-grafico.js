(() => {
  const id = "cubic-extra-2026-board";
  let state;
  const color = { ink: "#1b1b18", muted: "#74756f", guide: "#b9b8b2", accent: "#c45f3f", white: "#fff" };
  const tex = (value) => window.katex ? window.katex.renderToString(value, { throwOnError: false, output: "html" }) : value;

  function init() {
    const box = document.getElementById(id);
    if (!box || state || !box.offsetParent || box.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = compact ? [-2.15, 6.4, 2.55, -1.2] : [-2.4, 6.4, 2.8, -1.1];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: true, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true }, defaultAxes: { x: { ticks: { visible: false }, name: "" }, y: { ticks: { visible: false }, name: "" } } });
    const fixed = { fixed: true, highlight: false };
    const text = (x, y, value, options = {}) => board.create("text", [x, y, tex(value)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 11 : 14, color: options.color ?? color.ink, cssStyle: "font-family:Newsreader,Georgia,serif;letter-spacing:0;white-space:nowrap;", anchorX: options.anchorX ?? "middle", anchorY: options.anchorY ?? "middle" });
    board.create("functiongraph", [(x) => x ** 3 - 3 * x + 3], { ...fixed, strokeColor: color.ink, strokeWidth: compact ? 2.5 : 3.2 });
    board.create("functiongraph", [(x) => 3 - 3 * x], { ...fixed, strokeColor: color.accent, strokeWidth: compact ? 2.1 : 2.7, dash: 1 });
    board.create("segment", [[1, 0], [1, 1]], { ...fixed, strokeColor: color.guide, strokeWidth: 1.2, dash: 2 });
    [[0, 3], [1, 1]].forEach((point) => board.create("point", point, { ...fixed, name: "", size: compact ? 3.4 : 4.2, fillColor: color.ink, strokeColor: color.white, strokeWidth: 1.7, showInfobox: false }));
    text(-1.82, 5.25, String.raw`f(x)=x^3-3x+3`, { anchorX: "left" });
    text(-1.72, 2.0, String.raw`y=3-3x`, { anchorX: "left", color: color.accent });
    text(0.12, 3.35, String.raw`(0,3)`, { anchorX: "left" });
    text(1.12, 0.72, String.raw`(1,1)`, { anchorX: "left", anchorY: "top" });
    text(1, -0.24, "1"); text(-0.17, 1, "1", { anchorX: "right" });
    const refresh = () => { if (!box.offsetParent || box.clientWidth < 100) return; const w = box.clientWidth; const h = innerWidth <= 560 ? Math.max(300, w * .78) : Math.max(330, w * .48); board.resizeContainer(w, h); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    state = { refresh }; box.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { init(); requestAnimationFrame(() => state?.refresh()); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", reveal, { once: true }) : reveal();
})();

(() => {
  const id = "angle-extra-2026-board";
  let state;
  const c = { ink: "#1b1b18", muted: "#74756f", guide: "#aaa9a4", accent: "#c45f3f", white: "#fff" };
  const tex = (value) => window.katex ? window.katex.renderToString(value, { throwOnError: false, output: "html" }) : value;
  function init() {
    const box = document.getElementById(id);
    if (!box || state || !box.offsetParent || box.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = compact ? [-5.2, 7, 5.2, -3.8] : [-7, 5.4, 7, -3.5];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const text = (x, y, value, options = {}) => board.create("text", [x, y, tex(value)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 11 : 15, color: options.color ?? c.ink, cssStyle: "font-family:Newsreader,Georgia,serif;letter-spacing:0;white-space:nowrap;", anchorX: options.anchorX ?? "middle", anchorY: options.anchorY ?? "middle" });
    const alpha = 73.4 * Math.PI / 180;
    board.create("line", [[-6.6, 0], [6.6, 0]], { ...fixed, strokeColor: c.muted, strokeWidth: compact ? 2.3 : 2.8 });
    board.create("line", [[-1.55, -1.55 * Math.tan(alpha)], [1.55, 1.55 * Math.tan(alpha)]], { ...fixed, strokeColor: c.accent, strokeWidth: compact ? 2.8 : 3.4, firstArrow: true, lastArrow: true });
    board.create("segment", [[0, -3], [0, 5]], { ...fixed, strokeColor: c.guide, strokeWidth: 1.4, dash: 2 });
    board.create("curve", [(t) => 1.45 * Math.cos(t), (t) => 1.45 * Math.sin(t), 0, alpha], { ...fixed, strokeColor: c.ink, strokeWidth: 1.6 });
    board.create("curve", [(t) => .92 * Math.cos(t), (t) => .92 * Math.sin(t), alpha, Math.PI / 2], { ...fixed, strokeColor: c.guide, strokeWidth: 1.5 });
    board.create("point", [0, 0], { ...fixed, name: "", size: compact ? 3.6 : 4.4, fillColor: c.ink, strokeColor: c.white, strokeWidth: 1.7, showInfobox: false });
    text(-5.8, -.42, String.raw`\pi`, { anchorX: "left", anchorY: "top", color: c.muted });
    text(1.72, 4.0, "r", { anchorX: "left", color: c.accent });
    text(.2, -.35, "Q", { anchorX: "left", anchorY: "top" });
    text(.95, .55, String.raw`\alpha`); text(-.22, 1.28, String.raw`\beta`, { anchorX: "right", color: c.muted });
    text(.22, 4.55, String.raw`\vec n`, { anchorX: "left", color: c.muted });
    const refresh = () => { if (!box.offsetParent || box.clientWidth < 100) return; const w = box.clientWidth; const h = innerWidth <= 560 ? Math.max(300, w * .82) : Math.max(330, w * .47); board.resizeContainer(w, h); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    state = { refresh }; box.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { init(); requestAnimationFrame(() => state?.refresh()); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", reveal, { once: true }) : reveal();
})();

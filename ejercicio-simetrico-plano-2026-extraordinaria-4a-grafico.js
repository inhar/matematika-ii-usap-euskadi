(() => {
  const id = "reflection-extra-2026-board";
  let state;
  const c = { ink: "#1b1b18", muted: "#777872", guide: "#aaa9a4", accent: "#c45f3f", white: "#fff" };
  const tex = (value) => window.katex ? window.katex.renderToString(value, { throwOnError: false, output: "html" }) : value;
  function init() {
    const box = document.getElementById(id);
    if (!box || state || !box.offsetParent || box.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = compact ? [-5.2, 5.1, 5.2, -5.1] : [-6.5, 4.1, 6.5, -4.1];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const text = (x, y, value, options = {}) => board.create("text", [x, y, tex(value)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 11 : 15, color: options.color ?? c.ink, cssStyle: "font-family:Newsreader,Georgia,serif;letter-spacing:0;white-space:nowrap;", anchorX: options.anchorX ?? "middle", anchorY: options.anchorY ?? "middle" });
    const M = [0, 0], P = [-2.1, 3], Pp = [2.1, -3];
    board.create("line", [[-6, -3], [6, 3]], { ...fixed, strokeColor: c.muted, strokeWidth: compact ? 2.3 : 2.8 });
    board.create("segment", [P, Pp], { ...fixed, strokeColor: c.accent, strokeWidth: compact ? 2.5 : 3.2, dash: 1 });
    [P, M, Pp].forEach((point, index) => board.create("point", point, { ...fixed, name: "", size: compact ? 3.5 : 4.3, fillColor: index === 1 ? c.accent : c.ink, strokeColor: c.white, strokeWidth: 1.7, showInfobox: false }));
    board.create("polygon", [[0, 0], [.34, .17], [.53, -.1], [.19, -.27]], { ...fixed, fillColor: c.white, fillOpacity: 1, borders: { strokeColor: c.guide, strokeWidth: 1.2 }, vertices: { visible: false } });
    text(-4.7, -2.0, String.raw`\pi`, { color: c.muted });
    text(P[0] - .35, P[1] + .35, "P", { anchorX: "right" });
    text(.62, -.22, "M", { anchorX: "left", anchorY: "top", color: c.accent });
    text(Pp[0] + .35, Pp[1] - .25, String.raw`P'`, { anchorX: "left", anchorY: "top" });
    text(-1.25, 1.45, "d", { color: c.accent }); text(1.25, -1.45, "d", { color: c.accent });
    const refresh = () => { if (!box.offsetParent || box.clientWidth < 100) return; const w = box.clientWidth; const h = innerWidth <= 560 ? Math.max(300, w * .8) : Math.max(330, w * .47); board.resizeContainer(w, h); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    state = { refresh }; box.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { init(); requestAnimationFrame(() => state?.refresh()); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", reveal, { once: true }) : reveal();
})();

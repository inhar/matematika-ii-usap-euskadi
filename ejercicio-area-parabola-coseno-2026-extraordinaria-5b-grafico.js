(() => {
  const ids = ["cosine-area-2026-region-board", "cosine-area-2026-calculation-board"];
  const graphs = new Map();
  const c = { ink: "#1b1b18", muted: "#74756f", guide: "#aaa9a4", accent: "#c45f3f", blue: "#52758b", fill: "#ead9d1", white: "#fff" };
  const tex = (value) => window.katex ? window.katex.renderToString(value, { throwOnError: false, output: "html" }) : value;
  const upper = (x) => Math.cos(x / 2);
  const lower = (x) => x * x - Math.PI * Math.PI;
  const samples = (fn, a, b, count = 120) => Array.from({ length: count + 1 }, (_, index) => { const x = a + (b - a) * index / count; return [x, fn(x)]; });

  function init(id) {
    const box = document.getElementById(id);
    if (!box || graphs.has(id) || !box.offsetParent || box.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = compact ? [-4.45, 2.25, 4.25, -11.65] : [-4.55, 2.25, 4.55, -11.55];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const text = (x, y, value, options = {}) => board.create("text", [x, y, tex(value)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: options.color ?? c.ink, cssStyle: "font-family:Newsreader,Georgia,serif;letter-spacing:0;white-space:nowrap;", anchorX: options.anchorX ?? "middle", anchorY: options.anchorY ?? "middle" });
    board.create("line", [[bounds[0] + .15, 0], [bounds[2] - .15, 0]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.35 });
    board.create("line", [[0, bounds[3] + .2], [0, bounds[1] - .15]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.35 });
    board.create("polygon", [...samples(upper, -Math.PI, Math.PI), ...samples(lower, Math.PI, -Math.PI)], { ...fixed, withLines: false, fillColor: c.fill, fillOpacity: .82, vertices: { visible: false }, borders: { visible: false } });
    board.create("functiongraph", [upper, bounds[0], bounds[2]], { ...fixed, strokeColor: c.blue, strokeWidth: compact ? 2.4 : 3 });
    board.create("functiongraph", [lower, bounds[0], bounds[2]], { ...fixed, strokeColor: c.ink, strokeWidth: compact ? 2.5 : 3.1 });
    [[-Math.PI, 0], [Math.PI, 0]].forEach((point) => board.create("point", point, { ...fixed, name: "", size: compact ? 3.2 : 4, fillColor: c.ink, strokeColor: c.white, strokeWidth: 1.5, showInfobox: false }));
    [-Math.PI, Math.PI].forEach((x) => board.create("segment", [[x, -.16], [x, .16]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.15 }));
    [1, -Math.PI * Math.PI].forEach((y) => board.create("segment", [[-.08, y], [.08, y]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.15 }));
    text(-Math.PI - .13, -.48, String.raw`-\pi`, { anchorX: "right", anchorY: "top", color: c.muted });
    text(Math.PI + .13, -.48, String.raw`\pi`, { anchorX: "left", anchorY: "top", color: c.muted });
    text(-.17, 1.18, "1", { anchorX: "right", anchorY: "bottom", color: c.muted });
    text(-.22, -10.28, String.raw`-\pi^2\approx-9{,}87`, { anchorX: "right", anchorY: "top", color: c.muted });
    text(-1.8, 1.25, String.raw`y=\cos\left(\frac x2\right)`, { anchorX: "left", color: c.blue });
    text(1.35, -8.25, String.raw`y=x^2-\pi^2`, { anchorX: "left" });
    text(0, -4.15, "R", { color: c.accent, fontSize: compact ? 15 : 20 });
    text(bounds[2] - .22, -.35, "x", { anchorX: "right", anchorY: "top", color: c.muted });
    text(.14, bounds[1] - .18, "y", { anchorX: "left", anchorY: "top", color: c.muted });
    const refresh = () => { if (!box.offsetParent || box.clientWidth < 100) return; const width = box.clientWidth; const height = innerWidth <= 560 ? Math.max(330, width * .94) : Math.max(360, width * .58); board.resizeContainer(width, height); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    graphs.set(id, { refresh }); box.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { ids.forEach(init); requestAnimationFrame(() => graphs.forEach((graph) => graph.refresh())); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", reveal, { once: true }) : reveal();
})();

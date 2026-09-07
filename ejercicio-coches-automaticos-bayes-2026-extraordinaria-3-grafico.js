(() => {
  const id = "cars-extra-2026-tree";
  let state;
  const c = { ink: "#1b1b18", muted: "#74756f", accent: "#c45f3f", faint: "#d2d1cb", white: "#fff" };
  const tex = (value) => window.katex ? window.katex.renderToString(value, { throwOnError: false, output: "html" }) : value;
  function init() {
    const box = document.getElementById(id);
    if (!box || state || !box.offsetParent || box.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;
    const compact = innerWidth <= 560;
    const bounds = compact ? [-.5, 10.8, 10.8, -.7] : [-.7, 7.7, 14.5, -.5];
    const board = JXG.JSXGraph.initBoard(id, { boundingbox: bounds, axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const fixed = { fixed: true, highlight: false };
    const segment = (a, b, accent = false) => board.create("segment", [a, b], { ...fixed, strokeColor: accent ? c.accent : c.faint, strokeWidth: accent ? 2.7 : 1.6 });
    const point = (p, accent = false) => board.create("point", p, { ...fixed, name: "", size: compact ? 2.2 : 2.7, fillColor: accent ? c.accent : c.ink, strokeColor: c.white, strokeWidth: 1.3, showInfobox: false });
    const text = (x, y, value, options = {}) => board.create("text", [x, y, tex(value)], { ...fixed, parse: false, useMathJax: false, fontSize: compact ? 10 : 13, color: options.color ?? c.ink, cssStyle: "font-family:Newsreader,Georgia,serif;letter-spacing:0;white-space:nowrap;", anchorX: options.anchorX ?? "middle", anchorY: options.anchorY ?? "middle" });
    const root = compact ? [1.0, 5.0] : [1.2, 3.6];
    const level1 = compact ? [[4.5, 9.1], [4.5, 5.0], [4.5, .9]] : [[6, 6.7], [6, 3.6], [6, .5]];
    const level2 = compact ? [[[8.9, 10], [8.9, 8.2]], [[8.9, 5.9], [8.9, 4.1]], [[8.9, 1.8], [8.9, 0]]] : [[[12.2, 7.3], [12.2, 6.1]], [[12.2, 4.2], [12.2, 3]], [[12.2, 1.1], [12.2, -.1]]];
    const firstProb = ["10\\%", "52\\%", "38\\%"];
    const secondProb = [["100\\%", "0\\%"], ["94\\%", "6\\%"], ["53\\%", "47\\%"]];
    level1.forEach((node, i) => {
      segment(root, node); point(node);
      const mx = (root[0] + node[0]) / 2, my = (root[1] + node[1]) / 2;
      text(mx, my + (i === 1 ? .35 : .18), firstProb[i], { color: c.muted });
      level2[i].forEach((leaf, j) => { const hot = i === 1 && j === 0; segment(node, leaf, hot); point(leaf, hot); const lx = (node[0] + leaf[0]) / 2; const ly = (node[1] + leaf[1]) / 2 + (j === 0 ? .22 : -.22); text(lx, ly, secondProb[i][j], { color: hot ? c.accent : c.muted }); text(leaf[0] + (compact ? .35 : .45), leaf[1], j === 0 ? "A" : "M", { anchorX: "left", color: hot ? c.accent : c.ink }); });
    });
    point(root); text(root[0] - .25, root[1] + .5, String.raw`\Omega`, { anchorX: "right" });
    ["E", "H", "R"].forEach((label, i) => text(level1[i][0] - .28, level1[i][1] + .48, label, { anchorX: "right", color: i === 1 ? c.accent : c.ink }));
    const refresh = () => { if (!box.offsetParent || box.clientWidth < 100) return; const w = box.clientWidth; const h = compact ? Math.max(440, w * 1.15) : Math.max(420, w * .58); board.resizeContainer(w, h); board.setBoundingBox(bounds, false); board.fullUpdate(); };
    state = { refresh }; box.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { init(); requestAnimationFrame(() => state?.refresh()); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", reveal, { once: true }) : reveal();
})();

(() => {
  const ID = "line-plane-2025-board";
  let graph;
  const C = { ink: "#1b1b18", muted: "#73766f", plane: "#f7eee9", edge: "#d9b8a8", accent: "#c95f3f", white: "#fff" };
  const add = (a, b, k = 1) => a.map((value, index) => value + k * b[index]);
  const unit = (v) => { const n = Math.hypot(...v); return v.map((x) => x / n); };

  function init() {
    const container = document.getElementById(ID);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100 || !window.JXG?.JSXGraph) return;
    const board = JXG.JSXGraph.initBoard(ID, { boundingbox: [-7, 4.1, 7, -4.1], axis: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keyboard: { enabled: false }, resize: { enabled: true } });
    const view = board.create("view3d", [[-6.6, -3.65], [13.2, 7.3], [[-3.2, 3.4], [-3.3, 3.5], [-1.6, 4.6]]], { projection: "parallel", axesPosition: "none", depthOrder: false, xPlaneRear: { visible: false }, xPlaneFront: { visible: false }, yPlaneRear: { visible: false }, yPlaneFront: { visible: false }, zPlaneRear: { visible: false }, zPlaneFront: { visible: false }, trackball: { enabled: false }, az: { visible: false, pointer: { enabled: false }, keyboard: { enabled: false } }, el: { visible: false, pointer: { enabled: false }, keyboard: { enabled: false } }, bank: { visible: false, pointer: { enabled: false }, keyboard: { enabled: false } }, verticalDrag: { enabled: false } });
    view.setView(5.86, 0.48);
    const q = [0.2, -0.2, 0];
    const p = [0, 1, 2];
    const d = unit([1, 1, 1]);
    const w = unit(add(p, q, -1));
    const center = add(add(q, d, 0.15), w, 0.45);
    const corners = [add(add(center, d, -3.4), w, -2.25), add(add(center, d, 3.4), w, -2.25), add(add(center, d, 3.4), w, 2.25), add(add(center, d, -3.4), w, 2.25)];
    view.create("polygon3d", [corners], { fillColor: C.plane, fillOpacity: 0.72, highlight: false, fixed: true, vertices: { visible: false }, borders: { strokeColor: C.edge, strokeOpacity: 0.76, strokeWidth: 1, highlight: false } });
    view.create("line3d", [q, d, [-3.15, 3.15]], { fixed: true, highlight: false, strokeColor: C.ink, strokeWidth: 2.2, strokeOpacity: 0.78 });
    view.create("line3d", [q, w, [0.08, Math.hypot(...add(p, q, -1)) - 0.1]], { fixed: true, highlight: false, strokeColor: C.accent, strokeWidth: 3, lastArrow: { type: 2, size: 5 } });
    const pointStyle = { fixed: true, size: 4.5, face: "o", fillColor: C.ink, strokeColor: C.white, strokeWidth: 1.5, highlight: false, showInfobox: false, label: { fontSize: 18, color: C.ink, cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0;" } };
    view.create("point3d", [q], { ...pointStyle, name: "Q", label: { ...pointStyle.label, offset: [-20, -18] } });
    view.create("point3d", [p], { ...pointStyle, name: "P", label: { ...pointStyle.label, offset: [13, 8] } });
    const text = { fixed: true, highlight: false, cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;" };
    view.create("text3d", [add(q, d, -2.35), "r₁"], { ...text, color: C.ink, fontSize: 18 });
    view.create("text3d", [add(add(center, d, 2.55), w, -1.35), "Π"], { ...text, color: C.accent, fontSize: 27 });
    const hideViewControls = () => {
      const labelsToHide = /^(?:az|el|bank)\s*=|^[ABCD]$/;
      container.querySelectorAll(".JXGtext").forEach((element) => {
        if (labelsToHide.test(element.textContent.trim())) element.style.display = "none";
      });
    };
    board.update();
    hideViewControls();
    const refresh = () => { if (!container.offsetParent || container.clientWidth < 100) return; const width = container.clientWidth; const height = window.innerWidth <= 560 ? Math.max(285, width * 0.82) : Math.max(330, width * 0.48); board.resizeContainer(width, height); board.fullUpdate(); hideViewControls(); };
    graph = { refresh }; container.dataset.ready = "true"; refresh();
  }
  const reveal = () => requestAnimationFrame(() => { init(); requestAnimationFrame(() => graph?.refresh()); });
  document.addEventListener("click", (event) => { if (event.target.closest?.(".level-button,.tab")) reveal(); });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true }); else reveal();
})();

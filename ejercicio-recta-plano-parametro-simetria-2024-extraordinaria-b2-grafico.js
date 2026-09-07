(() => {
  const ID = "line-plane-extra-2024-board";
  const COLORS = {
    ink: "#1b1b18",
    accent: "#c95f3f",
    plane: "#f7ece7",
    edge: "#d9b5a6",
    guide: "#9b9d97",
    white: "#fff",
  };
  let board;
  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function sync() {
    const container = document.getElementById(ID);
    if (!board || !container || !container.offsetParent || container.clientWidth < 100) return;
    board.resizeContainer(container.clientWidth, container.clientHeight);
    board.fullUpdate();
  }

  function init() {
    const container = document.getElementById(ID);
    if (!container || container.dataset.ready === "true" || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;
    const compact = window.innerWidth <= 560;
    board = JXG.JSXGraph.initBoard(ID, {
      boundingbox: [-5.1, 3.35, 5.1, -3.35],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });
    const fixed = { fixed: true, highlight: false };
    const plane = board.create("polygon", [[-4.35, -1.05], [3.35, -1.05], [4.45, 1.05], [-3.25, 1.05]], {
      ...fixed,
      fillColor: COLORS.plane,
      fillOpacity: 0.76,
      vertices: { visible: false },
      borders: { strokeColor: COLORS.edge, strokeWidth: 1, highlight: false },
    });
    plane.borders.forEach((border) => border.setAttribute({ fixed: true }));
    const O = [0, 2.45];
    const M = [0, 0];
    const reflected = [0, -2.45];
    board.create("segment", [[0, 3.05], [0, -3.05]], { ...fixed, strokeColor: COLORS.guide, strokeWidth: 1.5, dash: 2 });
    board.create("segment", [O, reflected], { ...fixed, strokeColor: COLORS.accent, strokeWidth: 3.3 });
    [1.23, -1.23].forEach((y) => board.create("segment", [[-0.17, y], [0.17, y]], { ...fixed, strokeColor: COLORS.accent, strokeWidth: 2 }));
    const pointStyle = {
      ...fixed, size: compact ? 3.8 : 4.5, face: "o", fillColor: COLORS.ink,
      strokeColor: COLORS.white, strokeWidth: 1.6, withLabel: false, showInfobox: false, name: "",
    };
    board.create("point", O, pointStyle);
    board.create("point", reflected, pointStyle);
    board.create("point", M, { ...pointStyle, fillColor: COLORS.accent });
    const textAt = (position, source, options = {}) => board.create("text", [position[0], position[1], math(source)], {
      ...fixed, parse: false, useMathJax: false, fontSize: compact ? 14 : 18, color: COLORS.ink,
      cssStyle: "white-space: nowrap;", ...options,
    });
    textAt([0.35, 2.5], "O");
    textAt([0.35, -2.5], "O'");
    textAt([0.35, -0.28], "M");
    textAt([3.25, 0.45], "\\pi", { fontSize: compact ? 19 : 24, color: COLORS.accent });
    textAt([-3.35, 0.38], "OM=MO'", { fontSize: compact ? 12 : 16, color: COLORS.accent });
    container.dataset.ready = "true";
    sync();
  }

  function reveal() {
    requestAnimationFrame(() => {
      init();
      requestAnimationFrame(sync);
    });
  }
  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true });
  else reveal();
})();

(() => {
  const ID = "plane-reflection-2024-board";
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

  function syncBoard() {
    const element = document.getElementById(ID);
    if (!board || !element || !element.offsetParent || element.clientWidth < 100) return;
    board.resizeContainer(element.clientWidth, element.clientHeight);
    board.fullUpdate();
  }

  function init() {
    const element = document.getElementById(ID);
    if (!element || element.dataset.ready === "true" || element.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph) return;

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

    const corners = [[-4.35, -1.05], [3.35, -1.05], [4.45, 1.05], [-3.25, 1.05]];
    const plane = board.create("polygon", corners, {
      fillColor: COLORS.plane,
      fillOpacity: 0.76,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: { strokeColor: COLORS.edge, strokeWidth: 1, highlight: false },
    });
    plane.borders.forEach((border) => border.setAttribute({ fixed: true }));

    const P = [0, 2.45];
    const M = [0, 0];
    const reflected = [0, -2.45];
    board.create("segment", [[0, 3.05], [0, -3.05]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.5,
      dash: 2,
      fixed: true,
      highlight: false,
    });
    board.create("segment", [P, reflected], {
      strokeColor: COLORS.accent,
      strokeWidth: 3.3,
      fixed: true,
      highlight: false,
    });
    [1.23, -1.23].forEach((y) => board.create("segment", [[-0.17, y], [0.17, y]], {
      strokeColor: COLORS.accent,
      strokeWidth: 2,
      fixed: true,
      highlight: false,
    }));

    const pointStyle = {
      size: 4.5,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
      name: "",
    };
    [P, reflected].forEach((point) => board.create("point", point, pointStyle));
    board.create("point", M, { ...pointStyle, fillColor: COLORS.accent });

    const textAt = (position, source, options = {}) => board.create("text", [
      position[0], position[1], math(source),
    ], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: innerWidth <= 560 ? 14 : 18,
      color: COLORS.ink,
      cssStyle: "white-space:nowrap",
      ...options,
    });
    textAt([0.35, 2.5], "P_1");
    textAt([0.35, -2.5], "P_1'");
    textAt([0.35, -0.28], "M");
    textAt([3.25, 0.45], "\\pi", {
      fontSize: innerWidth <= 560 ? 19 : 24,
      color: COLORS.accent,
    });
    textAt([-3.45, 0.38], "P_1M=MP_1'", {
      fontSize: innerWidth <= 560 ? 12 : 16,
      color: COLORS.accent,
    });

    element.dataset.ready = "true";
    syncBoard();
  }

  function reveal() {
    requestAnimationFrame(() => {
      init();
      requestAnimationFrame(syncBoard);
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", reveal, { once: true });
  } else {
    reveal();
  }
})();

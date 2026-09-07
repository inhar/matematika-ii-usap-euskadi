(() => {
  const BOARD_ID = "extrema-2022-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    guide: "#b8bab4",
    accent: "#c95f3f",
    white: "#ffffff",
  };

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("extrema-function-board-error");
  }

  function initExtrema2022Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [0.45, 0.105, 4.15, -0.014],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const axisStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.64,
      strokeWidth: 1.25,
      fixed: true,
      highlight: false,
    };

    board.create("line", [[0.45, 0], [4.15, 0]], axisStyle);

    const minimumX = 1;
    const maximumX = 2;
    const maximumY = Math.exp(-4);

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1.1,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[minimumX, -0.0015], [minimumX, 0.0015]], tickStyle);
    board.create("segment", [[maximumX, -0.0015], [maximumX, 0.0015]], tickStyle);

    board.create("segment", [[maximumX, 0], [maximumX, maximumY]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.15,
      dash: 2,
      fixed: true,
      highlight: false,
    });

    board.create("functiongraph", [(x) => (x - 1) ** 2 * Math.exp(-2 * x), 0.45, 4.15], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    const pointStyle = {
      size: 4.2,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", [minimumX, 0], pointStyle);
    board.create("point", [maximumX, maximumY], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 15,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      parse: false,
      useMathJax: false,
    };

    board.create("text", [minimumX, -0.0048, mathLabel("1")], {
      ...textStyle,
      fontSize: 13,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [maximumX, -0.0048, mathLabel("2")], {
      ...textStyle,
      fontSize: 13,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [2.12, maximumY + 0.007, mathLabel("e^{-4}\\approx 0{,}018")], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
    });
    board.create("text", [1.08, -0.0056, mathLabel("(1,0)")], {
      ...textStyle,
      fontSize: 14,
      color: COLORS.muted,
      anchorY: "top",
    });
    board.create("text", [2.12, maximumY + 0.014, mathLabel("(2,e^{-4})")], {
      ...textStyle,
      fontSize: 15,
      color: COLORS.ink,
    });
    board.create("text", [3.08, 0.018, mathLabel("f")], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [4.02, -0.005, mathLabel("x")], {
      ...textStyle,
      fontSize: 14,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.extrema2022Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExtrema2022Graph, { once: true });
  } else {
    initExtrema2022Graph();
  }
})();

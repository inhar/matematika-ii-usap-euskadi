(() => {
  const BOARD_ID = "piecewise-2020-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#74766f",
    guide: "#b7b9b3",
    accent: "#c95f3f",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("piecewise-2020-board-error");
  }

  function leftBranch(x) {
    return 2 * x ** 2 + 3 * x;
  }

  function rightBranch(x) {
    return x ** 2 + 7 * x - 4;
  }

  function commonTangent(x) {
    return 11 * x - 8;
  }

  function initPiecewise2020Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-1.5, 35.5, 3.65, -4],
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
      strokeOpacity: 0.62,
      strokeWidth: 1.25,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const markStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[2, -0.55], [2, 0.55]], markStyle);
    board.create("segment", [[-0.045, 14], [0.045, 14]], markStyle);

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.92,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[2, 0], [2, 14]], guideStyle);
    board.create("segment", [[0, 14], [2, 14]], guideStyle);

    const curveStyle = {
      strokeColor: COLORS.accent,
      strokeWidth: 3.1,
      fixed: true,
      highlight: false,
    };

    board.create("functiongraph", [leftBranch, -1.5, 2], curveStyle);
    board.create("functiongraph", [rightBranch, 2, 3.65], curveStyle);

    board.create("functiongraph", [commonTangent, 1.18, 2.9], {
      strokeColor: COLORS.muted,
      strokeOpacity: 0.85,
      strokeWidth: 1.6,
      dash: 2,
      fixed: true,
      highlight: false,
    });

    board.create("point", [2, 14], {
      size: 4.5,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [2, -1.45, "2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.08, 14, "14"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [2.08, 16.25, "(2, 14)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [1.35, 5.4, "t"], {
      ...textStyle,
      fontSize: 17,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorY: "top",
    });
    board.create("text", [3.23, 32.3, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [3.55, -1.55, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.08, 34.2, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.piecewiseDifferentiable2020Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPiecewise2020Graph, { once: true });
  } else {
    initPiecewise2020Graph();
  }
})();

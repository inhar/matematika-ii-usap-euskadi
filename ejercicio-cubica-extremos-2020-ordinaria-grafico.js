(() => {
  const BOARD_ID = "cubic-2020-extrema-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    guide: "#b8bab4",
    accent: "#c95f3f",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("cubic-extrema-board-error");
  }

  function cubicFunction(x) {
    return 6 * x ** 3 - 9 * x ** 2 + 2;
  }

  function initCubicGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.48, 3.05, 1.62, -1.82],
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
      strokeOpacity: 0.7,
      strokeWidth: 1,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[1, -0.055], [1, 0.055]], markStyle);
    board.create("segment", [[-0.025, 2], [0.025, 2]], markStyle);
    board.create("segment", [[-0.025, -1], [0.025, -1]], markStyle);

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.9,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[1, 0], [1, -1]], guideStyle);
    board.create("segment", [[0, -1], [1, -1]], guideStyle);

    board.create("functiongraph", [cubicFunction, -0.48, 1.62], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    const pointStyle = {
      size: 4.2,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", [0, 2], pointStyle);
    board.create("point", [1, -1], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [1, -0.17, "1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.045, 2, "2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [-0.045, -1, "−1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    board.create("text", [0.12, 2.38, "P(0, 2)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [1.08, -1.28, "Q(1, −1)"], {
      ...textStyle,
      fontSize: 15,
      anchorY: "top",
    });
    board.create("text", [1.43, 0.5, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [1.56, -0.17, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.06, 2.9, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.cubic2020ExtremaBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCubicGraph, { once: true });
  } else {
    initCubicGraph();
  }
})();

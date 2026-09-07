(() => {
  const BOARD_ID = "cubic-params-2021-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#74766f",
    accent: "#c95f3f",
    guide: "#b9bbb5",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("cubic-params-2021-board-error");
  }

  function cubicFunction(x) {
    return x ** 3 - 2 * x ** 2 + x + 1;
  }

  function initCubicParamsGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;
    if (container.clientWidth === 0 || container.clientHeight === 0) return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.18, 1.26, 1.42, 0.88],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    board.create("line", [[0, 0.88], [0, 1.26]], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.3,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    });

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.9,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[0, 1], [1.38, 1]], guideStyle);
    board.create("segment", [[0, 31 / 27], [1 / 3, 31 / 27]], guideStyle);
    board.create("segment", [[1 / 3, 0.9], [1 / 3, 31 / 27]], guideStyle);
    board.create("segment", [[1, 0.9], [1, 1]], guideStyle);

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-0.014, 1], [0.014, 1]], tickStyle);
    board.create("segment", [[-0.014, 31 / 27], [0.014, 31 / 27]], tickStyle);

    board.create("functiongraph", [cubicFunction, -0.18, 1.42], {
      strokeColor: COLORS.accent,
      strokeWidth: 3.2,
      fixed: true,
      highlight: false,
    });

    const pointStyle = {
      size: 4.4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", [1 / 3, 31 / 27], pointStyle);
    board.create("point", [1, 1], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [1 / 3, 0.897, "1/3"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [1, 0.897, "1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.025, 1, "1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [-0.025, 31 / 27, "31/27"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    board.create("text", [0.39, 1.19, "(1/3, 31/27)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [1.055, 0.976, "(1, 1)"], {
      ...textStyle,
      fontSize: 15,
      anchorY: "top",
    });
    board.create("text", [1.225, 1.105, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [0.035, 1.242, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });
    board.create("text", [1.38, 0.897, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });

    board.update();
    container.dataset.ready = "true";
    window.cubicParamsExtrema2021Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCubicParamsGraph, { once: true });
  } else {
    initCubicParamsGraph();
  }

  document.querySelectorAll(".level-button, .tab").forEach((button) => {
    button.addEventListener("click", () => {
      requestAnimationFrame(() => requestAnimationFrame(initCubicParamsGraph));
    });
  });
})();

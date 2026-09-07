(() => {
  const BOARD_ID = "quartic-2021-board";
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
    container.classList.add("quartic-2021-board-error");
  }

  function quarticFunction(x) {
    return 5 + 8 * x ** 2 - x ** 4;
  }

  function initQuarticStudyGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;
    if (container.clientWidth === 0 || container.clientHeight === 0) return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-3.2, 24.8, 3.2, -8.2],
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
      strokeWidth: 1.3,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };

    [-2, 2].forEach((x) => {
      board.create("segment", [[x, -0.45], [x, 0.45]], tickStyle);
    });
    [5, 21].forEach((y) => {
      board.create("segment", [[-0.055, y], [0.055, y]], tickStyle);
    });

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.9,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-2, 0], [-2, 21]], guideStyle);
    board.create("segment", [[2, 0], [2, 21]], guideStyle);

    board.create("functiongraph", [quarticFunction, -3.2, 3.2], {
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

    board.create("point", [-2, 21], pointStyle);
    board.create("point", [0, 5], pointStyle);
    board.create("point", [2, 21], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [-2, -1.2, "−2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [2, -1.2, "2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.11, 5, "5"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [-0.11, 21, "21"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    board.create("text", [-2.75, 22.7, "(−2, 21)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [2.12, 22.7, "(2, 21)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [0.18, 3.45, "(0, 5)"], {
      ...textStyle,
      fontSize: 15,
      anchorY: "top",
    });
    board.create("text", [2.72, 16.1, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [3.08, -1.2, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.1, 23.9, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.quarticStudy2021Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuarticStudyGraph, { once: true });
  } else {
    initQuarticStudyGraph();
  }

  document.querySelectorAll(".level-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.level === "idea") return;
      requestAnimationFrame(() => requestAnimationFrame(initQuarticStudyGraph));
    });
  });
})();

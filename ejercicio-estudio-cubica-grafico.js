(() => {
  const BOARD_ID = "cubic-study-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73766f",
    guide: "#b9bbb5",
    accent: "#c95f3f",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("cubic-study-board-error");
  }

  function cubicFunction(x) {
    return x ** 3 + 3 * x ** 2 - 2;
  }

  function initCubicStudyGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-3.4, 3.35, 1.4, -3.35],
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

    const maximum = [-2, 2];
    const minimum = [0, -2];
    const roots = [-1 - Math.sqrt(3), -1, -1 + Math.sqrt(3)];

    const markStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };

    [-2, -1, 1].forEach((x) => {
      board.create("segment", [[x, -0.055], [x, 0.055]], markStyle);
    });
    [-2, 2].forEach((y) => {
      board.create("segment", [[-0.03, y], [0.03, y]], markStyle);
    });

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.9,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[maximum[0], 0], maximum], guideStyle);
    board.create("segment", [[maximum[0], maximum[1]], [0, maximum[1]]], guideStyle);

    board.create("functiongraph", [cubicFunction, -3.4, 1.4], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    const rootPointStyle = {
      size: 3.2,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.25,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    roots.forEach((x) => board.create("point", [x, 0], rootPointStyle));

    const extremaPointStyle = {
      ...rootPointStyle,
      size: 4.5,
      strokeWidth: 1.5,
    };

    board.create("point", maximum, extremaPointStyle);
    board.create("point", minimum, extremaPointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [-2, -0.22, "−2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [1, -0.22, "1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.08, 2, "2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [-0.08, -2, "−2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    const rootLabels = ["−1−√3", "−1", "−1+√3"];
    roots.forEach((x, index) => {
      board.create("text", [x, -0.18, rootLabels[index]], {
        ...textStyle,
        fontSize: 12,
        color: COLORS.muted,
        anchorX: "middle",
        anchorY: "top",
      });
    });

    board.create("text", [-1.83, 2.42, "M(−2, 2)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [0.13, -2.25, "m(0, −2)"], {
      ...textStyle,
      fontSize: 15,
      anchorY: "top",
    });
    board.create("text", [0.84, 1.7, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [1.32, -0.2, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.08, 3.15, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.cubicStudyBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCubicStudyGraph, { once: true });
  } else {
    initCubicStudyGraph();
  }
})();

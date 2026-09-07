(() => {
  const BOARD_ID = "cubic-extrema-board";
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
    return x ** 3 - (15 / 4) * x ** 2 + 3 * x + 1;
  }

  function initCubicExtremaGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.48, 3.6, 3.18, -0.72],
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
      straightFirst: true,
      straightLast: true,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const maximum = [0.5, 27 / 16];
    const minimum = [2, 0];

    const markStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[maximum[0], -0.045], [maximum[0], 0.045]], markStyle);
    board.create("segment", [[minimum[0], -0.045], [minimum[0], 0.045]], markStyle);
    board.create("segment", [[-0.025, 1], [0.025, 1]], markStyle);
    board.create("segment", [[-0.025, maximum[1]], [0.025, maximum[1]]], markStyle);

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.05,
      strokeOpacity: 0.9,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[maximum[0], 0], maximum], guideStyle);
    board.create("segment", [[0, maximum[1]], maximum], guideStyle);

    board.create("functiongraph", [cubicFunction, -0.48, 3.18], {
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

    board.create("point", [0, 1], pointStyle);
    board.create("point", maximum, pointStyle);
    board.create("point", minimum, pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [maximum[0], -0.16, "1/2"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.045, 1, "1"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [-0.045, maximum[1], "27/16"], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    board.create("text", [0.08, 0.78, "P(0, 1)"], {
      ...textStyle,
      color: COLORS.muted,
    });
    board.create("text", [0.62, 1.98, "M(1/2, 27/16)"], {
      ...textStyle,
      fontSize: 15,
    });
    board.create("text", [2.08, -0.2, "Q(2, 0)"], {
      ...textStyle,
      fontSize: 15,
      anchorY: "top",
    });
    board.create("text", [2.52, 1.58, "f"], {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [3.1, -0.16, "x"], {
      ...textStyle,
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.07, 3.42, "f(x)"], {
      ...textStyle,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.cubicExtremaBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCubicExtremaGraph, { once: true });
  } else {
    initCubicExtremaGraph();
  }
})();

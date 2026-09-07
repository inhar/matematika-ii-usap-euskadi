(() => {
  const BOARD_ID = "extrema-function-board";
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
    container.classList.add("extrema-function-board-error");
  }

  function initExponentialExtremaGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.2, 0.058, 1.6, -0.015],
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

    const maximumX = 0.5;
    const maximumY = 1 / (4 * Math.E ** 2);

    const referenceMarkStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.7,
      strokeWidth: 1.1,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[maximumX, -0.0011], [maximumX, 0.0011]], referenceMarkStyle);
    board.create("segment", [[-0.012, maximumY], [0.012, maximumY]], referenceMarkStyle);

    board.create("segment", [[maximumX, 0], [maximumX, maximumY]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.1,
      dash: 2,
      fixed: true,
      highlight: false,
    });

    board.create("functiongraph", [(x) => x * x * Math.exp(-4 * x), -0.2, 1.6], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    const pointStyle = {
      size: 4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", [0, 0], pointStyle);
    board.create("point", [maximumX, maximumY], pointStyle);

    const mathTextStyle = {
      fixed: true,
      highlight: false,
      fontSize: 16,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [maximumX, -0.0046, "1/2"], {
      ...mathTextStyle,
      fontSize: 13,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [0.025, maximumY + 0.0028, "1/(4e²)"], {
      ...mathTextStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "left",
    });
    board.create("text", [0.025, maximumY - 0.0028, "≈ 0,03"], {
      ...mathTextStyle,
      fontSize: 12,
      color: COLORS.muted,
      anchorX: "left",
    });

    board.create("text", [0.035, -0.0055, "(0, 0)"], {
      ...mathTextStyle,
      fontSize: 14,
      color: COLORS.muted,
      anchorY: "top",
    });
    board.create("text", [0.55, maximumY + 0.005, "(1/2, 1/(4e²))"], {
      ...mathTextStyle,
      fontSize: 15,
      color: COLORS.ink,
    });
    board.create("text", [1.06, 0.018, "f"], {
      ...mathTextStyle,
      fontSize: 21,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [1.55, -0.0048, "x"], {
      ...mathTextStyle,
      fontSize: 14,
      color: COLORS.muted,
    });
    board.create("text", [0.025, 0.053, "f(x)"], {
      ...mathTextStyle,
      fontSize: 14,
      color: COLORS.muted,
      anchorX: "left",
    });

    board.update();
    container.dataset.ready = "true";
    window.exponentialExtremaBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initExponentialExtremaGraph, { once: true });
  } else {
    initExponentialExtremaGraph();
  }
})();

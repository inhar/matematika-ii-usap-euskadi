(() => {
  const BOARD_ID = "area-parabolas-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#72756f",
    guide: "#b8bab4",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da parabolaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de las parábolas.";
    container.classList.add("area-parabolas-board-error");
  }

  function upperCurve(x) {
    return 3 * x - x * x;
  }

  function lowerCurve(x) {
    return x * x;
  }

  function initAreaParabolasGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: compact ? [-0.42, 2.82, 1.96, -0.48] : [-0.55, 2.82, 2.08, -0.42],
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
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    };
    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const regionX = [];
    const regionY = [];
    const samples = 90;
    for (let index = 0; index <= samples; index += 1) {
      const x = (1.5 * index) / samples;
      regionX.push(x);
      regionY.push(upperCurve(x));
    }
    for (let index = samples; index >= 0; index -= 1) {
      const x = (1.5 * index) / samples;
      regionX.push(x);
      regionY.push(lowerCurve(x));
    }
    regionX.push(regionX[0]);
    regionY.push(regionY[0]);

    board.create("curve", [regionX, regionY], {
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.72,
      fixed: true,
      highlight: false,
    });

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      strokeOpacity: 0.95,
      dash: 2,
      fixed: true,
      highlight: false,
    };
    board.create("segment", [[1.5, 0], [1.5, 2.25]], guideStyle);
    board.create("segment", [[0, 2.25], [1.5, 2.25]], guideStyle);

    board.create("functiongraph", [upperCurve, -0.55, 2.08], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [lowerCurve, -0.55, 1.69], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.65,
      fixed: true,
      highlight: false,
    });

    const markStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };
    board.create("segment", [[1.5, -0.055], [1.5, 0.055]], markStyle);
    board.create("segment", [[-0.025, 2.25], [0.025, 2.25]], markStyle);

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
    board.create("point", [0, 0], pointStyle);
    board.create("point", [1.5, 2.25], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    board.create("text", [0.09, -0.2, "(0, 0)"], {
      ...textStyle,
      fontSize: compact ? 12 : 13,
      color: COLORS.muted,
      anchorY: "top",
    });
    board.create("text", [1.42, 2.54, "(3/2, 9/4)"], {
      ...textStyle,
      fontSize: compact ? 12 : 14,
      anchorX: "right",
    });
    board.create("text", [compact ? 0.18 : 0.3, compact ? 1.63 : 1.72, "y = 3x − x²"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 14 : 16,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [compact ? 0.89 : 0.96, compact ? 0.48 : 0.53, "y = x²"], {
      ...textStyle,
      fontSize: compact ? 14 : 16,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [0.76, 1.13, "R"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 20 : 23,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "middle",
    });

    const referenceTextStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };
    board.create("text", [1.5, -0.18, "3/2"], {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.045, 2.25, "9/4"], {
      ...referenceTextStyle,
      anchorX: "right",
    });
    board.create("text", [compact ? 1.88 : 2.01, -0.16, "x"], {
      ...referenceTextStyle,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.07, 2.68, "y"], referenceTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.areaParabolasBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAreaParabolasGraph, { once: true });
  } else {
    initAreaParabolasGraph();
  }
})();

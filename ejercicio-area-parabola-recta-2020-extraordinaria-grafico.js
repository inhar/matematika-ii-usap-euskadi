(() => {
  const BOARD_ID = "area-parabola-line-2020-board";
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
      ? "Ezin izan da grafikoa kargatu."
      : "No se ha podido cargar la gráfica.";
    container.classList.add("area-line-board-error");
  }

  function parabola(x) {
    return 3 - x ** 2;
  }

  function line(x) {
    return 2 * x;
  }

  function initAreaParabolaLine2020Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const bounds = compact
      ? [-3.72, 4.45, 1.82, -7.25]
      : [-4.05, 4.55, 2.35, -7.55];

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: bounds,
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
    const samples = 160;

    for (let index = 0; index <= samples; index += 1) {
      const x = -3 + (4 * index) / samples;
      regionX.push(x);
      regionY.push(parabola(x));
    }

    for (let index = samples; index >= 0; index -= 1) {
      const x = -3 + (4 * index) / samples;
      regionX.push(x);
      regionY.push(line(x));
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

    board.create("segment", [[-3, 0], [-3, -6]], guideStyle);
    board.create("segment", [[1, 0], [1, 2]], guideStyle);

    board.create("functiongraph", [parabola, bounds[0], bounds[2]], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    board.create("functiongraph", [line, bounds[0], bounds[2]], {
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

    [-3, 1].forEach((x) => {
      board.create("segment", [[x, -0.095], [x, 0.095]], markStyle);
    });

    [-6, 2, 3].forEach((y) => {
      board.create("segment", [[-0.045, y], [0.045, y]], markStyle);
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

    board.create("point", [-3, -6], pointStyle);
    board.create("point", [1, 2], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };

    const referenceTextStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };

    board.create("text", [-3, -0.27, "−3"], {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [1, -0.27, "1"], {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    board.create("text", [-0.08, -6, "−6"], {
      ...referenceTextStyle,
      anchorX: "right",
    });
    board.create("text", [-0.08, 2, "2"], {
      ...referenceTextStyle,
      anchorX: "right",
    });
    board.create("text", [-0.08, 3, "3"], {
      ...referenceTextStyle,
      anchorX: "right",
    });

    board.create("text", [compact ? -3.54 : -3.56, -5.55, "(−3, −6)"], {
      ...textStyle,
      fontSize: compact ? 12 : 14,
      anchorX: "left",
    });
    board.create("text", [compact ? 0.48 : 0.53, 2.42, "(1, 2)"], {
      ...textStyle,
      fontSize: compact ? 12 : 14,
    });
    board.create("text", [compact ? -1.82 : -1.95, compact ? 1.6 : 1.75, "y = 3 − x²"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 15 : 18,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [compact ? 1.08 : 1.2, compact ? 3.05 : 3.18, "y = 2x"], {
      ...textStyle,
      fontSize: compact ? 15 : 18,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [-0.88, -0.55, "R"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 21 : 24,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "middle",
    });
    board.create("text", [bounds[2] - 0.08, -0.22, "x"], {
      ...referenceTextStyle,
      anchorX: "right",
      anchorY: "top",
    });
    board.create("text", [0.08, bounds[1] - 0.27, "y"], referenceTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.areaParabolaLine2020Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAreaParabolaLine2020Graph, { once: true });
  } else {
    initAreaParabolaLine2020Graph();
  }
})();

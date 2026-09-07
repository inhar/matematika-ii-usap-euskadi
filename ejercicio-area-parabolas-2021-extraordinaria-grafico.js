(() => {
  const BOARD_ID = "area-parabolas-2021-extra-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#72756f",
    guide: "#b8bab4",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function createMathText(board, x, y, latex, options = {}) {
    return board.create("text", [x, y, mathLabel(latex)], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      ...options,
    });
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da parabolen grafikoa kargatu."
      : "No se ha podido cargar la gráfica de las parábolas.";
    container.classList.add("area-parabolas-board-error");
  }

  function lowerCurve(x) {
    return (x - 1) ** 2;
  }

  function upperCurve(x) {
    return -(x ** 2) + 5;
  }

  function initAreaParabolasExtra2021Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: compact ? [-1.78, 6.08, 2.72, -1.08] : [-2.2, 6.08, 3.15, -0.95],
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
    const samples = 120;

    for (let index = 0; index <= samples; index += 1) {
      const x = -1 + (3 * index) / samples;
      regionX.push(x);
      regionY.push(upperCurve(x));
    }
    for (let index = samples; index >= 0; index -= 1) {
      const x = -1 + (3 * index) / samples;
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

    board.create("segment", [[-1, 0], [-1, 4]], guideStyle);
    board.create("segment", [[2, 0], [2, 1]], guideStyle);

    board.create("functiongraph", [upperCurve, compact ? -1.78 : -2.2, compact ? 2.72 : 3.15], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [lowerCurve, compact ? -1.78 : -2.2, compact ? 2.72 : 3.15], {
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

    [-1, 1, 2].forEach((x) => {
      board.create("segment", [[x, -0.065], [x, 0.065]], markStyle);
    });
    [1, 4, 5].forEach((y) => {
      board.create("segment", [[-0.03, y], [0.03, y]], markStyle);
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

    board.create("point", [-1, 4], pointStyle);
    board.create("point", [2, 1], pointStyle);

    const referenceTextStyle = {
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };

    createMathText(board, -1, -0.2, "-1", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 1, -0.2, "1", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 2, -0.2, "2", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, -0.06, 1, "1", {
      ...referenceTextStyle,
      anchorX: "right",
    });
    createMathText(board, -0.06, 4, "4", {
      ...referenceTextStyle,
      anchorX: "right",
    });
    createMathText(board, -0.06, 5, "5", {
      ...referenceTextStyle,
      anchorX: "right",
    });

    createMathText(board, -1.28, 4.35, "P", {
      fontSize: compact ? 15 : 17,
      anchorX: "middle",
    });
    createMathText(board, compact ? 2.15 : 2.18, compact ? 0.65 : 0.63, "Q", {
      fontSize: compact ? 15 : 17,
      anchorX: "middle",
    });
    createMathText(board, compact ? -1.52 : -1.72, 3.45, "g", {
      color: COLORS.accent,
      fontSize: compact ? 18 : 21,
    });
    createMathText(board, compact ? 2.16 : 2.25, 2.2, "f", {
      fontSize: compact ? 18 : 21,
    });
    createMathText(board, 0.52, 2.55, "R", {
      color: COLORS.accent,
      fontSize: compact ? 21 : 24,
      anchorX: "middle",
    });
    createMathText(board, compact ? 2.64 : 3.06, -0.18, "x", {
      ...referenceTextStyle,
      anchorX: "right",
      anchorY: "top",
    });
    createMathText(board, 0.08, 5.82, "y", referenceTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.areaParabolasExtra2021Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAreaParabolasExtra2021Graph, { once: true });
  } else {
    initAreaParabolasExtra2021Graph();
  }
})();

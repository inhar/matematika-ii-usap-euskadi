(() => {
  const BOARD_ID = "area-exp-2022-board";
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
      cssStyle: "font-family: Newsreader, Georgia, serif; white-space: nowrap;",
      anchorX: "left",
      anchorY: "middle",
      ...options,
    });
  }

  function createRegion(board, start, end, lowerFunction) {
    const regionX = [];
    const regionY = [];
    const samples = 90;

    for (let index = 0; index <= samples; index += 1) {
      const x = start + ((end - start) * index) / samples;
      regionX.push(x);
      regionY.push(Math.E);
    }

    for (let index = samples; index >= 0; index -= 1) {
      const x = start + ((end - start) * index) / samples;
      regionX.push(x);
      regionY.push(lowerFunction(x));
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
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da esponentzialen grafikoa kargatu."
      : "No se ha podido cargar la gráfica de las exponenciales.";
    container.classList.add("area-exp-2022-board-error");
  }

  function initAreaExp2022Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: compact ? [-1.36, 3.48, 1.36, -0.28] : [-1.48, 3.52, 1.48, -0.2],
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

    createRegion(board, -1, 0, (x) => Math.exp(-x));
    createRegion(board, 0, 1, (x) => Math.exp(x));

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      strokeOpacity: 0.95,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-1, 0], [-1, Math.E]], guideStyle);
    board.create("segment", [[0, 1], [0, Math.E]], guideStyle);
    board.create("segment", [[1, 0], [1, Math.E]], guideStyle);

    board.create("line", [[0, Math.E], [1, Math.E]], {
      strokeColor: COLORS.muted,
      strokeWidth: 2.2,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    });

    const plotLimit = compact ? 1.18 : 1.22;

    board.create("functiongraph", [(x) => Math.exp(-x), -plotLimit, plotLimit], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.75,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [(x) => Math.exp(x), -plotLimit, plotLimit], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
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

    [-1, 0, 1].forEach((x) => {
      board.create("segment", [[x, -0.045], [x, 0.045]], markStyle);
    });
    [1, Math.E].forEach((y) => {
      board.create("segment", [[-0.025, y], [0.025, y]], markStyle);
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

    board.create("point", [-1, Math.E], pointStyle);
    board.create("point", [0, 1], pointStyle);
    board.create("point", [1, Math.E], pointStyle);

    const referenceTextStyle = {
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };

    createMathText(board, -1, -0.03, "-1", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 0, -0.03, "0", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 1, -0.03, "1", {
      ...referenceTextStyle,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, -0.055, 1, "1", {
      ...referenceTextStyle,
      anchorX: "right",
    });
    createMathText(board, -0.055, Math.E, "e", {
      ...referenceTextStyle,
      anchorX: "right",
    });

    createMathText(board, -1.01, 2.49, "P", {
      fontSize: compact ? 15 : 17,
      anchorX: "middle",
    });
    createMathText(board, compact ? 0.09 : 0.08, 0.76, "O", {
      fontSize: compact ? 15 : 17,
      anchorX: "left",
    });
    createMathText(board, 1.01, 2.49, "Q", {
      fontSize: compact ? 15 : 17,
      anchorX: "middle",
    });

    createMathText(board, compact ? -1.08 : -1.05, compact ? 3.12 : 3.18, compact ? "g" : "g(x)=e^{-x}", {
      fontSize: compact ? 14 : 16,
      anchorX: "right",
    });
    createMathText(board, compact ? 1.08 : 1.05, compact ? 3.12 : 3.18, compact ? "f" : "f(x)=e^x", {
      color: COLORS.accent,
      fontSize: compact ? 14 : 16,
    });
    createMathText(board, compact ? 0.09 : 0.1, 2.87, "y=e", {
      color: COLORS.muted,
      fontSize: compact ? 14 : 16,
    });

    createMathText(board, -0.52, 1.92, "A_1", {
      color: COLORS.accent,
      fontSize: compact ? 18 : 21,
      anchorX: "middle",
    });
    createMathText(board, 0.52, 1.92, "A_2", {
      color: COLORS.accent,
      fontSize: compact ? 18 : 21,
      anchorX: "middle",
    });

    createMathText(board, compact ? 1.31 : 1.43, -0.03, "x", {
      ...referenceTextStyle,
      anchorX: "right",
      anchorY: "top",
    });
    createMathText(board, 0.055, compact ? 3.34 : 3.38, "y", referenceTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.areaExp2022Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAreaExp2022Graph, { once: true });
  } else {
    initAreaExp2022Graph();
  }
})();

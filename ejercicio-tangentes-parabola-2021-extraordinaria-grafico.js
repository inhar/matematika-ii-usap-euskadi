(() => {
  const BOARD_ID = "tangent-2021-extra-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#747871",
    guide: "#b8bbb5",
    curve: "#c45f3f",
    tangent: "#2f6f68",
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
      ? "Ezin izan da grafikoa kargatu."
      : "No se ha podido cargar la gráfica.";
    container.classList.add("tangent-2021-board-error");
  }

  function initTangentGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-6.4, 31, 6.4, -4.5],
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

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-3, -0.35], [-3, 0.35]], tickStyle);
    board.create("segment", [[3, -0.35], [3, 0.35]], tickStyle);
    board.create("segment", [[-0.1, 9], [0.1, 9]], tickStyle);
    board.create("segment", [[-0.1, 18], [0.1, 18]], tickStyle);

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      strokeOpacity: 0.88,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-3, 0], [-3, 18]], guideStyle);
    board.create("segment", [[3, 0], [3, 18]], guideStyle);
    board.create("segment", [[-3, 18], [3, 18]], guideStyle);

    board.create("functiongraph", [(x) => x ** 2 + 9, -4.65, 4.65], {
      strokeColor: COLORS.curve,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    board.create("line", [[0, 0], [1, 6]], {
      strokeColor: COLORS.tangent,
      strokeWidth: 2.25,
      strokeOpacity: 0.95,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    });

    board.create("line", [[0, 0], [1, -6]], {
      strokeColor: COLORS.tangent,
      strokeWidth: 2.25,
      strokeOpacity: 0.95,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
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
    board.create("point", [-3, 18], pointStyle);
    board.create("point", [3, 18], pointStyle);

    createMathText(board, -3, -0.75, "-3", {
      fontSize: compact ? 10 : 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 3, -0.75, "3", {
      fontSize: compact ? 10 : 12,
      color: COLORS.muted,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, -0.2, 9, "9", {
      fontSize: compact ? 10 : 12,
      color: COLORS.muted,
      anchorX: "right",
    });
    createMathText(board, -0.2, 18, "18", {
      fontSize: compact ? 10 : 12,
      color: COLORS.muted,
      anchorX: "right",
    });

    createMathText(board, 0.55, 2.1, "P(0,0)", {
      fontSize: compact ? 12 : 15,
    });
    createMathText(board, -5.35, 15.8, "T_{-}(-3,18)", {
      fontSize: compact ? 11 : 15,
    });
    createMathText(board, 3.35, 15.8, "T_{+}(3,18)", {
      fontSize: compact ? 11 : 15,
    });
    createMathText(board, 4.2, 29.4, "f", {
      fontSize: compact ? 16 : 21,
      color: COLORS.curve,
    });
    createMathText(board, 1.75, 8.1, "y=6x", {
      fontSize: compact ? 10 : 14,
      color: COLORS.tangent,
    });
    createMathText(board, -2.9, 8.1, "y=-6x", {
      fontSize: compact ? 10 : 14,
      color: COLORS.tangent,
    });
    createMathText(board, 6.2, -0.85, "x", {
      color: COLORS.muted,
      anchorX: "right",
      anchorY: "top",
    });
    createMathText(board, 0.18, 29.8, "f(x)", {
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.tangentExtra2021Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTangentGraph, { once: true });
  } else {
    initTangentGraph();
  }
})();

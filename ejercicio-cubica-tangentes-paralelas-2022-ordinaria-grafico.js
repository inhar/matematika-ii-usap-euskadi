(() => {
  const BOARD_ID = "cubic-tangent-2022-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#71736e",
    accent: "#c95f3f",
    guide: "#9b9d97",
    white: "#ffffff",
  };

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren eta ukitzaileen grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función y sus tangentes.";
    container.classList.add("cubic-tangent-2022-board-error");
  }

  function initCubicTangent2022Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-2.6, 21, 4.6, -21],
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
    };
    board.create("line", [[-2.6, 0], [4.6, 0]], axisStyle);
    board.create("line", [[0, 21], [0, -21]], axisStyle);

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };
    [-1, 1, 3].forEach((x) => {
      board.create("segment", [[x, -0.45], [x, 0.45]], tickStyle);
    });
    [-12, 12].forEach((y) => {
      board.create("segment", [[-0.06, y], [0.06, y]], tickStyle);
    });

    const cubic = (x) => x ** 3 - 3 * x ** 2 - 7 * x + 9;
    board.create("functiongraph", [cubic, -2.6, 4.6], {
      strokeColor: COLORS.ink,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    const tangentStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.92,
      strokeWidth: 2.6,
      fixed: true,
      highlight: false,
    };
    board.create("line", [[-1, 12], [0, 14]], tangentStyle);
    board.create("line", [[3, -12], [4, -10]], tangentStyle);
    board.create("line", [[0, 1], [1, 3]], {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1.8,
      dash: 2,
      fixed: true,
      highlight: false,
    });

    const pointStyle = {
      size: 4.3,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };
    board.create("point", [-1, 12], pointStyle);
    board.create("point", [3, -12], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 15,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      parse: false,
      useMathJax: false,
    };

    [
      [-1, "-1"],
      [1, "1"],
      [3, "3"],
    ].forEach(([x, label]) => {
      board.create("text", [x, -2.25, mathLabel(label)], {
        ...textStyle,
        fontSize: 12,
        color: COLORS.muted,
        anchorX: "middle",
        anchorY: "top",
      });
    });

    board.create("text", [0.12, 12, mathLabel("12")], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
    });
    board.create("text", [0.12, -12, mathLabel("-12")], {
      ...textStyle,
      fontSize: 12,
      color: COLORS.muted,
    });
    board.create("text", [-1.45, 14.5, mathLabel("P")], {
      ...textStyle,
      fontSize: 14,
    });
    board.create("text", [3.18, -14.5, mathLabel("Q")], {
      ...textStyle,
      fontSize: 14,
    });
    board.create("text", [1.72, 15.5, mathLabel("t_{-1}")], {
      ...textStyle,
      fontSize: 17,
      color: COLORS.accent,
    });
    board.create("text", [3.55, 10.3, mathLabel("y=2x+1")], {
      ...textStyle,
      fontSize: 14,
      color: COLORS.muted,
      anchorX: "right",
    });
    board.create("text", [0.8, -14.3, mathLabel("t_3")], {
      ...textStyle,
      fontSize: 17,
      color: COLORS.accent,
    });
    board.create("text", [4.03, 4.2, mathLabel("f")], {
      ...textStyle,
      fontSize: 20,
      color: COLORS.ink,
    });
    board.create("text", [4.42, -1.4, mathLabel("x")], {
      ...textStyle,
      fontSize: 13,
      color: COLORS.muted,
    });
    board.create("text", [0.12, 19.3, mathLabel("y")], {
      ...textStyle,
      fontSize: 13,
      color: COLORS.muted,
    });

    board.update();
    container.dataset.ready = "true";
    window.cubicTangent2022Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCubicTangent2022Graph, { once: true });
  } else {
    initCubicTangent2022Graph();
  }
})();

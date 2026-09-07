(() => {
  const BOARD_ID = "perpendicular-2023-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#71736e",
    accent: "#c95f3f",
    guide: "#a8aaa5",
    white: "#ffffff",
  };

  function math(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "htmlAndMathml",
    });
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("perpendicular-2023-board-error");
  }

  function initPerpendicular2023Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-1, 2.6, 4.4, -0.7],
      axis: false,
      keepaspectratio: true,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const fixed = {
      fixed: true,
      highlight: false,
    };

    board.create("segment", [[-1, 0], [4.25, 0]], {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.75,
      strokeWidth: 1.4,
      lastArrow: { type: 1, size: 5 },
    });

    board.create("segment", [[0, -0.65], [0, 2.5]], {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.75,
      strokeWidth: 1.4,
      lastArrow: { type: 1, size: 5 },
    });

    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeWidth: 1.15,
    };

    [2].forEach((value) => {
      board.create("segment", [[value, -0.045], [value, 0.045]], tickStyle);
    });
    board.create("segment", [[-0.045, 1], [0.045, 1]], tickStyle);

    const axisText = {
      ...fixed,
      anchorX: "middle",
      anchorY: "middle",
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      fontSize: 15,
      color: COLORS.muted,
    };

    board.create("text", [2, -0.17, math("2")], axisText);
    board.create("text", [-0.13, 1, math("1")], {
      ...axisText,
      anchorX: "right",
    });
    board.create("text", [4.18, -0.17, math("x")], {
      ...axisText,
      fontSize: 17,
    });
    board.create("text", [-0.15, 2.43, math("y")], {
      ...axisText,
      fontSize: 17,
    });

    board.create("segment", [[-1, 2], [1.7, -0.7]], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.92,
      strokeWidth: 2.5,
    });

    board.create("segment", [[0.3, -0.7], [3.6, 2.6]], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeOpacity: 0.95,
      strokeWidth: 2.6,
    });

    const Q = [1, 0];
    const P = [2, 1];

    board.create("segment", [Q, P], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 4,
    });

    const marker = 0.18 / Math.sqrt(2);
    const markerLeft = [Q[0] - marker, Q[1] + marker];
    const markerCorner = [Q[0], Q[1] + 2 * marker];
    const markerRight = [Q[0] + marker, Q[1] + marker];
    const markerStyle = {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1.3,
    };

    board.create("segment", [markerLeft, markerCorner], markerStyle);
    board.create("segment", [markerCorner, markerRight], markerStyle);

    const pointStyle = {
      ...fixed,
      size: 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.7,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", Q, pointStyle);
    board.create("point", P, pointStyle);

    const labelStyle = {
      ...fixed,
      anchorX: "left",
      anchorY: "middle",
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      fontSize: 17,
      color: COLORS.ink,
    };

    board.create("text", [1, 0.55, math("Q(1,0)")], {
      ...labelStyle,
      anchorX: "middle",
    });
    board.create("text", [2.17, 0.72, math("P(2,1)")], labelStyle);
    board.create("text", [-0.56, 1.72, math("r")], {
      ...labelStyle,
      fontSize: 19,
    });
    board.create("text", [3.02, 1.72, math("s")], {
      ...labelStyle,
      fontSize: 19,
      color: COLORS.accent,
    });

    board.update();
    container.dataset.ready = "true";
    window.perpendicular2023Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPerpendicular2023Graph, { once: true });
  } else {
    initPerpendicular2023Graph();
  }
})();

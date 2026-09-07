(() => {
  const BOARD_ID = "quadratic-2023-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    guide: "#b8bab4",
    accent: "#c95f3f",
    secondary: "#536b66",
    white: "#ffffff",
  };

  function f(x) {
    return -0.5 * x * x + x + 1;
  }

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
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("quadratic-2023-board-error");
  }

  function initQuadratic2023Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true" || container.offsetWidth < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-1.5, 5.2, 4, -3.2],
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
    };
    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1.1,
      dash: 2,
      fixed: true,
      highlight: false,
    };
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
    const pointStyle = {
      size: 4.4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("line", [[-1.5, 0], [4, 0]], axisStyle);
    board.create("line", [[0, -3.2], [0, 5.2]], axisStyle);
    board.create("segment", [[1, -0.08], [1, 0.08]], axisStyle);
    board.create("segment", [[2, -0.08], [2, 0.08]], axisStyle);
    board.create("segment", [[-0.035, 1], [0.035, 1]], axisStyle);
    board.create("segment", [[1, 0], [1, 1.5]], guideStyle);
    board.create("segment", [[2, 0], [2, 1]], guideStyle);

    board.create("functiongraph", [f, -1.5, 4], {
      strokeColor: COLORS.ink,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [(x) => -x + 3, -1.5, 4], {
      strokeColor: COLORS.accent,
      strokeWidth: 2.8,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [(x) => x + 2, -1.5, 3.2], {
      strokeColor: COLORS.secondary,
      strokeWidth: 2.4,
      fixed: true,
      highlight: false,
    });

    board.create("point", [1, 1.5], pointStyle);
    board.create("point", [2, 1], pointStyle);

    const intersection = [0.5, 2.5];
    const size = 0.18;
    const unitUp = [1 / Math.sqrt(2), 1 / Math.sqrt(2)];
    const unitDown = [1 / Math.sqrt(2), -1 / Math.sqrt(2)];
    const cornerUp = [intersection[0] + size * unitUp[0], intersection[1] + size * unitUp[1]];
    const cornerDown = [intersection[0] + size * unitDown[0], intersection[1] + size * unitDown[1]];
    const cornerOuter = [cornerUp[0] + size * unitDown[0], cornerUp[1] + size * unitDown[1]];
    board.create("segment", [cornerUp, cornerOuter], {
      strokeColor: COLORS.muted,
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
    });
    board.create("segment", [cornerDown, cornerOuter], {
      strokeColor: COLORS.muted,
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
    });

    board.create("text", [0.84, 1.3, mathLabel("V=\\left(1,\\frac32\\right)")], {
      ...textStyle,
      fontSize: 14,
      anchorX: "right",
    });
    board.create("text", [1.88, 0.65, mathLabel("T=(2,1)")], {
      ...textStyle,
      fontSize: 14,
      anchorX: "right",
    });
    board.create("text", [2.45, 0.95, mathLabel("t\\colon y=-x+3")], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 15,
    });
    board.create("text", [2.35, 4.72, mathLabel("s\\colon y=x+2")], {
      ...textStyle,
      color: COLORS.secondary,
      fontSize: 15,
      anchorX: "right",
    });
    board.create("text", [3.15, -1.15, mathLabel("f")], {
      ...textStyle,
      fontSize: 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [1, -0.32, mathLabel("1")], {
      ...textStyle,
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: 13,
    });
    board.create("text", [2, -0.32, mathLabel("2")], {
      ...textStyle,
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: 13,
    });
    board.create("text", [-0.08, 1, mathLabel("1")], {
      ...textStyle,
      anchorX: "right",
      color: COLORS.muted,
      fontSize: 13,
    });
    board.create("text", [3.82, -0.42, mathLabel("x")], {
      ...textStyle,
      color: COLORS.muted,
      fontSize: 14,
    });
    board.create("text", [0.08, 4.86, mathLabel("y")], {
      ...textStyle,
      color: COLORS.muted,
      fontSize: 14,
    });

    board.update();
    container.dataset.ready = "true";
  }

  function tryInitGraph() {
    window.requestAnimationFrame(initQuadratic2023Graph);
  }

  function prepareGraph() {
    tryInitGraph();
    document.querySelectorAll(".level-button").forEach((button) => {
      button.addEventListener("click", () => window.setTimeout(tryInitGraph, 80));
    });

    const solution = document.querySelector(".solution-view");
    if (solution) {
      new MutationObserver(tryInitGraph).observe(solution, {
        attributes: true,
        attributeFilter: ["hidden", "class"],
        subtree: true,
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepareGraph, { once: true });
  } else {
    prepareGraph();
  }
})();

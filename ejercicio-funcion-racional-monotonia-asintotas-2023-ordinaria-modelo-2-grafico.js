(() => {
  const BOARD_ID = "rational-study-2023-board";
  const BOUNDING_BOX = [-5.8, 1.28, 5.8, -1.28];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#b9bbb5",
    accent: "#c95f3f",
    white: "#ffffff",
  };

  let graph = null;

  function f(x) {
    return x / (x * x + 1);
  }

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    container.textContent = document.documentElement.lang === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("rational-study-2023-board-error");
  }

  function initGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || graph || !container.offsetParent || container.getBoundingClientRect().width < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: BOUNDING_BOX,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const fixed = { fixed: true, highlight: false };
    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.82,
      strokeWidth: 1.25,
    };
    const guideStyle = {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1.05,
      dash: 2,
    };
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.9,
      strokeWidth: 1.15,
    };
    const textStyle = (overrides = {}) => ({
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 12 : 15,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0;",
      anchorX: "left",
      anchorY: "middle",
      ...overrides,
    });
    const pointStyle = {
      ...fixed,
      size: compact ? 3.8 : 4.5,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      withLabel: false,
    };

    board.create("line", [[-5.8, 0], [5.8, 0]], {
      ...axisStyle,
      dash: 2,
    });
    board.create("line", [[0, -1.28], [0, 1.28]], axisStyle);

    board.create("segment", [[-1, -0.035], [-1, 0.035]], tickStyle);
    board.create("segment", [[1, -0.035], [1, 0.035]], tickStyle);
    board.create("segment", [[-0.07, -0.5], [0.07, -0.5]], tickStyle);
    board.create("segment", [[-0.07, 0.5], [0.07, 0.5]], tickStyle);
    board.create("segment", [[-1, 0], [-1, -0.5]], guideStyle);
    board.create("segment", [[1, 0], [1, 0.5]], guideStyle);

    board.create("functiongraph", [f, -5.8, 5.8], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.7 : 3.2,
    });
    board.create("functiongraph", [(x) => x, -1.08, 1.08], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.5 : 3,
    });

    board.create("point", [-1, -0.5], pointStyle);
    board.create("point", [1, 0.5], pointStyle);
    board.create("point", [0, 0], {
      ...pointStyle,
      fillColor: COLORS.accent,
    });

    board.create("text", [-1.2, -0.75, mathLabel("\\left(-1,-\\frac12\\right)")], textStyle({
      anchorX: "right",
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [1.2, 0.76, mathLabel("\\left(1,\\frac12\\right)")], textStyle({
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [0.14, -0.18, mathLabel("(0,0)")], textStyle({
      fontSize: compact ? 11 : 14,
    }));

    board.create("text", [2.35, 0.61, mathLabel("f")], textStyle({
      color: COLORS.ink,
      fontSize: compact ? 17 : 21,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [1.2, 1.06, mathLabel("y=x")], textStyle({
      color: COLORS.accent,
      fontSize: compact ? 13 : 16,
    }));
    board.create("text", [-5.2, 0.15, mathLabel("y=0")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 11 : 14,
    }));

    board.create("text", [-1, -0.11, mathLabel("-1")], textStyle({
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [1, -0.11, mathLabel("1")], textStyle({
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [-0.16, 0.5, mathLabel("\\frac12")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [-0.16, -0.5, mathLabel("-\\frac12")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [5.5, -0.12, mathLabel("x")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 12 : 14,
    }));
    board.create("text", [0.14, 1.17, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 12 : 14,
    }));

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(320, targetWidth * 0.86)
        : Math.max(350, targetWidth * 0.52);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      board.fullUpdate();
    };

    graph = { board, refresh };
    container.dataset.ready = "true";
    refresh();
  }

  function scheduleRefresh() {
    window.setTimeout(() => {
      initGraph();
      graph?.refresh();
    }, 0);
  }

  function bindGraph() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".level-button")) scheduleRefresh();
    });
    window.addEventListener("resize", scheduleRefresh);
    scheduleRefresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindGraph, { once: true });
  } else {
    bindGraph();
  }
})();

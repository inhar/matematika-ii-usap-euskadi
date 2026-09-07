(() => {
  const BOARD_ID = "rational-study-2023-board";
  const BOUNDING_BOX = [-5.4, 4.35, 5.4, -1.25];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#b9bbb5",
    accent: "#c95f3f",
    secondary: "#536b66",
    white: "#ffffff",
  };

  let graph = null;

  function f(x) {
    return x / ((x - 1) ** 2);
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
    const auxiliaryPoint = (coordinates) => board.create("point", coordinates, {
      ...fixed,
      visible: false,
      withLabel: false,
      name: "",
      showInfobox: false,
    });
    const fixedLine = (first, second, attributes) => board.create("line", [
      auxiliaryPoint(first),
      auxiliaryPoint(second),
    ], attributes);

    fixedLine([-5.4, 0], [5.4, 0], { ...axisStyle, dash: 2 });
    fixedLine([0, -1.25], [0, 4.35], axisStyle);
    fixedLine([1, -1.25], [1, 4.35], {
      ...fixed,
      strokeColor: COLORS.secondary,
      strokeOpacity: 0.9,
      strokeWidth: compact ? 1.6 : 1.9,
      dash: 2,
    });

    board.create("segment", [[-1, -0.055], [-1, 0.055]], tickStyle);
    board.create("segment", [[1, -0.055], [1, 0.055]], tickStyle);
    board.create("segment", [[-0.07, -0.25], [0.07, -0.25]], tickStyle);
    board.create("segment", [[-0.07, 1], [0.07, 1]], tickStyle);
    board.create("segment", [[-1, 0], [-1, -0.25]], guideStyle);

    board.create("functiongraph", [f, -5.4, 0.97], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.7 : 3.2,
    });
    board.create("functiongraph", [f, 1.03, 5.4], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.7 : 3.2,
    });
    board.create("functiongraph", [(x) => x, -1.12, 0.88], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.5 : 3,
    });

    board.create("point", [-1, -0.25], pointStyle);
    board.create("point", [0, 0], { ...pointStyle, fillColor: COLORS.accent });

    board.create("text", [-1.18, -0.58, mathLabel("\\left(-1,-\\frac14\\right)")], textStyle({
      anchorX: "right",
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [0.14, -0.22, mathLabel("(0,0)")], textStyle({
      fontSize: compact ? 11 : 14,
    }));

    board.create("text", [-4.15, -0.44, mathLabel("f")], textStyle({
      fontSize: compact ? 17 : 21,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [3.55, 0.9, mathLabel("f")], textStyle({
      fontSize: compact ? 17 : 21,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [0.45, 0.74, mathLabel("y=x")], textStyle({
      color: COLORS.accent,
      fontSize: compact ? 12 : 15,
    }));
    board.create("text", [1.22, 3.72, mathLabel("x=1")], textStyle({
      color: COLORS.secondary,
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [-4.95, 0.2, mathLabel("y=0")], textStyle({
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
      color: COLORS.secondary,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [-0.16, -0.25, mathLabel("-\\frac14")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [-0.16, 1, mathLabel("1")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [5.08, -0.13, mathLabel("x")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 12 : 14,
    }));
    board.create("text", [0.13, 4.03, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 12 : 14,
    }));

    const refresh = () => {
      if (!container.offsetParent) return;
      const availableWidth = container.parentElement?.getBoundingClientRect().width
        ?? document.documentElement.clientWidth - 32;
      const targetWidth = Math.max(20, Math.min(availableWidth, document.documentElement.clientWidth - 32));
      const targetHeight = window.innerWidth <= 560
        ? Math.max(320, targetWidth * 0.9)
        : Math.max(350, targetWidth * 0.54);
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

(() => {
  const BOARD_ID = "cubic-extrema-2023-board";
  const BOUNDING_BOX = [-2.65, 28, 7.25, -124];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#c6c7c2",
    accent: "#c95f3f",
    white: "#ffffff",
  };

  let graph = null;

  function f(x) {
    return x * x * x - 6 * x * x - 15 * x + 2;
  }

  function tangentAtOne(x) {
    return -24 * x + 6;
  }

  function tangentAtThree(x) {
    return -24 * x + 2;
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
    container.classList.add("cubic-extrema-2023-board-error");
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
      strokeWidth: 1.2,
    };
    const guideStyle = {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1,
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
      fontSize: compact ? 11 : 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0;",
      anchorX: "left",
      anchorY: "middle",
      ...overrides,
    });
    const pointStyle = {
      ...fixed,
      size: compact ? 3.5 : 4.2,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      withLabel: false,
    };

    board.create("line", [[-2.65, 0], [7.25, 0]], axisStyle);
    board.create("line", [[0, -124], [0, 28]], axisStyle);

    [-1, 1, 3, 5].forEach((x) => {
      board.create("segment", [[x, -2.1], [x, 2.1]], tickStyle);
      board.create("text", [x, -5.8, mathLabel(String(x))], textStyle({
        anchorX: "middle",
        anchorY: "top",
        color: COLORS.muted,
        fontSize: compact ? 10 : 12,
      }));
    });

    board.create("segment", [[-0.07, 10], [0.07, 10]], tickStyle);
    board.create("segment", [[-0.07, -98], [0.07, -98]], tickStyle);
    board.create("text", [-0.15, 10, mathLabel("10")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    }));
    board.create("text", [-0.15, -98, mathLabel("-98")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    }));

    board.create("segment", [[-1, 0], [-1, 10]], guideStyle);
    board.create("segment", [[5, 0], [5, -98]], guideStyle);

    board.create("functiongraph", [f, -2.65, 7.25], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.7 : 3.2,
    });
    board.create("functiongraph", [tangentAtOne, 0.22, 1.78], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.5 : 3,
    });
    board.create("functiongraph", [tangentAtThree, 2.22, 3.78], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.5 : 3,
    });

    board.create("point", [-1, 10], pointStyle);
    board.create("point", [5, -98], pointStyle);
    board.create("point", [1, -18], {
      ...pointStyle,
      fillColor: COLORS.accent,
    });
    board.create("point", [3, -70], {
      ...pointStyle,
      fillColor: COLORS.accent,
    });

    board.create("text", [-1.18, 17.5, mathLabel("\\left(-1,10\\right)")], textStyle({
      anchorX: "right",
      fontSize: compact ? 10 : 13,
    }));
    board.create("text", [5.18, -105.5, mathLabel("\\left(5,-98\\right)")], textStyle({
      fontSize: compact ? 10 : 13,
    }));
    board.create("text", [0.83, -10.5, mathLabel("\\left(1,-18\\right)")], textStyle({
      anchorX: "right",
      fontSize: compact ? 10 : 12,
    }));
    board.create("text", [3.16, -62.5, mathLabel("\\left(3,-70\\right)")], textStyle({
      fontSize: compact ? 10 : 12,
    }));

    board.create("text", [6.15, -67, mathLabel("f")], textStyle({
      color: COLORS.ink,
      fontSize: compact ? 16 : 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [0.32, 5.3, mathLabel("t_1")], textStyle({
      color: COLORS.accent,
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [2.3, -42.5, mathLabel("t_3")], textStyle({
      color: COLORS.accent,
      fontSize: compact ? 11 : 14,
    }));
    board.create("text", [7.02, -5.5, mathLabel("x")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [0.13, 23, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(330, targetWidth * 0.9)
        : Math.max(390, targetWidth * 0.56);
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

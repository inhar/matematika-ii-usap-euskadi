(() => {
  const BOARD_ID = "area-2023-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    guide: "#b8bab4",
    accent: "#c95f3f",
    secondary: "#536b66",
    areaOne: "#edd5cc",
    areaTwo: "#dce6e2",
    white: "#ffffff",
  };

  const parabola = (x) => (x * x) / 4;
  const hyperbola = (x) => 4 / (x * x);

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
      ? "Ezin izan da esparruaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica del recinto.";
    container.classList.add("area-2023-board-error");
  }

  function createRegion(board, start, end, upper, fillColor) {
    const xValues = [];
    const yValues = [];
    const samples = 90;

    for (let index = 0; index <= samples; index += 1) {
      const x = start + ((end - start) * index) / samples;
      xValues.push(x);
      yValues.push(upper(x));
    }

    for (let index = samples; index >= 0; index -= 1) {
      const x = start + ((end - start) * index) / samples;
      xValues.push(x);
      yValues.push(parabola(x));
    }

    xValues.push(xValues[0]);
    yValues.push(yValues[0]);

    board.create("curve", [xValues, yValues], {
      strokeOpacity: 0,
      fillColor,
      fillOpacity: 0.72,
      fixed: true,
      highlight: false,
    });
  }

  function createText(board, x, y, latex, options = {}) {
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

  function initArea2023Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true" || container.offsetWidth < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: compact ? [-0.25, 4.85, 2.55, -0.55] : [-0.28, 4.75, 2.6, -0.45],
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
      strokeOpacity: 0.6,
      strokeWidth: 1.25,
      fixed: true,
      highlight: false,
    };
    const tickStyle = {
      ...axisStyle,
      strokeOpacity: 0.7,
      strokeWidth: 1.05,
    };
    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.95,
      strokeWidth: 1.2,
      dash: 2,
      fixed: true,
      highlight: false,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    createRegion(board, 0, 1, () => 4, COLORS.areaOne);
    createRegion(board, 1, 2, hyperbola, COLORS.areaTwo);

    board.create("segment", [[1, parabola(1)], [1, 4]], guideStyle);
    board.create("segment", [[2, 0], [2, 1]], guideStyle);

    board.create("functiongraph", [parabola, 0, 2.58], {
      strokeColor: COLORS.ink,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [hyperbola, 0.92, 2.58], {
      strokeColor: COLORS.secondary,
      strokeWidth: 2.8,
      fixed: true,
      highlight: false,
    });
    board.create("line", [[0, 4], [1, 4]], {
      strokeColor: COLORS.accent,
      strokeWidth: 2.8,
      fixed: true,
      highlight: false,
    });

    [1, 2].forEach((x) => {
      board.create("segment", [[x, -0.07], [x, 0.07]], tickStyle);
    });
    [1, 4].forEach((y) => {
      board.create("segment", [[-0.025, y], [0.025, y]], tickStyle);
    });

    const pointStyle = {
      size: compact ? 3.8 : 4.4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };
    board.create("point", [1, 4], pointStyle);
    board.create("point", [2, 1], pointStyle);

    const reference = { color: COLORS.muted, fontSize: compact ? 11 : 12 };
    createText(board, 1, -0.18, "1", { ...reference, anchorX: "middle", anchorY: "top" });
    createText(board, 2, -0.18, "2", { ...reference, anchorX: "middle", anchorY: "top" });
    createText(board, -0.07, 1, "1", { ...reference, anchorX: "right" });
    createText(board, -0.07, 4, "4", { ...reference, anchorX: "right" });
    createText(board, 2.52, -0.17, "x", { ...reference, anchorX: "right", anchorY: "top" });
    createText(board, 0.06, 4.55, "y", reference);

    createText(board, 1.06, 4.48, "P=(1,4)", { fontSize: compact ? 13 : 15 });
    createText(board, 2.06, compact ? 1.52 : 1.48, compact ? "Q(2,1)" : "Q=(2,1)", {
      fontSize: compact ? 12 : 15,
    });
    createText(board, 0.18, 4.23, "y=4", { color: COLORS.accent, fontSize: compact ? 15 : 17 });
    createText(board, 1.36, 2.55, "y=\\frac4{x^2}", { color: COLORS.secondary, fontSize: compact ? 15 : 17 });
    createText(board, 1.38, 0.28, "y=\\frac{x^2}{4}", { color: COLORS.ink, fontSize: compact ? 15 : 17, anchorY: "top" });
    createText(board, 0.5, 1.9, "S_1", { color: COLORS.accent, fontSize: compact ? 18 : 21, anchorX: "middle" });
    createText(board, 1.46, 1.12, "S_2", { color: COLORS.secondary, fontSize: compact ? 18 : 21, anchorX: "middle" });

    board.update();
    container.dataset.ready = "true";
  }

  function scheduleGraph() {
    window.requestAnimationFrame(() => window.requestAnimationFrame(initArea2023Graph));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleGraph, { once: true });
  } else {
    scheduleGraph();
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".level-button")) scheduleGraph();
  });
})();

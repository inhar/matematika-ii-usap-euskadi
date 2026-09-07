(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#70746e",
    guide: "#aeb1aa",
    accent: "#c95f3f",
    area: "#f2d8cf",
    white: "#ffffff",
  };
  const X_MIN = -3.8;
  const X_MAX = 3.8;
  const BOUNDING_BOX = [-4.05, 0.45, 4.05, -0.055];
  const definitions = [
    {
      id: "coins-normal-2023-a-board",
      lower: -0.85,
      upper: X_MAX,
      boundaries: [-0.85],
      probability: "P\\approx0{,}8023",
      probabilityPosition: [0.85, 0.105],
    },
    {
      id: "coins-normal-2023-b-board",
      lower: X_MIN,
      upper: -1.83,
      boundaries: [-1.83],
      probability: "P\\approx0{,}0336",
      probabilityPosition: [-2.65, 0.058],
    },
    {
      id: "coins-normal-2023-c-board",
      lower: -1.83,
      upper: -0.85,
      boundaries: [-1.83, -0.85],
      probability: "P\\approx0{,}1641",
      probabilityPosition: [-1.34, 0.33],
    },
  ];
  const graphState = new Map();

  const density = (z) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    container.textContent = document.documentElement.lang === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("coins-normal-2023-board-error");
  }

  function createText(board, x, y, latex, options = {}) {
    return board.create("text", [x, y, mathLabel(latex)], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: 13,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0;",
      anchorX: "middle",
      anchorY: "middle",
      ...options,
    });
  }

  function shadeArea(board, lower, upper, fixed) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 160;

    for (let index = 0; index <= samples; index += 1) {
      const x = lower + ((upper - lower) * index) / samples;
      xValues.push(x);
      yValues.push(density(x));
    }

    xValues.push(upper, lower);
    yValues.push(0, 0);

    board.create("curve", [xValues, yValues], {
      ...fixed,
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.92,
    });
  }

  function initGraph(definition) {
    const container = document.getElementById(definition.id);
    if (!container || graphState.has(definition.id)) return;
    if (!container.offsetParent || container.getBoundingClientRect().width < 20) return;
    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const fixed = { fixed: true, highlight: false };
    const board = JXG.JSXGraph.initBoard(definition.id, {
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

    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.58,
      strokeWidth: 1.2,
    };
    const guideStyle = {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeOpacity: 0.82,
      strokeWidth: 1.35,
      dash: 2,
    };
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.64,
      strokeWidth: 1,
    };
    const referenceText = {
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    };

    board.create("line", [[X_MIN, 0], [X_MAX, 0]], axisStyle);
    board.create("line", [[0, -0.01], [0, 0.425]], axisStyle);
    shadeArea(board, definition.lower, definition.upper, fixed);

    board.create("functiongraph", [density, X_MIN, X_MAX], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.4 : 2.8,
    });

    definition.boundaries.forEach((x) => {
      board.create("segment", [[x, 0], [x, density(x)]], guideStyle);
      board.create("segment", [[x, -0.006], [x, 0.006]], tickStyle);
      createText(board, x, -0.016, String(x).replace(".", "{,}"), {
        ...referenceText,
        anchorY: "top",
      });
    });

    board.create("segment", [[0, -0.006], [0, 0.006]], tickStyle);
    createText(board, 0, -0.016, "0", {
      ...referenceText,
      anchorY: "top",
    });
    board.create("segment", [[-0.04, 0.4], [0.04, 0.4]], tickStyle);
    createText(board, -0.1, 0.4, "0{,}4", {
      ...referenceText,
      anchorX: "right",
    });
    createText(board, X_MAX - 0.08, -0.016, "z", {
      ...referenceText,
      anchorX: "right",
      anchorY: "top",
    });
    createText(
      board,
      definition.probabilityPosition[0],
      definition.probabilityPosition[1],
      definition.probability,
      {
        color: COLORS.accent,
        fontSize: compact ? 11 : 14,
      },
    );

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(300, targetWidth * 0.82)
        : Math.max(330, targetWidth * 0.52);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      board.fullUpdate();
    };

    graphState.set(definition.id, { board, refresh });
    container.dataset.ready = "true";
    refresh();
  }

  function ensureVisibleGraphs() {
    definitions.forEach(initGraph);
    graphState.forEach(({ refresh }) => refresh());
  }

  function scheduleRefresh() {
    window.setTimeout(ensureVisibleGraphs, 0);
  }

  function initGraphs() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".tab, .level-button")) scheduleRefresh();
    });
    window.addEventListener("resize", scheduleRefresh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGraphs, { once: true });
  } else {
    initGraphs();
  }
})();

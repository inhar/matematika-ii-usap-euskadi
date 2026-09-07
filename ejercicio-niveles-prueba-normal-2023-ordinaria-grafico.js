(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#70746e",
    guide: "#aeb1aa",
    accent: "#c95f3f",
    initial: "#e5e5e0",
    middle: "#dce6e2",
    advanced: "#edd5cc",
    white: "#ffffff",
  };
  const MEAN = 65;
  const SIGMA = 18;
  const LOWER_CUT = 49.88;
  const UPPER_CUT = 83.72;
  const X_MIN = 20;
  const X_MAX = 110;
  const BOUNDING_BOX = [16, 0.027, 111, -0.0042];

  const definitions = [
    {
      id: "levels-normal-2023-score-a-board",
      score: 85.5,
      comparison: "85{,}5>83{,}72",
      comparisonPosition: [94, 0.0103],
    },
    {
      id: "levels-normal-2023-score-b-board",
      score: 48,
      comparison: "48<49{,}88",
      comparisonPosition: [38.5, 0.0115],
    },
  ];

  const graphState = new Map();

  const density = (x) => (
    Math.exp(-0.5 * ((x - MEAN) / SIGMA) ** 2)
      / (SIGMA * Math.sqrt(2 * Math.PI))
  );

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function localizedLabels() {
    const isBasque = document.documentElement.lang === "eu";
    return {
      initial: isBasque ? "\\text{Hasierakoa}\\ 20\\%" : "\\text{Inicial}\\ 20\\%",
      middle: isBasque ? "\\text{Erdi-maila}\\ 65\\%" : "\\text{Medio}\\ 65\\%",
      advanced: isBasque ? "\\text{Aurreratua}\\ 15\\%" : "\\text{Avanzado}\\ 15\\%",
    };
  }

  function showFallback(container) {
    container.textContent = document.documentElement.lang === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("levels-normal-2023-board-error");
  }

  function buildShade(board, lower, upper, fillColor, fixed) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 120;

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
      fillColor,
      fillOpacity: 0.8,
    });
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
    const thresholdStyle = {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1.25,
      dash: 2,
    };
    const scoreStyle = {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: 1.65,
      dash: 2,
    };
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.65,
      strokeWidth: 1,
    };
    const referenceText = {
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    };

    board.create("line", [[X_MIN, 0], [X_MAX, 0]], axisStyle);
    board.create("line", [[X_MIN, 0], [X_MIN, 0.01]], axisStyle);

    buildShade(board, X_MIN, LOWER_CUT, COLORS.initial, fixed);
    buildShade(board, LOWER_CUT, UPPER_CUT, COLORS.middle, fixed);
    buildShade(board, UPPER_CUT, X_MAX, COLORS.advanced, fixed);

    board.create("functiongraph", [density, X_MIN, X_MAX], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.4 : 2.8,
    });

    [LOWER_CUT, UPPER_CUT].forEach((x) => {
      board.create("segment", [[x, 0], [x, density(x)]], thresholdStyle);
      board.create("segment", [[x, -0.0006], [x, 0.0006]], tickStyle);
    });

    board.create("segment", [[MEAN, 0], [MEAN, density(MEAN)]], {
      ...thresholdStyle,
      strokeOpacity: 0.55,
    });
    board.create("segment", [[MEAN, -0.0006], [MEAN, 0.0006]], tickStyle);

    board.create("segment", [[definition.score, 0], [definition.score, density(definition.score)]], scoreStyle);
    board.create("point", [definition.score, density(definition.score)], {
      ...fixed,
      size: compact ? 3.4 : 4,
      face: "o",
      fillColor: COLORS.accent,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      showInfobox: false,
      withLabel: false,
    });

    createText(board, LOWER_CUT, -0.0013, "x_1\\approx49{,}88", {
      ...referenceText,
      anchorY: "top",
    });
    createText(board, MEAN, -0.0013, "65", {
      ...referenceText,
      anchorY: "top",
    });
    createText(board, UPPER_CUT, -0.0013, "x_2\\approx83{,}72", {
      ...referenceText,
      anchorY: "top",
    });

    const peak = density(MEAN);
    board.create("segment", [[X_MIN - 0.35, peak], [X_MIN + 0.35, peak]], tickStyle);
    createText(board, X_MIN - 0.75, peak, "0{,}022", {
      ...referenceText,
      anchorX: "right",
    });
    createText(board, X_MIN + 1.1, 0.0255, "f(x)", {
      ...referenceText,
      anchorX: "left",
    });
    createText(board, X_MAX - 0.5, -0.0013, "x", {
      ...referenceText,
      anchorX: "right",
      anchorY: "top",
    });
    createText(board, MEAN + 1.2, 0.0243, "\\mu=65", {
      ...referenceText,
      anchorX: "left",
    });

    const labels = localizedLabels();
    const localizedElements = [
      { key: "initial", element: createText(board, 32, 0.0021, labels.initial, { color: COLORS.muted, fontSize: compact ? 11 : 14 }) },
      { key: "middle", element: createText(board, 66, 0.0062, labels.middle, { color: "#526a65", fontSize: compact ? 11 : 14 }) },
      { key: "advanced", element: createText(board, 99, 0.0021, labels.advanced, { color: COLORS.accent, fontSize: compact ? 11 : 14 }) },
    ];

    createText(
      board,
      definition.comparisonPosition[0],
      definition.comparisonPosition[1],
      definition.comparison,
      {
        color: COLORS.accent,
        fontSize: compact ? 12 : 15,
      },
    );

    const refreshLabels = () => {
      const nextLabels = localizedLabels();
      localizedElements.forEach(({ key, element }) => {
        element.setText(mathLabel(nextLabels[key]));
      });
    };

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(320, targetWidth * 0.9)
        : Math.max(350, targetWidth * 0.54);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      refreshLabels();
      board.fullUpdate();
    };

    graphState.set(definition.id, { board, refresh, refreshLabels });
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
    document.addEventListener("languagechange", () => {
      graphState.forEach(({ board, refreshLabels }) => {
        refreshLabels();
        board.fullUpdate();
      });
    });
    window.addEventListener("resize", scheduleRefresh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGraphs, { once: true });
  } else {
    initGraphs();
  }
})();

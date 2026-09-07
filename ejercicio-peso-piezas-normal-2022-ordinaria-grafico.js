(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };
  const MEAN = 52;
  const SIGMA = 6.5;
  const BOUNDING_BOX = [26, 0.072, 79, -0.009];

  const density = (x) => (
    Math.exp(-0.5 * ((x - MEAN) / SIGMA) ** 2)
      / (SIGMA * Math.sqrt(2 * Math.PI))
  );

  const graphDefinitions = [
    {
      id: "normal-weight-2022-interval-board",
      lower: 50,
      upper: 68,
      guides: [50, 68],
      boundLabels: [
        { x: 50, text: "50" },
        { x: 68, text: "68" },
      ],
      probability: "P ≈ 0,6148",
      probabilityPosition: [60.5, 0.022],
    },
    {
      id: "normal-weight-2022-tail-board",
      lower: 55.4125,
      upper: 79,
      guides: [55.4125],
      boundLabels: [
        { x: 55.4125, text: "a ≈ 55,41" },
      ],
      probability: "30 %",
      probabilityPosition: [64.5, 0.017],
    },
  ];

  const graphState = new Map();

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("normal-weight-2022-board-error");
  }

  function buildShade(board, lower, upper, fixed) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 180;

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
      fillOpacity: 0.86,
    });
  }

  function initGraph(definition) {
    const container = document.getElementById(definition.id);
    if (!container || graphState.has(definition.id)) return;
    if (!container.offsetParent || container.getBoundingClientRect().width < 20) return;
    if (!window.JXG?.JSXGraph) {
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
      strokeOpacity: 0.6,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true,
    };
    const guideStyle = {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: 1.35,
      dash: 2,
    };
    const meanGuideStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.5,
      strokeWidth: 1,
      dash: 2,
    };
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.7,
      strokeWidth: 1,
    };
    const textStyle = {
      ...fixed,
      color: COLORS.ink,
      fontSize: compact ? 11 : 14,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0;",
      anchorX: "middle",
      anchorY: "middle",
    };
    const mutedTextStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    };

    board.create("line", [[26, 0], [79, 0]], axisStyle);
    buildShade(board, definition.lower, definition.upper, fixed);

    board.create("functiongraph", [density, 26, 79], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.4 : 2.8,
    });

    board.create("segment", [[MEAN, 0], [MEAN, density(MEAN)]], meanGuideStyle);
    definition.guides.forEach((x) => {
      board.create("segment", [[x, 0], [x, density(x)]], guideStyle);
    });

    definition.boundLabels.forEach(({ x, text }) => {
      board.create("segment", [[x, -0.0009], [x, 0.0009]], tickStyle);
      board.create("text", [x, -0.0042, text], {
        ...mutedTextStyle,
        color: COLORS.accent,
      });
    });

    board.create("text", [54.2, 0.0645, "μ = 52"], {
      ...mutedTextStyle,
      anchorX: "left",
    });
    board.create("text", [37.5, 0.0615, "f(52) ≈ 0,061"], {
      ...mutedTextStyle,
      anchorX: "middle",
    });
    board.create("text", [78.1, 0.004, "x (g)"], {
      ...mutedTextStyle,
      anchorX: "right",
    });
    board.create("text", [
      definition.probabilityPosition[0],
      definition.probabilityPosition[1],
      definition.probability,
    ], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 12 : 15,
    });

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(300, targetWidth * 0.8)
        : Math.max(330, targetWidth * 0.54);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      board.fullUpdate();
    };

    graphState.set(definition.id, { board, refresh });
    container.dataset.ready = "true";
    refresh();
  }

  function ensureVisibleGraphs() {
    graphDefinitions.forEach(initGraph);
    graphState.forEach(({ refresh }) => refresh());
  }

  function scheduleRefresh() {
    window.setTimeout(ensureVisibleGraphs, 0);
  }

  function initNormalWeight2022Graphs() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".tab, .level-button")) {
        scheduleRefresh();
      }
    });
    window.addEventListener("resize", scheduleRefresh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNormalWeight2022Graphs, { once: true });
  } else {
    initNormalWeight2022Graphs();
  }
})();

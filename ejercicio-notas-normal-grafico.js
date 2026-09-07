(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };
  const BOUNDING_BOX = [-4, 0.46, 4.1, -0.06];
  const density = (z) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);

  const graphDefinitions = [
    {
      id: "normal-score-interval-board",
      lower: -1,
      upper: 2,
      guides: [-1, 2],
      probability: "P ≈ 0,8185",
      probabilityPosition: [0.48, 0.075],
    },
    {
      id: "normal-score-tail-board",
      lower: 2,
      upper: 4.1,
      guides: [2],
      probability: "P ≈ 0,0228",
      probabilityPosition: [2.82, 0.055],
    },
  ];

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("normal-distribution-board-error");
  }

  function buildShade(board, lower, upper, fixed) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 160;

    for (let index = 0; index <= samples; index += 1) {
      const z = lower + ((upper - lower) * index) / samples;
      xValues.push(z);
      yValues.push(density(z));
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
    if (!container || container.dataset.ready === "true") return null;
    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return null;
    }

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

    const compact = window.innerWidth <= 560;
    const fixed = { fixed: true, highlight: false };
    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true,
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
      fontSize: compact ? 12 : 14,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "middle",
      anchorY: "middle",
    };
    const referenceStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);
    buildShade(board, definition.lower, definition.upper, fixed);

    board.create("functiongraph", [density, -4, 4.1], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: 2.7,
    });

    definition.guides.forEach((z) => {
      board.create("segment", [[z, 0], [z, density(z)]], {
        ...fixed,
        strokeColor: COLORS.accent,
        strokeWidth: 1.25,
        dash: 2,
      });
    });

    [-2, -1, 2].forEach((z) => {
      board.create("segment", [[z, -0.006], [z, 0.006]], tickStyle);
    });
    board.create("segment", [[-0.045, 0.4], [0.045, 0.4]], tickStyle);

    board.create("text", [-2, -0.032, "−2"], referenceStyle);
    board.create("text", [-1, -0.032, "−1"], {
      ...referenceStyle,
      color: definition.guides.includes(-1) ? COLORS.accent : COLORS.muted,
    });
    board.create("text", [2, -0.032, "2"], {
      ...referenceStyle,
      color: COLORS.accent,
    });
    board.create("text", [-0.18, 0.417, "0,4"], {
      ...referenceStyle,
      anchorX: "right",
    });
    board.create("text", [3.98, 0.024, "z"], {
      ...referenceStyle,
      anchorX: "right",
    });
    board.create("text", [-1.58, 0.265, "φ(z)"], {
      ...textStyle,
      fontSize: compact ? 15 : 17,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "right",
    });
    board.create("text", [
      definition.probabilityPosition[0],
      definition.probabilityPosition[1],
      definition.probability,
    ], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 13 : 15,
    });

    board.update();
    container.dataset.ready = "true";

    const refresh = () => {
      if (!container.offsetParent) return;
      container.style.width = "100%";
      container.style.height = "auto";
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(270, targetWidth * 0.75)
        : Math.max(280, targetWidth * 0.5);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      board.fullUpdate();
    };

    return { board, refresh };
  }

  function initNormalScoreGraphs() {
    const graphs = graphDefinitions.map(initGraph).filter(Boolean);

    document.addEventListener("click", (event) => {
      if (event.target.closest(".tab, .level-button")) {
        window.setTimeout(() => graphs.forEach(({ refresh }) => refresh()), 0);
      }
    });
    window.addEventListener("resize", () => {
      graphs.forEach(({ refresh }) => refresh());
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNormalScoreGraphs, { once: true });
  } else {
    initNormalScoreGraphs();
  }
})();

(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#74766f",
    accent: "#c85f3f",
    area: "#edd5cc"
  };

  const BOUNDING_BOX = [-3.6, 0.46, 3.6, -0.06];
  const density = (z) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
  const definitions = [
    {
      id: "birthday-normal-2021-board-a",
      lower: 1.17,
      upper: 3.6,
      guides: [1.17],
      ticks: [0, 1.17],
      tickLabels: ["0", "1{,}17"],
      probability: "P(Z\\ge1{,}17)\\approx0{,}1210",
      probabilityPosition: [2.05, 0.075]
    },
    {
      id: "birthday-normal-2021-board-b",
      lower: -1.9,
      upper: 1.48,
      guides: [-1.9, 1.48],
      ticks: [-1.9, 0, 1.48],
      tickLabels: ["-1{,}90", "0", "1{,}48"],
      probability: "P\\approx0{,}9019",
      probabilityPosition: [0.72, 0.09]
    }
  ];

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html"
    });
  }

  function createMathText(board, x, y, latex, options = {}) {
    return board.create("text", [x, y, mathLabel(latex)], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "middle",
      anchorY: "middle",
      ...options
    });
  }

  function showFallback(container) {
    const isBasque = document.documentElement.lang === "eu";
    container.textContent = isBasque
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("birthday-2021-board-error");
  }

  function createShade(board, lower, upper) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 180;

    for (let index = 0; index <= samples; index += 1) {
      const z = lower + ((upper - lower) * index) / samples;
      xValues.push(z);
      yValues.push(density(z));
    }

    xValues.push(upper, lower);
    yValues.push(0, 0);

    board.create("curve", [xValues, yValues], {
      fixed: true,
      highlight: false,
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.86
    });
  }

  function initBoard(definition) {
    const container = document.getElementById(definition.id);
    if (
      !container
      || container.dataset.ready === "true"
      || container.clientWidth < 20
      || container.clientHeight < 20
    ) {
      return;
    }

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(definition.id, {
      boundingbox: BOUNDING_BOX,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true }
    });

    const fixed = { fixed: true, highlight: false };
    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);
    createShade(board, definition.lower, definition.upper);

    board.create("functiongraph", [density, -3.6, 3.6], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: 2.7
    });

    definition.guides.forEach((z) => {
      board.create("segment", [[z, 0], [z, density(z)]], {
        ...fixed,
        strokeColor: COLORS.accent,
        strokeWidth: 1.25,
        dash: 2
      });
    });

    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.7,
      strokeWidth: 1
    };

    definition.ticks.forEach((z) => {
      board.create("segment", [[z, -0.006], [z, 0.006]], tickStyle);
    });
    board.create("segment", [[-0.04, 0.4], [0.04, 0.4]], tickStyle);

    const referenceOptions = {
      color: COLORS.muted,
      fontSize: compact ? 11 : 12
    };

    definition.ticks.forEach((z, index) => {
      createMathText(board, z, -0.028, definition.tickLabels[index], {
        ...referenceOptions,
        color: definition.guides.includes(z) ? COLORS.accent : COLORS.muted,
        anchorY: "top"
      });
    });

    createMathText(board, -0.14, 0.405, "0{,}4", {
      ...referenceOptions,
      anchorX: "right"
    });
    createMathText(board, 3.48, 0.022, "z", {
      ...referenceOptions,
      anchorX: "right"
    });
    createMathText(board, compact ? -1.33 : -1.42, compact ? 0.255 : 0.265, "\\varphi(z)", {
      fontSize: compact ? 15 : 17,
      anchorX: "right"
    });
    createMathText(
      board,
      definition.probabilityPosition[0],
      definition.probabilityPosition[1],
      definition.probability,
      {
        color: COLORS.accent,
        fontSize: compact ? 12 : 14
      }
    );

    board.update();
    container.dataset.ready = "true";
    container._birthdayBoard = board;
  }

  function refreshVisibleBoards() {
    definitions.forEach((definition) => {
      initBoard(definition);
      const container = document.getElementById(definition.id);
      const board = container?._birthdayBoard;
      if (!board || !container.offsetParent) return;

      container.style.width = "100%";
      container.style.height = "auto";
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(285, targetWidth * 0.75)
        : Math.max(350, targetWidth / 1.85);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
      board.fullUpdate();

      const svg = container.querySelector("svg");
      if (svg) {
        svg.setAttribute("width", String(targetWidth));
        svg.setAttribute("height", String(targetHeight));
        svg.style.width = `${targetWidth}px`;
        svg.style.height = `${targetHeight}px`;
      }
    });
  }

  function scheduleRefresh() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(refreshVisibleBoards);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleRefresh, { once: true });
  } else {
    scheduleRefresh();
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".tab, .level-button")) {
      scheduleRefresh();
    }
  });
  window.addEventListener("resize", scheduleRefresh);
})();

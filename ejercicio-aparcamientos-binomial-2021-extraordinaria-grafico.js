(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#a8aaa4",
    label: "#74766f",
    accent: "#c85f3f"
  };

  const definitions = [
    {
      id: "parking-binomial-2021-board-b",
      highlighted: (k) => k === 8,
      label: "P(X=8)\\approx0{,}0505",
      labelPosition: [7.25, 0.076],
      labelAnchorX: "right"
    },
    {
      id: "parking-binomial-2021-board-c",
      highlighted: (k) => k >= 10 && k <= 20,
      label: "P(10\\le X\\le20)\\approx0{,}8229",
      labelPosition: [18.5, 0.162]
    }
  ];

  function choose(n, k) {
    const smaller = Math.min(k, n - k);
    let value = 1;
    for (let index = 1; index <= smaller; index += 1) {
      value *= (n - smaller + index) / index;
    }
    return value;
  }

  function probability(k) {
    return choose(30, k) * (0.4 ** k) * (0.6 ** (30 - k));
  }

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
      fontSize: 13,
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
      ? "Ezin izan da banaketa binomialaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución binomial.";
    container.classList.add("parking-2021-board-error");
  }

  function getBoundingBox(compact) {
    return compact
      ? [-4.2, 0.177, 32, -0.027]
      : [-1.8, 0.177, 31.8, -0.027];
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
      boundingbox: getBoundingBox(compact),
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
    board.create("line", [[0, 0], [1, 0]], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.64,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true
    });
    board.create("segment", [[0, 0], [0, 0.16]], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.64,
      strokeWidth: 1.2
    });

    for (let k = 0; k <= 30; k += 1) {
      const y = probability(k);
      const highlighted = definition.highlighted(k);
      board.create("segment", [[k, 0], [k, y]], {
        ...fixed,
        strokeColor: highlighted ? COLORS.accent : COLORS.muted,
        strokeOpacity: highlighted ? 1 : 0.72,
        strokeWidth: highlighted ? (compact ? 5 : 7) : (compact ? 3 : 4)
      });
      board.create("point", [k, y], {
        ...fixed,
        name: "",
        size: highlighted ? 2.1 : 1.25,
        face: "o",
        strokeWidth: 0,
        fillColor: highlighted ? COLORS.accent : COLORS.muted,
        fillOpacity: highlighted ? 1 : 0.82
      });
    }

    const xTicks = compact ? [0, 10, 20, 30] : [0, 5, 10, 15, 20, 25, 30];
    xTicks.forEach((x) => {
      board.create("segment", [[x, -0.0025], [x, 0.0025]], {
        ...fixed,
        strokeColor: COLORS.ink,
        strokeOpacity: 0.58,
        strokeWidth: 1
      });
      createMathText(board, x, -0.0105, String(x), {
        color: COLORS.label,
        fontSize: compact ? 10 : 11,
        anchorY: "top"
      });
    });

    [0.05, 0.1, 0.15].forEach((y) => {
      board.create("segment", [[-0.25, y], [0.25, y]], {
        ...fixed,
        strokeColor: COLORS.ink,
        strokeOpacity: 0.58,
        strokeWidth: 1
      });
      createMathText(board, -0.55, y, String(y).replace(".", "{,}"), {
        color: COLORS.label,
        fontSize: compact ? 9 : 10,
        anchorX: "right"
      });
    });

    createMathText(board, 30.8, 0.008, "x", {
      color: COLORS.label,
      fontSize: compact ? 11 : 12
    });
    createMathText(board, 1.15, 0.164, "P(X=x)", {
      color: COLORS.label,
      fontSize: compact ? 11 : 12,
      anchorX: "left"
    });
    createMathText(
      board,
      definition.labelPosition[0],
      definition.labelPosition[1],
      definition.label,
      {
        color: COLORS.accent,
        fontSize: compact ? 11 : 13,
        anchorX: definition.labelAnchorX ?? "middle"
      }
    );

    board.update();
    container.dataset.ready = "true";
    container._parkingBinomialBoard = board;
  }

  function refreshVisibleBoards() {
    definitions.forEach((definition) => {
      initBoard(definition);
      const container = document.getElementById(definition.id);
      const board = container?._parkingBinomialBoard;
      if (!board || !container.offsetParent) return;

      container.style.width = "100%";
      container.style.height = "auto";
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(285, targetWidth * 0.78)
        : Math.max(350, targetWidth / 1.9);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(getBoundingBox(window.innerWidth <= 560), false);
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

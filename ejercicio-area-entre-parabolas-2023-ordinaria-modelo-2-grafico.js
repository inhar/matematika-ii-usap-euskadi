(() => {
  const BOARD_ID = "area-parabolas-m2-2023-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    accent: "#c95f3f",
    area: "#f2d8cf",
    white: "#ffffff",
  };

  let graph = null;

  function f(x) {
    return 2 * x * x - 4 * x + 3;
  }

  function g(x) {
    return x * x - 2 * x + 3;
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
      ? "Ezin izan da grafikoa kargatu."
      : "No se ha podido cargar la gráfica.";
    container.classList.add("area-parabolas-m2-2023-board-error");
  }

  function initGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || graph || !container.offsetParent || container.getBoundingClientRect().width < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const bounds = compact
      ? [-0.72, 4.45, 2.72, -0.36]
      : [-0.62, 4.45, 2.62, -0.34];

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: bounds,
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
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.9,
      strokeWidth: 1.1,
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
      size: compact ? 3.6 : 4.2,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      withLabel: false,
    };

    board.create("line", [[bounds[0], 0], [bounds[2], 0]], axisStyle);
    board.create("line", [[0, bounds[3]], [0, bounds[1]]], axisStyle);

    const regionX = [];
    const regionY = [];
    const samples = 120;

    for (let index = 0; index <= samples; index += 1) {
      const x = (2 * index) / samples;
      regionX.push(x);
      regionY.push(g(x));
    }

    for (let index = samples; index >= 0; index -= 1) {
      const x = (2 * index) / samples;
      regionX.push(x);
      regionY.push(f(x));
    }

    regionX.push(regionX[0]);
    regionY.push(regionY[0]);

    board.create("curve", [regionX, regionY], {
      ...fixed,
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.78,
    });

    board.create("functiongraph", [g, bounds[0], bounds[2]], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: compact ? 2.7 : 3.1,
    });
    board.create("functiongraph", [f, bounds[0], bounds[2]], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.6 : 3,
    });

    [0, 1, 2].forEach((x) => {
      board.create("segment", [[x, -0.045], [x, 0.045]], tickStyle);
      board.create("text", [x, -0.11, mathLabel(String(x))], textStyle({
        anchorX: "middle",
        anchorY: "top",
        color: COLORS.muted,
        fontSize: compact ? 10 : 12,
      }));
    });

    [1, 2, 3].forEach((y) => {
      board.create("segment", [[-0.025, y], [0.025, y]], tickStyle);
      board.create("text", [-0.06, y, mathLabel(String(y))], textStyle({
        anchorX: "right",
        color: COLORS.muted,
        fontSize: compact ? 10 : 12,
      }));
    });

    board.create("point", [0, 3], pointStyle);
    board.create("point", [2, 3], pointStyle);

    board.create("text", [0.12, 3.28, mathLabel("(0,3)")], textStyle({
      anchorX: "left",
      fontSize: compact ? 10 : 13,
    }));
    board.create("text", [1.88, 3.28, mathLabel("(2,3)")], textStyle({
      anchorX: "right",
      fontSize: compact ? 10 : 13,
    }));
    board.create("text", [2.2, 3.78, mathLabel("g")], textStyle({
      color: COLORS.ink,
      fontSize: compact ? 16 : 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [1.55, 1.22, mathLabel("f")], textStyle({
      color: COLORS.accent,
      fontSize: compact ? 16 : 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [1, 1.5, mathLabel("R")], textStyle({
      anchorX: "middle",
      color: COLORS.accent,
      fontSize: compact ? 18 : 22,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
    }));
    board.create("text", [bounds[2] - 0.08, -0.12, mathLabel("x")], textStyle({
      anchorX: "right",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));
    board.create("text", [0.07, bounds[1] - 0.18, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: compact ? 11 : 13,
    }));

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(330, targetWidth * 0.92)
        : Math.max(370, targetWidth * 0.56);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(bounds, false);
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

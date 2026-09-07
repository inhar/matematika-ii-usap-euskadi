(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    accent: "#c95f3f",
    secondary: "#536b66",
    guide: "#a5a7a1",
    white: "#ffffff",
  };

  const graphs = new Map();

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    container.textContent = document.documentElement.lang === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("lines-2024-board-error");
  }

  function baseBoard(container, boundingbox) {
    return JXG.JSXGraph.initBoard(container.id, {
      boundingbox,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });
  }

  function textStyle(compact, color = COLORS.ink) {
    return {
      fixed: true,
      highlight: false,
      parse: false,
      color,
      fontSize: compact ? 14 : 17,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
      anchorX: "middle",
      anchorY: "middle",
    };
  }

  function auxiliaryPoint(board, coordinates) {
    return board.create("point", coordinates, {
      visible: false,
      fixed: true,
      withLabel: false,
      name: "",
      showInfobox: false,
    });
  }

  function createIntersectionGraph(container) {
    const compact = window.innerWidth <= 560;
    const boundingbox = [-7, 3, 7, -3];
    const board = baseBoard(container, boundingbox);
    const fixed = { fixed: true, highlight: false };
    const slope = -1 / (2 * Math.sqrt(5));

    const r1 = auxiliaryPoint(board, [-6, -6 * slope]);
    const r2 = auxiliaryPoint(board, [6, 6 * slope]);
    const s1 = auxiliaryPoint(board, [-6, 0]);
    const s2 = auxiliaryPoint(board, [6, 0]);

    board.create("line", [r1, r2], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.7 : 3.2,
      firstArrow: { type: 2, size: 4 },
      lastArrow: { type: 2, size: 4 },
    });
    board.create("line", [s1, s2], {
      ...fixed,
      strokeColor: COLORS.secondary,
      strokeWidth: compact ? 2.5 : 3,
      firstArrow: { type: 2, size: 4 },
      lastArrow: { type: 2, size: 4 },
    });

    board.create("point", [0, 0], {
      ...fixed,
      name: "I",
      size: compact ? 4.2 : 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      label: {
        offset: [11, -21],
        fontSize: compact ? 15 : 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500; letter-spacing: 0;",
      },
    });

    board.create("text", [1.15, 0.72, mathLabel("I=(-2,-5,3)")], textStyle(compact));
    board.create("text", [5.2, 5.2 * slope - 0.38, mathLabel("r")], textStyle(compact, COLORS.accent));
    board.create("text", [5.35, 0.42, mathLabel("s")], textStyle(compact, COLORS.secondary));
    return { board, boundingbox, mobileRatio: 0.82, desktopRatio: 0.52 };
  }

  function createPerpendicularGraph(container) {
    const compact = window.innerWidth <= 560;
    const boundingbox = [-8, 2.5, 8, -6.65];
    const board = baseBoard(container, boundingbox);
    const fixed = { fixed: true, highlight: false };
    const distance = Math.sqrt(33);

    const lineA = auxiliaryPoint(board, [-7, 0]);
    const lineB = auxiliaryPoint(board, [7, 0]);
    board.create("line", [lineA, lineB], {
      ...fixed,
      strokeColor: COLORS.secondary,
      strokeWidth: compact ? 2.6 : 3.1,
      firstArrow: { type: 2, size: 4 },
      lastArrow: { type: 2, size: 4 },
    });

    const vectorStart = auxiliaryPoint(board, [0, -distance + 0.2]);
    const vectorEnd = auxiliaryPoint(board, [0, -0.2]);
    board.create("arrow", [vectorStart, vectorEnd], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: compact ? 2.8 : 3.3,
      lastArrow: { type: 2, size: 5 },
    });

    const marker = [
      auxiliaryPoint(board, [0.34, 0]),
      auxiliaryPoint(board, [0.34, -0.34]),
      auxiliaryPoint(board, [0, -0.34]),
    ];
    board.create("segment", [marker[0], marker[1]], {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1.4,
    });
    board.create("segment", [marker[1], marker[2]], {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1.4,
    });

    const pointStyle = {
      ...fixed,
      size: compact ? 4.2 : 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      label: {
        fontSize: compact ? 15 : 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500; letter-spacing: 0;",
      },
    };

    board.create("point", [0, 0], {
      ...pointStyle,
      name: "Q",
      label: { ...pointStyle.label, offset: [12, 13] },
    });
    board.create("point", [0, -distance], {
      ...pointStyle,
      name: "P",
      label: { ...pointStyle.label, offset: [12, -19] },
    });

    board.create("text", [5.7, 0.48, mathLabel("r")], textStyle(compact, COLORS.secondary));
    board.create("text", [1.25, -2.85, mathLabel("\\overrightarrow{PQ}")], textStyle(compact, COLORS.accent));
    board.create("text", [2.25, -0.62, mathLabel("\\overrightarrow{PQ}\\perp r")], {
      ...textStyle(compact, COLORS.muted),
      fontSize: compact ? 13 : 16,
    });

    return { board, boundingbox, mobileRatio: 0.93, desktopRatio: 0.57 };
  }

  function initGraph(id, creator) {
    const container = document.getElementById(id);
    if (!container || graphs.has(id) || !container.offsetParent || container.getBoundingClientRect().width < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const graph = creator(container);
    graphs.set(id, graph);
    container.dataset.ready = "true";
    refreshGraph(container, graph);
  }

  function refreshGraph(container, graph) {
    if (!container.offsetParent) return;
    const availableWidth = container.parentElement?.getBoundingClientRect().width
      ?? document.documentElement.clientWidth - 32;
    const targetWidth = Math.max(20, Math.min(availableWidth, document.documentElement.clientWidth - 32));
    const ratio = window.innerWidth <= 560 ? graph.mobileRatio : graph.desktopRatio;
    const minimum = window.innerWidth <= 560 ? 310 : 340;
    const targetHeight = Math.max(minimum, targetWidth * ratio);
    graph.board.resizeContainer(targetWidth, targetHeight);
    graph.board.setBoundingBox(graph.boundingbox, false);
    graph.board.fullUpdate();
  }

  function scheduleRefresh() {
    window.setTimeout(() => {
      initGraph("lines-2024-intersection-board", createIntersectionGraph);
      initGraph("lines-2024-perpendicular-board", createPerpendicularGraph);
      graphs.forEach((graph, id) => {
        const container = document.getElementById(id);
        if (container) refreshGraph(container, graph);
      });
    }, 0);
  }

  function bindGraphs() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".level-button, .tab")) scheduleRefresh();
    });
    window.addEventListener("resize", scheduleRefresh);
    scheduleRefresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindGraphs, { once: true });
  } else {
    bindGraphs();
  }
})();

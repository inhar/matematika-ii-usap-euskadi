(() => {
  const BOARD_ID = "plane-perp-2023-board";
  const BOUNDING_BOX = [-7, 4.1, 7, -4.1];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    accent: "#c95f3f",
    secondary: "#536b66",
    plane: "#f7ece7",
    planeEdge: "#d8b2a1",
    guide: "#a5a7a1",
    white: "#ffffff",
  };

  let graph = null;

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
    container.classList.add("plane-perp-2023-board-error");
  }

  function add(origin, vector, factor = 1) {
    return origin.map((coordinate, index) => coordinate + factor * vector[index]);
  }

  function planeCorners(center, firstDirection, secondDirection, firstExtent, secondExtent) {
    return [
      add(add(center, firstDirection, -firstExtent), secondDirection, -secondExtent),
      add(add(center, firstDirection, firstExtent), secondDirection, -secondExtent),
      add(add(center, firstDirection, firstExtent), secondDirection, secondExtent),
      add(add(center, firstDirection, -firstExtent), secondDirection, secondExtent),
    ];
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

    const view = board.create("view3d", [
      [-6.55, -3.55],
      [13.1, 7.1],
      [[-1.7, 4.1], [-3.35, 3.35], [-0.45, 4.65]],
    ], {
      projection: "parallel",
      axesPosition: "none",
      depthOrder: false,
      xPlaneRear: { visible: false },
      xPlaneFront: { visible: false },
      yPlaneRear: { visible: false },
      yPlaneFront: { visible: false },
      zPlaneRear: { visible: false },
      zPlaneFront: { visible: false },
      trackball: { enabled: false },
      az: {
        pointer: { enabled: false },
        keyboard: { enabled: false },
      },
      el: {
        pointer: { enabled: false },
        keyboard: { enabled: false },
      },
      bank: {
        pointer: { enabled: false },
        keyboard: { enabled: false },
      },
      verticalDrag: { enabled: false },
    });

    view.setView(5.72, 0.48);

    const fixed = { fixed: true, highlight: false };
    const pointP = [1, -1, 2];
    const pointQ = [1, 2, 3];
    const planeCenter = [1, 0, 2.1];
    const directionY = [0, 1, 0];
    const directionZ = [0, 0, 1];
    const normal = [1, 0, 0];

    view.create("polygon3d", [
      planeCorners(planeCenter, directionY, directionZ, 3.05, 2.15),
    ], {
      fillColor: COLORS.plane,
      fillOpacity: 0.72,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.82,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("line3d", [pointP, normal, [-2.45, 2.55]], {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: compact ? 2.8 : 3.3,
      firstArrow: { type: 2, size: 5 },
      lastArrow: { type: 2, size: 5 },
    });

    view.create("line3d", [pointP, [0, 3, 1], [0.04, 0.91]], {
      ...fixed,
      strokeColor: COLORS.secondary,
      strokeOpacity: 1,
      strokeWidth: compact ? 2.4 : 3,
      lastArrow: { type: 2, size: 5.5 },
    });

    const vectorUBase = [1, -2.25, 1.85];
    view.create("line3d", [vectorUBase, [0, 0, 2], [0, 0.7]], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.9,
      strokeWidth: compact ? 2.2 : 2.7,
      lastArrow: { type: 2, size: 5.5 },
    });

    const markerSize = 0.44;
    const markerNormal = add(pointP, normal, markerSize);
    const markerPlane = add(pointP, directionZ, markerSize);
    const markerStyle = {
      ...fixed,
      strokeColor: COLORS.muted,
      strokeOpacity: 0.95,
      strokeWidth: 1.5,
    };
    view.create("line3d", [pointP, [0, 0, 1], [0, markerSize]], markerStyle);
    view.create("line3d", [markerNormal, [0, 0, 1], [0, markerSize]], markerStyle);
    view.create("line3d", [markerPlane, [1, 0, 0], [0, markerSize]], markerStyle);

    const pointLabelStyle = {
      fontSize: compact ? 14 : 17,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500; letter-spacing: 0;",
    };

    view.create("point3d", [pointP], {
      ...fixed,
      name: "P",
      size: compact ? 4.2 : 4.8,
      face: "o",
      fillColor: COLORS.accent,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      showInfobox: false,
      label: {
        ...pointLabelStyle,
        offset: [12, -19],
      },
    });

    view.create("point3d", [pointQ], {
      ...fixed,
      name: "Q",
      size: compact ? 4 : 4.6,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      showInfobox: false,
      label: {
        ...pointLabelStyle,
        offset: [11, -18],
      },
    });

    const textStyle = {
      ...fixed,
      parse: false,
      fontSize: compact ? 12 : 15,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic; letter-spacing: 0;",
      anchorX: "middle",
      anchorY: "middle",
    };

    view.create("text3d", [[1, 0.65, 3.48], mathLabel("\\overrightarrow{PQ}")], {
      ...textStyle,
      color: COLORS.secondary,
    });
    view.create("text3d", [[1, -2.72, 2.58], mathLabel("\\vec u")], {
      ...textStyle,
      color: COLORS.ink,
    });
    view.create("text3d", [[3.22, -1, 2.32], mathLabel("r")], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 14 : 18,
    });
    view.create("text3d", [[1, 2.02, 0.72], mathLabel("\\pi:\ x=1")], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 14 : 18,
    });

    const refresh = () => {
      if (!container.offsetParent) return;
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(330, targetWidth * 0.88)
        : Math.max(350, targetWidth * 0.53);
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

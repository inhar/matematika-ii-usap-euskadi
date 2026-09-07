(() => {
  const BOARD_ID = "line-point-plane-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73766f",
    plane: "#f6ebe6",
    planeEdge: "#d6b09e",
    accent: "#c95f3f",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("contained-plane-board-error");
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
  }

  function add(origin, vector, factor = 1) {
    return origin.map((coordinate, index) => coordinate + factor * vector[index]);
  }

  function initLinePointPlaneGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-7, 4.2, 7, -4.2],
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
      [-6.55, -3.7],
      [13.1, 7.4],
      [[-1.6, 3.6], [-3.2, 7.2], [0.2, 7.4]],
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

    view.setView(5.92, 0.48);

    const pointA = [1, 2, 3];
    const pointP = [1, 2, 5];
    const lineDirection = [1, 2, 3];
    const lineUnit = normalize(lineDirection);
    const horizontalPlaneDirection = normalize([1, 2, 0]);
    const verticalPlaneDirection = [0, 0, 1];
    const planeCenter = [1, 2, 3.8];

    const planeCorners = [
      add(add(planeCenter, horizontalPlaneDirection, -3.15), verticalPlaneDirection, -2.75),
      add(add(planeCenter, horizontalPlaneDirection, 3.15), verticalPlaneDirection, -2.75),
      add(add(planeCenter, horizontalPlaneDirection, 3.15), verticalPlaneDirection, 2.75),
      add(add(planeCenter, horizontalPlaneDirection, -3.15), verticalPlaneDirection, 2.75),
    ];

    view.create("polygon3d", [planeCorners], {
      fillColor: COLORS.plane,
      fillOpacity: 0.72,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.8,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("line3d", [pointA, lineUnit, [-3.35, 3.35]], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1.7,
      highlight: false,
      fixed: true,
    });

    const vectorStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 3,
      lastArrow: { type: 2, size: 5.5 },
      highlight: false,
      fixed: true,
    };

    view.create("line3d", [pointA, lineUnit, [0.1, 1.42]], vectorStyle);
    view.create("line3d", [pointA, verticalPlaneDirection, [0.1, 1.72]], vectorStyle);

    const pointStyle = {
      fixed: true,
      size: 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      highlight: false,
      showInfobox: false,
      label: {
        fontSize: 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    };

    view.create("point3d", [pointA], {
      ...pointStyle,
      name: "A",
      label: { ...pointStyle.label, offset: [11, -20] },
    });

    view.create("point3d", [pointP], {
      ...pointStyle,
      name: "P",
      label: { ...pointStyle.label, offset: [12, 8] },
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    view.create("text3d", [add(pointA, lineUnit, -2.4), "r"], {
      ...textStyle,
      fontSize: 17,
      anchorX: "middle",
      anchorY: "bottom",
    });

    view.create("text3d", [add(add(pointA, lineUnit, 0.86), verticalPlaneDirection, 0.48), "dᵣ"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 16,
      anchorX: "middle",
      anchorY: "bottom",
    });

    view.create("text3d", [add(add(pointA, verticalPlaneDirection, 0.9), horizontalPlaneDirection, -0.9), "AP"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 16,
      anchorX: "left",
      anchorY: "middle",
    });

    view.create("text3d", [add(add(planeCenter, horizontalPlaneDirection, 2.25), verticalPlaneDirection, -1.65), "π"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 25,
    });

    board.update();
    container.dataset.ready = "true";
    window.linePointPlaneBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLinePointPlaneGraph, { once: true });
  } else {
    initLinePointPlaneGraph();
  }
})();

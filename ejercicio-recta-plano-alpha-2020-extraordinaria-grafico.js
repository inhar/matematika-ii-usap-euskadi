(() => {
  const BOARD_ID = "line-plane-2020-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    accent: "#c95f3f",
    plane: "#f7ece7",
    planeEdge: "#d8b2a1",
    guide: "#a5a7a1",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("line-plane-2020-board-error");
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
  }

  function cross(first, second) {
    return [
      first[1] * second[2] - first[2] * second[1],
      first[2] * second[0] - first[0] * second[2],
      first[0] * second[1] - first[1] * second[0],
    ];
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

  function initLinePlaneAlpha2020Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-7, 4.1, 7, -4.1],
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
      [[-1.2, 2.5], [-3.8, 2.1], [-2.0, 2.7]],
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

    const normal = [39, 14, 1];
    const direction = [5, -14, 1];
    const normalLengthSquared = normal.reduce((sum, value) => sum + value * value, 0);
    const normalUnit = normalize(normal);
    const directionUnit = normalize(direction);
    const secondPlaneDirection = normalize(cross(normal, direction));
    const planeCenter = normal.map((coordinate) => -coordinate / normalLengthSquared);
    const displayPlaneCenter = add(planeCenter, secondPlaneDirection, 0.6);
    const pointQ = [1, -1, 0];
    const pointP = [1, 1, 2];
    const distanceFromQToPlane = 26 / Math.sqrt(normalLengthSquared);

    view.create("polygon3d", [
      planeCorners(displayPlaneCenter, directionUnit, secondPlaneDirection, 2.2, 0.78),
    ], {
      fillColor: COLORS.plane,
      fillOpacity: 0.72,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.9,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("line3d", [pointQ, directionUnit, [-2.75, 2.75]], {
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 3.2,
      highlight: false,
      fixed: true,
    });

    view.create("line3d", [pointQ, normalUnit, [-distanceFromQToPlane, 0]], {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1.2,
      dash: 2,
      highlight: false,
      fixed: true,
    });

    const pointLabelStyle = {
      fontSize: 17,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
    };

    view.create("point3d", [pointQ], {
      fixed: true,
      name: "Q",
      size: 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      highlight: false,
      showInfobox: false,
      label: {
        ...pointLabelStyle,
        offset: [11, -19],
      },
    });

    view.create("point3d", [pointP], {
      fixed: true,
      name: "P",
      size: 4.6,
      face: "o",
      fillColor: COLORS.white,
      strokeColor: COLORS.accent,
      strokeWidth: 2,
      highlight: false,
      showInfobox: false,
      label: {
        ...pointLabelStyle,
        color: COLORS.accent,
        offset: [10, -18],
      },
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    view.create("text3d", [add(add(displayPlaneCenter, directionUnit, -1.35), secondPlaneDirection, 0.43), "π"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 24,
    });

    view.create("text3d", [add(add(pointQ, directionUnit, 2.05), normalUnit, 0.12), "r"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 20,
      anchorX: "middle",
      anchorY: "bottom",
    });

    board.update();
    container.dataset.ready = "true";
    window.linePlaneAlpha2020Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLinePlaneAlpha2020Graph, { once: true });
  } else {
    initLinePlaneAlpha2020Graph();
  }
})();

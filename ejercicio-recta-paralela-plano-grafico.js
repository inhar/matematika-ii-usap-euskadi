(() => {
  const BOARD_ID = "parallel-plane-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    parallelPlane: "#f7ece7",
    parallelEdge: "#d4a894",
    accent: "#c95f3f",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("parallel-plane-board-error");
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
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

  function initParallelPlaneGraph() {
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
      [[-2.2, 4.2], [-2.55, 2.55], [-1.35, 2.55]],
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

    view.setView(5.88, 0.52);

    const pointP = [1, 0, 0];
    const normal = [1, 2, 3];
    const normalUnit = normalize(normal);
    const firstDirection = normalize([-2, 1, 0]);
    const secondDirection = normalize([-3, -6, 5]);

    const planeStyle = (fillColor, edgeColor) => ({
      fillColor,
      fillOpacity: 0.76,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: edgeColor,
        strokeOpacity: 0.9,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("polygon3d", [
      planeCorners(pointP, firstDirection, secondDirection, 2.55, 1.55),
    ], planeStyle(COLORS.parallelPlane, COLORS.parallelEdge));

    const alternateLineStyle = {
      strokeColor: COLORS.muted,
      strokeOpacity: 0.58,
      strokeWidth: 1.3,
      dash: 2,
      highlight: false,
      fixed: true,
    };

    const chosenDirection = normalize([-2, 1, 0]);
    const alternateDirection = normalize([-3, 0, 1]);
    const thirdDirection = normalize([-5, 1, 1]);

    view.create("line3d", [pointP, alternateDirection, [-2.25, 2.25]], alternateLineStyle);
    view.create("line3d", [pointP, thirdDirection, [-2.15, 2.15]], alternateLineStyle);
    view.create("line3d", [pointP, chosenDirection, [-2.5, 2.5]], {
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 3.1,
      highlight: false,
      fixed: true,
    });

    view.create("line3d", [pointP, normalUnit, [0.08, 1.22]], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.7,
      strokeWidth: 1.6,
      dash: 2,
      lastArrow: { type: 2, size: 5 },
      highlight: false,
      fixed: true,
    });

    view.create("point3d", [pointP], {
      fixed: true,
      name: "P",
      size: 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      highlight: false,
      showInfobox: false,
      label: {
        offset: [10, -19],
        fontSize: 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 16,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    view.create("text3d", [add(pointP, chosenDirection, 1.68), "r"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 18,
      anchorX: "middle",
      anchorY: "bottom",
    });
    view.create("text3d", [add(add(pointP, alternateDirection, -1.55), secondDirection, 0.18), "r₂"], {
      ...textStyle,
      fontSize: 14,
    });
    view.create("text3d", [add(add(pointP, thirdDirection, 1.45), normalUnit, 0.22), "r₃"], {
      ...textStyle,
      fontSize: 14,
    });
    view.create("text3d", [add(add(pointP, firstDirection, -1.85), secondDirection, 1.12), "σ"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 24,
    });
    view.create("text3d", [add(add(pointP, normalUnit, 0.72), firstDirection, 0.28), "nπ"], {
      ...textStyle,
      color: COLORS.ink,
      fontSize: 14,
    });

    board.update();
    container.dataset.ready = "true";
    window.parallelPlaneBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initParallelPlaneGraph, { once: true });
  } else {
    initParallelPlaneGraph();
  }
})();

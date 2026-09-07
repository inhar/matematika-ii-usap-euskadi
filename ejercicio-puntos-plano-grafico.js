(() => {
  const BOARD_ID = "point-plane-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    plane: "#f0f1ee",
    planeEdge: "#b7b9b3",
    accent: "#c95f3f",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("point-plane-board-error");
  }

  function initPointPlaneGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-7, 4.25, 7, -4.25],
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
      [-6.55, -3.75],
      [13.1, 7.5],
      [[-1.7, 1.7], [-1.7, 1.7], [0.32, 2.58]],
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

    view.setView(6.2, 0.6);

    const origin = [0, 0, 1];
    const vectorAB = [1, 1, 0];
    const vectorAC = [-1, -1, 1];
    const verticalInPlane = vectorAB.map((component, index) => component + vectorAC[index]);
    const pointInPlane = (u, v) => origin.map((coordinate, index) => (
      coordinate + u * vectorAB[index] + v * verticalInPlane[index]
    ));

    const horizontalRange = [-1.52, 1.52];
    const verticalRange = [-0.6, 1.5];
    const planeCorners = [
      pointInPlane(horizontalRange[0], verticalRange[0]),
      pointInPlane(horizontalRange[1], verticalRange[0]),
      pointInPlane(horizontalRange[1], verticalRange[1]),
      pointInPlane(horizontalRange[0], verticalRange[1]),
    ];

    view.create("polygon3d", [planeCorners], {
      fillColor: COLORS.plane,
      fillOpacity: 0.72,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.85,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("line3d", [origin, vectorAB, [-1.6, 1.6]], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.4,
      highlight: false,
      fixed: true,
    });

    const vectorStyle = {
      strokeColor: COLORS.accent,
      strokeWidth: 2.7,
      lastArrow: { type: 2, size: 5.5 },
      highlight: false,
      fixed: true,
    };

    const visibleVectorRange = [0.02, 0.965];
    view.create("line3d", [origin, vectorAB, visibleVectorRange], vectorStyle);
    view.create("line3d", [origin, vectorAC, visibleVectorRange], vectorStyle);

    const pointStyle = {
      fixed: true,
      size: 4.5,
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

    view.create("point3d", [0, 0, 1], {
      ...pointStyle,
      name: "A",
      label: { ...pointStyle.label, offset: [10, -19] },
    });
    view.create("point3d", [1, 1, 1], {
      ...pointStyle,
      name: "B",
      label: { ...pointStyle.label, offset: [10, -19] },
    });
    view.create("point3d", [-1, -1, 2], {
      ...pointStyle,
      name: "C",
      label: { ...pointStyle.label, offset: [10, -18] },
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 16,
      color: COLORS.accent,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    const vectorTextStyle = {
      ...textStyle,
      anchorX: "middle",
      anchorY: "bottom",
    };

    view.create("text3d", [[0.5, 0.5, 1.12], "AB"], vectorTextStyle);
    view.create("text3d", [[-0.42, -0.42, 1.62], "AC"], vectorTextStyle);
    view.create("text3d", [[-1.05, -1.05, 0.7], "r"], {
      ...textStyle,
      color: COLORS.muted,
      fontSize: 14,
    });
    view.create("text3d", [[0.78, 0.78, 1.86], "π"], {
      ...textStyle,
      fontSize: 25,
    });

    board.update();
    container.dataset.ready = "true";
    window.pointPlaneBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPointPlaneGraph, { once: true });
  } else {
    initPointPlaneGraph();
  }
})();

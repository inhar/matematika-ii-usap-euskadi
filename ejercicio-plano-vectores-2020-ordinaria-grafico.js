(() => {
  const BOARD_ID = "span-plane-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    plane: "#f1f2ef",
    planeEdge: "#b9bcb5",
    accent: "#c95f3f",
    secondary: "#536b66",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("span-plane-board-error");
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
  }

  function dot(first, second) {
    return first.reduce((sum, coordinate, index) => sum + coordinate * second[index], 0);
  }

  function add(origin, vector, factor = 1) {
    return origin.map((coordinate, index) => coordinate + factor * vector[index]);
  }

  function subtract(first, second) {
    return first.map((coordinate, index) => coordinate - second[index]);
  }

  function planeCorners(center, firstDirection, secondDirection, firstExtent, secondExtent) {
    return [
      add(add(center, firstDirection, -firstExtent), secondDirection, -secondExtent),
      add(add(center, firstDirection, firstExtent), secondDirection, -secondExtent),
      add(add(center, firstDirection, firstExtent), secondDirection, secondExtent),
      add(add(center, firstDirection, -firstExtent), secondDirection, secondExtent),
    ];
  }

  function initSpanPlaneGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-7, 4.15, 7, -4.15],
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
      [-6.55, -3.6],
      [13.1, 7.2],
      [[-1.75, 1.75], [-1.75, 1.75], [-1.75, 1.75]],
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

    view.setView(5.95, 0.57);

    const pointP = [0, 0, 0];
    const vectorV = [-1, -2, -3];
    const vectorW = [1, 3, 5];
    const normal = [-1, 2, -1];
    const vectorVUnit = normalize(vectorV);
    const vectorWUnit = normalize(vectorW);
    const normalUnit = normalize(normal);
    const projectionOnV = vectorVUnit.map((coordinate) => dot(vectorW, vectorVUnit) * coordinate);
    const secondPlaneDirection = normalize(subtract(vectorW, projectionOnV));

    view.create("polygon3d", [
      planeCorners(pointP, vectorVUnit, secondPlaneDirection, 1.48, 1.02),
    ], {
      fillColor: COLORS.plane,
      fillOpacity: 0.78,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.88,
        strokeWidth: 1,
        highlight: false,
      },
    });

    const vectorStyle = (color, width) => ({
      strokeColor: color,
      strokeOpacity: 1,
      strokeWidth: width,
      lastArrow: { type: 2, size: 5.5 },
      highlight: false,
      fixed: true,
    });

    view.create("line3d", [pointP, vectorVUnit, [0.14, 1.08]], vectorStyle(COLORS.accent, 3));
    view.create("line3d", [pointP, vectorWUnit, [0.14, 1.32]], vectorStyle(COLORS.secondary, 2.8));
    view.create("line3d", [pointP, normalUnit, [0.15, 1.12]], {
      ...vectorStyle(COLORS.ink, 2.1),
      dash: 2,
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
        offset: [10, 10],
        fontSize: 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 16,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "middle",
      anchorY: "bottom",
    };

    view.create("text3d", [add(add(pointP, vectorVUnit, 0.68), secondPlaneDirection, 0.13), "v"], {
      ...textStyle,
      color: COLORS.accent,
    });
    view.create("text3d", [add(add(pointP, vectorWUnit, 0.82), secondPlaneDirection, 0.22), "w"], {
      ...textStyle,
      color: COLORS.secondary,
    });
    view.create("text3d", [add(add(pointP, normalUnit, 0.7), vectorVUnit, 0.42), "n"], {
      ...textStyle,
      color: COLORS.ink,
    });
    view.create("text3d", [add(add(pointP, vectorVUnit, -1.05), secondPlaneDirection, 0.72), "π"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 25,
    });

    board.update();
    container.dataset.ready = "true";
    window.spanPlaneBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSpanPlaneGraph, { once: true });
  } else {
    initSpanPlaneGraph();
  }
})();

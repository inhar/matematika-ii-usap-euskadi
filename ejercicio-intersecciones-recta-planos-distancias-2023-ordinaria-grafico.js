(() => {
  const BOARD_ID = "intersections-2023-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    accent: "#c95f3f",
    secondary: "#536b66",
    plane1: "#f1f2ef",
    plane1Edge: "#b9bcb5",
    plane2: "#f6ebe6",
    plane2Edge: "#d6b09e",
    white: "#ffffff",
  };

  function math(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "htmlAndMathml",
    });
  }

  function add(origin, vector, factor = 1) {
    return origin.map((coordinate, index) => coordinate + factor * vector[index]);
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
  }

  function planeCorners(center, firstDirection, secondDirection, firstSize, secondSize) {
    return [
      add(add(center, firstDirection, -firstSize), secondDirection, -secondSize),
      add(add(center, firstDirection, firstSize), secondDirection, -secondSize),
      add(add(center, firstDirection, firstSize), secondDirection, secondSize),
      add(add(center, firstDirection, -firstSize), secondDirection, secondSize),
    ];
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("intersections-2023-board-error");
  }

  function initIntersections2023Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph || !window.katex) {
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
      [[-3.2, 4.2], [-3.2, 4.4], [-3.2, 4.4]],
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
      az: { pointer: { enabled: false }, keyboard: { enabled: false } },
      el: { pointer: { enabled: false }, keyboard: { enabled: false } },
      bank: { pointer: { enabled: false }, keyboard: { enabled: false } },
      verticalDrag: { enabled: false },
    });

    view.setView(5.2, 0.5);

    const commonDirection = normalize([1, -1, 0]);
    const plane1SecondDirection = normalize([1, 1, -2]);
    const plane2SecondDirection = normalize([1, 1, 2]);
    const plane1Center = [1 / 3, 1 / 3, 1 / 3];
    const plane2Center = [1 / 3, 1 / 3, -1 / 3];

    view.create("polygon3d", [
      planeCorners(plane1Center, commonDirection, plane1SecondDirection, 3.25, 2.25),
    ], {
      fillColor: COLORS.plane1,
      fillOpacity: 0.68,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.plane1Edge,
        strokeOpacity: 0.78,
        strokeWidth: 1,
        highlight: false,
      },
    });

    view.create("polygon3d", [
      planeCorners(plane2Center, commonDirection, plane2SecondDirection, 3.25, 2.25),
    ], {
      fillColor: COLORS.plane2,
      fillOpacity: 0.62,
      highlight: false,
      fixed: true,
      vertices: { visible: false },
      borders: {
        strokeColor: COLORS.plane2Edge,
        strokeOpacity: 0.8,
        strokeWidth: 1,
        highlight: false,
      },
    });

    const pointP1 = [0, 2, -1];
    const pointP2 = [1, 1, 1];
    const lineDirection = normalize([1, -1, 2]);
    const pointH = [-2 / 3, 4 / 3, -1 / 3];
    const distanceDirection = normalize([-1, -1, 1]);

    view.create("line3d", [pointP2, lineDirection, [-3.45, 3.25]], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.82,
      strokeWidth: 2,
      highlight: false,
      fixed: true,
    });

    view.create("line3d", [pointP1, lineDirection, [0, Math.sqrt(6)]], {
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 4,
      highlight: false,
      fixed: true,
    });

    view.create("line3d", [pointP1, distanceDirection, [0, 2 / Math.sqrt(3)]], {
      strokeColor: COLORS.secondary,
      strokeOpacity: 0.95,
      strokeWidth: 2.4,
      dash: 2,
      highlight: false,
      fixed: true,
    });

    const pointStyle = {
      fixed: true,
      size: 4.8,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    view.create("point3d", [pointP1], pointStyle);
    view.create("point3d", [pointP2], pointStyle);
    view.create("point3d", [pointH], {
      ...pointStyle,
      size: 3.6,
      fillColor: COLORS.secondary,
    });

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.ink,
      fontSize: 16,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "middle",
      anchorY: "middle",
    };

    view.create("text3d", [add(pointP1, [-0.62, 0.2, -0.28]), math("P_1")], textStyle);
    view.create("text3d", [add(pointP2, [0.28, 0.12, 0.28]), math("P_2")], textStyle);
    view.create("text3d", [add(pointH, [-0.22, 0.16, -0.22]), math("H")], {
      ...textStyle,
      color: COLORS.secondary,
      fontSize: 15,
    });

    view.create("text3d", [add(pointP2, lineDirection, 2.45), math("r")], {
      ...textStyle,
      fontSize: 18,
    });

    view.create("text3d", [
      add(add(plane1Center, commonDirection, 2.35), plane1SecondDirection, 1.55),
      math("\\pi_1"),
    ], {
      ...textStyle,
      color: COLORS.muted,
      fontSize: 19,
    });

    view.create("text3d", [
      add(add(plane2Center, commonDirection, -2.25), plane2SecondDirection, 1.55),
      math("\\pi_2"),
    ], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 19,
    });

    const distanceMidpoint = pointP1.map((coordinate, index) => (coordinate + pointH[index]) / 2);
    view.create("text3d", [add(distanceMidpoint, [0.15, -0.16, 0.2]), math("d")], {
      ...textStyle,
      color: COLORS.secondary,
      fontSize: 16,
    });

    board.update();
    container.dataset.ready = "true";
    window.intersections2023Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initIntersections2023Graph, { once: true });
  } else {
    initIntersections2023Graph();
  }
})();

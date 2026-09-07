(() => {
  const BOARD_ID = "equidistance-2022-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#71736e",
    accent: "#c95f3f",
    plane: "#f7ece7",
    planeEdge: "#d9b5a6",
    guide: "#9b9d97",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("equidistance-2022-board-error");
  }

  function pointOnLine(parameter) {
    return [
      0.2 + 0.9 * parameter,
      0.4 - 1.2 * parameter,
    ];
  }

  function pointStyle(name, offset, fillColor = COLORS.accent, size = 4.8) {
    return {
      name,
      fixed: true,
      size,
      face: "o",
      fillColor,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      highlight: false,
      showInfobox: false,
      label: {
        offset,
        fontSize: 17,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    };
  }

  function initEquidistanceGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-4.7, 3.65, 4.7, -3.15],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const planeCorners = [
      [-4.0, -1.8],
      [3.0, -1.8],
      [4.2, -0.2],
      [-2.8, -0.2],
    ];

    const plane = board.create("polygon", planeCorners, {
      fillColor: COLORS.plane,
      fillOpacity: 0.76,
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
    plane.borders.forEach((border) => border.setAttribute({ fixed: true }));

    const t1 = (-3 + Math.sqrt(15)) / 3;
    const t2 = (-3 - Math.sqrt(15)) / 3;
    const origin = pointOnLine(0);
    const p1 = pointOnLine(t1);
    const p2 = pointOnLine(t2);
    const h1 = [0.818, -0.2];
    const h2 = [-1.1, -0.2];

    board.create("segment", [pointOnLine(-2.6), pointOnLine(2.2)], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.76,
      strokeWidth: 2.2,
      highlight: false,
      fixed: true,
    });

    const equalDistanceStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.92,
      strokeWidth: 3.2,
      highlight: false,
      fixed: true,
    };

    board.create("segment", [origin, p1], equalDistanceStyle);
    board.create("segment", [origin, p2], equalDistanceStyle);
    board.create("segment", [p1, h1], {
      ...equalDistanceStyle,
      strokeWidth: 2.3,
      dash: 2,
    });
    board.create("segment", [p2, h2], {
      ...equalDistanceStyle,
      strokeWidth: 2.3,
      dash: 2,
    });

    board.create("point", p2, pointStyle("P₂", [12, 10]));
    board.create("point", origin, pointStyle("O", [-26, -20], COLORS.ink));
    board.create("point", p1, pointStyle("P₁", [11, 10]));

    const footStyle = {
      fixed: true,
      name: "",
      size: 3.2,
      face: "o",
      fillColor: COLORS.guide,
      strokeColor: COLORS.white,
      strokeWidth: 1.3,
      highlight: false,
      showInfobox: false,
    };
    board.create("point", h1, footStyle);
    board.create("point", h2, footStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    board.create("text", [3.25, -1.25, "π"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 24,
    });
    board.create("text", [2.15, -2.35, "r"], {
      ...textStyle,
      color: COLORS.ink,
      fontSize: 21,
    });

    board.update();
    container.dataset.ready = "true";
    window.equidistance2022Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEquidistanceGraph, { once: true });
  } else {
    initEquidistanceGraph();
  }
})();

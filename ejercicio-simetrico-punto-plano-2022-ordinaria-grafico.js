(() => {
  const BOARD_ID = "reflection-2022-board";
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
    container.classList.add("reflection-2022-board-error");
  }

  function pointStyle(name, offset, fillColor = COLORS.ink) {
    return {
      name,
      fixed: true,
      size: 4.8,
      face: "o",
      fillColor,
      strokeColor: COLORS.white,
      strokeWidth: 1.7,
      highlight: false,
      showInfobox: false,
      label: {
        offset,
        fontSize: 18,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    };
  }

  function initReflectionGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-5.1, 3.3, 5.1, -3.3],
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
      [-4.25, -0.95],
      [3.25, -0.95],
      [4.35, 0.95],
      [-3.15, 0.95],
    ];

    const plane = board.create("polygon", planeCorners, {
      fillColor: COLORS.plane,
      fillOpacity: 0.78,
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

    const pointP = [0, 2.48];
    const pointH = [0, 0];
    const pointPrime = [0, -2.48];

    board.create("segment", [[0, 3.05], [0, -3.05]], {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.82,
      strokeWidth: 1.7,
      dash: 2,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [pointP, pointPrime], {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.96,
      strokeWidth: 3.6,
      highlight: false,
      fixed: true,
    });

    const equalMarkStyle = {
      strokeColor: COLORS.accent,
      strokeWidth: 2.1,
      highlight: false,
      fixed: true,
    };
    board.create("segment", [[-0.16, 1.26], [0.16, 1.26]], equalMarkStyle);
    board.create("segment", [[-0.16, -1.26], [0.16, -1.26]], equalMarkStyle);

    const rightAngleStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.35,
      highlight: false,
      fixed: true,
    };
    board.create("segment", [pointH, [0.38, 0]], rightAngleStyle);
    board.create("segment", [[0.38, 0], [0.38, 0.38]], rightAngleStyle);
    board.create("segment", [[0.38, 0.38], [0, 0.38]], rightAngleStyle);

    board.create("point", pointP, pointStyle("P", [13, 7]));
    board.create("point", pointH, pointStyle("H", [13, -22], COLORS.accent));
    board.create("point", pointPrime, pointStyle("P′", [13, -20]));

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    board.create("text", [3.3, 0.38, "π"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 25,
    });
    board.create("text", [0.38, 1.72, "s ⟂ π"], {
      ...textStyle,
      color: COLORS.muted,
      fontSize: 18,
    });
    board.create("text", [-3.35, 0.34, "PH = HP′"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 17,
    });

    board.update();
    container.dataset.ready = "true";
    window.reflection2022Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReflectionGraph, { once: true });
  } else {
    initReflectionGraph();
  }
})();

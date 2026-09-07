(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#71736e",
    accent: "#c95f3f",
    plane: "#f7ece7",
    planeEdge: "#ddb7a7",
    guide: "#9b9d97",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("position-2021-board-error");
  }

  function createBoard(containerId) {
    return JXG.JSXGraph.initBoard(containerId, {
      boundingbox: [-5.2, 3.35, 5.2, -3.35],
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

  function createPlane(board) {
    const corners = [
      [-4.15, -1.02],
      [3.65, -1.02],
      [4.45, 1.02],
      [-3.35, 1.02],
    ];

    const polygon = board.create("polygon", corners, {
      fillColor: COLORS.plane,
      fillOpacity: 0.76,
      highlight: false,
      fixed: true,
      vertices: {
        visible: false,
      },
      borders: {
        strokeColor: COLORS.planeEdge,
        strokeOpacity: 0.88,
        strokeWidth: 1,
        highlight: false,
      },
    });

    polygon.borders.forEach((border) => border.setAttribute({ fixed: true }));
    return polygon;
  }

  function pointStyle(offset) {
    return {
      fixed: true,
      size: 4.6,
      face: "o",
      fillColor: COLORS.ink,
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

  function textStyle(color = COLORS.muted, fontSize = 20) {
    return {
      fixed: true,
      highlight: false,
      color,
      fontSize,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };
  }

  function initPerpendicularBoard() {
    const container = document.getElementById("position-2021-perpendicular-board");
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = createBoard(container.id);
    createPlane(board);

    board.create("segment", [[0, -3.0], [0, 3.0]], {
      strokeColor: COLORS.accent,
      strokeWidth: 3.2,
      highlight: false,
      fixed: true,
    });

    board.create("point", [0, 2.18], {
      name: "A",
      ...pointStyle([12, 8]),
    });

    board.create("point", [0, -2.18], {
      name: "B",
      ...pointStyle([12, -20]),
    });

    board.create("point", [0, 0], {
      name: "",
      fixed: true,
      size: 3.6,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.4,
      highlight: false,
      showInfobox: false,
    });

    board.create("segment", [[0, 0], [0.42, 0]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.35,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [[0.42, 0], [0.42, 0.42]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.35,
      highlight: false,
      fixed: true,
    });

    board.create("text", [3.2, -0.58, "π"], textStyle(COLORS.accent, 24));
    board.create("text", [0.23, 2.72, "r"], textStyle(COLORS.accent, 21));

    board.update();
    container.dataset.ready = "true";
    window.position2021PerpendicularBoard = board;
  }

  function initContainedBoard() {
    const container = document.getElementById("position-2021-contained-board");
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = createBoard(container.id);
    createPlane(board);

    board.create("segment", [[-3.55, -0.58], [3.75, 0.58]], {
      strokeColor: COLORS.accent,
      strokeWidth: 3.2,
      highlight: false,
      fixed: true,
    });

    board.create("point", [-2.45, -0.405], {
      name: "A",
      ...pointStyle([-22, -22]),
    });

    board.create("point", [2.45, 0.405], {
      name: "B",
      ...pointStyle([12, 9]),
    });

    board.create("text", [3.2, -0.58, "π"], textStyle(COLORS.accent, 24));
    board.create("text", [1.35, 0.52, "r"], textStyle(COLORS.accent, 21));

    board.update();
    container.dataset.ready = "true";
    window.position2021ContainedBoard = board;
  }

  function initGraphs() {
    initPerpendicularBoard();
    initContainedBoard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGraphs, { once: true });
  } else {
    initGraphs();
  }
})();

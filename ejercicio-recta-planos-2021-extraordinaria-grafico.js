(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    accent: "#c95f3f",
    secondary: "#536b66",
    plane: "#f1f2ef",
    planeEdge: "#b9bcb5",
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

  function createPlane(board, corners) {
    const polygon = board.create("polygon", corners, {
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

  function initParallelBoard() {
    const container = document.getElementById("line-plane-extra-parallel-board");
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = createBoard(container.id);
    createPlane(board, [
      [-4.25, -1.55],
      [3.55, -0.85],
      [4.42, 0.72],
      [-3.38, 0.02],
    ]);

    board.create("segment", [[-4.15, 1.34], [4.05, 2.08]], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.5,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [[-1.65, 1.565], [1.35, 1.835]], {
      strokeColor: COLORS.secondary,
      strokeWidth: 3,
      lastArrow: { type: 2, size: 5 },
      highlight: false,
      fixed: true,
    });

    board.create("point", [-2.72, 1.469], {
      name: "P",
      ...pointStyle([-23, -23]),
    });

    board.create("segment", [[-2.72, 1.37], [-2.72, 0.08]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.15,
      strokeOpacity: 0.62,
      dash: 2,
      highlight: false,
      fixed: true,
    });

    board.create("text", [3.35, -1.28, "π"], textStyle(COLORS.accent, 24));
    board.create("text", [3.55, 2.26, "r"], textStyle(COLORS.ink, 21));
    board.create("text", [-0.42, 2.02, "d"], textStyle(COLORS.secondary, 18));

    board.update();
    container.dataset.ready = "true";
    window.linePlaneExtraParallelBoard = board;
  }

  function initPerpendicularBoard() {
    const container = document.getElementById("line-plane-extra-perpendicular-board");
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = createBoard(container.id);
    createPlane(board, [
      [-4.15, -1.02],
      [3.65, -1.02],
      [4.45, 1.02],
      [-3.35, 1.02],
    ]);

    board.create("segment", [[0, -3], [0, 3]], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.5,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [[0, 0.38], [0, 2.05]], {
      strokeColor: COLORS.secondary,
      strokeWidth: 3,
      lastArrow: { type: 2, size: 5 },
      highlight: false,
      fixed: true,
    });

    board.create("point", [0, 0], {
      name: "Q",
      ...pointStyle([11, -22]),
    });

    board.create("point", [-2.05, -0.34], {
      name: "O",
      ...pointStyle([-24, 9]),
    });

    board.create("segment", [[0, 0], [0.42, 0]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.3,
      highlight: false,
      fixed: true,
    });
    board.create("segment", [[0.42, 0], [0.42, 0.42]], {
      strokeColor: COLORS.guide,
      strokeWidth: 1.3,
      highlight: false,
      fixed: true,
    });

    board.create("text", [3.18, -0.62, "β"], textStyle(COLORS.accent, 24));
    board.create("text", [0.25, 2.7, "r"], textStyle(COLORS.ink, 21));
    board.create("text", [0.28, 1.28, "d"], textStyle(COLORS.secondary, 18));

    board.update();
    container.dataset.ready = "true";
    window.linePlaneExtraPerpendicularBoard = board;
  }

  function initGraphs() {
    initParallelBoard();
    initPerpendicularBoard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGraphs, { once: true });
  } else {
    initGraphs();
  }
})();

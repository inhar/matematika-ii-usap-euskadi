(() => {
  const BOARD_ID = "area-between-curves-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    guide: "#b8bab4",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da kurben irudikapena kargatu."
      : "No se ha podido cargar la representación de las curvas.";
    container.classList.add("area-between-curves-board-error");
  }

  function initAreaBetweenCurvesGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;
    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-2, 5.5, 3, -0.7],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });
    const compact = window.innerWidth <= 560;

    const axisStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    };
    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const regionX = [];
    const regionY = [];
    const samples = 80;
    for (let index = 0; index <= samples; index += 1) {
      const x = -1 + (3 * index) / samples;
      regionX.push(x);
      regionY.push(x + 2);
    }
    for (let index = samples; index >= 0; index -= 1) {
      const x = -1 + (3 * index) / samples;
      regionX.push(x);
      regionY.push(x * x);
    }
    regionX.push(regionX[0]);
    regionY.push(regionY[0]);

    board.create("curve", [regionX, regionY], {
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.72,
      fixed: true,
      highlight: false,
    });

    const guideStyle = {
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      dash: 2,
      fixed: true,
      highlight: false,
    };
    board.create("segment", [[-1, 0], [-1, 1]], guideStyle);
    board.create("segment", [[2, 0], [2, 4]], guideStyle);

    board.create("functiongraph", [(x) => x + 2, -2, 3], {
      strokeColor: COLORS.accent,
      strokeWidth: 2.8,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [(x) => x * x, -2, 2.35], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.5,
      fixed: true,
      highlight: false,
    });

    const markStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1.05,
      fixed: true,
      highlight: false,
    };
    [-1, 2].forEach((x) => board.create("segment", [[x, -0.07], [x, 0.07]], markStyle));
    [1, 4].forEach((y) => board.create("segment", [[-0.035, y], [0.035, y]], markStyle));

    const pointStyle = {
      size: 4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };
    board.create("point", [-1, 1], pointStyle);
    board.create("point", [2, 4], pointStyle);

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };
    board.create("text", [-1.55, 1.28, "(−1, 1)"], textStyle);
    board.create("text", [1.55, 4.42, "(2, 4)"], textStyle);
    board.create("text", compact ? [-0.2, 2.2, "y = x + 2"] : [-0.25, 2.15, "y = x + 2"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 14 : 16,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "right",
    });
    board.create("text", compact ? [1.35, 5.15, "y = x²"] : [2.3, 4.95, "y = x²"], {
      ...textStyle,
      fontSize: compact ? 14 : 16,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    });
    board.create("text", [0.5, 1.25, "R"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: 22,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "middle",
    });

    const referenceTextStyle = { ...textStyle, color: COLORS.muted, fontSize: 12 };
    board.create("text", [-1, -0.34, "−1"], { ...referenceTextStyle, anchorX: "middle" });
    board.create("text", [2, -0.34, "2"], { ...referenceTextStyle, anchorX: "middle" });
    board.create("text", [-0.1, 1, "1"], { ...referenceTextStyle, anchorX: "right" });
    board.create("text", [-0.1, 4, "4"], { ...referenceTextStyle, anchorX: "right" });
    board.create("text", [2.88, -0.32, "x"], referenceTextStyle);
    board.create("text", [0.1, 5.22, "y"], referenceTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.areaBetweenCurvesBoard = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAreaBetweenCurvesGraph, { once: true });
  } else {
    initAreaBetweenCurvesGraph();
  }
})();

(() => {
  const BOARD_ID = "perpendicular-2021-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#71736e",
    accent: "#c95f3f",
    guide: "#9b9d97",
    white: "#ffffff",
  };

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da irudikapen geometrikoa kargatu."
      : "No se ha podido cargar la representación geométrica.";
    container.classList.add("perpendicular-2021-board-error");
  }

  function add(first, second, factor = 1) {
    return [
      first[0] + factor * second[0],
      first[1] + factor * second[1],
    ];
  }

  function normalize(vector) {
    const length = Math.hypot(...vector);
    return vector.map((coordinate) => coordinate / length);
  }

  function initPerpendicularPointLineGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-5.2, 3.45, 5.2, -3.45],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const origin = [0, 0];
    const lineDirection = normalize([3, 1]);
    const perpendicularDirection = normalize([-1, 3]);
    const pointP = add(origin, perpendicularDirection, 1.95);
    const lineStart = add(origin, lineDirection, -4.75);
    const lineEnd = add(origin, lineDirection, 4.75);
    const perpendicularStart = add(origin, perpendicularDirection, -1.25);
    const perpendicularEnd = add(origin, perpendicularDirection, 3.05);

    board.create("segment", [lineStart, lineEnd], {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.82,
      strokeWidth: 2.2,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [perpendicularStart, perpendicularEnd], {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.9,
      strokeWidth: 2.3,
      highlight: false,
      fixed: true,
    });

    board.create("segment", [origin, pointP], {
      strokeColor: COLORS.accent,
      strokeOpacity: 1,
      strokeWidth: 4,
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
      label: {
        fontSize: 17,
        color: COLORS.ink,
        cssStyle: "font-family: Newsreader, Georgia, serif; font-weight: 500;",
      },
    };

    board.create("point", pointP, {
      ...pointStyle,
      name: "P",
      label: { ...pointStyle.label, offset: [-23, 8] },
    });

    board.create("point", origin, {
      ...pointStyle,
      name: "Q",
      label: { ...pointStyle.label, offset: [11, -20] },
    });

    const markerSize = 0.36;
    const markerOnLine = add(origin, lineDirection, markerSize);
    const markerCorner = add(markerOnLine, perpendicularDirection, markerSize);
    const markerOnPerpendicular = add(origin, perpendicularDirection, markerSize);
    const markerAttributes = {
      strokeColor: COLORS.guide,
      strokeWidth: 1.35,
      highlight: false,
      fixed: true,
    };

    board.create("segment", [origin, markerOnLine], markerAttributes);
    board.create("segment", [markerOnLine, markerCorner], markerAttributes);
    board.create("segment", [markerCorner, markerOnPerpendicular], markerAttributes);

    const textStyle = {
      fixed: true,
      highlight: false,
      color: COLORS.muted,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    };

    board.create("text", add(add(origin, lineDirection, 3.75), perpendicularDirection, -0.3).concat("r"), {
      ...textStyle,
      fontSize: 21,
      color: COLORS.ink,
    });

    board.create("text", add(add(origin, perpendicularDirection, 2.65), lineDirection, 0.23).concat("s"), {
      ...textStyle,
      fontSize: 21,
      color: COLORS.accent,
    });

    board.create("text", add(add(origin, perpendicularDirection, 1.05), lineDirection, 0.38).concat("PQ"), {
      ...textStyle,
      fontSize: 17,
      color: COLORS.accent,
    });

    board.update();
    container.dataset.ready = "true";
    window.perpendicularPointLine2021Board = board;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPerpendicularPointLineGraph, { once: true });
  } else {
    initPerpendicularPointLineGraph();
  }
})();

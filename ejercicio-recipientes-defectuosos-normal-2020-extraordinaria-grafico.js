(() => {
  const BOARD_ID = "containers-normal-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#72756f",
    guide: "#b8bab4",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };
  const BOUNDS = [9.62, 4.48, 10.38, -0.48];

  function density(x) {
    const z = (x - 10) / 0.1;
    return Math.exp(-(z * z) / 2) / (0.1 * Math.sqrt(2 * Math.PI));
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("normal-distribution-board-error");
  }

  function buildTail(board, lower, upper, fixed) {
    const xValues = [lower];
    const yValues = [0];
    const samples = 100;

    for (let index = 0; index <= samples; index += 1) {
      const x = lower + ((upper - lower) * index) / samples;
      xValues.push(x);
      yValues.push(density(x));
    }

    xValues.push(upper, lower);
    yValues.push(0, 0);

    board.create("curve", [xValues, yValues], {
      ...fixed,
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.9,
    });
  }

  function initContainersNormalGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: BOUNDS,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const fixed = { fixed: true, highlight: false };
    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true,
    };
    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.72,
      strokeWidth: 1,
    };
    const textStyle = {
      ...fixed,
      color: COLORS.ink,
      fontSize: compact ? 12 : 14,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "middle",
      anchorY: "middle",
    };
    const referenceStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 10 : 12,
    };

    board.create("line", [[9.62, 0], [10.38, 0]], axisStyle);
    board.create("line", [[9.65, 0], [9.65, 1]], axisStyle);

    buildTail(board, 9.62, 9.8, fixed);
    buildTail(board, 10.1, 10.38, fixed);

    board.create("functiongraph", [density, 9.62, 10.38], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: 2.8,
    });

    [9.8, 10.1].forEach((x) => {
      board.create("segment", [[x, 0], [x, density(x)]], {
        ...fixed,
        strokeColor: COLORS.accent,
        strokeWidth: 1.3,
        dash: 2,
      });
    });

    board.create("segment", [[10, 0], [10, density(10)]], {
      ...fixed,
      strokeColor: COLORS.guide,
      strokeWidth: 1,
      dash: 2,
    });

    [9.8, 10, 10.1].forEach((x) => {
      board.create("segment", [[x, -0.055], [x, 0.055]], tickStyle);
    });
    board.create("segment", [[9.642, 4], [9.658, 4]], tickStyle);

    board.create("text", [9.8, -0.24, "9,8"], {
      ...referenceStyle,
      color: COLORS.accent,
    });
    board.create("text", [10, -0.24, "10"], referenceStyle);
    board.create("text", [10.1, -0.24, "10,1"], {
      ...referenceStyle,
      color: COLORS.accent,
    });
    board.create("text", [9.64, 4, "4"], {
      ...referenceStyle,
      anchorX: "right",
    });
    board.create("text", [10.35, -0.2, "x"], {
      ...referenceStyle,
      anchorX: "right",
    });
    board.create("text", [9.66, 4.28, "f(x)"], {
      ...referenceStyle,
      anchorX: "left",
    });

    board.create("text", [9.71, 0.38, "0,0228"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 11 : 13,
    });
    board.create("text", [10.235, 0.56, "0,1587"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 11 : 13,
    });
    board.create("text", [10, 4.22, "μ = 10"], {
      ...referenceStyle,
      anchorY: "bottom",
    });

    board.update();
    container.dataset.ready = "true";
    window.containersNormal2020Board = board;

    const refresh = () => {
      if (!container.offsetParent) return;
      container.style.width = "100%";
      container.style.height = "auto";
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(280, targetWidth * 0.78)
        : Math.max(290, targetWidth * 0.52);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDS, false);
      board.fullUpdate();
    };

    document.addEventListener("click", (event) => {
      if (event.target.closest(".tab, .level-button")) {
        window.setTimeout(refresh, 0);
      }
    });
    window.addEventListener("resize", refresh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContainersNormalGraph, { once: true });
  } else {
    initContainersNormalGraph();
  }
})();

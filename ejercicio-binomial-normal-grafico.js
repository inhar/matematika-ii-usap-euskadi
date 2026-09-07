(() => {
  const BOARD_ID = "normal-distribution-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#777a73",
    guide: "#b8bab4",
    accent: "#c95f3f",
    area: "#f2d8cf",
  };
  const BOUNDING_BOX = [-4, 0.46, 4.1, -0.06];

  const density = (z) => Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da banaketa normalaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la distribución normal.";
    container.classList.add("normal-distribution-board-error");
  }

  function initNormalDistributionGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;
    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: BOUNDING_BOX,
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
    const fixed = { fixed: true, highlight: false };
    const axisStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.2,
      straightFirst: true,
      straightLast: true,
    };
    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    const lower = 0.02;
    const upper = 3.45;
    const shadeX = [lower];
    const shadeY = [0];
    const samples = 150;
    for (let index = 0; index <= samples; index += 1) {
      const z = lower + ((upper - lower) * index) / samples;
      shadeX.push(z);
      shadeY.push(density(z));
    }
    shadeX.push(upper, lower);
    shadeY.push(0, 0);

    board.create("curve", [shadeX, shadeY], {
      ...fixed,
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.82,
    });

    board.create("functiongraph", [density, -4, 4.1], {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeWidth: 2.7,
    });

    const guideStyle = {
      ...fixed,
      strokeColor: COLORS.accent,
      strokeWidth: 1.25,
      dash: 2,
    };
    board.create("segment", [[lower, 0], [lower, density(lower)]], guideStyle);
    board.create("segment", [[upper, 0], [upper, density(upper)]], guideStyle);

    const tickStyle = {
      ...fixed,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.7,
      strokeWidth: 1,
    };
    [-2, 2, lower, upper].forEach((z) => {
      board.create("segment", [[z, -0.006], [z, 0.006]], tickStyle);
    });
    board.create("segment", [[-0.045, 0.4], [0.045, 0.4]], tickStyle);

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
      fontSize: compact ? 11 : 12,
    };

    board.create("text", [-2, -0.032, "−2"], referenceStyle);
    board.create("text", [2, -0.032, "2"], referenceStyle);
    board.create("text", [compact ? 0.23 : 0.2, -0.033, "0,02"], {
      ...referenceStyle,
      color: COLORS.accent,
      anchorX: "left",
    });
    board.create("text", [3.45, -0.033, "3,45"], {
      ...referenceStyle,
      color: COLORS.accent,
    });
    board.create("text", [-0.18, 0.417, "0,4"], {
      ...referenceStyle,
      anchorX: "right",
    });
    board.create("text", [3.98, 0.024, "z"], {
      ...referenceStyle,
      anchorX: "right",
    });

    board.create("text", [-1.3, 0.27, "φ(z)"], {
      ...textStyle,
      fontSize: compact ? 15 : 17,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
      anchorX: "right",
    });
    board.create("text", [compact ? 1.28 : 1.38, 0.047, "P ≈ 0,4917"], {
      ...textStyle,
      color: COLORS.accent,
      fontSize: compact ? 13 : 15,
    });

    board.update();
    container.dataset.ready = "true";
    window.normalDistributionBoard = board;

    const refresh = () => {
      if (!container.offsetParent) return;
      container.style.width = "100%";
      container.style.height = "auto";
      const targetWidth = container.getBoundingClientRect().width;
      const targetHeight = window.innerWidth <= 560
        ? Math.max(270, targetWidth * 0.75)
        : Math.max(280, targetWidth * 0.5);
      board.resizeContainer(targetWidth, targetHeight);
      board.setBoundingBox(BOUNDING_BOX, false);
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
    document.addEventListener("DOMContentLoaded", initNormalDistributionGraph, { once: true });
  } else {
    initNormalDistributionGraph();
  }
})();

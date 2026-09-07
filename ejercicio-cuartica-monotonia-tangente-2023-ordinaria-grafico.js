(() => {
  const COLORS = {
    ink: "#1b1b18",
    muted: "#6f746e",
    guide: "#b8bab4",
    accent: "#c95f3f",
    white: "#ffffff",
  };

  function f(x) {
    return x * x * (x - 1) * (x - 1);
  }

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    const language = document.documentElement.lang === "eu" ? "eu" : "es";
    container.textContent = language === "eu"
      ? "Ezin izan da funtzioaren grafikoa kargatu."
      : "No se ha podido cargar la gráfica de la función.";
    container.classList.add("quartic-2023-board-error");
  }

  function boardOptions(boundingbox) {
    return {
      boundingbox,
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    };
  }

  function axisStyle() {
    return {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.25,
      fixed: true,
      highlight: false,
    };
  }

  function guideStyle() {
    return {
      strokeColor: COLORS.guide,
      strokeOpacity: 0.9,
      strokeWidth: 1.1,
      dash: 2,
      fixed: true,
      highlight: false,
    };
  }

  function pointStyle() {
    return {
      size: 4.4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };
  }

  function textStyle(overrides = {}) {
    return {
      fixed: true,
      highlight: false,
      fontSize: 15,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      parse: false,
      useMathJax: false,
      ...overrides,
    };
  }

  function initExtremaBoard() {
    const container = document.getElementById("quartic-2023-extrema-board");
    if (!container || container.dataset.ready === "true" || container.offsetWidth < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(container.id, boardOptions([-0.45, 0.19, 1.45, -0.09]));
    board.create("line", [[-0.45, 0], [1.45, 0]], axisStyle());
    board.create("line", [[0, -0.09], [0, 0.19]], axisStyle());

    const tickStyle = axisStyle();
    board.create("segment", [[0.5, -0.004], [0.5, 0.004]], tickStyle);
    board.create("segment", [[1, -0.004], [1, 0.004]], tickStyle);
    board.create("segment", [[-0.012, 1 / 16], [0.012, 1 / 16]], tickStyle);
    board.create("segment", [[0.5, 0], [0.5, 1 / 16]], guideStyle());

    board.create("functiongraph", [f, -0.45, 1.45], {
      strokeColor: COLORS.accent,
      strokeWidth: 3.1,
      fixed: true,
      highlight: false,
    });

    board.create("point", [0, 0], pointStyle());
    board.create("point", [0.5, 1 / 16], pointStyle());
    board.create("point", [1, 0], pointStyle());

    board.create("text", [-0.055, 0.026, mathLabel("(0,0)")], textStyle({
      anchorX: "right",
      fontSize: 14,
    }));
    board.create("text", [0.57, 0.087, mathLabel("\\left(\\frac12,\\frac1{16}\\right)")], textStyle({
      fontSize: 14,
    }));
    board.create("text", [1.045, 0.026, mathLabel("(1,0)")], textStyle({
      fontSize: 14,
    }));
    board.create("text", [-0.035, 1 / 16, mathLabel("\\frac1{16}\\approx0{,}06")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: 12,
    }));
    board.create("text", [0.5, -0.018, mathLabel("\\frac12")], textStyle({
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: 13,
    }));
    board.create("text", [1, -0.018, mathLabel("1")], textStyle({
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: 13,
    }));
    board.create("text", [1.24, 0.145, mathLabel("f")], textStyle({
      color: COLORS.accent,
      fontSize: 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    }));
    board.create("text", [1.39, -0.02, mathLabel("x")], textStyle({
      color: COLORS.muted,
      fontSize: 14,
    }));
    board.create("text", [0.028, 0.177, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: 14,
    }));

    board.update();
    container.dataset.ready = "true";
  }

  function initTangentBoard() {
    const container = document.getElementById("quartic-2023-tangent-board");
    if (!container || container.dataset.ready === "true" || container.offsetWidth < 20) return;

    if (!window.JXG?.JSXGraph || !window.katex) {
      showFallback(container);
      return;
    }

    const board = JXG.JSXGraph.initBoard(container.id, boardOptions([-0.28, 9.6, 2.35, -1.4]));
    board.create("line", [[-0.28, 0], [2.35, 0]], axisStyle());
    board.create("line", [[0, -1.4], [0, 9.6]], axisStyle());

    const tickStyle = axisStyle();
    board.create("segment", [[2, -0.13], [2, 0.13]], tickStyle);
    board.create("segment", [[-0.018, 4], [0.018, 4]], tickStyle);
    board.create("segment", [[2, 0], [2, 4]], guideStyle());
    board.create("segment", [[0, 4], [2, 4]], guideStyle());

    board.create("functiongraph", [f, -0.28, 2.35], {
      strokeColor: COLORS.ink,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [(x) => 12 * x - 20, 1.56, 2.34], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });

    board.create("point", [2, 4], pointStyle());
    board.create("text", [1.88, 4.65, mathLabel("(2,4)")], textStyle({
      anchorX: "right",
      fontSize: 15,
    }));
    board.create("text", [1.65, 1.5, mathLabel("y=12x-20")], textStyle({
      color: COLORS.accent,
      fontSize: 16,
      anchorX: "right",
    }));
    board.create("text", [1.2, 0.72, mathLabel("f")], textStyle({
      color: COLORS.ink,
      fontSize: 20,
      cssStyle: "font-family: Newsreader, Georgia, serif; font-style: italic;",
    }));
    board.create("text", [2, -0.42, mathLabel("2")], textStyle({
      anchorX: "middle",
      anchorY: "top",
      color: COLORS.muted,
      fontSize: 13,
    }));
    board.create("text", [-0.045, 4, mathLabel("4")], textStyle({
      anchorX: "right",
      color: COLORS.muted,
      fontSize: 13,
    }));
    board.create("text", [2.28, -0.52, mathLabel("x")], textStyle({
      color: COLORS.muted,
      fontSize: 14,
    }));
    board.create("text", [0.045, 9.1, mathLabel("y")], textStyle({
      color: COLORS.muted,
      fontSize: 14,
    }));

    board.update();
    container.dataset.ready = "true";
  }

  function tryInitBoards() {
    window.requestAnimationFrame(() => {
      initExtremaBoard();
      initTangentBoard();
    });
  }

  function prepareGraphs() {
    tryInitBoards();
    document.querySelectorAll(".level-button").forEach((button) => {
      button.addEventListener("click", () => window.setTimeout(tryInitBoards, 80));
    });

    const solution = document.querySelector(".solution-view");
    if (solution) {
      new MutationObserver(tryInitBoards).observe(solution, {
        attributes: true,
        attributeFilter: ["hidden", "class"],
        subtree: true,
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepareGraphs, { once: true });
  } else {
    prepareGraphs();
  }
})();

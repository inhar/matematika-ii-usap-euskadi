(() => {
  const BOARD_IDS = [
    { id: "area-three-2021-board-a", split: false },
    { id: "area-three-2021-board-b", split: true },
  ];

  const COLORS = {
    ink: "#1b1b18",
    muted: "#74766f",
    guide: "#b9bbb5",
    accent: "#c85f3f",
    lower: "#8c8e87",
    area: "#edd5cc",
  };

  const inverse = (x) => 1 / x;
  const parabola = (x) => x ** 2;
  const openParabola = (x) => (x ** 2) / 8;

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function showFallback(container) {
    const isBasque = document.documentElement.lang === "eu";
    container.textContent = isBasque
      ? "Ezin izan da hiru kurben grafikoa kargatu."
      : "No se ha podido cargar la gráfica de las tres curvas.";
    container.classList.add("area-three-2021-board-error");
  }

  function createRegion(board, start, end, upperCurve) {
    const xValues = [];
    const yValues = [];
    const samples = 80;

    for (let index = 0; index <= samples; index += 1) {
      const x = start + ((end - start) * index) / samples;
      xValues.push(x);
      yValues.push(upperCurve(x));
    }

    for (let index = samples; index >= 0; index -= 1) {
      const x = start + ((end - start) * index) / samples;
      xValues.push(x);
      yValues.push(openParabola(x));
    }

    xValues.push(xValues[0]);
    yValues.push(yValues[0]);

    board.create("curve", [xValues, yValues], {
      strokeOpacity: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.7,
      fixed: true,
      highlight: false,
    });
  }

  function createMathText(board, x, y, latex, options = {}) {
    return board.create("text", [x, y, mathLabel(latex)], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      ...options,
    });
  }

  function initBoard(config) {
    const container = document.getElementById(config.id);
    if (
      !container
      || container.dataset.ready === "true"
      || container.clientWidth < 20
      || container.clientHeight < 20
    ) {
      return;
    }

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(config.id, {
      boundingbox: compact
        ? [-0.2, 1.58, 2.34, -0.19]
        : [-0.17, 1.5, 2.34, -0.15],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const axisStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.56,
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
      straightFirst: true,
      straightLast: true,
    };

    board.create("line", [[0, 0], [1, 0]], axisStyle);
    board.create("line", [[0, 0], [0, 1]], axisStyle);

    createRegion(board, 0, 1, parabola);
    createRegion(board, 1, 2, inverse);

    if (config.split) {
      board.create("segment", [[1, openParabola(1)], [1, parabola(1)]], {
        strokeColor: COLORS.accent,
        strokeOpacity: 0.75,
        strokeWidth: 1.45,
        dash: 2,
        fixed: true,
        highlight: false,
      });
    }

    board.create("functiongraph", [parabola, 0, 1.2], {
      strokeColor: COLORS.accent,
      strokeWidth: 3,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [inverse, compact ? 0.67 : 0.7, 2.34], {
      strokeColor: COLORS.ink,
      strokeWidth: 2.75,
      fixed: true,
      highlight: false,
    });
    board.create("functiongraph", [openParabola, 0, 2.34], {
      strokeColor: COLORS.lower,
      strokeWidth: 2.4,
      fixed: true,
      highlight: false,
    });

    const tickStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1,
      fixed: true,
      highlight: false,
    };

    [1, 2].forEach((x) => {
      board.create("segment", [[x, -0.025], [x, 0.025]], tickStyle);
    });
    [0.5, 1].forEach((y) => {
      board.create("segment", [[-0.018, y], [0.018, y]], tickStyle);
    });

    const pointStyle = {
      size: compact ? 3.5 : 4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };

    board.create("point", [0, 0], pointStyle);
    board.create("point", [1, 1], pointStyle);
    board.create("point", [2, 0.5], pointStyle);

    const referenceOptions = {
      color: COLORS.muted,
      fontSize: compact ? 11 : 12,
    };

    createMathText(board, 1, -0.055, "1", {
      ...referenceOptions,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, 2, -0.055, "2", {
      ...referenceOptions,
      anchorX: "middle",
      anchorY: "top",
    });
    createMathText(board, -0.045, 0.5, "\\frac12", {
      ...referenceOptions,
      anchorX: "right",
    });
    createMathText(board, -0.045, 1, "1", {
      ...referenceOptions,
      anchorX: "right",
    });
    createMathText(board, 2.28, -0.055, "x", {
      ...referenceOptions,
      anchorX: "right",
      anchorY: "top",
    });
    createMathText(board, 0.045, compact ? 1.48 : 1.42, "y", referenceOptions);

    createMathText(board, 0.08, -0.05, "O", {
      fontSize: compact ? 15 : 17,
      anchorY: "top",
    });
    createMathText(board, 1, compact ? 1.14 : 1.12, "A", {
      fontSize: compact ? 15 : 17,
      anchorX: "middle",
    });
    createMathText(board, 2.07, 0.6, "B", {
      fontSize: compact ? 15 : 17,
    });

    createMathText(board, compact ? 0.5 : 0.54, compact ? 0.48 : 0.46, "g", {
      color: COLORS.accent,
      fontSize: compact ? 17 : 19,
    });
    createMathText(board, compact ? 1.43 : 1.5, compact ? 0.82 : 0.78, "f", {
      color: COLORS.ink,
      fontSize: compact ? 17 : 19,
    });
    createMathText(board, compact ? 1.4 : 1.46, compact ? 0.17 : 0.18, "h", {
      color: COLORS.lower,
      fontSize: compact ? 17 : 19,
      anchorY: "top",
    });

    if (config.split) {
      createMathText(board, 0.58, 0.19, "S_1", {
        color: COLORS.accent,
        fontSize: compact ? 16 : 18,
        anchorX: "middle",
      });
      createMathText(board, 1.48, 0.42, "S_2", {
        color: COLORS.accent,
        fontSize: compact ? 16 : 18,
        anchorX: "middle",
      });
    } else {
      createMathText(board, 1.2, 0.37, "R", {
        color: COLORS.accent,
        fontSize: compact ? 18 : 21,
        anchorX: "middle",
      });
    }

    board.update();
    container.dataset.ready = "true";
  }

  function initVisibleBoards() {
    BOARD_IDS.forEach(initBoard);
  }

  function scheduleVisibleBoards() {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(initVisibleBoards);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleVisibleBoards, { once: true });
  } else {
    scheduleVisibleBoards();
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".level-button, .tab")) {
      scheduleVisibleBoards();
    }
  });
})();

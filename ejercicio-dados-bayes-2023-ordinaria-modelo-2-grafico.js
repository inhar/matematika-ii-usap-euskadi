(() => {
  const BOARD_ID = "dice-bayes-2023-tree-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#70736e",
    line: "#afb1ac",
    accent: "#c95f3f",
  };

  let board;
  const translatedLabels = [];

  function language() {
    return document.documentElement.lang === "eu" ? "eu" : "es";
  }

  function current(es, eu) {
    return language() === "eu" ? eu : es;
  }

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function createText(position, value, options = {}) {
    return board.create("text", [position[0], position[1], value], {
      fixed: true,
      highlight: false,
      parse: false,
      useMathJax: false,
      fontSize: 13,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; white-space: nowrap;",
      anchorX: "left",
      anchorY: "middle",
      ...options,
    });
  }

  function addTranslatedText(position, es, eu, options = {}, isMath = false) {
    const format = (value) => isMath ? mathLabel(value) : value;
    const label = createText(position, format(current(es, eu)), options);
    translatedLabels.push({ label, es, eu, format });
    return label;
  }

  function updateTranslatedLabels() {
    translatedLabels.forEach(({ label, es, eu, format }) => {
      label.setText(format(current(es, eu)));
    });
    board?.update();
  }

  function showFallback(container) {
    container.textContent = language() === "eu"
      ? "Ezin izan da probabilitate-zuhaitza kargatu."
      : "No se ha podido cargar el árbol de probabilidades.";
    container.classList.add("dice-bayes-2023-board-error");
  }

  function initGraph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true" || container.clientWidth < 100) return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.15, 8.82, 11.2, -0.42],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const root = [0.7, 4.05];
    const dice = {
      N: [2.45, 6.42],
      T: [2.45, 1.68],
    };
    const first = {
      N1: [5.02, 7.58],
      NX: [5.02, 5.22],
      T1: [5.02, 2.83],
      TX: [5.02, 0.47],
    };
    const leaves = {
      N12: [8.18, 8.08],
      N1X: [8.18, 7.08],
      NX2: [8.18, 5.72],
      NXX: [8.18, 4.72],
      T12: [8.18, 3.33],
      T1X: [8.18, 2.33],
      TX2: [8.18, 0.97],
      TXX: [8.18, -0.03],
    };

    const baseSegment = {
      strokeColor: COLORS.line,
      strokeOpacity: 0.92,
      strokeWidth: 1.4,
      fixed: true,
      highlight: false,
    };
    const ordinarySegment = {
      ...baseSegment,
      strokeColor: COLORS.ink,
      strokeOpacity: 0.68,
      strokeWidth: 1.55,
    };
    const eventSegment = {
      ...baseSegment,
      strokeColor: COLORS.accent,
      strokeOpacity: 0.98,
      strokeWidth: 2.2,
    };

    board.create("segment", [root, dice.N], baseSegment);
    board.create("segment", [root, dice.T], baseSegment);

    board.create("segment", [dice.N, first.N1], eventSegment);
    board.create("segment", [dice.N, first.NX], ordinarySegment);
    board.create("segment", [dice.T, first.T1], eventSegment);
    board.create("segment", [dice.T, first.TX], ordinarySegment);

    board.create("segment", [first.N1, leaves.N12], eventSegment);
    board.create("segment", [first.N1, leaves.N1X], ordinarySegment);
    board.create("segment", [first.NX, leaves.NX2], ordinarySegment);
    board.create("segment", [first.NX, leaves.NXX], ordinarySegment);
    board.create("segment", [first.T1, leaves.T12], eventSegment);
    board.create("segment", [first.T1, leaves.T1X], ordinarySegment);
    board.create("segment", [first.TX, leaves.TX2], ordinarySegment);
    board.create("segment", [first.TX, leaves.TXX], ordinarySegment);

    const pointStyle = {
      size: compact ? 2.1 : 2.7,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: "#ffffff",
      strokeWidth: 1.2,
      fixed: true,
      highlight: false,
      showInfobox: false,
      withLabel: false,
    };
    board.create("point", root, pointStyle);
    Object.values(dice).forEach((point) => board.create("point", point, pointStyle));
    Object.values(first).forEach((point) => board.create("point", point, pointStyle));

    const stageStyle = {
      color: COLORS.muted,
      fontSize: compact ? 9 : 11,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; font-weight: 600; white-space: nowrap;",
    };
    addTranslatedText([0.18, 8.57], "Elección", "Aukeraketa", stageStyle);
    addTranslatedText([3.55, 8.57], "1.ª tirada", "1. jaurtiketa", stageStyle);
    addTranslatedText([7.16, 8.57], "2.ª tirada", "2. jaurtiketa", stageStyle);

    const nodeStyle = {
      fontSize: compact ? 11 : 15,
      anchorX: "middle",
      anchorY: "bottom",
    };
    addTranslatedText([dice.N[0], dice.N[1] + 0.22], "N", "A", nodeStyle, true);
    addTranslatedText([dice.T[0], dice.T[1] + 0.22], "T", "T", nodeStyle, true);

    const outcomeStyle = {
      fontSize: compact ? 11 : 14,
      anchorX: "middle",
      anchorY: "bottom",
    };
    [first.N1, first.T1].forEach((point) => {
      createText([point[0], point[1] + 0.19], mathLabel("1"), { ...outcomeStyle, color: COLORS.accent });
    });
    [first.NX, first.TX].forEach((point) => {
      createText([point[0], point[1] + 0.19], mathLabel("\\ne 1"), outcomeStyle);
    });

    [leaves.N12, leaves.NX2, leaves.T12, leaves.TX2].forEach((point, index) => {
      createText([point[0] + 0.16, point[1]], mathLabel("2"), {
        fontSize: compact ? 10 : 13,
        color: index === 0 || index === 2 ? COLORS.accent : COLORS.ink,
      });
    });
    [leaves.N1X, leaves.NXX, leaves.T1X, leaves.TXX].forEach((point) => {
      createText([point[0] + 0.16, point[1]], mathLabel("\\ne 2"), {
        fontSize: compact ? 10 : 13,
      });
    });

    const probabilityStyle = {
      fontSize: compact ? 9 : 11,
      color: COLORS.muted,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; white-space: nowrap;",
      anchorX: "middle",
    };
    const probabilities = [
      [1.43, 5.27, "1/2"],
      [1.43, 2.83, "1/2"],
      [3.72, 7.12, "1/6"],
      [3.72, 5.69, "5/6"],
      [3.72, 2.36, "4/6"],
      [3.72, 0.93, "2/6"],
      [6.61, 7.99, "1/6"],
      [6.61, 7.19, "5/6"],
      [6.61, 5.63, "1/6"],
      [6.61, 4.83, "5/6"],
      [6.61, 3.24, "2/6"],
      [6.61, 2.44, "4/6"],
      [6.61, 0.88, "2/6"],
      [6.61, 0.08, "4/6"],
    ];
    probabilities.forEach(([x, y, value]) => createText([x, y], value, probabilityStyle));

    addTranslatedText([0.12, 3.78], "Inicio", "Hasiera", {
      ...stageStyle,
      anchorX: "left",
    });

    const eventLabelStyle = {
      fontSize: compact ? 10 : 12,
      color: COLORS.accent,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; font-weight: 600; white-space: nowrap;",
    };
    createText([8.78, 8.08], mathLabel("E"), eventLabelStyle);
    createText([8.78, 3.33], mathLabel("E"), eventLabelStyle);

    board.update();
    container.dataset.ready = "true";
    window.diceBayes2023Board = board;
  }

  function scheduleInit() {
    requestAnimationFrame(() => requestAnimationFrame(initGraph));
  }

  document.addEventListener("languagechange", updateTranslatedLabels);
  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button, .tab")) scheduleInit();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleInit, { once: true });
  } else {
    scheduleInit();
  }
})();

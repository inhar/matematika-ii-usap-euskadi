(() => {
  const BOARD_ID = "urn-transfer-2022-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#72756f",
    line: "#a7aaa4",
    accent: "#c95f3f",
  };

  let board;
  const translatedLabels = [];

  function language() {
    return document.documentElement.lang === "eu" ? "eu" : "es";
  }

  function mathLabel(latex) {
    if (!window.katex) return latex;
    return window.katex.renderToString(latex, {
      throwOnError: false,
      output: "html",
    });
  }

  function current(es, eu) {
    return language() === "eu" ? eu : es;
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
    const text = createText(position, format(current(es, eu)), options);
    translatedLabels.push({ text, es, eu, format });
    return text;
  }

  function updateTranslatedLabels() {
    translatedLabels.forEach(({ text, es, eu, format }) => {
      text.setText(format(current(es, eu)));
    });
    board?.update();
  }

  function showFallback(container) {
    container.textContent = language() === "eu"
      ? "Ezin izan da probabilitate-zuhaitza kargatu."
      : "No se ha podido cargar el árbol de probabilidades.";
    container.classList.add("urn-transfer-2022-board-error");
  }

  function initUrnTransfer2022Graph() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;
    if (container.clientWidth < 100) return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.25, 8.65, 11.15, -0.42],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const root = [0.65, 4.0];
    const urns = {
      T: [2.45, 6.4],
      R: [2.45, 1.6],
    };
    const first = {
      TW: [5.05, 7.6],
      TB: [5.05, 5.2],
      RW: [5.05, 2.8],
      RB: [5.05, 0.4],
    };
    const second = {
      TWW: [8.2, 8.1],
      TWB: [8.2, 7.1],
      TBW: [8.2, 5.7],
      TBB: [8.2, 4.7],
      RWW: [8.2, 3.3],
      RWB: [8.2, 2.3],
      RBW: [8.2, 0.9],
      RBB: [8.2, -0.1],
    };

    const firstStageStyle = {
      strokeColor: COLORS.line,
      strokeOpacity: 0.95,
      strokeWidth: 1.45,
      fixed: true,
      highlight: false,
    };
    Object.values(urns).forEach((point) => {
      board.create("segment", [root, point], firstStageStyle);
    });

    const whiteStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.95,
      strokeWidth: 2,
      fixed: true,
      highlight: false,
    };
    const blackStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.8,
      strokeWidth: 1.65,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [urns.T, first.TW], whiteStyle);
    board.create("segment", [urns.T, first.TB], blackStyle);
    board.create("segment", [urns.R, first.RW], whiteStyle);
    board.create("segment", [urns.R, first.RB], blackStyle);

    board.create("segment", [first.TW, second.TWW], whiteStyle);
    board.create("segment", [first.TW, second.TWB], blackStyle);
    board.create("segment", [first.TB, second.TBW], whiteStyle);
    board.create("segment", [first.TB, second.TBB], blackStyle);
    board.create("segment", [first.RW, second.RWW], whiteStyle);
    board.create("segment", [first.RW, second.RWB], blackStyle);
    board.create("segment", [first.RB, second.RBW], whiteStyle);
    board.create("segment", [first.RB, second.RBB], blackStyle);

    const pointStyle = {
      size: compact ? 2.2 : 2.8,
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
    Object.values(urns).forEach((point) => board.create("point", point, pointStyle));
    Object.values(first).forEach((point) => board.create("point", point, pointStyle));

    const stageStyle = {
      color: COLORS.muted,
      fontSize: compact ? 9 : 11,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; font-weight: 600; white-space: nowrap;",
    };
    addTranslatedText([0.25, 8.42], "Urna", "Urna", stageStyle);
    addTranslatedText([3.75, 8.42], "1.ª bola", "1. bola", stageStyle);
    addTranslatedText([7.35, 8.42], "2.ª bola", "2. bola", stageStyle);

    const nodeStyle = {
      fontSize: compact ? 12 : 16,
      anchorX: "middle",
      anchorY: "bottom",
    };
    createText([urns.T[0], urns.T[1] + 0.24], mathLabel("T"), nodeStyle);
    createText([urns.R[0], urns.R[1] + 0.24], mathLabel("R"), nodeStyle);

    const firstLabels = [
      [first.TW, "B_1", "Z_1", COLORS.accent],
      [first.TB, "N_1", "B_1", COLORS.ink],
      [first.RW, "B_1", "Z_1", COLORS.accent],
      [first.RB, "N_1", "B_1", COLORS.ink],
    ];
    firstLabels.forEach(([point, es, eu, color]) => {
      addTranslatedText([point[0], point[1] + 0.23], es, eu, {
        ...nodeStyle,
        color,
      }, true);
    });

    const terminalLabels = [
      [second.TWW, "B_2", "Z_2", COLORS.accent],
      [second.TWB, "N_2", "B_2", COLORS.ink],
      [second.TBW, "B_2", "Z_2", COLORS.accent],
      [second.TBB, "N_2", "B_2", COLORS.ink],
      [second.RWW, "B_2", "Z_2", COLORS.accent],
      [second.RWB, "N_2", "B_2", COLORS.ink],
      [second.RBW, "B_2", "Z_2", COLORS.accent],
      [second.RBB, "N_2", "B_2", COLORS.ink],
    ];
    terminalLabels.forEach(([point, es, eu, color]) => {
      addTranslatedText([point[0] + 0.18, point[1]], es, eu, {
        fontSize: compact ? 11 : 14,
        color,
      }, true);
    });

    const probabilityStyle = {
      fontSize: compact ? 10 : 12,
      color: COLORS.muted,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; white-space: nowrap;",
      anchorX: "middle",
    };
    const probabilities = [
      [1.42, 5.28, "1/2"],
      [1.42, 2.72, "1/2"],
      [3.72, 7.13, "6/10"],
      [3.72, 5.67, "4/10"],
      [3.72, 2.33, "3/10"],
      [3.72, 0.87, "7/10"],
      [6.62, 8.0, "4/11"],
      [6.62, 7.2, "7/11"],
      [6.62, 5.6, "3/11"],
      [6.62, 4.8, "8/11"],
      [6.62, 3.2, "7/11"],
      [6.62, 2.4, "4/11"],
      [6.62, 0.8, "6/11"],
      [6.62, 0.0, "5/11"],
    ];
    probabilities.forEach(([x, y, value]) => {
      createText([x, y], value, probabilityStyle);
    });

    addTranslatedText([0.05, 3.76], "Inicio", "Hasiera", {
      ...stageStyle,
      anchorX: "left",
    });

    board.update();
    container.dataset.ready = "true";
    window.urnTransfer2022Board = board;
  }

  document.addEventListener("languagechange", updateTranslatedLabels);
  document.addEventListener("click", (event) => {
    const button = event.target.closest?.(".level-button");
    if (button?.dataset.level && button.dataset.level !== "idea") {
      requestAnimationFrame(initUrnTransfer2022Graph);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUrnTransfer2022Graph, { once: true });
  } else {
    initUrnTransfer2022Graph();
  }
})();

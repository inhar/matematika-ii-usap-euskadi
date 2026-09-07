(() => {
  const BOARD_ID = "coin-tree-board";
  const COLORS = {
    ink: "#1b1b18",
    muted: "#72756f",
    line: "#969992",
    accent: "#c95f3f",
  };

  let board;
  const translatedLabels = [];

  function language() {
    return document.documentElement.lang === "eu" ? "eu" : "es";
  }

  function label(es, eu) {
    return language() === "eu" ? eu : es;
  }

  function showFallback(container) {
    container.textContent = language() === "eu"
      ? "Ezin izan da probabilitate-zuhaitza kargatu."
      : "No se ha podido cargar el árbol de probabilidades.";
    container.classList.add("coin-tree-board-error");
  }

  function addTranslatedText(position, es, eu, attributes) {
    const text = board.create("text", [position[0], position[1], label(es, eu)], attributes);
    translatedLabels.push({ text, es, eu });
    return text;
  }

  function updateTranslatedLabels() {
    translatedLabels.forEach(({ text, es, eu }) => {
      text.setText(label(es, eu));
    });
    board?.update();
  }

  function initCoinTree() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: [-0.2, 7.18, 10.65, -0.42],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const root = [0.6, 3.2];
    const coins = {
      R: [3.15, 5.72],
      L: [3.15, 3.2],
      M: [3.15, 0.68],
    };
    const outcomes = {
      RC: [7.25, 6.35],
      RX: [7.25, 5.08],
      LC: [7.25, 3.83],
      LX: [7.25, 2.57],
      MC: [7.25, 1.32],
      MX: [7.25, 0.05],
    };

    const firstBranchStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.58,
      strokeWidth: 1.45,
      fixed: true,
      highlight: false,
    };
    Object.values(coins).forEach((coin) => {
      board.create("segment", [root, coin], firstBranchStyle);
    });

    const headBranchStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.92,
      strokeWidth: 2,
      fixed: true,
      highlight: false,
    };
    const crossBranchStyle = {
      strokeColor: COLORS.line,
      strokeOpacity: 0.86,
      strokeWidth: 1.45,
      fixed: true,
      highlight: false,
    };
    board.create("segment", [coins.R, outcomes.RC], headBranchStyle);
    board.create("segment", [coins.R, outcomes.RX], crossBranchStyle);
    board.create("segment", [coins.L, outcomes.LC], headBranchStyle);
    board.create("segment", [coins.L, outcomes.LX], crossBranchStyle);
    board.create("segment", [coins.M, outcomes.MC], headBranchStyle);
    board.create("segment", [coins.M, outcomes.MX], crossBranchStyle);

    const pointStyle = {
      size: compact ? 2.5 : 3,
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
    Object.values(coins).forEach((coin) => board.create("point", coin, pointStyle));

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: compact ? 12 : 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
    };
    const mutedTextStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 10 : 11,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; font-weight: 600;",
    };

    addTranslatedText([0.45, 6.88], "1 · Moneda elegida", "1 · Aukeratutako txanpona", mutedTextStyle);
    addTranslatedText([5.65, 6.88], "2 · Resultado", "2 · Emaitza", mutedTextStyle);
    addTranslatedText([0.05, 3.0], "Inicio", "Hasiera", {
      ...mutedTextStyle,
      anchorX: "left",
    });

    board.create("text", [1.58, 4.68, "1/3"], textStyle);
    board.create("text", [1.72, 3.38, "1/3"], textStyle);
    board.create("text", [1.58, 1.76, "1/3"], textStyle);

    Object.entries(coins).forEach(([name, point]) => {
      board.create("text", [point[0], point[1] + 0.32, name], {
        ...textStyle,
        fontSize: compact ? 15 : 18,
        anchorX: "middle",
        anchorY: "bottom",
      });
    });

    const branchProbabilities = [
      [5.08, 6.16, "1/2"],
      [5.08, 5.15, "1/2"],
      [5.08, 3.65, "1"],
      [5.08, 2.64, "0"],
      [5.08, 1.14, "1/5"],
      [5.08, 0.13, "4/5"],
    ];
    branchProbabilities.forEach(([x, y, value]) => {
      board.create("text", [x, y, value], {
        ...textStyle,
        fontSize: compact ? 11 : 13,
      });
    });

    const outcomeTextStyle = {
      ...textStyle,
      fontSize: compact ? 12 : 15,
    };
    addTranslatedText([7.48, outcomes.RC[1]], "Cara (C)", "Aurpegia (C)", {
      ...outcomeTextStyle,
      color: COLORS.accent,
    });
    addTranslatedText([7.48, outcomes.RX[1]], "Cruz (X)", "Gurutzea (X)", outcomeTextStyle);
    addTranslatedText([7.48, outcomes.LC[1]], "Cara (C)", "Aurpegia (C)", {
      ...outcomeTextStyle,
      color: COLORS.accent,
    });
    addTranslatedText([7.48, outcomes.LX[1]], "Cruz (X)", "Gurutzea (X)", outcomeTextStyle);
    addTranslatedText([7.48, outcomes.MC[1]], "Cara (C)", "Aurpegia (C)", {
      ...outcomeTextStyle,
      color: COLORS.accent,
    });
    addTranslatedText([7.48, outcomes.MX[1]], "Cruz (X)", "Gurutzea (X)", outcomeTextStyle);

    board.update();
    container.dataset.ready = "true";
    window.coinTreeBoard = board;
  }

  document.addEventListener("languagechange", updateTranslatedLabels);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCoinTree, { once: true });
  } else {
    initCoinTree();
  }
})();

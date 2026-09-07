(() => {
  const BOARD_ID = "satisfaccion-sueldo-2020-board";
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

  function math(source) {
    if (!window.katex) return source;
    return window.katex.renderToString(source, {
      throwOnError: false,
      output: "htmlAndMathml",
    });
  }

  function showFallback(container) {
    container.textContent = language() === "eu"
      ? "Ezin izan da probabilitate-zuhaitza kargatu."
      : "No se ha podido cargar el árbol de probabilidades.";
    container.classList.add("salary-tree-board-error");
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

  function initSalaryTree() {
    const container = document.getElementById(BOARD_ID);
    if (!container || container.dataset.ready === "true") return;

    if (!window.JXG?.JSXGraph) {
      showFallback(container);
      return;
    }

    const compact = window.innerWidth <= 560;
    board = JXG.JSXGraph.initBoard(BOARD_ID, {
      boundingbox: compact ? [-0.15, 7.35, 8.75, -0.55] : [-0.2, 7.35, 10.1, -0.55],
      axis: false,
      keepaspectratio: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      keyboard: { enabled: false },
      resize: { enabled: true },
    });

    const root = [0.65, 3.35];
    const groups = {
      satisfied: [3.05, 5.25],
      notSatisfied: [3.05, 1.45],
    };
    const outcomes = {
      satisfiedMore: [6.35, 6.25],
      satisfiedLess: [6.35, 4.25],
      notSatisfiedMore: [6.35, 2.35],
      notSatisfiedLess: [6.35, 0.35],
    };

    const firstBranchStyle = {
      strokeColor: COLORS.ink,
      strokeOpacity: 0.62,
      strokeWidth: 1.6,
      fixed: true,
      highlight: false,
    };
    const moreBranchStyle = {
      strokeColor: COLORS.accent,
      strokeOpacity: 0.94,
      strokeWidth: 2.15,
      fixed: true,
      highlight: false,
    };
    const lessBranchStyle = {
      strokeColor: COLORS.line,
      strokeOpacity: 0.9,
      strokeWidth: 1.5,
      fixed: true,
      highlight: false,
    };

    board.create("segment", [root, groups.satisfied], firstBranchStyle);
    board.create("segment", [root, groups.notSatisfied], firstBranchStyle);
    board.create("segment", [groups.satisfied, outcomes.satisfiedMore], moreBranchStyle);
    board.create("segment", [groups.satisfied, outcomes.satisfiedLess], lessBranchStyle);
    board.create("segment", [groups.notSatisfied, outcomes.notSatisfiedMore], moreBranchStyle);
    board.create("segment", [groups.notSatisfied, outcomes.notSatisfiedLess], lessBranchStyle);

    const pointStyle = {
      size: compact ? 2.4 : 2.9,
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
    Object.values(groups).forEach((point) => board.create("point", point, pointStyle));

    const textStyle = {
      fixed: true,
      highlight: false,
      fontSize: compact ? 12 : 14,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif;",
      anchorX: "left",
      anchorY: "middle",
      useHTML: true,
    };
    const mutedTextStyle = {
      ...textStyle,
      color: COLORS.muted,
      fontSize: compact ? 9 : 11,
      cssStyle: "font-family: DM Sans, Arial, sans-serif; font-weight: 600;",
    };

    addTranslatedText([0.12, 7.05], "1 · Satisfacción", "1 · Gogobetetasuna", mutedTextStyle);
    addTranslatedText([4.65, 7.05], "2 · Sueldo", "2 · Soldata", mutedTextStyle);
    addTranslatedText([0.08, 3.03], "Persona", "Pertsona", {
      ...mutedTextStyle,
      anchorX: "left",
    });

    board.create("text", [1.55, 4.62, math("0{,}70")], textStyle);
    board.create("text", [1.55, 2.17, math("0{,}30")], textStyle);

    board.create("text", [groups.satisfied[0], groups.satisfied[1] + 0.34, math("S")], {
      ...textStyle,
      fontSize: compact ? 15 : 18,
      anchorX: "middle",
      anchorY: "bottom",
    });
    board.create("text", [groups.notSatisfied[0], groups.notSatisfied[1] - 0.34, math("S^c")], {
      ...textStyle,
      fontSize: compact ? 15 : 18,
      anchorX: "middle",
      anchorY: "top",
    });

    const branchProbabilities = [
      [4.6, 5.95, "0{,}80"],
      [4.6, 4.53, "0{,}20"],
      [4.6, 2.08, "0{,}20"],
      [4.6, 0.67, "0{,}80"],
    ];
    branchProbabilities.forEach(([x, y, value]) => {
      board.create("text", [x, y, math(value)], {
        ...textStyle,
        fontSize: compact ? 11 : 13,
      });
    });

    const outcomeStyle = {
      ...textStyle,
      fontSize: compact ? 12 : 15,
    };
    board.create("text", [6.58, outcomes.satisfiedMore[1], math("M")], {
      ...outcomeStyle,
      color: COLORS.accent,
    });
    board.create("text", [6.58, outcomes.satisfiedLess[1], math("M^c")], outcomeStyle);
    board.create("text", [6.58, outcomes.notSatisfiedMore[1], math("M")], {
      ...outcomeStyle,
      color: COLORS.accent,
    });
    board.create("text", [6.58, outcomes.notSatisfiedLess[1], math("M^c")], outcomeStyle);

    const salaryLabelX = compact ? 7.17 : 7.25;
    addTranslatedText([salaryLabelX, outcomes.satisfiedMore[1]], "> 1.000 €", "> 1.000 €", {
      ...outcomeStyle,
      color: COLORS.accent,
    });
    addTranslatedText([salaryLabelX, outcomes.satisfiedLess[1]], "< 1.000 €", "< 1.000 €", outcomeStyle);
    addTranslatedText([salaryLabelX, outcomes.notSatisfiedMore[1]], "> 1.000 €", "> 1.000 €", {
      ...outcomeStyle,
      color: COLORS.accent,
    });
    addTranslatedText([salaryLabelX, outcomes.notSatisfiedLess[1]], "< 1.000 €", "< 1.000 €", outcomeStyle);

    board.update();
    container.dataset.ready = "true";
    window.salarySatisfaction2020Board = board;
  }

  document.addEventListener("languagechange", updateTranslatedLabels);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSalaryTree, { once: true });
  } else {
    initSalaryTree();
  }
})();

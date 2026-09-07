(() => {
  const id = "cancer-2025-tree";
  let graph = null;
  const colors = {
    ink: "#1b1b18",
    muted: "#777872",
    line: "#b9bbb5",
    accent: "#c45f3f",
    blue: "#52758b",
    white: "#fff",
  };

  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function init() {
    const container = document.getElementById(id);
    if (!container || graph || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;

    const compact = window.innerWidth <= 560;
    const bounds = [-0.5, 7.35, 12.35, -7.35];
    const board = JXG.JSXGraph.initBoard(id, {
      boundingbox: bounds,
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
    const segment = (a, b, color = colors.line, width = 1.7) => board.create("segment", [a, b], {
      ...fixed,
      strokeColor: color,
      strokeWidth: width,
    });
    const dot = (point, color = colors.ink) => board.create("point", point, {
      ...fixed,
      size: compact ? 2.7 : 3.3,
      face: "o",
      fillColor: color,
      strokeColor: colors.white,
      strokeWidth: 1.2,
      withLabel: false,
      showInfobox: false,
      name: "",
    });
    const text = (x, y, source, overrides = {}) => board.create("text", [x, y, math(source)], {
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 9 : 12,
      color: overrides.color ?? colors.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: overrides.anchorX ?? "middle",
      anchorY: overrides.anchorY ?? "middle",
    });

    const root = [0.35, 0];
    const ages = [[4, 5], [4, 0], [4, -5]];
    const ends = [
      [[9.1, 6.2], [9.1, 3.8]],
      [[9.1, 1.2], [9.1, -1.2]],
      [[9.1, -3.8], [9.1, -6.2]],
    ];

    ages.forEach((point) => segment(root, point, colors.blue, 2));
    ends.forEach((pair, index) => {
      segment(ages[index], pair[0], colors.accent, 2.3);
      segment(ages[index], pair[1], colors.line, 1.7);
    });

    dot(root, colors.blue);
    ages.forEach((point) => dot(point, colors.blue));
    ends.flat().forEach((point, index) => dot(point, index % 2 === 0 ? colors.accent : colors.muted));

    text(0.35, 0.55, String.raw`\text{2024}`, { color: colors.muted });
    const ageNames = [String.raw`A:\,<45`, String.raw`B:\,45\text{-}65`, String.raw`C:\,>65`];
    const ageProbabilities = ["0{,}0556", "0{,}3467", "0{,}5977"];
    ages.forEach((point, index) => {
      const letter = String.fromCharCode(65 + index);
      text(point[0], point[1] + 0.55, ageNames[index]);
      text(point[0], point[1] - 0.58, `P(${letter})=${ageProbabilities[index]}`, { color: colors.muted });
    });

    const woman = ["0{,}6286", "0{,}4225", "0{,}3911"];
    const notWoman = ["0{,}3714", "0{,}5775", "0{,}6089"];
    ends.forEach((pair, index) => {
      const letter = String.fromCharCode(65 + index);
      text(9.42, pair[0][1] + 0.18, "M", { anchorX: "left", color: colors.accent });
      text(9.42, pair[0][1] - 0.42, `P(M|${letter})=${woman[index]}`, { anchorX: "left", color: colors.accent });
      text(9.42, pair[1][1] + 0.18, "M^c", { anchorX: "left", color: colors.muted });
      text(9.42, pair[1][1] - 0.42, `P(M^c|${letter})=${notWoman[index]}`, { anchorX: "left", color: colors.muted });
    });

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(400, width * 1.12) : Math.max(430, width * 0.58);
      board.resizeContainer(width, height);
      board.setBoundingBox(bounds, false);
      board.fullUpdate();
    };

    graph = { refresh };
    container.dataset.ready = "true";
    refresh();
  }

  function reveal() {
    requestAnimationFrame(() => {
      init();
      requestAnimationFrame(() => graph?.refresh());
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true });
  else reveal();
})();

(() => {
  const IDS = ["three-curves-2024-board-a", "three-curves-2024-board-b"];
  const BOUNDS = [-0.3, 4.15, 3.65, -0.45];
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#c7c8c3",
    accent: "#c95f3f",
    blue: "#55778d",
    area: "#edd8d0",
    white: "#fff",
  };
  const graphs = new Map();

  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function regionCoordinates() {
    const xs = [];
    const ys = [];
    for (let i = 0; i <= 40; i += 1) {
      const x = i / 40;
      xs.push(x); ys.push(x * x);
    }
    for (let i = 1; i <= 80; i += 1) {
      const x = 1 + 2 * i / 80;
      xs.push(x); ys.push(x);
    }
    for (let i = 80; i >= 0; i -= 1) {
      const x = 3 * i / 80;
      xs.push(x); ys.push(x * x / 3);
    }
    return [xs, ys];
  }

  function initOne(id) {
    const container = document.getElementById(id);
    if (!container || graphs.has(id) || !container.offsetParent || container.clientWidth < 100) return;
    if (!window.JXG?.JSXGraph || !window.katex) return;

    const compact = window.innerWidth <= 560;
    const board = JXG.JSXGraph.initBoard(id, {
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
    const axisStyle = { ...fixed, strokeColor: COLORS.muted, strokeOpacity: 0.85, strokeWidth: 1.2 };
    const tickStyle = { ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1 };
    const guideStyle = { ...fixed, strokeColor: COLORS.guide, strokeWidth: 1, dash: 2 };
    const textStyle = (overrides = {}) => ({
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 10 : 13,
      color: COLORS.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: "middle",
      anchorY: "middle",
      ...overrides,
    });

    const [regionX, regionY] = regionCoordinates();
    board.create("curve", [regionX, regionY], {
      ...fixed,
      strokeWidth: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.72,
    });

    board.create("line", [[-0.3, 0], [3.65, 0]], axisStyle);
    board.create("line", [[0, -0.45], [0, 4.15]], axisStyle);
    [1, 3].forEach((x) => {
      board.create("segment", [[x, -0.045], [x, 0.045]], tickStyle);
      board.create("text", [x, -0.17, math(String(x))], textStyle({ color: COLORS.muted, anchorY: "top" }));
    });
    [1, 3].forEach((y) => {
      board.create("segment", [[-0.045, y], [0.045, y]], tickStyle);
      board.create("text", [-0.08, y, math(String(y))], textStyle({ color: COLORS.muted, anchorX: "right" }));
    });

    if (id.endsWith("-b")) board.create("segment", [[1, 0], [1, 1]], guideStyle);

    board.create("functiongraph", [(x) => x * x, -0.3, 2.04], {
      ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.5 : 3,
    });
    board.create("functiongraph", [(x) => x * x / 3, -0.3, 3.55], {
      ...fixed, strokeColor: COLORS.blue, strokeWidth: compact ? 2.5 : 3,
    });
    board.create("functiongraph", [(x) => x, -0.3, 3.65], {
      ...fixed, strokeColor: COLORS.accent, strokeWidth: compact ? 2.5 : 3,
    });

    const pointStyle = {
      ...fixed,
      size: compact ? 3.3 : 4,
      face: "o",
      fillColor: COLORS.ink,
      strokeColor: COLORS.white,
      strokeWidth: 1.5,
      withLabel: false,
      showInfobox: false,
      name: "",
    };
    [[0, 0], [1, 1], [3, 3]].forEach((point) => board.create("point", point, pointStyle));

    board.create("text", [1.16, 2.62, math("y=x^2")], textStyle({ anchorX: "left", color: COLORS.ink }));
    board.create("text", [2.3, 2.62, math("y=x")], textStyle({ anchorX: "left", color: COLORS.accent }));
    board.create("text", [2.35, 1.62, math("y=\\frac{x^2}{3}")], textStyle({ anchorX: "left", color: COLORS.blue }));
    board.create("text", [1.42, 1.12, math("R")], textStyle({ color: COLORS.accent, fontSize: compact ? 16 : 21 }));
    board.create("text", [1.08, 0.88, math("(1,1)")], textStyle({ anchorX: "left", anchorY: "top" }));
    board.create("text", [2.92, 3.2, math("(3,3)")], textStyle({ anchorX: "right", anchorY: "bottom" }));
    board.create("text", [3.53, -0.18, math("x")], textStyle({ color: COLORS.muted }));
    board.create("text", [0.08, 4, math("y")], textStyle({ anchorX: "left", color: COLORS.muted }));

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(300, width * 0.92) : Math.max(390, width * 0.56);
      board.resizeContainer(width, height);
      board.setBoundingBox(BOUNDS, false);
      board.fullUpdate();
    };
    graphs.set(id, { refresh });
    container.dataset.ready = "true";
    refresh();
  }

  function reveal() {
    requestAnimationFrame(() => {
      IDS.forEach(initOne);
      requestAnimationFrame(() => graphs.forEach((graph) => graph.refresh()));
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest?.(".level-button,.tab")) reveal();
  });
  window.addEventListener("resize", reveal);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", reveal, { once: true });
  else reveal();
})();

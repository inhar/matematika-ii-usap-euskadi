(() => {
  const IDS = ["apnea-normal-2024-board-a", "apnea-normal-2024-board-b"];
  const BOUNDS = [19, 0.064, 72, -0.008];
  const MU = 45;
  const SIGMA = 7.3;
  const COLORS = {
    ink: "#1b1b18",
    muted: "#73756f",
    guide: "#bfc1bb",
    accent: "#c95f3f",
    area: "#ecd4ca",
  };
  const graphs = new Map();

  const density = (x) => Math.exp(-0.5 * ((x - MU) / SIGMA) ** 2) / (SIGMA * Math.sqrt(2 * Math.PI));
  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;

  function shadedArea(from, to) {
    const xs = [];
    const ys = [];
    for (let i = 0; i <= 140; i += 1) {
      const x = from + (to - from) * i / 140;
      xs.push(x); ys.push(density(x));
    }
    xs.push(to, from);
    ys.push(0, 0);
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
    const guide = { ...fixed, strokeColor: COLORS.guide, strokeWidth: 1, dash: 2 };
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

    const interval = id.endsWith("-a") ? [57, 72] : [39, 57];
    const [xs, ys] = shadedArea(interval[0], interval[1]);
    board.create("curve", [xs, ys], {
      ...fixed,
      strokeWidth: 0,
      fillColor: COLORS.area,
      fillOpacity: 0.84,
    });

    board.create("line", [[19, 0], [72, 0]], {
      ...fixed, strokeColor: COLORS.muted, strokeOpacity: 0.9, strokeWidth: 1.2,
    });
    board.create("segment", [[20, 0.05], [43.5, 0.05]], guide);
    board.create("text", [20.2, 0.05, math("0{,}05")], textStyle({ anchorX: "left", anchorY: "bottom", color: COLORS.muted }));

    const ticks = id.endsWith("-a") ? [45, 57] : [39, 45, 57];
    ticks.forEach((x) => {
      board.create("segment", [[x, -0.0012], [x, 0.0012]], {
        ...fixed, strokeColor: COLORS.muted, strokeWidth: 1.1,
      });
      board.create("text", [x, -0.003, math(String(x))], textStyle({ anchorY: "top", color: x === 45 ? COLORS.muted : COLORS.accent }));
    });
    board.create("segment", [[45, 0], [45, density(45)]], guide);
    interval.forEach((x) => board.create("segment", [[x, 0], [x, density(x)]], {
      ...guide, strokeColor: COLORS.accent,
    }));

    board.create("functiongraph", [density, 19, 72], {
      ...fixed, strokeColor: COLORS.ink, strokeWidth: compact ? 2.6 : 3.2,
    });
    board.create("text", [32, 0.033, math("f_X")], textStyle({ color: COLORS.ink, fontSize: compact ? 15 : 20 }));
    board.create("text", [70.4, -0.003, math("X\\,(s)")], textStyle({ anchorX: "right", anchorY: "top", color: COLORS.muted }));
    board.create("text", [45, 0.059, math("\\mu=45")], textStyle({ color: COLORS.muted }));
    board.create("text", id.endsWith("-a")
      ? [62, 0.012, math("P\\approx0{,}0505")]
      : [48, 0.022, math("P\\approx0{,}7434")],
    textStyle({ color: COLORS.accent, fontSize: compact ? 11 : 15 }));

    const refresh = () => {
      if (!container.offsetParent || container.clientWidth < 100) return;
      const width = container.clientWidth;
      const height = window.innerWidth <= 560 ? Math.max(280, width * 0.82) : Math.max(350, width * 0.5);
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

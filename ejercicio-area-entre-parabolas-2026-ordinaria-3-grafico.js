(() => {
  const id = "parabolas-2026-board";
  let graph;
  const c = {
    ink: "#1b1b18",
    muted: "#74756f",
    accent: "#c45f3f",
    blue: "#52758b",
    fill: "#ead9d1",
    white: "#fff",
  };

  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;
  const lower = (x) => 2 * x * x - 3 * x;
  const upper = (x) => 2 * x - x * x;
  const samples = (fn, a, b, n = 90) => Array.from(
    { length: n + 1 },
    (_, index) => {
      const x = a + ((b - a) * index) / n;
      return [x, fn(x)];
    },
  );

  function init() {
    const el = document.getElementById(id);
    if (!el || graph || !el.offsetParent || el.clientWidth < 100 || !window.JXG?.JSXGraph || !window.katex) return;

    const compact = innerWidth <= 560;
    const bounds = compact ? [-0.55, 2.35, 2.35, -1.75] : [-0.65, 2.5, 2.55, -1.9];
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
    const label = (x, y, source, options = {}) => board.create("text", [x, y, math(source)], {
      ...fixed,
      parse: false,
      useMathJax: false,
      fontSize: compact ? 10 : 13,
      color: options.color ?? c.ink,
      cssStyle: "font-family: Newsreader, Georgia, serif; letter-spacing: 0; white-space: nowrap;",
      anchorX: options.anchorX ?? "middle",
      anchorY: options.anchorY ?? "middle",
    });

    board.create("line", [[-0.48, 0], [2.42, 0]], {
      ...fixed,
      strokeColor: c.muted,
      strokeWidth: 1.35,
    });
    board.create("line", [[0, -1.65], [0, 2.35]], {
      ...fixed,
      strokeColor: c.muted,
      strokeWidth: 1.35,
    });
    board.create("polygon", [
      ...samples(upper, 0, 5 / 3),
      ...samples(lower, 5 / 3, 0),
    ], {
      ...fixed,
      withLines: false,
      fillColor: c.fill,
      fillOpacity: 0.82,
      vertices: { visible: false },
      borders: { visible: false },
    });
    board.create("functiongraph", [upper, bounds[0], bounds[2]], {
      ...fixed,
      strokeColor: c.blue,
      strokeWidth: compact ? 2.5 : 3,
    });
    board.create("functiongraph", [lower, bounds[0], bounds[2]], {
      ...fixed,
      strokeColor: c.ink,
      strokeWidth: compact ? 2.5 : 3,
    });

    const point = (position) => board.create("point", position, {
      ...fixed,
      size: compact ? 3.1 : 4,
      face: "o",
      fillColor: c.ink,
      strokeColor: c.white,
      strokeWidth: 1.5,
      withLabel: false,
      showInfobox: false,
      name: "",
    });
    point([0, 0]);
    point([5 / 3, 5 / 9]);

    board.create("segment", [[5 / 3, -0.08], [5 / 3, 0.08]], {
      ...fixed,
      strokeColor: c.muted,
      strokeWidth: 1.2,
    });
    label(5 / 3, -0.22, String.raw`\frac53`, { anchorY: "top", color: c.muted });
    label(0.14, 2.18, "y", { anchorX: "left", anchorY: "top", color: c.muted });
    label(2.25, -0.16, "x", { anchorX: "right", anchorY: "top", color: c.muted });

    label(0.58, 1.08, String.raw`y=2x-x^2`, { color: c.blue, anchorX: "left" });
    label(0.75, compact ? -1.38 : -1.42, String.raw`y=2x^2-3x`, {
      anchorX: "middle",
      anchorY: "top",
    });
    label(compact ? 1.53 : 1.56, compact ? 0.84 : 0.83, String.raw`\left(\frac53,\frac59\right)`, {
      anchorX: "right",
      anchorY: "bottom",
    });
    label(0.93, 0.16, "R", { anchorY: "bottom", color: c.accent });

    const refresh = () => {
      if (!el.offsetParent || el.clientWidth < 100) return;
      const width = el.clientWidth;
      const height = innerWidth <= 560 ? Math.max(310, width * 0.9) : Math.max(350, width * 0.56);
      board.resizeContainer(width, height);
      board.setBoundingBox(bounds, false);
      board.fullUpdate();
    };

    graph = { refresh };
    el.dataset.ready = "true";
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
  addEventListener("resize", reveal);
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", reveal, { once: true })
    : reveal();
})();

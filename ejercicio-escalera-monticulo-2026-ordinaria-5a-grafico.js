(() => {
  const id = "ladder-2026-board";
  let graph;
  const c = {
    ink: "#1b1b18",
    muted: "#74756f",
    guide: "#aaa9a4",
    accent: "#c45f3f",
    fill: "#efe6df",
    white: "#fff",
  };

  const math = (source) => window.katex
    ? window.katex.renderToString(source, { throwOnError: false, output: "html" })
    : source;
  const mound = (x) => 12 - (4 * x * x) / 3;
  const samples = (fn, a, b, n = 100) => Array.from(
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
    const bounds = [-4.25, 16.8, 4.65, -2.55];
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
    const verticalDimensionX = compact ? -0.68 : -0.45;
    const verticalDimensionLabelX = compact ? -0.84 : -0.58;
    const ordinateLabelX = compact ? 0.22 : 0.12;
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
    const guide = (from, to) => board.create("segment", [from, to], {
      ...fixed,
      strokeColor: c.guide,
      strokeWidth: 1,
      dash: 2,
    });

    board.create("line", [[-4.05, 0], [4.45, 0]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.35 });
    board.create("line", [[0, -2.1], [0, 16.35]], { ...fixed, strokeColor: c.muted, strokeWidth: 1.35 });
    board.create("polygon", [...samples(mound, -3, 3), [3, 0], [-3, 0]], {
      ...fixed,
      withLines: false,
      fillColor: c.fill,
      fillOpacity: 0.88,
      vertices: { visible: false },
      borders: { visible: false },
    });
    board.create("functiongraph", [mound, -3, 3], {
      ...fixed,
      strokeColor: c.ink,
      strokeWidth: compact ? 2.6 : 3.1,
    });
    board.create("segment", [[0, 15], [15 / 4, 0]], {
      ...fixed,
      strokeColor: c.accent,
      strokeWidth: compact ? 2.8 : 3.3,
    });

    // Las cotas se separan de la escalera, los puntos y las etiquetas de los ejes.
    guide([verticalDimensionX, 12], [-0.08, 12]);
    guide([verticalDimensionX, 15], [-0.08, 15]);
    board.create("segment", [[verticalDimensionX, 12], [verticalDimensionX, 15]], {
      ...fixed,
      strokeColor: c.accent,
      strokeWidth: 1.5,
      firstArrow: true,
      lastArrow: true,
    });

    guide([3, -0.08], [3, -1.35]);
    guide([15 / 4, -0.08], [15 / 4, -1.35]);
    board.create("segment", [[3, -1.35], [15 / 4, -1.35]], {
      ...fixed,
      strokeColor: c.accent,
      strokeWidth: 1.5,
      firstArrow: true,
      lastArrow: true,
    });

    const point = (position, size = 4) => board.create("point", position, {
      ...fixed,
      size: compact ? 3.1 : size,
      face: "o",
      fillColor: c.ink,
      strokeColor: c.white,
      strokeWidth: 1.5,
      withLabel: false,
      showInfobox: false,
      name: "",
    });
    point([0, 12]);
    point([0, 15]);
    point([1.5, 9]);
    point([15 / 4, 0]);

    label(ordinateLabelX, 12.12, String.raw`12`, { anchorX: "left", anchorY: "bottom", color: c.muted });
    label(ordinateLabelX, 15.18, String.raw`15`, { anchorX: "left", anchorY: "bottom", color: c.muted });
    label(verticalDimensionLabelX, 13.5, String.raw`3\ \mathrm m`, { anchorX: "right", color: c.accent });
    label(1.68, 9.25, String.raw`T\left(\frac32,9\right)`, { anchorX: "left", anchorY: "bottom" });
    label(2.75, 5.05, String.raw`y=-4x+15`, { color: c.accent, anchorX: "left" });
    label(-2.25, 7.1, String.raw`y=12-\frac43x^2`, { anchorX: "left" });

    label(compact ? 2.78 : 2.92, -0.2, "3", { anchorX: "right", anchorY: "top", color: c.muted });
    label(compact ? 3.97 : 3.83, -0.2, String.raw`\frac{15}{4}`, { anchorX: "left", anchorY: "top", color: c.accent });
    label(compact ? 2.9 : 3.375, -1.9, String.raw`\frac34\ \mathrm m`, {
      anchorX: compact ? "right" : "middle",
      color: c.accent,
    });
    label(4.42, -0.28, "x", { anchorX: "right", anchorY: "top", color: c.muted });
    label(0.13, 16.25, "y", { anchorX: "left", anchorY: "top", color: c.muted });

    const refresh = () => {
      if (!el.offsetParent || el.clientWidth < 100) return;
      const width = el.clientWidth;
      const height = innerWidth <= 560 ? Math.max(330, width * 0.95) : Math.max(380, width * 0.58);
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

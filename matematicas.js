(() => {
  const mathSelector = "[data-math], [data-math-eu], [data-math-es]";
  const renderOptions = {
    throwOnError: false,
    strict: false,
    trust: false,
    output: "htmlAndMathml",
  };

  function expressionFor(element) {
    const language = window.I18n?.getLanguage?.() ?? document.documentElement.lang ?? "eu";
    return element.dataset[`math${language[0].toUpperCase()}${language.slice(1)}`]
      ?? element.dataset.math;
  }

  function renderElement(element) {
    const expression = expressionFor(element);

    if (!expression || !window.katex) return;
    if (element.dataset.mathRendered === expression) return;

    window.katex.render(expression, element, {
      ...renderOptions,
      displayMode: element.hasAttribute("data-math-display"),
    });

    element.dataset.mathRendered = expression;
  }

  function isVisible(element) {
    return element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden";
  }

  function fitElement(element) {
    element.style.removeProperty("font-size");
    element.classList.remove("math-fitted");

    if (window.innerWidth > 640 || !isVisible(element)) return;

    const formula = element.hasAttribute("data-math-display")
      ? element.querySelector(":scope > .katex-display > .katex")
      : element.querySelector(":scope > .katex");

    if (!formula) return;

    const elementRect = element.getBoundingClientRect();
    const parentRect = element.parentElement?.getBoundingClientRect();
    const rightEdge = Math.min(
      document.documentElement.clientWidth - 16,
      parentRect?.right ?? document.documentElement.clientWidth - 16,
    );
    const availableWidth = rightEdge - elementRect.left;
    const formulaWidth = formula.getBoundingClientRect().width;

    if (availableWidth <= 0 || formulaWidth <= availableWidth + 1) return;

    const baseSize = Number.parseFloat(getComputedStyle(element).fontSize);
    const scale = Math.max(0.74, availableWidth / formulaWidth);

    element.style.fontSize = `${baseSize * scale}px`;
    element.classList.add("math-fitted");
  }

  function fitMath(root = document) {
    const elements = [];

    if (root instanceof Element && root.matches(mathSelector)) {
      elements.push(root);
    }

    root.querySelectorAll?.(mathSelector).forEach((element) => elements.push(element));
    elements.forEach(fitElement);
  }

  function scheduleMathFit(root = document) {
    requestAnimationFrame(() => fitMath(root));
  }

  function renderMath(root = document) {
    if (!window.katex) return;

    if (root instanceof Element && root.matches(mathSelector)) {
      renderElement(root);
    }

    root.querySelectorAll?.(mathSelector).forEach(renderElement);
    scheduleMathFit(root);
  }

  window.MathTypeset = { render: renderMath, fit: scheduleMathFit };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderMath());
  } else {
    renderMath();
  }

  document.addEventListener("languagechange", () => {
    requestAnimationFrame(() => renderMath());
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".tab, .level-button")) {
      requestAnimationFrame(() => scheduleMathFit());
    }
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => scheduleMathFit(), 100);
  });
})();

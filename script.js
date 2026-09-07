const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const levelButtons = document.querySelectorAll(".level-button");
const progressiveLayers = document.querySelectorAll(".progressive-layer");
const ideaViews = document.querySelectorAll(".idea-view");
const solutionViews = document.querySelectorAll(".solution-view");
const levelOrder = { essential: 0, detail: 1, theory: 2 };

function setResolutionLevel(level) {
  const showIdea = level === "idea";
  document.body.dataset.level = level;

  levelButtons.forEach((button) => {
    const isActive = button.dataset.level === level;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  ideaViews.forEach((view) => {
    view.hidden = !showIdea;
  });

  solutionViews.forEach((view) => {
    view.hidden = showIdea;
  });

  progressiveLayers.forEach((layer) => {
    layer.hidden = showIdea || levelOrder[level] < levelOrder[layer.dataset.minLevel];
  });
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setResolutionLevel(button.dataset.level);
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === target;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

setResolutionLevel("idea");

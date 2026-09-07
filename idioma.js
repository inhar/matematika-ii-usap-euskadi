(() => {
  const storageKey = "matematika-language";
  const supportedLanguages = new Set(["eu", "es"]);

  function readStoredLanguage() {
    try {
      const storedLanguage = window.localStorage.getItem(storageKey);
      return supportedLanguages.has(storedLanguage) ? storedLanguage : null;
    } catch {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // The current page still keeps the selected language in memory.
    }
  }

  const storedLanguage = readStoredLanguage();
  let currentLanguage = storedLanguage ?? "eu";
  let hasStoredLanguagePreference = storedLanguage !== null;
  let languagePrompt = null;

  function languageName(language) {
    return language === "eu" ? "Euskara" : "Castellano";
  }

  function updateLanguageControls() {
    document.querySelectorAll("[data-language-switch]").forEach((switcher) => {
      if (!switcher.children.length) {
        switcher.innerHTML = `
          <button type="button" data-language-option="eu">EU</button>
          <button type="button" data-language-option="es">ES</button>
        `;
      }

      switcher.setAttribute(
        "aria-label",
        currentLanguage === "eu" ? "Hizkuntza aldatu" : "Cambiar idioma",
      );
      switcher.setAttribute("role", "group");

      switcher.querySelectorAll("[data-language-option]").forEach((button) => {
        const optionLanguage = button.dataset.languageOption;
        const isActive = optionLanguage === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
        button.setAttribute("title", languageName(optionLanguage));
      });
    });
  }

  function closeLanguagePrompt() {
    [...document.body.children].forEach((element) => {
      if (element !== languagePrompt) element.inert = false;
    });
    languagePrompt?.remove();
    languagePrompt = null;
    document.body.classList.remove("language-prompt-open");
  }

  function setLanguage(language, { persist = true } = {}) {
    if (!supportedLanguages.has(language)) return;

    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    if (persist) {
      storeLanguage(language);
      hasStoredLanguagePreference = true;
    }

    updateLanguageControls();
    document.dispatchEvent(new CustomEvent("languagechange", {
      detail: { language },
    }));
  }

  function showLanguagePrompt() {
    languagePrompt = document.createElement("div");
    languagePrompt.className = "language-prompt";
    languagePrompt.innerHTML = `
      <div class="language-prompt-panel" role="dialog" aria-modal="true" aria-labelledby="language-prompt-title">
        <p class="language-prompt-kicker">Hizkuntza · Idioma</p>
        <h2 id="language-prompt-title">Aukeratu hizkuntza</h2>
        <p class="language-prompt-subtitle">Elige el idioma</p>
        <div class="language-prompt-options">
          <button type="button" data-language-choice="eu">Euskara</button>
          <button type="button" data-language-choice="es">Castellano</button>
        </div>
      </div>
    `;

    document.body.append(languagePrompt);
    [...document.body.children].forEach((element) => {
      if (element !== languagePrompt) element.inert = true;
    });
    document.body.classList.add("language-prompt-open");
    languagePrompt.querySelector('[data-language-choice="eu"]').focus();
  }

  document.addEventListener("click", (event) => {
    const switchOption = event.target.closest("[data-language-option]");
    if (switchOption) {
      setLanguage(switchOption.dataset.languageOption);
      closeLanguagePrompt();
      return;
    }

    const promptChoice = event.target.closest("[data-language-choice]");
    if (promptChoice) {
      setLanguage(promptChoice.dataset.languageChoice);
      closeLanguagePrompt();
    }
  });

  window.I18n = {
    getLanguage: () => currentLanguage,
    hasStoredLanguage: () => hasStoredLanguagePreference,
    setLanguage,
  };

  setLanguage(currentLanguage, { persist: false });

  if (storedLanguage === null) {
    showLanguagePrompt();
  }
})();

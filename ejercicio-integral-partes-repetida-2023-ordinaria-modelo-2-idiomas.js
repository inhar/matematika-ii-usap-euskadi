const repeatedParts2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio A4": "2023 · Ohikoa · 2. eredua · A4 ariketa",
  "Análisis · Integración por partes · 2023": "Analisia · Zatikako integrazioa · 2023",
  "Integración por partes aplicada dos veces": "Zatikako integrazioa bi aldiz",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A4": "A4 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Dos aplicaciones de la integración por partes": "Zatikako integrazioaren bi aplikazio",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Fórmula de integración por partes": "1. Zatikako integrazioaren formula",
  "3. Repetición del método": "3. Metodoa errepikatzea",
  "Resolución completa": "Ebazpen osoa",
  "Reconocemos el método": "Metodoa identifikatzen dugu",
  "Preparamos la primera integración por partes": "Lehen zatikako integrazioa prestatzen dugu",
  "Aplicamos la primera fórmula": "Lehen formula aplikatzen dugu",
  "Resolvemos la integral restante por partes": "Geratzen den integrala zatikako integrazioz ebazten dugu",
  "Reunimos y simplificamos los resultados": "Emaitzak elkartu eta sinplifikatzen ditugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalRepeatedParts2023Text = new WeakMap();

const repeatedParts2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".repeated-parts-2023-degree", attribute: "aria-label", eu: "Polinomioaren maila jaitsi egiten da deribatzean", es: "El grado del polinomio disminuye al derivarlo" },
];

function applyRepeatedParts2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalRepeatedParts2023Text.has(node)) {
      originalRepeatedParts2023Text.set(node, node.nodeValue);
    }

    const original = originalRepeatedParts2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && repeatedParts2023TextEu.has(key)) {
      const translation = repeatedParts2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + translation + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyRepeatedParts2023Language(language) {
  document.title = language === "eu"
    ? "Zatikako integrazioa bi aldiz · Matematika II"
    : "Integración por partes aplicada dos veces · Matemáticas II";

  applyRepeatedParts2023Text(language);

  document.querySelectorAll("[data-repeated-parts-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-repeated-parts-2023-language") !== language;
  });

  repeatedParts2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyRepeatedParts2023Language(event.detail.language);
});

applyRepeatedParts2023Language(window.I18n?.getLanguage() ?? "eu");

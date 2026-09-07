const rationalStudy2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio A3": "2024 · Ohikoa · A3 ariketa",
  "Análisis · Asíntotas, monotonía y tangente · 2024": "Analisia · Asintotak, monotonia eta ukitzailea · 2024",
  "Función racional con asíntota vertical": "Asintota bertikaldun funtzio arrazionala",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A3": "A3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Variación, asíntotas, tangente y gráfica": "Aldakuntza, asintotak, ukitzailea eta grafikoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Derivada y monotonía": "1. Deribatua eta monotonia",
  "2. Asíntotas de una función racional": "2. Funtzio arrazional baten asintotak",
  "3. Recta tangente": "3. Zuzen ukitzailea",
  "Resolución completa": "Ebazpen osoa",
  "Determinamos el dominio y la asíntota vertical": "Definizio-eremua eta asintota bertikala zehazten ditugu",
  "Calculamos la asíntota horizontal": "Asintota horizontala kalkulatzen dugu",
  "Calculamos la derivada": "Deribatua kalkulatzen dugu",
  "Estudiamos el signo y la monotonía": "Zeinua eta monotonia aztertzen ditugu",
  "Calculamos la tangente en": "Ukitzailea kalkulatzen dugu hemen:",
  "Reunimos la información para dibujar la gráfica": "Grafikoa marrazteko informazioa biltzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalRationalStudy2023Text = new WeakMap();

const rationalStudy2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".rational-study-2023-figure", attribute: "aria-label", eu: "Funtzio arrazionalaren, haren bi asintoten eta jatorriko ukitzailearen grafikoa", es: "Gráfica de la función racional, sus asíntotas y su tangente en el origen" },
  { selector: "#rational-study-2023-board", attribute: "aria-label", eu: "x zati x ken bat ber bi funtzioa, x berdin bat eta y berdin zero asintotak, eta y berdin x ukitzailea", es: "Función x partido por x menos uno al cuadrado, asíntotas x igual a uno e y igual a cero y tangente y igual a x" },
];

function applyRationalStudy2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalRationalStudy2023Text.has(node)) {
      originalRationalStudy2023Text.set(node, node.nodeValue);
    }

    const original = originalRationalStudy2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && rationalStudy2023TextEu.has(key)) {
      const translation = rationalStudy2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyRationalStudy2023Language(language) {
  document.title = language === "eu"
    ? "Funtzio arrazionala: asintotak eta monotonia · Matematika II"
    : "Función racional: asíntotas y monotonía · Matemáticas II";

  applyRationalStudy2023Text(language);

  document.querySelectorAll("[data-rational-study-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-rational-study-2023-language") !== language;
  });

  rationalStudy2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyRationalStudy2023Language(event.detail.language);
});

applyRationalStudy2023Language(window.I18n?.getLanguage() ?? "eu");

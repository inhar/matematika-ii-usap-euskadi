const quadratic2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio B3": "2023 · Ohikoa · B3 ariketa",
  "Análisis · Parámetros, monotonía y tangentes · 2023": "Analisia · Parametroak, monotonia eta ukitzaileak · 2023",
  "Parámetros de una función cuadrática": "Funtzio koadratiko baten parametroak",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B3": "B3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "De las condiciones a los parámetros": "Baldintzetatik parametroetara",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Monotonía y puntos estacionarios": "1. Monotonia eta puntu geldikorrak",
  "2. Tangentes y rectas perpendiculares": "2. Ukitzaileak eta zuzen perpendikularrak",
  "3. Límite trigonométrico fundamental": "3. Oinarrizko limite trigonometrikoa",
  "Resolución completa": "Ebazpen osoa",
  "Derivamos la función": "Funtzioa deribatzen dugu",
  "Traducimos la condición de monotonía": "Monotonia-baldintza itzultzen dugu",
  "Traducimos la perpendicularidad": "Perpendikulartasuna itzultzen dugu",
  "Resolvemos el sistema para": "Sistema ebazten dugu honetarako:",
  "y": "eta",
  "Calculamos": "Hau kalkulatzen dugu:",
  "con el límite": "limitearen bidez",
  "Comprobamos las condiciones": "Baldintzak egiaztatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalQuadratic2023Text = new WeakMap();

const quadratic2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".quadratic-2023-figure", attribute: "aria-label", eu: "Lortutako parabola, x berdin bi puntuko ukitzailea eta emandako zuzen perpendikularra", es: "Parábola obtenida, su tangente en x igual a dos y la recta perpendicular dada" },
  { selector: "#quadratic-2023-board", attribute: "aria-label", eu: "Ken erdi x ber bi gehi x gehi bat parabola, y berdin ken x gehi hiru ukitzailea eta y berdin x gehi bi zuzena", es: "Parábola menos un medio x cuadrado más x más uno, tangente y igual a menos x más tres y recta y igual a x más dos" },
];

function applyQuadratic2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalQuadratic2023Text.has(node)) {
      originalQuadratic2023Text.set(node, node.nodeValue);
    }

    const original = originalQuadratic2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && quadratic2023TextEu.has(key)) {
      const translation = quadratic2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyQuadratic2023Language(language) {
  document.title = language === "eu"
    ? "Funtzio koadratiko baten parametroak · Matematika II"
    : "Parámetros de una función cuadrática · Matemáticas II";

  applyQuadratic2023Text(language);

  document.querySelectorAll("[data-quadratic-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-quadratic-2023-language") !== language;
  });

  quadratic2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyQuadratic2023Language(event.detail.language);
});

applyQuadratic2023Language(window.I18n?.getLanguage() ?? "eu");

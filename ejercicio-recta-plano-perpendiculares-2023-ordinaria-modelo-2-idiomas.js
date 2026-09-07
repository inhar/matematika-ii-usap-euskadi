const planePerp2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio A2": "2023 · Ohikoa · 2. eredua · A2 ariketa",
  "Geometría en el espacio · Rectas y planos · 2023": "Espazioko geometria · Zuzenak eta planoak · 2023",
  "Plano y recta perpendicular": "Planoa eta zuzen perpendikularra",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A2": "A2 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Construcción del plano y de su perpendicular": "Planoaren eta haren perpendikularraren eraikuntza",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Cómo se determina un plano": "1. Nola zehazten den plano bat",
  "2. Producto vectorial y vector normal": "2. Biderkadura bektoriala eta bektore normala",
  "3. Ecuaciones de plano y recta perpendicular": "3. Planoaren eta zuzen perpendikularraren ekuazioak",
  "Resolución completa": "Ebazpen osoa",
  "Obtenemos dos direcciones del plano": "Planoaren bi norabide lortzen ditugu",
  "Calculamos un vector normal al plano": "Planoaren bektore normal bat kalkulatzen dugu",
  "Hallamos la ecuación del plano": "Planoaren ekuazioa aurkitzen dugu",
  "Hallamos la ecuación de la recta": "Zuzenaren ekuazioa aurkitzen dugu",
  "Comprobamos los datos del enunciado": "Enuntziatuko datuak egiaztatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalPlanePerp2023Text = new WeakMap();

const planePerp2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".plane-perp-2023-figure", attribute: "aria-label", eu: "x berdin 1 planoa, P eta Q puntuak, planoko bi bektore eta r zuzen perpendikularra", es: "Plano x igual a 1 con los puntos P y Q, dos vectores contenidos en el plano y la recta perpendicular r" },
  { selector: "#plane-perp-2023-board", attribute: "aria-label", eu: "x berdin 1 planoaren eta P puntuan ebakitzen duen zuzen perpendikularraren hiru dimentsioko irudikapena", es: "Representación tridimensional del plano x igual a 1 y la recta perpendicular que lo corta en P" },
];

function applyPlanePerp2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPlanePerp2023Text.has(node)) {
      originalPlanePerp2023Text.set(node, node.nodeValue);
    }

    const original = originalPlanePerp2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && planePerp2023TextEu.has(key)) {
      const translation = planePerp2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPlanePerp2023Language(language) {
  document.title = language === "eu"
    ? "Planoa eta zuzen perpendikularra · Matematika II"
    : "Plano y recta perpendicular · Matemáticas II";

  applyPlanePerp2023Text(language);

  document.querySelectorAll("[data-plane-perp-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-plane-perp-2023-language") !== language;
  });

  planePerp2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPlanePerp2023Language(event.detail.language);
});

applyPlanePerp2023Language(window.I18n?.getLanguage() ?? "eu");

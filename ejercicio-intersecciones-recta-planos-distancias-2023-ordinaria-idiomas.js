const intersections2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio B2": "2023 · Ohikoa · B2 ariketa",
  "Geometría en el espacio · Rectas, planos y distancias · 2023": "Espazioko geometria · Zuzenak, planoak eta distantziak · 2023",
  "Intersecciones de una recta con dos planos": "Zuzen baten eta bi planoren ebakidurak",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Intersecciones de la recta con los planos": "Zuzenaren eta planoen ebakidurak",
  "Distancia entre los puntos de corte": "Ebakidura-puntuen arteko distantzia",
  "Distancia de un punto a un plano": "Puntu batetik planorainoko distantzia",
  "Teoría necesaria": "Beharrezko teoria",
  "1. De ecuación continua a paramétrica": "1. Ekuazio jarraitutik parametrikora",
  "2. Intersección de una recta y un plano": "2. Zuzen baten eta plano baten ebakidura",
  "Distancia entre dos puntos": "Bi punturen arteko distantzia",
  "Distancia punto-plano": "Puntu-planoko distantzia",
  "Resolución completa": "Ebazpen osoa",
  "Parametrizamos la recta": "Zuzena parametrizatzen dugu",
  "Calculamos la intersección con": "Honekin duen ebakidura kalkulatzen dugu:",
  "Situamos los elementos del problema": "Problemaren elementuak kokatzen ditugu",
  "Construimos el vector entre los puntos": "Puntuen arteko bektorea eraikitzen dugu",
  "Calculamos su módulo": "Haren modulua kalkulatzen dugu",
  "Identificamos los datos de la fórmula": "Formulako datuak identifikatzen ditugu",
  "Sustituimos el punto": "Puntua ordezkatzen dugu:",
  "Racionalizamos el denominador": "Izendatzailea arrazionalizatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalIntersections2023Text = new WeakMap();

const intersections2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".intersections-2023-tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".intersections-2023-figure", attribute: "aria-label", eu: "Bi planoak P1 eta P2 puntuetan ebakitzen dituen zuzena", es: "Recta que corta dos planos en P1 y P2" },
  { selector: "#intersections-2023-board", attribute: "aria-label", eu: "Pi bat eta pi bi planoak, r zuzena, P1 eta P2 puntuak eta distantzia perpendikularra", es: "Planos pi uno y pi dos, recta r, puntos P1 y P2 y distancia perpendicular" },
];

function applyIntersections2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalIntersections2023Text.has(node)) {
      originalIntersections2023Text.set(node, node.nodeValue);
    }

    const original = originalIntersections2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && intersections2023TextEu.has(key)) {
      const translation = intersections2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyIntersections2023Language(language) {
  document.title = language === "eu"
    ? "Zuzenaren eta bi planoren arteko geometria · Matematika II"
    : "Intersecciones de una recta con dos planos · Matemáticas II";

  applyIntersections2023Text(language);

  document.querySelectorAll("[data-intersections-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-intersections-2023-language") !== language;
  });

  intersections2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyIntersections2023Language(event.detail.language);
});

applyIntersections2023Language(window.I18n?.getLanguage() ?? "eu");

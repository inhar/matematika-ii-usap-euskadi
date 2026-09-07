const system2024TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio A1": "2024 · Ohikoa · A1 ariketa",
  "Álgebra lineal · Sistemas con parámetro · 2024": "Aljebra lineala · Parametrodun sistemak · 2024",
  "Sistema con parámetro: dos valores excepcionales": "Parametrodun sistema: bi balio berezi",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Discusión": "Eztabaida",
  "Caso α = 1": "α = 1 kasua",
  "Idea de resolución": "Ebazpenaren ideia",
  "Clasificación del sistema según α": "Sistemaren sailkapena α-ren arabera",
  "Resolución para α = 1": "Ebazpena α = 1 denean",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Determinante y caso regular": "1. Determinantea eta kasu erregularra",
  "2. Teorema de Rouché-Frobenius": "2. Rouché-Frobeniusen teorema",
  "3. Rango mediante reducción por filas": "3. Heina errenkaden bidezko murrizketaz",
  "1. Operaciones elementales por filas": "1. Errenkaden oinarrizko eragiketak",
  "2. Sustitución hacia atrás": "2. Atzeranzko ordezkapena",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos las matrices del sistema": "Sistemaren matrizeak idazten ditugu",
  "Calculamos el determinante por la primera fila": "Determinantea lehen errenkadatik kalkulatzen dugu",
  "Simplificamos los tres menores": "Hiru minoreak sinplifikatzen ditugu",
  "Clasificamos el caso regular": "Kasu erregularra sailkatzen dugu",
  "Estudiamos α = 3": "α = 3 aztertzen dugu",
  "Estudiamos α = −1": "α = −1 aztertzen dugu",
  "Sustituimos α = 1": "α = 1 ordezkatzen dugu",
  "Reducimos la matriz ampliada": "Matrize hedatua murrizten dugu",
  "Calculamos z": "z kalkulatzen dugu",
  "Calculamos y": "y kalkulatzen dugu",
  "Calculamos x": "x kalkulatzen dugu",
  "Comprobamos la solución": "Soluzioa egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalSystem2024Text = new WeakMap();

const system2024Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".system-2024-tabs", attribute: "aria-label", eu: "Ebazpenaren zatiak", es: "Partes de la solución" },
];

function applySystem2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalSystem2024Text.has(node)) {
      originalSystem2024Text.set(node, node.nodeValue);
    }

    const original = originalSystem2024Text.get(node);
    const key = original.trim();

    if (language === "eu" && system2024TextEu.has(key)) {
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + system2024TextEu.get(key) + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applySystem2024Language(language) {
  document.title = language === "eu"
    ? "Parametrodun sistema: bi balio berezi · Matematika II"
    : "Sistema con parámetro: dos valores excepcionales · Matemáticas II";

  applySystem2024Text(language);

  document.querySelectorAll("[data-system-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-system-2024-language") !== language;
  });

  system2024Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applySystem2024Language(event.detail.language);
});

applySystem2024Language(window.I18n?.getLanguage() ?? "eu");

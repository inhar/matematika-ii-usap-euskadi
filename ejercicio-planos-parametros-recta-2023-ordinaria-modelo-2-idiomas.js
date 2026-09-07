const planesLine2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio A1": "2023 · Ohikoa · 2. eredua · A1 ariketa",
  "Geometría en el espacio · Posiciones relativas · 2023": "Espazioko geometria · Kokapen erlatiboak · 2023",
  "Tres planos con parámetros: ¿intersección en una recta?": "Parametrodun hiru plano: zuzen bateko ebakidura?",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A1": "A1 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Estudio de la intersección mediante el determinante": "Ebakiduraren azterketa determinantearen bidez",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Interpretación geométrica del rango": "1. Heinaren interpretazio geometrikoa",
  "2. Determinante y solución única": "2. Determinantea eta soluzio bakarra",
  "3. Qué papel desempeña cada parámetro": "3. Parametro bakoitzaren eginkizuna",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos las matrices del sistema": "Sistemaren matrizeak idazten ditugu",
  "Traducimos «cortarse en una recta»": "«Zuzen batean ebakitzea» matematikara itzultzen dugu",
  "Simplificamos el determinante": "Determinantea sinplifikatzen dugu",
  "Calculamos el determinante": "Determinantea kalkulatzen dugu",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalPlanesLine2023Text = new WeakMap();

const planesLine2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyPlanesLine2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPlanesLine2023Text.has(node)) {
      originalPlanesLine2023Text.set(node, node.nodeValue);
    }

    const original = originalPlanesLine2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && planesLine2023TextEu.has(key)) {
      const translation = planesLine2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPlanesLine2023Language(language) {
  document.title = language === "eu"
    ? "Parametrodun hiru plano: zuzen bateko ebakidura? · Matematika II"
    : "Tres planos con parámetros: ¿intersección en una recta? · Matemáticas II";

  applyPlanesLine2023Text(language);

  document.querySelectorAll("[data-planes-line-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-planes-line-2023-language") !== language;
  });

  planesLine2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPlanesLine2023Language(event.detail.language);
});

applyPlanesLine2023Language(window.I18n?.getLanguage() ?? "eu");

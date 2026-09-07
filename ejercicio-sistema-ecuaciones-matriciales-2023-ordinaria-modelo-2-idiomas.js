const matrixSystem2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio B1": "2023 · Ohikoa · 2. eredua · B1 ariketa",
  "Álgebra lineal · Operaciones con matrices · 2023": "Aljebra lineala · Matrize-eragiketak · 2023",
  "Sistema de ecuaciones matriciales": "Matrize-ekuazioen sistema",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B1": "B1 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Eliminación de incógnitas matriciales": "Matrize-ezezagunen ezabaketa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Las matrices forman un espacio vectorial": "1. Matrizeek bektore-espazio bat osatzen dute",
  "2. Es un sistema lineal de dos incógnitas": "2. Bi ezezaguneko sistema lineala da",
  "3. Eliminación por combinación lineal": "3. Konbinazio lineal bidezko ezabaketa",
  "Resolución completa": "Ebazpen osoa",
  "Abreviamos las matrices conocidas": "Matrize ezagunak laburtzen ditugu",
  "Eliminamos la matriz B": "B matrizea ezabatzen dugu",
  "Calculamos la matriz A": "A matrizea kalkulatzen dugu",
  "Despejamos y calculamos la matriz B": "B matrizea bakandu eta kalkulatzen dugu",
  "Comprobamos las dos igualdades": "Bi berdintzak egiaztatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalMatrixSystem2023Text = new WeakMap();

const matrixSystem2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyMatrixSystem2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalMatrixSystem2023Text.has(node)) {
      originalMatrixSystem2023Text.set(node, node.nodeValue);
    }

    const original = originalMatrixSystem2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && matrixSystem2023TextEu.has(key)) {
      const translation = matrixSystem2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyMatrixSystem2023Language(language) {
  document.title = language === "eu"
    ? "Matrize-ekuazioen sistema · Matematika II"
    : "Sistema de ecuaciones matriciales · Matemáticas II";

  applyMatrixSystem2023Text(language);

  document.querySelectorAll("[data-matrix-system-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-matrix-system-2023-language") !== language;
  });

  matrixSystem2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyMatrixSystem2023Language(event.detail.language);
});

applyMatrixSystem2023Language(window.I18n?.getLanguage() ?? "eu");

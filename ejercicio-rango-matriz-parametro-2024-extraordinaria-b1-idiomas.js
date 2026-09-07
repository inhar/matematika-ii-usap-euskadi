const rankExtra2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio B1": "2024 · Ezohikoa · B1 ariketa",
  "Álgebra lineal · Rango de matrices · 2024": "Aljebra lineala · Matrizeen heina · 2024",
  "Dos valores reducen el rango": "Bi baliok heina murrizten dute",
  "Enunciado": "Enuntziatua",
  "Calcula el rango de la matriz según el parámetro": "Kalkulatu matrizearen heina parametro honen arabera:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Rango de": "Honen heina:",
  "Idea de resolución": "Ebazpenaren ideia",
  "Buscamos un menor de orden tres y comprobamos sus excepciones": "Hirugarren ordenako minor bat bilatu eta salbuespenak egiaztatzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Rango mediante menores": "1. Heina minorren bidez",
  "2. Cómo se demuestra cada rango": "2. Hein bakoitza nola frogatzen den",
  "Resolución completa": "Ebazpen osoa",
  "Elegimos las columnas": "Zutabe hauek aukeratzen ditugu:",
  "Calculamos y factorizamos el menor": "Minorra kalkulatu eta faktorizatzen dugu",
  "Resolvemos el caso general": "Kasu orokorra ebazten dugu",
  "Comprobamos": "Egiaztatzen dugu:",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalRankExtra2024Text = new WeakMap();

function applyRankExtra2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalRankExtra2024Text.has(node)) originalRankExtra2024Text.set(node, node.nodeValue);
    const original = originalRankExtra2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && rankExtra2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + rankExtra2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}

function applyRankExtra2024Language(language) {
  document.title = language === "eu" ? "Parametrodun matrizearen heina · Matematika II" : "Rango de una matriz con parámetro · Matemáticas II";
  applyRankExtra2024Text(language);
  document.querySelectorAll("[data-rank-extra-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-rank-extra-2024-language") !== language;
  });
  document.querySelectorAll("[data-math-es][data-math-eu]").forEach((element) => {
    element.dataset.math = language === "eu" ? element.dataset.mathEu : element.dataset.mathEs;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
}

document.addEventListener("languagechange", (event) => applyRankExtra2024Language(event.detail.language));
applyRankExtra2024Language(window.I18n?.getLanguage() ?? "eu");

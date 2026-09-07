const threeCurvesExtra2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio B4": "2024 · Ezohikoa · B4 ariketa",
  "Análisis · Área entre curvas · 2024": "Analisia · Kurben arteko azalera · 2024",
  "Un recinto con dos bordes superiores": "Goiko bi muga dituen esparrua",
  "Enunciado": "Enuntziatua",
  "Se consideran las curvas siguientes:": "Hurrengo kurbak emanda:",
  "Dibuja el recinto del primer cuadrante limitado por ellas.": "Marraztu haiek mugatutako lehen koadranteko esparrua.",
  "Calcula el área de ese recinto.": "Kalkulatu esparru horren azalera.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "El recinto": "Esparrua",
  "El área": "Azalera",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Localizamos los tres vértices del recinto": "Esparruaren hiru erpinak kokatzen ditugu",
  "Dividimos el área donde cambia el borde superior": "Azalera goiko muga aldatzen den puntuan banatzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersección de dos curvas": "1. Bi kurbaren ebakidura",
  "2. Primer cuadrante": "2. Lehen koadrantea",
  "Área entre dos curvas": "Bi kurbaren arteko azalera",
  "Recinto por tramos": "Tartekako esparrua",
  "Resolución completa": "Ebazpen osoa",
  "Intersección de las dos parábolas": "Bi parabolen ebakidura",
  "Intersección de": "Honen ebakidura:",
  "con": "eta",
  "Planteamos las dos áreas": "Bi azalerak planteatzen ditugu",
  "Calculamos la primera parte": "Lehen zatia kalkulatzen dugu",
  "Calculamos la segunda parte": "Bigarren zatia kalkulatzen dugu",
  "Sumamos las dos partes": "Bi zatiak batzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalThreeCurvesExtra2024Text = new WeakMap();
function applyThreeCurvesExtra2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalThreeCurvesExtra2024Text.has(node)) originalThreeCurvesExtra2024Text.set(node, node.nodeValue);
    const original = originalThreeCurvesExtra2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && threeCurvesExtra2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + threeCurvesExtra2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyThreeCurvesExtra2024Language(language) {
  document.title = language === "eu" ? "Hiru kurbaren arteko azalera · Matematika II" : "Área entre tres curvas · Matemáticas II";
  applyThreeCurvesExtra2024Text(language);
  document.querySelectorAll("[data-three-curves-extra-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-three-curves-extra-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}
document.addEventListener("languagechange", (event) => applyThreeCurvesExtra2024Language(event.detail.language));
applyThreeCurvesExtra2024Language(window.I18n?.getLanguage() ?? "eu");

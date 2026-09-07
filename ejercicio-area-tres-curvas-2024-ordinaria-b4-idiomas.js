const threeCurves2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio B4": "2024 · Ohikoa · B4 ariketa",
  "Análisis · Áreas entre curvas · 2024": "Analisia · Kurben arteko azalerak · 2024",
  "Una región, dos integrales": "Esparru bat, bi integral",
  "Enunciado": "Enuntziatua",
  "Se consideran las curvas": "Kurba hauek emanda:",
  "Dibuja el recinto del primer cuadrante limitado por las tres curvas.": "Marraztu hiru kurbek lehen koadrantean mugatzen duten esparrua.",
  "Calcula el área de ese recinto.": "Kalkulatu esparru horren azalera.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Localizamos los cortes y recorremos la frontera": "Ebakidurak aurkitu eta muga jarraitzen dugu",
  "Separamos el área donde cambia la curva superior": "Azalera goiko kurba aldatzen den tokian banatzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersección de dos gráficas": "1. Bi grafikoren ebakidura",
  "2. Qué significa estar limitado por tres curvas": "2. Hiru kurbek mugatua izatearen esanahia",
  "1. Área entre dos curvas": "1. Bi kurbaren arteko azalera",
  "2. Cuándo hay que separar la integral": "2. Integrala noiz banatu behar den",
  "3. Regla de la potencia": "3. Berreturaren erregela",
  "Resolución completa": "Ebazpen osoa",
  "Cortamos": "Ebakidura kalkulatzen dugu:",
  "con": "eta",
  "Comprobamos el corte de las dos parábolas": "Bi parabolen ebakidura egiaztatzen dugu",
  "Identificamos los tres tramos de la frontera": "Mugaren hiru tarteak identifikatzen ditugu",
  "Calculamos el primer tramo": "Lehen tartea kalkulatzen dugu",
  "Calculamos el segundo tramo": "Bigarren tartea kalkulatzen dugu",
  "Sumamos las dos partes": "Bi zatiak batzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalThreeCurves2024Text = new WeakMap();

function applyThreeCurves2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalThreeCurves2024Text.has(node)) originalThreeCurves2024Text.set(node, node.nodeValue);
    const original = originalThreeCurves2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && threeCurves2024Eu.has(key)
      ? `${original.match(/^\s*/)?.[0] ?? ""}${threeCurves2024Eu.get(key)}${original.match(/\s*$/)?.[0] ?? ""}`
      : original;
  }
}

function applyThreeCurves2024Language(language) {
  document.title = language === "eu" ? "Hiru kurbaren arteko azalera · Matematika II" : "Área entre tres curvas · Matemáticas II";
  applyThreeCurves2024Text(language);
  document.querySelectorAll("[data-three-curves-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-three-curves-2024-language") !== language;
  });
  document.querySelectorAll("[data-math-es][data-math-eu]").forEach((element) => {
    element.dataset.math = language === "eu" ? element.dataset.mathEu : element.dataset.mathEs;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applyThreeCurves2024Language(event.detail.language));
applyThreeCurves2024Language(window.I18n?.getLanguage() ?? "eu");

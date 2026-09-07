const area2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio A4": "2023 · Ohikoa · A4 ariketa",
  "Análisis · Integrales y áreas · 2023": "Analisia · Integralak eta azalerak · 2023",
  "Área limitada por tres curvas": "Hiru kurbek mugatutako azalera",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A4": "A4 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Representación y cálculo del área": "Irudikapena eta azaleraren kalkulua",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersección de dos gráficas": "1. Bi grafikoren ebakidura",
  "2. Área entre dos curvas": "2. Bi kurbaren arteko azalera",
  "3. Primitivas necesarias": "3. Beharrezko primitiboak",
  "Resolución completa": "Ebazpen osoa",
  "Localizamos el cambio de la frontera superior": "Goiko mugaren aldaketa kokatzen dugu",
  "Localizamos el extremo derecho del recinto": "Esparruaren eskuineko muturra kokatzen dugu",
  "Representamos y dividimos el recinto": "Esparrua irudikatu eta banatzen dugu",
  "Calculamos la primera parte": "Lehenengo zatia kalkulatzen dugu",
  "Calculamos la segunda parte": "Bigarren zatia kalkulatzen dugu",
  "Sumamos las dos áreas": "Bi azalerak batzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalArea2023Text = new WeakMap();

const area2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".area-2023-figure", attribute: "aria-label", eu: "Lehenengo koadranteko esparrua, parabola, hiperbola eta zuzen horizontal batek mugatua", es: "Recinto del primer cuadrante limitado por una parábola, una hipérbola y una recta horizontal" },
  { selector: "#area-2023-board", attribute: "aria-label", eu: "x ber bi zati lau, lau zati x ber bi eta lau kurben arteko esparru itzalduna", es: "Recinto sombreado entre y igual a x cuadrado partido por cuatro, y igual a cuatro partido por x cuadrado e y igual a cuatro" },
];

function applyArea2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalArea2023Text.has(node)) {
      originalArea2023Text.set(node, node.nodeValue);
    }

    const original = originalArea2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && area2023TextEu.has(key)) {
      const translation = area2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyArea2023Language(language) {
  document.title = language === "eu"
    ? "Parabola, hiperbola eta zuzenaren arteko azalera · Matematika II"
    : "Área limitada por tres curvas · Matemáticas II";

  applyArea2023Text(language);

  document.querySelectorAll("[data-area-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-area-2023-language") !== language;
  });

  area2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyArea2023Language(event.detail.language);
});

applyArea2023Language(window.I18n?.getLanguage() ?? "eu");

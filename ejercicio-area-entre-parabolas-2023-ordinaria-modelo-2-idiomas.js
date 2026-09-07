const areaParabolasM22023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio B4": "2023 · Ohikoa · 2. eredua · B4 ariketa",
  "Análisis · Área entre curvas · 2023": "Analisia · Kurben arteko azalera · 2023",
  "Área entre dos parábolas": "Bi parabolaren arteko azalera",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B4": "B4 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Representación y cálculo del recinto": "Esparruaren irudikapena eta azalera",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Puntos de corte y límites de integración": "1. Ebakidura-puntuak eta integrazio-mugak",
  "2. Área entre dos curvas": "2. Bi kurben arteko azalera",
  "3. Regla de Barrow": "3. Barrow-en erregela",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos las dos parábolas": "Bi parabolak identifikatzen ditugu",
  "Hallamos las abscisas de intersección": "Ebakidura-abzisak aurkitzen ditugu",
  "Calculamos los puntos de corte completos": "Ebakidura-puntu osoak kalkulatzen ditugu",
  "Determinamos qué parábola queda arriba": "Goian zein parabola dagoen zehazten dugu",
  "Planteamos la integral del área": "Azaleraren integrala planteatzen dugu",
  "Calculamos la integral sin saltos": "Integrala pausoz pauso kalkulatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalAreaParabolasM22023Text = new WeakMap();

const areaParabolasM22023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".area-parabolas-m2-2023-figure", attribute: "aria-label", eu: "Bi parabolak mugatutako esparrua", es: "Recinto limitado por dos parábolas" },
  { selector: "#area-parabolas-m2-2023-board", attribute: "aria-label", eu: "Bi parabola eta zero eta bi artean koloreztatutako esparrua", es: "Dos parábolas y el recinto comprendido entre cero y dos sombreado" },
];

function applyAreaParabolasM22023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalAreaParabolasM22023Text.has(node)) {
      originalAreaParabolasM22023Text.set(node, node.nodeValue);
    }

    const original = originalAreaParabolasM22023Text.get(node);
    const key = original.trim();

    if (language === "eu" && areaParabolasM22023TextEu.has(key)) {
      const translation = areaParabolasM22023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + translation + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyAreaParabolasM22023Language(language) {
  document.title = language === "eu"
    ? "Bi parabolaren arteko azalera · Matematika II"
    : "Área entre dos parábolas · Matemáticas II";

  applyAreaParabolasM22023Text(language);

  document.querySelectorAll("[data-area-parabolas-m2-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-area-parabolas-m2-2023-language") !== language;
  });

  areaParabolasM22023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyAreaParabolasM22023Language(event.detail.language);
});

applyAreaParabolasM22023Language(window.I18n?.getLanguage() ?? "eu");

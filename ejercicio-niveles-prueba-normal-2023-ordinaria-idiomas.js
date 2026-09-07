const levelsNormal2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio B5": "2023 · Ohikoa · B5 ariketa",
  "Probabilidad · Distribución normal · 2023": "Probabilitatea · Banaketa normala · 2023",
  "Clasificación por niveles en una prueba": "Proba bateko mailen araberako sailkapena",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Clasificación de la nota 85,5": "85,5 notaren sailkapena",
  "Clasificación de la nota 48": "48 notaren sailkapena",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Percentiles y puntos de corte": "1. Pertzentilak eta ebaketa-puntuak",
  "2. Tipificación y transformación inversa": "2. Tipifikazioa eta alderantzizko transformazioa",
  "3. Lectura de la tabla normal": "3. Taula normalaren irakurketa",
  "1. El percentil inferior": "1. Beheko pertzentila",
  "2. Simetría de la normal estándar": "2. Normal estandarraren simetria",
  "3. Deshacer la tipificación": "3. Tipifikazioa desegitea",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos el modelo": "Eredua identifikatzen dugu",
  "Traducimos el nivel avanzado a una probabilidad acumulada": "Maila aurreratua probabilitate metatu bihurtzen dugu",
  "Identificamos el punto de corte": "Ebaketa-puntua identifikatzen dugu",
  "Buscamos el valor tipificado": "Balio tipifikatua bilatzen dugu",
  "Deshacemos la tipificación": "Tipifikazioa desegiten dugu",
  "Comparamos la nota con el punto de corte": "Nota ebaketa-puntuarekin alderatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalLevelsNormal2023Text = new WeakMap();

const levelsNormal2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: "#levels-normal-2023-part-a .levels-normal-2023-figure", attribute: "aria-label", eu: "Hiru mailatan banatutako banaketa normala, 85,5 nota markatuta", es: "Distribución normal dividida en tres niveles con la nota 85,5 señalada" },
  { selector: "#levels-normal-2023-score-a-board", attribute: "aria-label", eu: "Kanpai normala hasierako, erdiko eta maila aurreratuarekin, eta 85,5 nota maila aurreratuan", es: "Campana normal con los niveles inicial, medio y avanzado y la nota 85,5 en el nivel avanzado" },
  { selector: "#levels-normal-2023-part-b .levels-normal-2023-figure", attribute: "aria-label", eu: "Hiru mailatan banatutako banaketa normala, 48 nota markatuta", es: "Distribución normal dividida en tres niveles con la nota 48 señalada" },
  { selector: "#levels-normal-2023-score-b-board", attribute: "aria-label", eu: "Kanpai normala hasierako, erdiko eta maila aurreratuarekin, eta 48 nota hasierako mailan", es: "Campana normal con los niveles inicial, medio y avanzado y la nota 48 en el nivel inicial" },
];

function applyLevelsNormal2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalLevelsNormal2023Text.has(node)) {
      originalLevelsNormal2023Text.set(node, node.nodeValue);
    }

    const original = originalLevelsNormal2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && levelsNormal2023TextEu.has(key)) {
      const translation = levelsNormal2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyLevelsNormal2023Language(language) {
  document.title = language === "eu"
    ? "Banaketa normala: mailen araberako sailkapena · Matematika II"
    : "Distribución normal: clasificación por niveles · Matemáticas II";

  applyLevelsNormal2023Text(language);

  document.querySelectorAll("[data-levels-normal-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-levels-normal-2023-language") !== language;
  });

  levelsNormal2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyLevelsNormal2023Language(event.detail.language);
});

applyLevelsNormal2023Language(window.I18n?.getLanguage() ?? "eu");

const rationalStudy2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio A3": "2023 · Ohikoa · 2. eredua · A3 ariketa",
  "Análisis · Monotonía, asíntotas y tangente · 2023": "Analisia · Monotonia, asintotak eta ukitzailea · 2023",
  "Estudio de una función racional": "Funtzio arrazional baten azterketa",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A3": "A3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Variación, asíntotas, tangente y gráfica": "Aldakuntza, asintotak, ukitzailea eta grafikoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Derivada y monotonía": "1. Deribatua eta monotonia",
  "2. Asíntotas de una función racional": "2. Funtzio arrazional baten asintotak",
  "3. Recta tangente": "3. Zuzen ukitzailea",
  "Resolución completa": "Ebazpen osoa",
  "Determinamos el dominio y calculamos la derivada": "Definizio-eremua zehaztu eta deribatua kalkulatzen dugu",
  "Hallamos los puntos críticos y estudiamos el signo": "Puntu kritikoak aurkitu eta zeinua aztertzen dugu",
  "Calculamos los extremos que ayudan a dibujar la gráfica": "Grafikoa marrazten laguntzen duten muturrak kalkulatzen ditugu",
  "Estudiamos las asíntotas": "Asintotak aztertzen ditugu",
  "Calculamos la tangente en": "Ukitzailea kalkulatzen dugu hemen:",
  "Reunimos la información para dibujar la gráfica": "Grafikoa marrazteko informazioa biltzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalRationalStudy2023Text = new WeakMap();

const rationalStudy2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".rational-study-2023-figure", attribute: "aria-label", eu: "Funtzio arrazionalaren, haren asintota horizontalaren eta jatorriko ukitzailearen grafikoa", es: "Gráfica de la función racional, su asíntota horizontal y su tangente en el origen" },
  { selector: "#rational-study-2023-board", attribute: "aria-label", eu: "x zati x ber bi gehi bat funtzioa, y berdin zero asintota eta y berdin x ukitzailea", es: "Función x partido por x al cuadrado más uno, asíntota y igual a cero y tangente y igual a x" },
];

function applyRationalStudy2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalRationalStudy2023Text.has(node)) {
      originalRationalStudy2023Text.set(node, node.nodeValue);
    }

    const original = originalRationalStudy2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && rationalStudy2023TextEu.has(key)) {
      const translation = rationalStudy2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyRationalStudy2023Language(language) {
  document.title = language === "eu"
    ? "Funtzio arrazional baten azterketa · Matematika II"
    : "Estudio de una función racional · Matemáticas II";

  applyRationalStudy2023Text(language);

  document.querySelectorAll("[data-rational-study-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-rational-study-2023-language") !== language;
  });

  rationalStudy2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyRationalStudy2023Language(event.detail.language);
});

applyRationalStudy2023Language(window.I18n?.getLanguage() ?? "eu");

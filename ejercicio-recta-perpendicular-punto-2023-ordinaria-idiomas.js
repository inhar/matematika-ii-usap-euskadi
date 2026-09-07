const perpendicular2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio A2": "2023 · Ohikoa · A2 ariketa",
  "Geometría en el espacio · Rectas perpendiculares · 2023": "Espazioko geometria · Zuzen perpendikularrak · 2023",
  "Recta paramétrica y perpendicular desde un punto": "Zuzen parametrikoa eta puntu batetik trazatutako perpendikularra",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A2": "A2 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "De ecuaciones cartesianas a dos rectas perpendiculares": "Ekuazio kartesiarretatik bi zuzen perpendikularretara",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersección de dos planos": "1. Bi planoren ebakidura",
  "Dos ecuaciones lineales independientes con tres incógnitas dejan una variable libre. Su conjunto de soluciones es una recta, y la variable libre actúa como parámetro.": "Hiru ezezaguneko bi ekuazio lineal independentek aldagai aske bat uzten dute. Haien soluzio multzoa zuzen bat da, eta aldagai askeak parametro gisa jokatzen du.",
  "2. Ecuación paramétrica de una recta": "2. Zuzen baten ekuazio parametrikoa",
  "Una recta queda determinada por uno de sus puntos y un vector director no nulo. Cada valor del parámetro produce uno de sus puntos.": "Zuzen bat haren puntu batek eta zero ez den norabide-bektore batek zehazten dute. Parametroaren balio bakoitzak zuzeneko puntu bat ematen du.",
  "3. Perpendicularidad de vectores": "3. Bektoreen perpendikulartasuna",
  "Dos vectores no nulos son perpendiculares exactamente cuando su producto escalar es cero.": "Zero ez diren bi bektore perpendikularrak dira baldin eta soilik baldin haien biderkadura eskalarra zero bada.",
  "4. Pie de la perpendicular": "4. Perpendikularraren oina",
  "Resolución completa": "Ebazpen osoa",
  "Eliminamos una incógnita entre las dos ecuaciones": "Ezezagun bat bi ekuazioen artean ezabatzen dugu",
  "Parametrizamos la recta": "Zuzena parametrizatzen dugu:",
  "Representamos el punto de corte sobre": "Ebakidura-puntua zuzen honetan adierazten dugu:",
  "Imponemos la perpendicularidad": "Perpendikulartasuna ezartzen dugu",
  "Hallamos el punto": "Puntua kalkulatzen dugu:",
  "y la nueva dirección": "eta norabide berria",
  "Escribimos y comprobamos la recta pedida": "Eskatutako zuzena idatzi eta egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalPerpendicular2023Text = new WeakMap();

const perpendicular2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".perpendicular-2023-figure", attribute: "aria-label", eu: "r eta s zuzen perpendikularrak z berdin zero planoan", es: "Rectas r y s perpendiculares en el plano z igual a cero" },
  { selector: "#perpendicular-2023-board", attribute: "aria-label", eu: "r eta s zuzen perpendikularrak, kanpoko P puntua eta Q oina", es: "Rectas r y s perpendiculares, punto exterior P y pie Q" },
];

function applyPerpendicular2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPerpendicular2023Text.has(node)) {
      originalPerpendicular2023Text.set(node, node.nodeValue);
    }

    const original = originalPerpendicular2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && perpendicular2023TextEu.has(key)) {
      const translation = perpendicular2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPerpendicular2023Language(language) {
  document.title = language === "eu"
    ? "Zuzen parametrikoa eta perpendikularra · Matematika II"
    : "Recta paramétrica y perpendicular desde un punto · Matemáticas II";

  applyPerpendicular2023Text(language);

  document.querySelectorAll("[data-perpendicular-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-perpendicular-2023-language") !== language;
  });

  perpendicular2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPerpendicular2023Language(event.detail.language);
});

applyPerpendicular2023Language(window.I18n?.getLanguage() ?? "eu");

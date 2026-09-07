const reflection2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio B2": "2022 · Ohikoa · B2 ariketa",
  "Geometría en el espacio · Simetría y proyecciones · 2022": "Espazioko geometria · Simetria eta proiekzioak · 2022",
  "Simétrico de un punto respecto de un plano": "Puntu baten simetrikoa plano batekiko",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B2": "B2 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "El punto buscado está al otro lado del plano, sobre la perpendicular que pasa por": "Bilatutako puntua planoaren beste aldean dago, puntu honetatik igarotzen den perpendikularrean:",
  ", y a la misma distancia de él. La dirección de esa perpendicular es el vector normal del plano.": ", eta planotik distantzia berean. Perpendikular horren norabidea planoaren bektore normala da.",
  "Primero cortaremos esa recta perpendicular con el plano para obtener": "Lehenik, zuzen perpendikular hori planoarekin ebakiko dugu puntu hau lortzeko:",
  ". Este punto es la proyección ortogonal de": ". Puntu hori honen proiekzio ortogonala da:",
  "y también el punto medio entre": "eta, halaber, honen arteko erdiko puntua:",
  "y su simétrico": "eta haren simetrikoa",
  ". Por eso, una vez conocido": ". Horregatik, puntu hau ezagutu ondoren:",
  ", basta aplicar": ", nahikoa da hau aplikatzea:",
  "Reflejamos el punto en el plano": "Puntua planoarekiko islatzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Vector normal de un plano": "1. Plano baten bektore normala",
  "En la ecuación general de un plano, los coeficientes de": "Plano baten ekuazio orokorrean, aldagai hauen koefizienteek:",
  "y": "eta",
  "forman un vector perpendicular al plano.": "planoarekiko perpendikularra den bektore bat osatzen dute.",
  "2. Recta perpendicular a un plano": "2. Plano batekiko zuzen perpendikularra",
  "La recta perpendicular a un plano que pasa por un punto utiliza como vector director el vector normal del plano.": "Puntu batetik igarotzen den planoarekiko zuzen perpendikularrak planoaren bektore normala erabiltzen du norabide-bektore gisa.",
  "3. Proyección ortogonal": "3. Proiekzio ortogonala",
  "La proyección ortogonal": "Proiekzio ortogonala,",
  "se obtiene intersecando el plano con la recta perpendicular que parte de": "planoa eta puntu honetatik abiatzen den zuzen perpendikularra ebakiz lortzen da:",
  ". Así se garantizan simultáneamente las dos condiciones necesarias.": ". Horrela, beharrezko bi baldintzak aldi berean bermatzen dira.",
  "4. Simetría respecto de un plano": "4. Plano batekiko simetria",
  "El plano es la mediatriz espacial del segmento que une un punto con su simétrico. Por tanto, la proyección": "Planoa puntu bat eta haren simetrikoa lotzen dituen segmentuaren erdibitzaile espaziala da. Beraz, proiekzioa,",
  "es el punto medio de": "hauen erdiko puntua da:",
  "y": "eta",
  "Resolución completa": "Ebazpen osoa",
  "Leemos el vector normal del plano": "Planoaren bektore normala irakurtzen dugu",
  "Tomamos los coeficientes de las tres variables en la ecuación de": "Hiru aldagaien koefizienteak hartzen ditugu plano honen ekuazioan:",
  "Escribimos la perpendicular que pasa por el punto": "Puntutik igarotzen den perpendikularra idazten dugu",
  "La recta": "Zuzena,",
  "pasa por": "puntu honetatik igarotzen da:",
  "y tiene la dirección del vector normal.": "eta bektore normalaren norabidea du.",
  "Buscamos el corte de la recta con el plano": "Zuzenaren eta planoaren ebakidura bilatzen dugu",
  "Sustituimos las coordenadas de la recta en la ecuación del plano. El valor obtenido sitúa el punto de corte": "Zuzenaren koordenatuak planoaren ekuazioan ordezkatzen ditugu. Lortutako balioak ebakidura-puntua kokatzen du:",
  "Calculamos la proyección ortogonal": "Proiekzio ortogonala kalkulatzen dugu",
  "Sustituimos": "Hau ordezkatzen dugu:",
  "en las tres ecuaciones de la recta.": "zuzenaren hiru ekuazioetan.",
  "Usamos que la proyección es el punto medio": "Proiekzioa erdiko puntua dela erabiltzen dugu",
  "Como": "Puntu hau,",
  "está justo a mitad de camino entre": "hauen arteko erdibidean dagoenez:",
  "y": "eta",
  ", despejamos el punto simétrico.": ", puntu simetrikoa askatzen dugu.",
  "Comprobamos las dos propiedades geométricas": "Bi propietate geometrikoak egiaztatzen ditugu",
  "El punto medio pertenece al plano y el segmento que une los puntos tiene la dirección de su vector normal.": "Erdiko puntua planoan dago, eta puntuak lotzen dituen segmentuak haren bektore normalaren norabidea du.",
  "Interpretamos la condición sobre el parámetro": "Parametroari buruzko baldintza interpretatzen dugu",
  "Al sustituir": "Puntu hau,",
  "en el primer miembro del plano, la diferencia respecto de": "planoaren lehen atalean ordezkatzean, balio honen aldean dagoen diferentzia:",
  "es": "hau da:",
  ". Como": ". Hau betetzen denez:",
  ", el punto no está en el plano y su simétrico es distinto de él.": ", puntua ez dago planoan eta haren simetrikoa desberdina da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalReflection2022Text = new WeakMap();

const reflection2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".reflection-2022-figure", attribute: "aria-label", eu: "P puntua, pi planoa, H proiekzioa eta P prima puntu simetrikoa", es: "Punto P, plano pi, proyección H y punto simétrico P prima" },
  { selector: "#reflection-2022-board", attribute: "aria-label", eu: "Pi planoa eta zuzen perpendikularra, P, H eta P prima lerrokatuta", es: "Plano pi y recta perpendicular con P, H y P prima alineados" }
];

function applyReflection2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalReflection2022Text.has(node)) {
      originalReflection2022Text.set(node, node.nodeValue);
    }

    const original = originalReflection2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && reflection2022TextEu.has(key)) {
      const translation = reflection2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyReflection2022Language(language) {
  document.title = language === "eu"
    ? "Puntu baten simetrikoa plano batekiko · Matematika II"
    : "Simétrico de un punto respecto de un plano · Matemáticas II";

  applyReflection2022Text(language);

  document.querySelectorAll("[data-reflection-language]").forEach((element) => {
    element.hidden = element.dataset.reflectionLanguage !== language;
  });

  reflection2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyReflection2022Language(event.detail.language);
});

applyReflection2022Language(window.I18n?.getLanguage() ?? "eu");

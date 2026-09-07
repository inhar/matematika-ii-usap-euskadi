const matrixRank2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio B1": "2023 · Ohikoa · B1 ariketa",
  "Álgebra lineal · Rango de matrices · 2023": "Aljebra lineala · Matrizeen heina · 2023",
  "Rango de una matriz con parámetro": "Parametrodun matrize baten heina",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B1": "B1 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Discusión del rango mediante menores": "Heinaren eztabaida minoreen bidez",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Rango máximo": "1. Gehienezko heina",
  "2. Criterio de los menores": "2. Minoreen irizpidea",
  "3. Un menor nulo no basta": "3. Minore nulu bat ez da nahikoa",
  "Resolución completa": "Ebazpen osoa",
  "Fijamos el rango máximo posible": "Gehienezko hein posiblea finkatzen dugu",
  "Como la matriz solo tiene tres filas, basta encontrar un menor de orden 3 no nulo para demostrar que el rango es 3.": "Matrizeak hiru errenkada besterik ez dituenez, 3. ordenako minore ez-nulu bat aurkitzea nahikoa da heina 3 dela frogatzeko.",
  "Elegimos tres columnas convenientes": "Hiru zutabe egoki aukeratzen ditugu",
  "Tomamos las columnas segunda, tercera y cuarta. El menor correspondiente contiene dos ceros en la primera fila y se desarrolla en una sola operación.": "Bigarren, hirugarren eta laugarren zutabeak hartzen ditugu. Dagokion minoreak bi zero ditu lehen errenkadan, eta eragiketa bakar batean gara daiteke.",
  "Calculamos el determinante del menor": "Minorearen determinantea kalkulatzen dugu",
  "Clasificamos todos los valores no nulos": "Zero ez diren balio guztiak sailkatzen ditugu",
  "Estudiamos el único valor pendiente": "Aztertu gabeko balio bakarra aztertzen dugu",
  "Existe un menor de orden 2 no nulo, así que el rango es al menos 2. Junto con la cota anterior, obtenemos el valor exacto.": "Zero ez den 2. ordenako minore bat dago; beraz, heina gutxienez 2 da. Aurreko goi-bornearekin batera, balio zehatza lortzen dugu.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalMatrixRank2023Text = new WeakMap();

const matrixRank2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyMatrixRank2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalMatrixRank2023Text.has(node)) {
      originalMatrixRank2023Text.set(node, node.nodeValue);
    }

    const original = originalMatrixRank2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && matrixRank2023TextEu.has(key)) {
      const translation = matrixRank2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyMatrixRank2023Language(language) {
  document.title = language === "eu"
    ? "Parametrodun matrize baten heina · Matematika II"
    : "Rango de una matriz con parámetro · Matemáticas II";

  applyMatrixRank2023Text(language);

  document.querySelectorAll("[data-matrix-rank-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-matrix-rank-2023-language") !== language;
  });

  matrixRank2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyMatrixRank2023Language(event.detail.language);
});

applyMatrixRank2023Language(window.I18n?.getLanguage() ?? "eu");

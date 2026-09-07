const positionLinePlane2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Ordinaria · Problema 3": "2021 · Ohikoa · 3. problema",
  "Geometría en el espacio · Rectas y planos · 2021": "Espazioko geometria · Zuzenak eta planoak · 2021",
  "Posición de una recta respecto de un plano": "Zuzenaren posizioa planoarekiko",
  "Enunciado": "Enuntziatua",
  "La recta": "Zuzena",
  "pasa por los puntos:": "puntu hauetatik igarotzen da:",
  "y el plano está definido por:": "eta planoa honela definituta dago:",
  "Calcular los valores de": "Kalkulatu",
  "para que la recta sea perpendicular al plano.": "zuzenak planoarekiko perpendikularra izateko hartu behar dituzten balioak.",
  "para que la recta esté contenida en el plano.": "zuzena planoaren barruan egoteko hartu behar dituzten balioak.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "La dirección de la recta se obtiene restando las coordenadas de sus dos puntos. El plano, por su parte, tiene un vector normal que se lee directamente en los coeficientes de su ecuación.": "Zuzenaren norabidea haren bi puntuen koordenatuak kenduz lortzen da. Planoak, berriz, ekuazioaren koefizienteetatik zuzenean irakurtzen den bektore normala du.",
  "Para que una recta sea perpendicular a un plano, su vector director debe ser paralelo al vector normal del plano. Por eso igualaremos ambos vectores mediante un factor de proporcionalidad. La tercera componente, que no contiene parámetros, permitirá hallar primero ese factor y después obtener los valores de los parámetros.": "Zuzen bat planoarekiko perpendikularra izateko, zuzenaren norabide-bektoreak planoaren bektore normalarekiko paraleloa izan behar du. Horregatik, bi bektoreak proportzionaltasun-faktore baten bidez berdinduko ditugu. Parametrorik ez duen hirugarren osagaiak lehenik faktore hori eta ondoren parametroen balioak kalkulatzeko aukera emango digu.",
  "Perpendicularidad entre la recta y el plano": "Zuzenaren eta planoaren arteko perpendikulartasuna",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Vector director a partir de dos puntos": "1. Norabide-bektorea bi puntutatik",
  "Dos puntos distintos determinan una recta. Al restar el punto inicial al punto final obtenemos un vector con la dirección de esa recta.": "Bi puntu desberdinek zuzen bat zehazten dute. Hasierako puntua amaierako puntuari kenduta zuzen horren norabidea duen bektorea lortzen dugu.",
  "2. Vector normal de un plano": "2. Plano baten bektore normala",
  "En la ecuación general de un plano, los coeficientes de las tres variables forman un vector perpendicular al plano.": "Plano baten ekuazio orokorrean, hiru aldagaien koefizienteek planoarekiko perpendikularra den bektore bat osatzen dute.",
  "3. Recta perpendicular a un plano": "3. Planoarekiko perpendikularra den zuzena",
  "Una recta es perpendicular a un plano cuando avanza en la dirección normal al plano. Por tanto, su vector director y el normal son proporcionales.": "Zuzen bat planoarekiko perpendikularra da planoaren norabide normalean doanean. Beraz, zuzenaren norabide-bektorea eta bektore normala proportzionalak dira.",
  "Resolución completa": "Ebazpen osoa",
  "Calculamos el vector director de la recta": "Zuzenaren norabide-bektorea kalkulatzen dugu",
  "A las coordenadas de": "Puntu honen koordenatuei:",
  "les restamos las de": "puntu honen koordenatuak kentzen dizkiegu:",
  ", siempre en el mismo orden.": ", beti ordena bera erabiliz.",
  "Leemos el vector normal del plano": "Planoaren bektore normala irakurtzen dugu",
  "Tomamos los coeficientes de": "Honako aldagaien koefizienteak hartzen ditugu:",
  "El término": "Gai honek:",
  "no interviene en la orientación del plano.": "ez du planoaren orientazioan eragiten.",
  "Imponemos que los vectores sean proporcionales": "Bektoreak proportzionalak izatea eskatzen dugu",
  "Escribimos la igualdad vectorial. Una misma constante debe relacionar las tres componentes.": "Bektore-berdintza idazten dugu. Konstante berak hiru osagaiak erlazionatu behar ditu.",
  "La tercera componente determina inmediatamente la constante.": "Hirugarren osagaiak konstantea berehala zehazten du.",
  "Calculamos los dos parámetros": "Bi parametroak kalkulatzen ditugu",
  "Sustituimos en las componentes primera y segunda el valor": "Lehen eta bigarren osagaietan balio hau ordezkatzen dugu:",
  "Comprobamos la dirección obtenida": "Lortutako norabidea egiaztatzen dugu",
  "Con esos valores, el vector director es exactamente el opuesto del normal. Por tanto, ambos son paralelos y la recta es perpendicular al plano.": "Balio horiekin, norabide-bektorea normalaren aurkakoa da zehazki. Beraz, biak paraleloak dira eta zuzena planoarekiko perpendikularra da.",
  "La recta sigue la dirección normal del plano y lo corta formando un ángulo recto.": "Zuzenak planoaren norabide normalari jarraitzen dio eta angelu zuzena osatuz ebakitzen du.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "La recta es perpendicular al plano.": "Zuzena planoarekiko perpendikularra da.",
  "Para que toda la recta esté dentro del plano deben cumplirse dos condiciones: la dirección de la recta tiene que ser paralela al plano y, además, al menos un punto de la recta debe pertenecer al plano.": "Zuzen osoa planoaren barruan egoteko bi baldintza bete behar dira: zuzenaren norabideak planoarekiko paraleloa izan behar du eta, gainera, zuzeneko puntu batek gutxienez planoan egon behar du.",
  "La primera condición se traduce en un producto escalar nulo entre el vector director y el normal. Para la segunda sustituiremos el punto": "Lehen baldintzak norabide-bektorearen eta normalaren arteko biderkadura eskalar nulua eskatzen du. Bigarrenerako,",
  "en la ecuación del plano. Las dos ecuaciones obtenidas forman un sistema para": "puntua planoaren ekuazioan ordezkatuko dugu. Lortutako bi ekuazioek parametro hauetarako sistema osatzen dute:",
  "Condiciones para que la recta esté contenida": "Zuzena planoaren barruan egoteko baldintzak",
  "1. Dirección paralela a un plano": "1. Planoarekiko paraleloa den norabidea",
  "Un vector es paralelo a un plano cuando es perpendicular a su vector normal. Esto equivale a que su producto escalar con el normal sea cero.": "Bektore bat planoarekiko paraleloa da haren bektore normalarekiko perpendikularra denean. Horrek normalarekin duen biderkadura eskalarra zero izatea esan nahi du.",
  "2. Pertenencia de un punto a un plano": "2. Puntu bat plano batekoa izatea",
  "Un punto pertenece al plano cuando sus coordenadas satisfacen la ecuación. Basta comprobar un punto de la recta si ya sabemos que su dirección es paralela al plano.": "Puntu bat planoan dago haren koordenatuek ekuazioa betetzen dutenean. Zuzenaren norabidea planoarekiko paraleloa dela badakigu, nahikoa da zuzeneko puntu bakarra egiaztatzea.",
  "3. Criterio de recta contenida": "3. Planoaren barruko zuzenaren irizpidea",
  "Las dos condiciones son necesarias: la dirección evita que la recta salga del plano y el punto fija la recta sobre él. Juntas son también suficientes.": "Bi baldintzak beharrezkoak dira: norabideak zuzena planotik ateratzea eragozten du eta puntuak zuzena planoan kokatzen du. Elkarrekin nahikoak ere badira.",
  "Imponemos que la dirección sea paralela al plano": "Norabidea planoarekiko paraleloa izatea eskatzen dugu",
  "Usamos el vector director y el normal calculados en el apartado anterior. Desarrollamos el producto escalar componente a componente.": "Aurreko atalean kalkulatutako norabide-bektorea eta normala erabiltzen ditugu. Biderkadura eskalarra osagaiz osagai garatzen dugu.",
  "Imponemos que un punto pertenezca al plano": "Puntu bat planoan egotea eskatzen dugu",
  "Elegimos": "Hau aukeratzen dugu:",
  "y sustituimos sus coordenadas en": "eta haren koordenatuak hemen ordezkatzen ditugu:",
  "Resolvemos el sistema de dos ecuaciones": "Bi ekuazioko sistema ebazten dugu",
  "Sumamos las ecuaciones para eliminar": "Ekuazioak batzen ditugu",
  "y hallar primero": "ezabatzeko eta lehenik hau kalkulatzeko:",
  "Sustituimos ese valor en la primera ecuación.": "Balio hori lehen ekuazioan ordezkatzen dugu.",
  "Comprobamos las dos condiciones": "Bi baldintzak egiaztatzen ditugu",
  "Con los parámetros hallados, ambos puntos satisfacen la ecuación del plano y el vector director es perpendicular al normal.": "Lortutako parametroekin, bi puntuek planoaren ekuazioa betetzen dute eta norabide-bektorea normalarekiko perpendikularra da.",
  "Los puntos": "Puntu hauek:",
  "están sobre el plano, y la dirección completa de la recta permanece en él.": "planoan daude, eta zuzenaren norabide osoa haren barruan geratzen da.",
  "La recta está contenida en el plano.": "Zuzena planoaren barruan dago."
}));

const originalPositionLinePlane2021Text = new WeakMap();

const positionLinePlane2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".position-2021-perpendicular-figure", attribute: "aria-label", eu: "Zuzen perpendikularra eta planoa, a bi eta b zero direnean", es: "Recta perpendicular al plano para a igual a dos y b igual a cero" },
  { selector: ".position-2021-contained-figure", attribute: "aria-label", eu: "Planoaren barruko zuzena, a minus bost eta b minus bat direnean", es: "Recta contenida en el plano para a igual a menos cinco y b igual a menos uno" },
  { selector: "#position-2021-perpendicular-board", attribute: "aria-label", eu: "Pi planoa eta r zuzen perpendikularra, A eta B puntuekin", es: "Plano pi y recta r perpendicular con los puntos A y B" },
  { selector: "#position-2021-contained-board", attribute: "aria-label", eu: "Pi planoa, haren barruko r zuzena eta A eta B puntuak", es: "Plano pi con la recta r contenida y los puntos A y B" },
];

function applyPositionLinePlane2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPositionLinePlane2021Text.has(node)) {
      originalPositionLinePlane2021Text.set(node, node.nodeValue);
    }

    const original = originalPositionLinePlane2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && positionLinePlane2021TextEu.has(key)) {
      const translation = positionLinePlane2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPositionLinePlane2021Language(language) {
  document.title = language === "eu"
    ? "Zuzenaren posizioa planoarekiko · Matematika II"
    : "Posición de una recta respecto de un plano · Matemáticas II";

  applyPositionLinePlane2021Text(language);

  positionLinePlane2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPositionLinePlane2021Language(event.detail.language);
});

applyPositionLinePlane2021Language(window.I18n?.getLanguage() ?? "eu");

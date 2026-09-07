const parallelPlaneExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción A · Problema A.2": "2019 · Ezohikoa · A aukera · A.2 problema",
  "Geometría en el espacio · Rectas y planos · Julio de 2019": "Espazioko geometria · Zuzenak eta planoak · 2019ko uztaila",
  "Recta paralela a un plano por un punto": "Puntu batetik plano bati paraleloa den zuzena",
  "Enunciado": "Enuntziatua",
  "Hallar la ecuación de una recta paralela al plano": "Aurkitu plano honi paraleloa den zuzen baten ekuazioa:",
  "que contenga a": "eta puntu hau izan dezala:",
  "¿Es única dicha recta? Razonar la respuesta.": "Bakarra al da zuzen hori? Arrazoitu erantzuna.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.2": "A.2 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El vector normal del plano es perpendicular a todas sus direcciones. Por tanto, una recta será paralela al plano si elegimos para ella un vector director perpendicular al vector normal.": "Planoaren bektore normala haren norabide guztiekiko perpendikularra da. Beraz, zuzen bat planoarekiko paraleloa izango da bektore normalarekiko perpendikularra den norabide-bektore bat aukeratzen badugu.",
  "Esta condición deja muchas posibilidades. Escogeremos una especialmente sencilla, construiremos la recta usando P(1, 0, 0) y mostraremos otra dirección distinta para demostrar que la respuesta no es única.": "Baldintza horrek aukera asko uzten ditu. Bereziki erraza den bat aukeratuko dugu, P(1, 0, 0) puntua erabiliz zuzena eraikiko dugu, eta beste norabide bat erakutsiko dugu erantzuna bakarra ez dela frogatzeko.",
  "Construcción de la recta y estudio de la unicidad": "Zuzenaren eraikuntza eta bakartasunaren azterketa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Vector normal de un plano": "1. Plano baten bektore normala",
  "En una ecuación de plano ax + by + cz = d, los coeficientes de x, y, z forman un vector perpendicular al plano.": "Plano baten ax + by + cz = d ekuazioan, x, y eta z-ren koefizienteek planoarekiko perpendikularra den bektore bat osatzen dute.",
  "2. Paralelismo entre una recta y un plano": "2. Zuzen baten eta plano baten arteko paralelismoa",
  "Una dirección de la recta debe ser también una dirección del plano. Como todas las direcciones del plano son perpendiculares a su vector normal, la condición se expresa con un producto escalar nulo.": "Zuzenaren norabide batek planoaren norabidea ere izan behar du. Planoaren norabide guztiak haren bektore normalarekiko perpendikularrak direnez, baldintza biderkadura eskalar nulu baten bidez adierazten da.",
  "Esta igualdad incluye dos posiciones: la recta puede estar contenida en el plano o ser paralela sin tocarlo. Para distinguirlas se comprueba si un punto de la recta pertenece al plano.": "Berdintza horrek bi kokapen hartzen ditu barne: zuzena planoan egon daiteke, edo ukitu gabe paraleloa izan. Bi kasuak bereizteko, zuzeneko puntu bat planokoa den egiaztatzen da.",
  "3. Recta determinada por un punto y una dirección": "3. Puntu batek eta norabide batek zehaztutako zuzena",
  "Un punto P₀ = (x₀, y₀, z₀) y un vector director no nulo d = (a, b, c) determinan una única recta.": "P₀ = (x₀, y₀, z₀) puntu batek eta zero ez den d = (a, b, c) norabide-bektore batek zuzen bakarra zehazten dute.",
  "4. Por qué aquí no hay una única respuesta": "4. Zergatik ez dago hemen erantzun bakarra",
  "La perpendicularidad impone una sola ecuación, a + 2b + 3c = 0, a las tres componentes del vector director. Tiene infinitas soluciones no nulas y, por tanto, infinitas direcciones posibles. Los vectores proporcionales generan la misma recta; los no proporcionales generan rectas distintas por P.": "Perpendikulartasunak ekuazio bakarra ezartzen die norabide-bektorearen hiru osagaiei: a + 2b + 3c = 0. Zero ez diren infinitu soluzio ditu eta, beraz, infinitu norabide posible daude. Bektore proportzionalek zuzen bera sortzen dute; proportzionalak ez direnek, berriz, P puntutik igarotzen diren zuzen desberdinak sortzen dituzte.",
  "Resolución completa": "Ebazpen osoa",
  "Leemos el vector normal del plano": "Planoaren bektore normala irakurtzen dugu",
  "Los coeficientes de x, y, z en la ecuación del plano son 1, 2 y 3.": "Planoaren ekuazioko x, y eta z-ren koefizienteak 1, 2 eta 3 dira.",
  "Planteamos la condición para el vector director": "Norabide-bektorearen baldintza planteatzen dugu",
  "Sea d = (a, b, c) el vector director de la recta. Para que la recta sea paralela a π, ese vector debe ser perpendicular a nπ.": "Izan bedi d = (a, b, c) zuzenaren norabide-bektorea. Zuzena π planoarekiko paraleloa izan dadin, bektore horrek nπ-rekiko perpendikularra izan behar du.",
  "Elegimos una solución sencilla": "Soluzio erraz bat aukeratzen dugu",
  "Podemos fijar libremente dos componentes. Tomamos c = 0 y b = 1; entonces la ecuación determina a.": "Bi osagai askatasunez finka ditzakegu. c = 0 eta b = 1 hartzen ditugu; orduan ekuazioak a zehazten du.",
  "Comprobamos la perpendicularidad antes de usarlo:": "Erabili aurretik perpendikulartasuna egiaztatzen dugu:",
  "Construimos la recta por P": "P puntutik igarotzen den zuzena eraikitzen dugu",
  "Sumamos al punto conocido un múltiplo real del vector director.": "Puntu ezagunari norabide-bektorearen multiplo erreal bat batzen diogu.",
  "Igualando componente a componente obtenemos su forma paramétrica:": "Osagaiz osagai berdinduz, forma parametrikoa lortzen dugu:",
  "Comprobamos que el paralelismo es estricto": "Paralelismoa hertsia dela egiaztatzen dugu",
  "El punto P(1, 0, 0) no pertenece al plano original, porque al sustituir sus coordenadas no se obtiene 6.": "P(1, 0, 0) puntua ez da jatorrizko planokoa, haren koordenatuak ordezkatzean ez baita 6 lortzen.",
  "Además, a lo largo de la recta el lado izquierdo de la ecuación del plano permanece constante:": "Gainera, zuzen osoan zehar planoaren ekuazioaren ezkerreko aldea konstante mantentzen da:",
  "1 nunca puede ser 6 ⇒ r no corta a π": "1 ezin da inoiz 6 izan ⇒ r-k ez du π ebakitzen",
  "Demostramos que la recta no es única": "Zuzena bakarra ez dela frogatzen dugu",
  "Elegimos ahora otra solución de a + 2b + 3c = 0, por ejemplo d₂ = (−3, 0, 1).": "Orain a + 2b + 3c = 0 ekuazioaren beste soluzio bat aukeratzen dugu, adibidez d₂ = (−3, 0, 1).",
  "Perpendicularidad": "Perpendikulartasuna",
  "Dirección distinta": "Beste norabide bat",
  "(−3, 0, 1) no es proporcional a (−2, 1, 0)": "(−3, 0, 1) ez da (−2, 1, 0)-rekiko proportzionala",
  "Por tanto, también sirve la recta siguiente y es distinta de r:": "Beraz, hurrengo zuzenak ere balio du, eta r-rekiko desberdina da:",
  "Todas las rectas válidas quedan contenidas en el plano paralelo a π que pasa por P:": "Balio duten zuzen guztiak P puntutik igarotzen den eta π-rekiko paraleloa den plano honetan daude:",
  "Las rectas pasan por P y están contenidas en el plano σ, paralelo a π. Cualquiera de sus direcciones sirve.": "Zuzenak P puntutik igarotzen dira eta π-rekiko paraleloa den σ planoan daude. Haien edozein norabidek balio du.",
  "Describimos todas las direcciones posibles": "Norabide posible guztiak deskribatzen ditugu",
  "Si tomamos b = λ y c = μ, la condición a + 2b + 3c = 0 obliga a que a = −2λ − 3μ.": "b = λ eta c = μ hartzen baditugu, a + 2b + 3c = 0 baldintzak a = −2λ − 3μ izatera behartzen du.",
  "Cada dirección no proporcional determina otra recta válida por P.": "Proportzionala ez den norabide bakoitzak P puntutik igarotzen den beste zuzen baliodun bat zehazten du.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "d₂ = (−3, 0, 1) también sirve y no es proporcional a d.": "d₂ = (−3, 0, 1) bektoreak ere balio du, eta ez da d-rekiko proportzionala.",
  "Resultado": "Emaitza",
  "La recta no es única.": "Zuzena ez da bakarra.",
  "Hay infinitas direcciones perpendiculares a nπ y, por tanto, infinitas rectas válidas por P.": "Infinitu norabide daude nπ-rekiko perpendikularrak eta, beraz, infinitu zuzen baliodun igarotzen dira P puntutik."
}));

const originalParallelPlaneExerciseText = new WeakMap();

const parallelPlaneExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".parallel-parametric-system", attribute: "aria-label", eu: "r zuzena forma parametrikoan", es: "Recta r en forma paramétrica" },
  { selector: ".parallel-plane-figure", attribute: "aria-label", eu: "Bi plano paralelo eta P puntutik igarotzen diren jatorrizko planoarekiko paraleloak diren hainbat zuzen", es: "Dos planos paralelos y varias rectas por P paralelas al plano original" },
  { selector: ".parallel-plane-board", attribute: "aria-label", eu: "Pi planoa, P puntutik igarotzen den sigma plano paraleloa eta P puntutik igarotzen diren sigmako hiru zuzen", es: "Plano pi, plano paralelo sigma por P y tres rectas de sigma que pasan por P" },
];

function applyParallelPlaneExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalParallelPlaneExerciseText.has(node)) {
      originalParallelPlaneExerciseText.set(node, node.nodeValue);
    }

    const original = originalParallelPlaneExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && parallelPlaneExerciseTextEu.has(key)) {
      const translation = parallelPlaneExerciseTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyParallelPlaneExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Puntu batetik plano bati paraleloa den zuzena · Matematika II"
    : "Recta paralela a un plano por un punto · Matemáticas II";

  applyParallelPlaneExerciseText(language);

  parallelPlaneExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyParallelPlaneExerciseLanguage(event.detail.language);
});

applyParallelPlaneExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

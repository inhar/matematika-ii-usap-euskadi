const urnTransfer2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio A5": "2022 · Ohikoa · A5 ariketa",
  "Probabilidad · Probabilidad compuesta · 2022": "Probabilitatea · Probabilitate konposatua · 2022",
  "Urnas con transferencia de una bola": "Bola baten transferentzia urnen artean",
  "Enunciado": "Enuntziatua",
  "Tenemos dos urnas con la siguiente composición:": "Bi urna ditugu osaera honekin:",
  "4 bolas negras": "4 bola beltz",
  "6 bolas blancas": "6 bola zuri",
  "7 bolas negras": "7 bola beltz",
  "3 bolas blancas": "3 bola zuri",
  "Se selecciona al azar una urna, se extrae una bola y se coloca en la otra urna. A continuación, se extrae una bola de esta última urna.": "Urna bat zoriz aukeratzen da, bola bat atera eta beste urnan sartzen da. Ondoren, azken urna horretatik bola bat ateratzen da.",
  "Calcula la probabilidad de que las dos bolas extraídas:": "Kalkulatu ateratako bi bolak honelakoak izateko probabilitatea:",
  "sean negras;": "beltzak izatea;",
  "sean blancas;": "zuriak izatea;",
  "sean de distinto color.": "kolore desberdinekoak izatea.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Probabilidad de extraer dos bolas negras": "Bi bola beltz ateratzeko probabilitatea",
  "Probabilidad de extraer dos bolas blancas": "Bi bola zuri ateratzeko probabilitatea",
  "Probabilidad de extraer bolas de distinto color": "Kolore desberdineko bolak ateratzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Probabilidades condicionadas": "1. Probabilitate baldintzatuak",
  "La probabilidad de la segunda extracción depende de la urna elegida y del color transferido en la primera extracción. Por eso las probabilidades de la última etapa son condicionadas.": "Bigarren ateraldiaren probabilitatea aukeratutako urnaren eta lehen ateraldian transferitutako kolorearen araberakoa da. Horregatik, azken etapako probabilitateak baldintzatuak dira.",
  "2. Regla del producto": "2. Biderkaduraren araua",
  "La probabilidad de un camino completo se obtiene multiplicando las probabilidades de sus ramas.": "Bide oso baten probabilitatea adarren probabilitateak biderkatuz lortzen da.",
  "3. Suma de caminos incompatibles": "3. Bide bateraezinen batura",
  "Elegir primero T y elegir primero R son posibilidades incompatibles. Si ambas producen el resultado buscado, sumamos sus probabilidades.": "Lehenik T aukeratzea eta lehenik R aukeratzea aukera bateraezinak dira. Biek bilatutako emaitza sortzen badute, haien probabilitateak batzen ditugu.",
  "Resolución completa": "Ebazpen osoa",
  "La primera urna se elige al azar": "Lehen urna zoriz aukeratzen da",
  "Como hay dos urnas y ninguna tiene preferencia, las dos se eligen con la misma probabilidad.": "Bi urna daudenez eta batek ere lehentasunik ez duenez, biak probabilitate berarekin aukeratzen dira.",
  "Camino que empieza en la urna T": "T urnan hasten den bidea",
  "Camino que empieza en la urna R": "R urnan hasten den bidea",
  "Sumamos los dos caminos": "Bi bideak batzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "1. El árbol conserva la estructura": "1. Zuhaitzak egitura mantentzen du",
  "La elección de urna sigue teniendo probabilidad un medio. Solo cambian las ramas de color que seguimos y la composición de la urna receptora.": "Urna aukeratzeko probabilitatea erdi bat izaten jarraitzen du. Jarraitzen ditugun kolore-adarrak eta urna hartzailearen osaera baino ez dira aldatzen.",
  "Multiplicamos las tres probabilidades de cada camino: urna inicial, primera bola y segunda bola.": "Bide bakoitzeko hiru probabilitateak biderkatzen ditugu: hasierako urna, lehen bola eta bigarren bola.",
  "3. Suma de los dos caminos": "3. Bi bideen batura",
  "Los caminos que comienzan en T y R no pueden ocurrir simultáneamente, por lo que sus probabilidades se suman.": "T eta R urnetan hasten diren bideak ezin dira aldi berean gertatu; beraz, haien probabilitateak batzen dira.",
  "1. Suceso contrario": "1. Aurkako gertaera",
  "Un suceso y su contrario forman todos los resultados posibles y no comparten ninguno. Por tanto, sus probabilidades suman uno.": "Gertaera batek eta haren aurkakoak emaitza posible guztiak osatzen dituzte eta ez dute emaitzarik partekatzen. Beraz, haien probabilitateen batura bat da.",
  "2. Partición por colores": "2. Koloreen araberako banaketa",
  "Los resultados «dos negras», «dos blancas» y «distinto color» son incompatibles y cubren todo el experimento.": "«Bi beltz», «bi zuri» eta «kolore desberdina» emaitzak bateraezinak dira eta esperimentu osoa hartzen dute.",
  "Las dos bolas solo pueden tener el mismo color o distinto color. Como ya conocemos las probabilidades de «dos negras» y «dos blancas», resulta más breve usar el suceso contrario.": "Bi bolek kolore bera edo kolore desberdina izan dezakete soilik. «Bi beltz» eta «bi zuri» probabilitateak dagoeneko ezagutzen ditugunez, laburragoa da aurkako gertaera erabiltzea.",
  "Agrupamos los casos del mismo color": "Kolore bereko kasuak elkartzen ditugu",
  "Las dos bolas tienen el mismo color si ambas son negras o ambas son blancas.": "Bi bolek kolore bera dute biak beltzak edo biak zuriak badira.",
  "Aplicamos el suceso contrario": "Aurkako gertaera aplikatzen dugu",
  "Comprobamos que las tres probabilidades suman uno": "Hiru probabilitateen batura bat dela egiaztatzen dugu",
}));

const originalUrnTransfer2022Text = new WeakMap();

const urnTransfer2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".urn-transfer-2022-data", attribute: "aria-label", eu: "T eta R urnen hasierako osaera", es: "Composición inicial de las urnas T y R" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".urn-transfer-2022-figure", attribute: "aria-label", eu: "Bi urnekin egindako esperimentuaren probabilitate-zuhaitza", es: "Árbol de probabilidades del experimento con las dos urnas" },
  { selector: ".urn-transfer-2022-board", attribute: "aria-label", eu: "Aukeratutako urna, lehen bolaren kolorea eta bigarren bolaren kolorea dituen zuhaitza", es: "Árbol con la urna elegida, el color de la primera bola y el color de la segunda bola" },
];

function applyUrnTransfer2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalUrnTransfer2022Text.has(node)) {
      originalUrnTransfer2022Text.set(node, node.nodeValue);
    }

    const original = originalUrnTransfer2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && urnTransfer2022TextEu.has(key)) {
      const translation = urnTransfer2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyUrnTransfer2022Language(language) {
  document.title = language === "eu"
    ? "Bola baten transferentzia urnen artean · Matematika II"
    : "Urnas con transferencia de una bola · Matemáticas II";

  applyUrnTransfer2022Text(language);

  document.querySelectorAll("[data-urn-transfer-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-urn-transfer-2022-language") !== language;
  });

  urnTransfer2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyUrnTransfer2022Language(event.detail.language);
});

applyUrnTransfer2022Language(window.I18n?.getLanguage() ?? "eu");

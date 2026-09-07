const pointsPlaneExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción B · Problema B.2": "2019 · Ohikoa · B aukera · B.2 problema",
  "Geometría en el espacio · Puntos y planos · Junio de 2019": "Espazioko geometria · Puntuak eta planoak · 2019ko ekaina",
  "Tres puntos: alineación y plano que los contiene": "Hiru puntu: lerrokadura eta haiek biltzen dituen planoa",
  "Enunciado": "Enuntziatua",
  "Se consideran los tres puntos:": "Hiru puntu hauek ditugu:",
  "¿Están alineados? En caso afirmativo, hallar la ecuación de la recta que los contiene. En caso negativo, calcular el plano que los contiene.": "Lerrokatuta al daude? Baiezkoan, aurkitu hiru puntuak biltzen dituen zuzenaren ekuazioa; ezezkoan, kalkulatu haiek biltzen dituen planoa.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.2": "B.2 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "Tres puntos están alineados si los vectores que parten de uno de ellos hacia los otros dos son proporcionales. Calcularemos AB y AC desde A; como no tendrán la misma dirección, los tres puntos determinarán un plano. Usaremos A como punto del plano y esos dos vectores como direcciones para escribir su ecuación paramétrica. Después, su producto vectorial nos dará un vector normal y una ecuación implícita equivalente.": "Hiru puntu lerrokatuta daude haietako batetik beste bietara doazen bektoreak proportzionalak badira. A puntutik abiatuta AB eta AC kalkulatuko ditugu; norabide bera ez dutenez, hiru puntuek plano bat zehaztuko dute. A planoko puntu gisa eta bi bektoreak norabide gisa erabiliko ditugu haren ekuazio parametrikoa idazteko. Ondoren, haien biderkadura bektorialak bektore normal bat eta ekuazio inplizitu baliokide bat emango dizkigu.",
  "Alineación y ecuación del plano": "Lerrokadura eta planoaren ekuazioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Vector determinado por dos puntos": "1. Bi puntuk zehaztutako bektorea",
  "El vector que va de P a Q se obtiene restando las coordenadas del punto inicial a las del punto final, componente a componente.": "P puntutik Q puntura doan bektorea lortzeko, azken puntuaren koordenatuei hasierako puntuarenak kentzen zaizkie, osagaiz osagai.",
  "2. Criterio de alineación": "2. Lerrokadura-irizpidea",
  "Los puntos A, B y C están alineados exactamente cuando AB y AC son paralelos, es decir, cuando existe un número k que permite escribir uno como múltiplo del otro.": "A, B eta C puntuak lerrokatuta daude baldin eta soilik baldin AB eta AC paraleloak badira; hau da, k zenbaki bat badago bektore bat bestearen multiplo gisa idazteko.",
  "A, B, C alineados ⇔ AC = k·AB": "A, B, C lerrokatuta ⇔ AC = k·AB",
  "3. Plano por un punto y dos direcciones": "3. Puntu batetik eta bi norabidetatik igarotzen den planoa",
  "Un punto P₀ y dos vectores no paralelos u y v determinan un plano. Sus puntos se obtienen recorriendo libremente ambas direcciones.": "P₀ puntu batek eta paraleloak ez diren u eta v bi bektorek plano bat zehazten dute. Planoko puntuak bi norabideak askatasunez ibiliz lortzen dira.",
  "4. De la forma paramétrica a la implícita": "4. Forma parametrikotik inplizitura",
  "El producto vectorial de las dos direcciones produce un vector normal n perpendicular al plano. Si P₀ pertenece al plano, todos sus puntos cumplen:": "Bi norabideen biderkadura bektorialak planoarekiko perpendikularra den n bektore normal bat ematen du. P₀ planokoa bada, haren puntu guztiek hau betetzen dute:",
  "Resolución completa": "Ebazpen osoa",
  "Construimos dos vectores con el mismo origen": "Jatorri bereko bi bektore eraikitzen ditugu",
  "Tomamos A como punto inicial y restamos sus coordenadas a las de B y C.": "A hartzen dugu hasierako puntu gisa, eta haren koordenatuak B-ren eta C-ren koordenatuei kentzen dizkiegu.",
  "Comprobamos si los vectores son proporcionales": "Bektoreak proportzionalak diren egiaztatzen dugu",
  "Si AC = k·AB, la tercera componente exigiría 1 = k·0. Esta igualdad es imposible para cualquier k.": "AC = k·AB balitz, hirugarren osagaiak 1 = k·0 eskatuko luke. Berdintza hori ezinezkoa da edozein k-rentzat.",
  "AC no es múltiplo de AB": "AC ez da AB-ren multiploa",
  "Por tanto, los tres puntos no están alineados y debemos calcular el plano que determinan.": "Beraz, hiru puntuak ez daude lerrokatuta, eta zehazten duten planoa kalkulatu behar dugu.",
  "Escribimos el plano en forma paramétrica": "Planoa forma parametrikoan idazten dugu",
  "Usamos A como punto conocido y AB, AC como sus dos vectores directores.": "A puntu ezagun gisa erabiltzen dugu, eta AB eta AC planoaren bi norabide-bektore gisa.",
  "Sumando las componentes obtenemos:": "Osagaiak batuz hau lortzen dugu:",
  "C queda fuera de la recta que pasa por A y B; los vectores AB y AC determinan el plano π.": "C puntua A eta B puntuetatik igarotzen den zuzenetik kanpo dago; AB eta AC bektoreek π planoa zehazten dute.",
  "Obtenemos también la ecuación implícita": "Ekuazio inplizitua ere lortzen dugu",
  "Calculamos un vector normal mediante el producto vectorial AB × AC, componente por componente.": "Bektore normal bat kalkulatzen dugu AB × AC biderkadura bektorialaren bidez, osagaiz osagai.",
  "Comprobamos que los tres puntos pertenecen al plano": "Hiru puntuak planokoak direla egiaztatzen dugu",
  "Sustituimos sus coordenadas en x − y = 0.": "Haien koordenatuak x − y = 0 ekuazioan ordezkatzen ditugu.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "AB y AC no son proporcionales ⇒ A, B y C no están alineados": "AB eta AC ez dira proportzionalak ⇒ A, B eta C ez daude lerrokatuta",
  "Forma implícita equivalente: x − y = 0": "Forma inplizitu baliokidea: x − y = 0",
  "Resultado": "Emaitza",
  "No están alineados.": "Ez daude lerrokatuta.",
  "El plano que los contiene es π: x − y = 0.": "Haiek biltzen dituen planoa π: x − y = 0 da.",
}));

const originalPointsPlaneExerciseText = new WeakMap();

const pointsPlaneExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".three-point-data", attribute: "aria-label", eu: "Enuntziatuko A, B eta C puntuak", es: "Puntos A, B y C del enunciado" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".plane-parametric-system", attribute: "aria-label", eu: "Pi planoa forma parametrikoan", es: "Plano pi en forma paramétrica" },
  { selector: ".point-plane-figure", attribute: "aria-label", eu: "A, B eta C puntuek zehaztutako planoaren hiru dimentsioko irudikapena, A-tik abiatzen diren AB eta AC bektoreekin; C puntua AB zuzenetik kanpo dago", es: "Representación tridimensional del plano determinado por A, B y C, con los vectores AB y AC desde A; C queda fuera de la recta AB" },
  { selector: ".point-plane-board", attribute: "aria-label", eu: "Pi planoa A, B eta C puntuekin, A eta B puntuetatik igarotzen den zuzenarekin eta AB eta AC bektoreekin", es: "Plano pi con los puntos A, B y C, la recta que pasa por A y B y los vectores AB y AC" },
];

function applyPointsPlaneExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPointsPlaneExerciseText.has(node)) {
      originalPointsPlaneExerciseText.set(node, node.nodeValue);
    }

    const original = originalPointsPlaneExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && pointsPlaneExerciseTextEu.has(key)) {
      const translation = pointsPlaneExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPointsPlaneExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Hiru puntu eta haien planoa · Matematika II"
    : "Tres puntos y el plano que determinan · Matemáticas II";

  applyPointsPlaneExerciseText(language);

  pointsPlaneExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPointsPlaneExerciseLanguage(event.detail.language);
});

applyPointsPlaneExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

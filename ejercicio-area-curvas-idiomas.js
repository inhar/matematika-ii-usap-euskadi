const areaCurvesTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción B · Problema B.4": "2019 · Ohikoa · B aukera · B.4 problema",
  "Análisis · Área entre curvas · Junio de 2019": "Analisia · Kurben arteko azalera · 2019ko ekaina",
  "Área entre una recta y una parábola": "Zuzenaren eta parabolaren arteko azalera",
  "Enunciado": "Enuntziatua",
  "Representar el recinto finito del plano limitado por la recta y la parábola:": "Irudikatu zuzenak eta parabolak mugatutako planoko esparru finitua:",
  "Calcular su área.": "Kalkulatu haren azalera.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.4": "B.4 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "Primero igualaremos las ecuaciones para encontrar los puntos de corte; sus coordenadas x serán los límites de integración. Después decidiremos qué gráfica queda arriba en el intervalo comprendido entre esos puntos. En x = 0 la recta vale 2 y la parábola vale 0, así que la recta es la función superior. El área será la integral definida de «función superior menos función inferior» entre x = −1 y x = 2.": "Lehenik ekuazioak berdinduko ditugu ebakidura-puntuak aurkitzeko; haien x koordenatuak integrazio-mugak izango dira. Ondoren, bi puntuen arteko tartean zein grafiko dagoen gainean erabakiko dugu. x = 0 puntuan zuzenaren balioa 2 da eta parabolaren balioa 0; beraz, zuzena da goiko funtzioa. Azalera «goiko funtzioa ken beheko funtzioa» diferentziaren integral zehatza izango da, x = −1 eta x = 2 artean.",
  "Recinto y cálculo del área": "Esparrua eta azaleraren kalkulua",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersección de dos gráficas": "1. Bi grafikoren ebakidura",
  "En un punto común, las dos funciones tienen la misma coordenada x y la misma coordenada y. Por eso sus abscisas se obtienen resolviendo la igualdad entre ambas expresiones.": "Puntu komun batean, bi funtzioek x koordenatu bera eta y koordenatu bera dituzte. Horregatik, haien abzisak bi adierazpenen arteko berdintza ebatziz lortzen dira.",
  "2. Área entre dos curvas": "2. Bi kurben arteko azalera",
  "Si f(x) está por encima de g(x) en todo el intervalo [a, b], el área encerrada se calcula integrando la distancia vertical entre las dos gráficas.": "[a, b] tarte osoan f(x) g(x)-ren gainean badago, itxitako azalera bi grafikoen arteko distantzia bertikala integratuz kalkulatzen da.",
  "El orden es importante: función superior menos función inferior.": "Ordena garrantzitsua da: goiko funtzioa ken beheko funtzioa.",
  "3. Regla de Barrow": "3. Barrowren erregela",
  "Si F es una primitiva de h, la integral definida se obtiene evaluando F en el extremo superior y restando su valor en el extremo inferior.": "F h-ren primitiboa bada, integral zehatza lortzeko F goiko muturrean ebaluatu eta beheko muturreko balioa kentzen da.",
  "4. Significado del resultado": "4. Emaitzaren esanahia",
  "Una integral de «superior menos inferior» da un valor no negativo. Como estamos midiendo una superficie, el resultado se expresa en unidades cuadradas.": "«Goikoa ken behekoa» integralak balio ez-negatiboa ematen du. Gainazal bat neurtzen ari garenez, emaitza unitate karratuetan adierazten da.",
  "Resolución completa": "Ebazpen osoa",
  "Encontramos los puntos de intersección": "Ebakidura-puntuak aurkitzen ditugu",
  "En los puntos donde la recta y la parábola se cortan, sus valores de y son iguales. Igualamos las dos expresiones y factorizamos.": "Zuzena eta parabola ebakitzen diren puntuetan, haien y balioak berdinak dira. Bi adierazpenak berdindu eta faktorizatzen ditugu.",
  "x = −1   o   x = 2": "x = −1   edo   x = 2",
  "o": "edo",
  "Calculamos ahora la coordenada y de cada punto usando la recta.": "Puntu bakoitzaren y koordenatua kalkulatzen dugu orain, zuzena erabiliz.",
  "Decidimos qué función está por encima": "Zein funtzio dagoen gainean erabakitzen dugu",
  "Los puntos de corte separan el recinto. Probamos un valor interior sencillo, x = 0.": "Ebakidura-puntuek esparrua mugatzen dute. Barneko balio erraz bat probatzen dugu: x = 0.",
  "Recta": "Zuzena",
  "Parábola": "Parabola",
  "Como 2 > 0, la recta está por encima de la parábola en [−1, 2]. No puede cambiar el orden dentro del intervalo porque no hay más puntos de intersección.": "2 > 0 denez, zuzena parabolaren gainean dago [−1, 2] tartean. Tartearen barruan ordena ezin da aldatu, ez baitago beste ebakidura-punturik.",
  "El recinto sombreado queda entre las abscisas −1 y 2; en todo ese intervalo, la recta es la frontera superior.": "Itzaleztatutako esparrua −1 eta 2 abzisen artean dago; tarte osoan, zuzena da goiko muga.",
  "Planteamos la integral del área": "Azaleraren integrala planteatzen dugu",
  "Restamos la función inferior, x², a la superior, x + 2, e integramos desde la primera intersección hasta la segunda.": "Beheko funtzioa, x², goikoari, x + 2, kentzen diogu, eta lehen ebakiduratik bigarrenera integratzen dugu.",
  "Hallamos una primitiva": "Primitibo bat aurkitzen dugu",
  "Integramos término a término: aumentamos en uno cada exponente y dividimos por el nuevo exponente.": "Gaiz gai integratzen dugu: berretzaile bakoitzari bat gehitu eta berretzaile berriaz zatitzen dugu.",
  "Aplicamos la regla de Barrow": "Barrowren erregela aplikatzen dugu",
  "Evaluamos la primitiva en los dos extremos. Dejamos cada sustitución en una línea completa para no perder ningún signo.": "Primitiboa bi muturretan ebaluatzen dugu. Ordezkapen bakoitza lerro oso batean uzten dugu, zeinurik ez galtzeko.",
  "Ahora restamos el valor del extremo inferior completo; por eso aparecen los paréntesis alrededor de −7/6.": "Orain beheko muturraren balio osoa kentzen dugu; horregatik agertzen dira parentesiak −7/6 balioaren inguruan.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "x + 2 = x² ⇒ x = −1 o x = 2": "x + 2 = x² ⇒ x = −1 edo x = 2",
  "En [−1, 2], la recta x + 2 está por encima de la parábola x².": "[−1, 2] tartean, x + 2 zuzena x² parabolaren gainean dago.",
  "Resultado": "Emaitza",
  "Área:": "Azalera:",
  "El recinto está comprendido entre x = −1 y x = 2.": "Esparrua x = −1 eta x = 2 artean dago."
}));

const originalAreaCurvesText = new WeakMap();

const areaCurvesAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".area-function-data", attribute: "aria-label", eu: "y berdin x gehi bi zuzena eta y berdin x ber bi parabola", es: "Recta y igual a x más dos y parábola y igual a x al cuadrado" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".area-between-curves-figure", attribute: "aria-label", eu: "y berdin x gehi bi zuzenak eta y berdin x ber bi parabolak mugatutako esparruaren irudikapena", es: "Representación del recinto limitado por la recta y igual a x más dos y la parábola y igual a x al cuadrado" },
  { selector: ".area-between-curves-board", attribute: "aria-label", eu: "y berdin x gehi bi zuzenaren eta y berdin x ber bi parabolaren grafikoa, bien arteko esparrua itzaleztatuta", es: "Gráfica de la recta y igual a x más dos y la parábola y igual a x al cuadrado, con el recinto entre ambas sombreado" },
  { selector: ".math-integral-specific", attribute: "aria-label", eu: "minus batetik bira arteko integrala", es: "integral desde menos uno hasta dos" },
  { selector: ".math-integral-generic", attribute: "aria-label", eu: "a-tik b-ra arteko integrala", es: "integral desde a hasta b" },
];

function applyAreaCurvesText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalAreaCurvesText.has(node)) originalAreaCurvesText.set(node, node.nodeValue);
    const original = originalAreaCurvesText.get(node);
    const key = original.trim();
    if (language === "eu" && areaCurvesTextEu.has(key)) {
      const translation = areaCurvesTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyAreaCurvesLanguage(language) {
  document.title = language === "eu"
    ? "Zuzenaren eta parabolaren arteko azalera · Matematika II"
    : "Área entre una recta y una parábola · Matemáticas II";
  applyAreaCurvesText(language);
  areaCurvesAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyAreaCurvesLanguage(event.detail.language);
});

applyAreaCurvesLanguage(window.I18n?.getLanguage() ?? "eu");

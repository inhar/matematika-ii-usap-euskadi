const areaParabolasTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción A · Problema A.4": "2019 · Ezohikoa · A aukera · A.4 problema",
  "Análisis · Área entre curvas · Julio de 2019": "Analisia · Kurben arteko azalera · 2019ko uztaila",
  "Área entre dos parábolas": "Bi parabolaren arteko azalera",
  "Enunciado": "Enuntziatua",
  "Sea R el recinto del plano limitado por las curvas:": "Izan bedi R kurba hauek mugatutako planoko esparrua:",
  "Dibujar R y calcular su área.": "Marraztu R eta kalkulatu haren azalera.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.4": "A.4 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El área está encerrada entre dos curvas, así que primero necesitamos saber dónde empieza y termina el recinto: igualaremos las funciones para hallar sus puntos de corte. Después determinaremos cuál de las dos parábolas queda arriba entre esas intersecciones; esta comprobación fija el orden correcto de la resta. Finalmente integraremos «curva superior menos curva inferior» entre las dos abscisas obtenidas.": "Azalera bi kurben artean itxita dagoenez, lehenik esparrua non hasi eta amaitzen den jakin behar dugu: funtzioak berdinduko ditugu haien ebakidura-puntuak aurkitzeko. Ondoren, bi ebakiduren artean zein parabola dagoen gainean zehaztuko dugu; egiaztapen horrek kenketaren ordena zuzena finkatzen du. Azkenik, «goiko kurba ken beheko kurba» integratuko dugu lortutako bi abzisen artean.",
  "Representación y cálculo del área": "Irudikapena eta azaleraren kalkulua",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Puntos de intersección": "1. Ebakidura-puntuak",
  "Dos gráficas se cortan cuando, para una misma abscisa x, tienen la misma ordenada. Por eso los límites del recinto se encuentran resolviendo la igualdad entre las funciones.": "Bi grafiko ebakitzen dira x abzisa bererako ordenatu bera dutenean. Horregatik, esparruaren mugak funtzioen arteko berdintza ebatziz aurkitzen dira.",
  "2. Curva superior y curva inferior": "2. Goiko kurba eta beheko kurba",
  "Antes de integrar hay que conocer el orden de las curvas. Si f(x) − g(x) es positiva en un intervalo, entonces f está por encima de g en ese intervalo.": "Integratu aurretik kurben ordena ezagutu behar da. Tarte batean f(x) − g(x) positiboa bada, f g-ren gainean dago tarte horretan.",
  "3. Área entre dos curvas": "3. Bi kurben arteko azalera",
  "La altura de cada franja vertical es la diferencia entre la función superior y la inferior. La suma continua de esas franjas se expresa mediante una integral definida.": "Zerrenda bertikal bakoitzaren altuera goiko eta beheko funtzioen arteko diferentzia da. Zerrenda horien batura jarraitua integral zehatz baten bidez adierazten da.",
  "4. Regla de Barrow y comprobación del signo": "4. Barrowren erregela eta zeinuaren egiaztapena",
  "Si F es una primitiva del integrando, la integral vale F(b) − F(a). Un área nunca puede ser negativa: un resultado negativo indicaría que hemos restado las curvas en el orden contrario.": "F integrakizunaren primitiboa bada, integralak F(b) − F(a) balio du. Azalera bat ezin da inoiz negatiboa izan: emaitza negatiboak kurbak alderantzizko ordenan kendu ditugula adieraziko luke.",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos las dos funciones de forma explícita": "Bi funtzioak forma esplizituan idazten ditugu",
  "Desarrollamos el producto de la primera curva para poder compararla y operar con ella con facilidad.": "Lehen kurbaren biderkadura garatzen dugu, erraz alderatu eta harekin eragiketak egin ahal izateko.",
  "Hallamos los puntos de intersección": "Ebakidura-puntuak aurkitzen ditugu",
  "En los puntos comunes se cumple f(x) = g(x). Igualamos, pasamos todos los términos a un lado y factorizamos.": "Puntu komunetan f(x) = g(x) betetzen da. Berdindu, gai guztiak alde batera pasa eta faktorizatzen dugu.",
  "x = 0   o   x = 3/2": "x = 0   edo   x = 3/2",
  "Calculamos las ordenadas sustituyendo en la función más sencilla, g(x) = x².": "Ordenatuak funtzio errazenean, g(x) = x² funtzioan, ordezkatuz kalkulatzen ditugu.",
  "Determinamos qué parábola queda arriba": "Zein parabola dagoen gainean zehazten dugu",
  "Restamos la segunda función a la primera y estudiamos el signo dentro del intervalo": "Bigarren funtzioa lehenengoari kentzen diogu eta zeinua honako tarte honen barruan aztertzen dugu:",
  "En ese intervalo, x > 0 y 3 − 2x > 0; por tanto, ambos factores son positivos y f(x) está por encima de g(x). Como comprobación rápida, en x = 1 se obtiene f(1) = 2 y g(1) = 1.": "Tarte horretan, x > 0 eta 3 − 2x > 0; beraz, bi faktoreak positiboak dira eta f(x) g(x)-ren gainean dago. Egiaztapen azkar gisa, x = 1 denean f(1) = 2 eta g(1) = 1 lortzen dira.",
  "Las intersecciones fijan los límites. Entre ellas, la parábola y = 3x − x² es la frontera superior del recinto R.": "Ebakidurek mugak finkatzen dituzte. Haien artean, y = 3x − x² parabola da R esparruaren goiko muga.",
  "Planteamos la integral con el orden correcto": "Integrala ordena egokian planteatzen dugu",
  "La función superior es 3x − x² y la inferior es x². Las restamos e integramos desde x = 0 hasta x = 3/2.": "Goiko funtzioa 3x − x² da eta behekoa x². Kendu eta x = 0-tik x = 3/2-ra integratzen dugu.",
  "Integramos y evaluamos los extremos": "Integratu eta muturrak ebaluatzen ditugu",
  "Integramos término a término y aplicamos la regla de Barrow.": "Gaiz gai integratu eta Barrowren erregela aplikatzen dugu.",
  "Comprobamos que el resultado tiene sentido": "Emaitzak zentzua duela egiaztatzen dugu",
  "El integrando 3x − 2x² es positivo entre 0 y 3/2, de modo que la integral debe ser positiva. El valor 9/8 cumple esta condición.": "3x − 2x² integrakizuna positiboa da 0 eta 3/2 artean; beraz, integralak positiboa izan behar du. 9/8 balioak baldintza hori betetzen du.",
  "Corrección de la fuente:": "Iturriaren zuzenketa:",
  "la solución publicada afirma que y = x² queda arriba y plantea la resta al revés. Su propia gráfica muestra el orden correcto. El área positiva 9/8 se obtiene con (3x − x²) − x².": "argitaratutako ebazpenak y = x² gainean dagoela dio eta kenketa alderantziz planteatzen du. Haren grafikoak berak ordena zuzena erakusten du. 9/8 azalera positiboa (3x − x²) − x² eginez lortzen da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "x = 0 o x = 3/2": "x = 0 edo x = 3/2",
  "o": "edo",
  "En [0, 3/2],": "[0, 3/2] tartean,",
  "Resultado": "Emaitza",
  "Área de R:": "R-ren azalera:",
  "El recinto empieza en x = 0": "Esparrua x = 0 puntuan hasten da",
  "y termina en x = 3/2.": "eta x = 3/2 puntuan amaitzen da."
}));

const originalAreaParabolasText = new WeakMap();

const areaParabolasAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".area-parabolas-data", attribute: "aria-label", eu: "y berdin x bider hiru ken x eta y berdin x ber bi kurbak", es: "Curvas y igual a x por tres menos x e y igual a x al cuadrado" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".area-parabolas-figure", attribute: "aria-label", eu: "Bi parabolek mugatutako esparruaren irudikapena", es: "Representación del recinto limitado por las dos parábolas" },
  { selector: ".area-parabolas-board", attribute: "aria-label", eu: "y berdin hiru x ken x ber bi eta y berdin x ber bi parabolen grafikoa, bien arteko esparrua itzaleztatuta", es: "Gráfica de las parábolas y igual a tres x menos x al cuadrado e y igual a x al cuadrado, con el recinto entre ambas sombreado" },
  { selector: ".math-integral-specific", attribute: "aria-label", eu: "zerotik hiru erdira arteko integrala", es: "integral desde cero hasta tres medios" },
  { selector: ".math-integral-generic", attribute: "aria-label", eu: "a-tik b-ra arteko integrala", es: "integral desde a hasta b" },
];

function applyAreaParabolasText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalAreaParabolasText.has(node)) {
      originalAreaParabolasText.set(node, node.nodeValue);
    }

    const original = originalAreaParabolasText.get(node);
    const key = original.trim();

    if (language === "eu" && areaParabolasTextEu.has(key)) {
      const translation = areaParabolasTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyAreaParabolasLanguage(language) {
  document.title = language === "eu"
    ? "Bi parabolaren arteko azalera · Matematika II"
    : "Área entre dos parábolas · Matemáticas II";

  applyAreaParabolasText(language);

  areaParabolasAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyAreaParabolasLanguage(event.detail.language);
});

applyAreaParabolasLanguage(window.I18n?.getLanguage() ?? "eu");

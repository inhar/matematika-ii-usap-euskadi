const linePlaneAlpha2020TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2020 · Extraordinaria · Opción A · Ejercicio A.2": "2020 · Ezohikoa · A aukera · A.2 ariketa",
  "Geometría en el espacio · Rectas y planos · 2020": "Espazioko geometria · Zuzenak eta planoak · 2020",
  "Paralelismo entre una recta y un plano con parámetro": "Zuzen baten eta parametrodun plano baten paralelotasuna",
  "Enunciado": "Enuntziatua",
  "Sean la recta y el plano definidos por:": "Izan bitez honela definitutako zuzena eta planoa:",
  "Hallar el valor del parámetro,": "Aurkitu parametroaren balioa,",
  ", para que la recta y el plano sean paralelos.": ", zuzena eta planoa paraleloak izan daitezen.",
  "Determinar si el punto": "Zehaztu",
  "pertenece al plano del apartado anterior.": "puntua aurreko ataleko planoan dagoen.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "La recta está dada como intersección de dos planos, de modo que su dirección no aparece escrita directamente. Primero la pondremos en forma paramétrica para obtener un punto y su vector director.": "Zuzena bi planoren ebakidura gisa emanda dago; beraz, haren norabidea ez dago zuzenean idatzita. Lehenik forma parametrikoan jarriko dugu, puntu bat eta norabide-bektorea lortzeko.",
  "Después leeremos el vector normal del plano. Para que la recta sea paralela al plano, su dirección debe ser perpendicular a ese normal: el producto escalar tiene que valer cero. Esa ecuación determinará el parámetro. Por último comprobaremos que un punto de la recta no pertenece al plano, porque la misma perpendicularidad también podría corresponder a una recta contenida en él.": "Ondoren, planoaren bektore normala irakurriko dugu. Zuzena planoarekiko paraleloa izan dadin, haren norabideak normal horrekiko perpendikularra izan behar du: biderkadura eskalarrak zero izan behar du. Ekuazio horrek parametroa zehaztuko du. Azkenik, zuzeneko puntu bat planoan ez dagoela egiaztatuko dugu; perpendikulartasun berak planoan dagoen zuzen bati ere erantzun baitiezaioke.",
  "Valor del parámetro y posición relativa": "Parametroaren balioa eta kokapen erlatiboa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Punto y dirección de una recta paramétrica": "1. Zuzen parametriko baten puntua eta norabidea",
  "En la forma vectorial de una recta, el vector fijo da un punto y el vector multiplicado por el parámetro da su dirección.": "Zuzen baten forma bektorialean, bektore finkoak puntu bat ematen du, eta parametroaz biderkatutako bektoreak haren norabidea.",
  "2. Vector normal de un plano": "2. Plano baten bektore normala",
  "En una ecuación de plano, los coeficientes de las variables forman un vector perpendicular al plano.": "Plano baten ekuazioan, aldagaien koefizienteek planoarekiko perpendikularra den bektore bat osatzen dute.",
  "3. Paralelismo entre recta y plano": "3. Zuzenaren eta planoaren arteko paralelotasuna",
  "La dirección de una recta paralela a un plano es perpendicular al vector normal del plano. El producto escalar nulo asegura direcciones paralelas, pero no distingue entre una recta exterior y una recta contenida; para ello se comprueba un punto de la recta.": "Planoarekiko paraleloa den zuzen baten norabidea planoaren bektore normalarekiko perpendikularra da. Biderkadura eskalar nuluak norabide paraleloak bermatzen ditu, baina ez ditu bereizten kanpoko zuzen bat eta planoan dagoen bat; horretarako, zuzeneko puntu bat egiaztatzen da.",
  "Resolución completa": "Ebazpen osoa",
  "Parametrizamos la recta": "Zuzena parametrizatzen dugu",
  "Restamos la segunda ecuación de la primera para eliminar la variable común.": "Bigarren ekuazioa lehenengoari kentzen diogu aldagai komuna ezabatzeko.",
  "Tomamos la tercera variable como parámetro.": "Hirugarren aldagaia parametro gisa hartzen dugu.",
  "Sustituimos en la segunda ecuación y despejamos la variable que falta.": "Bigarren ekuazioan ordezkatzen dugu, eta falta den aldagaia bakantzen dugu.",
  "Ya podemos leer un punto de la recta y su vector director.": "Dagoeneko zuzeneko puntu bat eta haren norabide-bektorea irakur ditzakegu.",
  "Leemos el vector normal del plano": "Planoaren bektore normala irakurtzen dugu",
  "Al desarrollar solo el término que contiene el paréntesis, los coeficientes de las variables quedan visibles.": "Parentesia duen gaia bakarrik garatuta, aldagaien koefizienteak agerian geratzen dira.",
  "Imponemos la condición de paralelismo": "Paralelotasun-baldintza ezartzen dugu",
  "La dirección de la recta debe ser perpendicular al normal del plano. Calculamos el producto escalar componente a componente.": "Zuzenaren norabideak planoaren normalarekiko perpendikularra izan behar du. Biderkadura eskalarra osagaiz osagai kalkulatzen dugu.",
  "Escribimos el plano obtenido": "Lortutako planoa idazten dugu",
  "Sustituimos el parámetro y multiplicamos toda la ecuación por 13 para evitar fracciones.": "Parametroa ordezkatu eta ekuazio osoa 13z biderkatzen dugu zatikiak saihesteko.",
  "Comprobamos que la recta no está contenida": "Zuzena planoan ez dagoela egiaztatzen dugu",
  "Usamos el punto de la recta obtenido al tomar el parámetro igual a cero y lo sustituimos en el plano.": "Parametroa zero eginda lortutako zuzeneko puntua erabiltzen dugu, eta planoan ordezkatzen dugu.",
  "La dirección es paralela al plano y la recta no está contenida en él. Por tanto, la recta y el plano son paralelos y no se cortan.": "Norabidea planoarekiko paraleloa da, eta zuzena ez dago planoan. Beraz, zuzena eta planoa paraleloak dira eta ez dute elkar ebakitzen.",
  "La recta conserva una separación constante respecto del plano. El punto negro pertenece a la recta; tanto él como el punto destacado quedan fuera del plano.": "Zuzenak planoarekiko distantzia konstantea mantentzen du. Puntu beltza zuzenean dago; bai hura bai nabarmendutako puntua planotik kanpo daude.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Además, el punto elegido de la recta no satisface la ecuación del plano obtenido; el paralelismo es estricto.": "Gainera, zuzenetik aukeratutako puntuak ez du lortutako planoaren ekuazioa betetzen; paralelotasuna hertsia da.",
  "Resultado": "Emaitza",
  "La recta es paralela al plano y no está contenida en él.": "Zuzena planoarekiko paraleloa da, eta ez dago haren barruan.",
  "Un punto pertenece a un plano exactamente cuando sus coordenadas satisfacen la ecuación del plano. Usaremos la ecuación con coeficientes enteros obtenida en el apartado anterior, sustituiremos las tres coordenadas de P y compararemos el resultado con cero.": "Puntu bat plano batean dago baldin eta soilik baldin haren koordenatuek planoaren ekuazioa betetzen badute. Aurreko atalean osoko koefizienteekin lortutako ekuazioa erabiliko dugu, P-ren hiru koordenatuak ordezkatu eta emaitza zerorekin alderatuko dugu.",
  "Pertenencia del punto al plano": "Puntua planoan dagoen aztertzea",
  "Criterio de pertenencia": "Kidetasun-irizpidea",
  "Un punto pertenece a un plano si, al sustituir sus coordenadas en la ecuación, la igualdad se cumple. Si el primer miembro no toma el valor indicado por el segundo, el punto queda fuera.": "Puntu bat plano batean dago bere koordenatuak ekuazioan ordezkatzean berdintza betetzen bada. Lehen atalak ez badu bigarrenak adierazitako balioa hartzen, puntua kanpoan dago.",
  "Recuperamos la ecuación del plano": "Planoaren ekuazioa berreskuratzen dugu",
  "Para el valor del parámetro hallado en el apartado anterior, la ecuación sin fracciones es:": "Aurreko atalean aurkitutako parametroaren baliorako, zatikirik gabeko ekuazioa hau da:",
  "Sustituimos las coordenadas del punto": "Puntuaren koordenatuak ordezkatzen ditugu",
  "Introducimos, en ese orden, la primera, la segunda y la tercera coordenada.": "Ordena horretan sartzen ditugu lehenengo, bigarren eta hirugarren koordenatuak.",
  "Comparamos con la ecuación del plano": "Planoaren ekuazioarekin alderatzen dugu",
  "El plano exige que el primer miembro valga cero, pero para el punto dado vale 56.": "Planoak lehen atalak zero balio izatea eskatzen du, baina emandako punturako 56 balio du.",
  "El punto dado no pertenece al plano.": "Emandako puntua ez dago planoan."
}));

const originalLinePlaneAlpha2020Text = new WeakMap();

const linePlaneAlpha2020Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".line-plane-2020-system", attribute: "aria-label", eu: "r zuzena bi planoren ebakidura gisa", es: "Recta r como intersección de dos planos" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".line-plane-2020-figure", attribute: "aria-label", eu: "Planoarekiko paraleloa den zuzenaren eta Q eta P puntuen irudikapen zehatza", es: "Representación exacta de la recta paralela al plano y de los puntos Q y P" },
  { selector: ".line-plane-2020-board", attribute: "aria-label", eu: "Pi planoa, r zuzen paraleloa, Q puntua zuzenean eta P puntua planotik kanpo", es: "Plano pi, recta r paralela, punto Q sobre la recta y punto P fuera del plano" },
];

function applyLinePlaneAlpha2020Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalLinePlaneAlpha2020Text.has(node)) {
      originalLinePlaneAlpha2020Text.set(node, node.nodeValue);
    }

    const original = originalLinePlaneAlpha2020Text.get(node);
    const key = original.trim();

    if (language === "eu" && linePlaneAlpha2020TextEu.has(key)) {
      const translation = linePlaneAlpha2020TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyLinePlaneAlpha2020Language(language) {
  document.title = language === "eu"
    ? "Zuzen baten eta parametrodun plano baten paralelotasuna · Matematika II"
    : "Paralelismo entre una recta y un plano con parámetro · Matemáticas II";

  applyLinePlaneAlpha2020Text(language);

  linePlaneAlpha2020Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyLinePlaneAlpha2020Language(event.detail.language);
});

applyLinePlaneAlpha2020Language(window.I18n?.getLanguage() ?? "eu");

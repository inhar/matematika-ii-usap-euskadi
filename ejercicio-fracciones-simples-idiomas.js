const partialFractionsExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción B · Problema B.4": "2019 · Ezohikoa · B aukera · B.4 problema",
  "Análisis · Integrales racionales · Julio de 2019": "Analisia · Integral arrazionalak · 2019ko uztaila",
  "Integral racional mediante fracciones simples": "Zatiki sinpleen bidezko integral arrazionala",
  "Enunciado": "Enuntziatua",
  "Calcular la integral siguiente, explicando el método utilizado:": "Kalkulatu integral hau, erabilitako metodoa azalduz:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.4": "B.4 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El denominador ya está factorizado en dos factores lineales distintos. Por eso la fracción puede escribirse como suma de dos fracciones simples, una por cada factor. Tras eliminar denominadores obtendremos una identidad en x. Sustituiremos los dos valores que anulan los factores: así desaparece un término cada vez y podemos hallar A y B sin resolver un sistema. Finalmente integraremos cada fracción como un logaritmo y comprobaremos el resultado derivándolo.": "Izendatzailea bi faktore lineal desberdinetan faktorizatuta dago jada. Horregatik, zatikia bi zatiki sinpleren batura gisa idatz daiteke, faktore bakoitzeko bat. Izendatzaileak ezabatu ondoren, x-ren identitate bat lortuko dugu. Faktoreak deuseztatzen dituzten bi balioak ordezkatuko ditugu: horrela, aldi bakoitzean gai bat desagertzen da, eta A eta B sistema bat ebatzi gabe lor ditzakegu. Azkenik, zatiki bakoitza logaritmo gisa integratu eta emaitza deribatuz egiaztatuko dugu.",
  "Descomposición e integración": "Deskonposizioa eta integrazioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Cuándo usar fracciones simples": "1. Noiz erabili zatiki sinpleak",
  "Una función racional es un cociente de polinomios. Si el grado del numerador es menor que el del denominador y este se descompone en factores lineales, podemos separar la fracción en otras más sencillas.": "Funtzio arrazional bat polinomioen zatidura da. Zenbakitzailearen maila izendatzailearena baino txikiagoa bada eta izendatzailea faktore linealetan deskonposatzen bada, zatikia beste zatiki sinpleago batzuetan bereiz dezakegu.",
  "2. Cómo se calculan los coeficientes": "2. Nola kalkulatzen diren koefizienteak",
  "Multiplicamos la igualdad por el denominador común. Así desaparecen las fracciones y obtenemos una identidad que debe cumplirse para todos los valores permitidos de x.": "Berdintza izendatzaile komunaz biderkatzen dugu. Horrela, zatikiak desagertzen dira, eta x-ren balio onartu guztietarako bete behar den identitate bat lortzen dugu.",
  "Elegir los valores que anulan uno de los factores permite aislar directamente cada coeficiente.": "Faktoreetako bat deuseztatzen duten balioak aukeratzeak koefiziente bakoitza zuzenean bakantzeko aukera ematen du.",
  "3. Primitiva logarítmica": "3. Primitibo logaritmikoa",
  "La derivada del denominador lineal es uno. Por eso cada fracción simple tiene una primitiva logarítmica.": "Izendatzaile linealaren deribatua bat da. Horregatik, zatiki sinple bakoitzak primitibo logaritmiko bat du.",
  "El valor absoluto es necesario porque el logaritmo debe servir en los intervalos donde el factor lineal sea positivo o negativo.": "Balio absolutua beharrezkoa da logaritmoak faktore lineala positiboa edo negatiboa den tarteetan balio dezan.",
  "4. Comprobación": "4. Egiaztapena",
  "La forma más directa de verificar una integral indefinida es derivar el resultado. Al reunir las fracciones debe reaparecer exactamente el integrando inicial.": "Integral zehaztugabe bat egiaztatzeko modurik zuzenena emaitza deribatzea da. Zatikiak berriro elkartzean, hasierako integrakizuna zehazki agertu behar da.",
  "Resolución completa": "Ebazpen osoa",
  "Reconocemos una función racional propia": "Funtzio arrazional propio bat identifikatzen dugu",
  "El numerador tiene grado uno y el denominador grado dos. Además, el denominador ya aparece como producto de dos factores lineales distintos, por lo que podemos usar fracciones simples sin hacer antes una división de polinomios.": "Zenbakitzaileak lehen maila du eta izendatzaileak bigarrena. Gainera, izendatzailea bi faktore lineal desberdinen biderkadura gisa agertzen da; beraz, zatiki sinpleak erabil ditzakegu aurretik polinomioen zatiketarik egin gabe.",
  "Planteamos la descomposición": "Deskonposizioa planteatzen dugu",
  "Asignamos un coeficiente constante a cada factor del denominador.": "Izendatzailearen faktore bakoitzari koefiziente konstante bat esleitzen diogu.",
  "Eliminamos los denominadores": "Izendatzaileak ezabatzen ditugu",
  "Multiplicamos toda la igualdad por el denominador común. En cada sumando se simplifica el factor que ya estaba debajo.": "Berdintza osoa izendatzaile komunaz biderkatzen dugu. Batugai bakoitzean, azpian zegoen faktorea sinplifikatzen da.",
  "Elegimos valores que anulan un término": "Gai bat deuseztatzen duten balioak aukeratzen ditugu",
  "Con el primer valor desaparece el término que contiene B; con el segundo desaparece el que contiene A. Así obtenemos cada incógnita por separado.": "Lehen balioarekin B daukan gaia desagertzen da; bigarrenarekin, A daukana. Horrela, ezezagun bakoitza bereizita lortzen dugu.",
  "Escribimos y comprobamos la descomposición": "Deskonposizioa idatzi eta egiaztatzen dugu",
  "Sustituimos los dos coeficientes. Para comprobarlos reunimos de nuevo las fracciones y verificamos el numerador.": "Bi koefizienteak ordezkatzen ditugu. Egiaztatzeko, zatikiak berriro elkartu eta zenbakitzailea egiaztatzen dugu.",
  "Integramos término a término": "Gaiz gai integratzen dugu",
  "La integral de una suma es la suma de las integrales. Sacamos los coeficientes constantes y aplicamos la primitiva logarítmica.": "Batura baten integrala integralen batura da. Koefiziente konstanteak kanpora ateratzen ditugu eta primitibo logaritmikoa aplikatzen dugu.",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Derivamos la expresión obtenida y reunimos las dos fracciones.": "Lortutako adierazpena deribatu eta bi zatikiak elkartzen ditugu.",
  "Recuperamos el integrando inicial, así que la primitiva es correcta.": "Hasierako integrakizuna berreskuratzen dugu; beraz, primitiboa zuzena da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Al derivar se recupera el integrando original.": "Deribatzean, jatorrizko integrakizuna berreskuratzen da.",
}));

const originalPartialFractionsExerciseText = new WeakMap();

const partialFractionsExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-rational-integral", attribute: "aria-label", eu: "Zortzi x gehi zazpi zati x gehi bat bider x gehi hiru, x-rekiko integrala", es: "Integral de ocho x más siete dividido entre x más uno por x más tres, respecto de x" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyPartialFractionsExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPartialFractionsExerciseText.has(node)) {
      originalPartialFractionsExerciseText.set(node, node.nodeValue);
    }

    const original = originalPartialFractionsExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && partialFractionsExerciseTextEu.has(key)) {
      const translation = partialFractionsExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPartialFractionsExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Zatiki sinpleen bidezko integral arrazionala · Matematika II"
    : "Integral racional mediante fracciones simples · Matemáticas II";

  applyPartialFractionsExerciseText(language);

  partialFractionsExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPartialFractionsExerciseLanguage(event.detail.language);
});

applyPartialFractionsExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

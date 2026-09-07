const determinantExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción B · Problema B.1": "2019 · Ohikoa · B aukera · B.1 problema",
  "Álgebra lineal · Determinantes · Junio de 2019": "Aljebra lineala · Determinanteak · 2019ko ekaina",
  "Determinante de una matriz triangular al cuadrado": "Matrize triangeluar baten karratuaren determinantea",
  "Enunciado": "Enuntziatua",
  "Dada la matriz A(a):": "A(a) matrizea emanda:",
  "Calcular, razonadamente, el valor de a para que el determinante de A(a)² valga 4.": "Kalkulatu, arrazoituz, a-ren balioa A(a)²-ren determinantea 4 izan dadin.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.1": "B.1 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El objetivo es calcular det(A²), no todas las entradas de A². Como A² = A·A, la propiedad multiplicativa del determinante permite escribir det(A²) = [det(A)]². Además, A es triangular inferior, por lo que su determinante es el producto de los elementos de la diagonal principal: 1·a·1 = a. Solo quedará resolver a² = 4 y comprobar sus dos soluciones.": "Helburua det(A²) kalkulatzea da, ez A²-ren osagai guztiak. A² = A·A denez, determinantearen biderkadura-propietateak det(A²) = [det(A)]² idazteko aukera ematen du. Gainera, A behe-triangeluarra da; beraz, haren determinantea diagonal nagusiko elementuen biderkadura da: 1·a·1 = a. Azkenik, a² = 4 ebatzi eta bi soluzioak egiaztatuko ditugu.",
  "Determinante y valores del parámetro": "Determinantea eta parametroaren balioak",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Determinante de un producto": "1. Biderkadura baten determinantea",
  "Para dos matrices cuadradas M y N del mismo orden, el determinante del producto es el producto de sus determinantes.": "Ordena bereko M eta N matrize karratuetarako, biderkaduraren determinantea haien determinanteen biderkadura da.",
  "Como A² significa A·A, podemos aplicar esta propiedad dos veces sobre la misma matriz.": "A²-k A·A esan nahi duenez, propietate hori matrize berari bi aldiz aplika diezaiokegu.",
  "2. Determinante de una matriz triangular": "2. Matrize triangeluar baten determinantea",
  "Una matriz es triangular inferior cuando todas las entradas situadas por encima de su diagonal principal son cero. Su determinante es el producto de los elementos de esa diagonal.": "Matrize bat behe-triangeluarra da diagonal nagusiaren gaineko osagai guztiak zero direnean. Haren determinantea diagonal horretako elementuen biderkadura da.",
  "3. Ecuación de segundo grado sin término lineal": "3. Gai linealik gabeko bigarren mailako ekuazioa",
  "Si x² = k con k > 0, existen dos soluciones reales opuestas: la raíz positiva y su negativa.": "x² = k bada, k > 0 izanik, aurkako bi soluzio erreal daude: erro positiboa eta haren negatiboa.",
  "Resolución completa": "Ebazpen osoa",
  "Leemos exactamente qué determinante se pide": "Zehazki zer determinante eskatzen den irakurtzen dugu",
  "La condición del enunciado es det(A²) = 4. No necesitamos conocer las nueve entradas de A² si podemos calcular directamente su determinante.": "Enuntziatuaren baldintza det(A²) = 4 da. Ez ditugu A²-ren bederatzi osagaiak ezagutu behar haren determinantea zuzenean kalkula badezakegu.",
  "Usamos la propiedad del determinante de un producto": "Biderkadura baten determinantearen propietatea erabiltzen dugu",
  "Escribimos A² como A·A y separamos el determinante del producto.": "A², A·A gisa idazten dugu, eta biderkaduraren determinantea bereizten dugu.",
  "Calculamos det(A) usando su diagonal": "det(A) bere diagonala erabiliz kalkulatzen dugu",
  "A es triangular inferior porque todas las entradas situadas sobre la diagonal principal son cero. Destacamos la diagonal que determina su determinante.": "A behe-triangeluarra da diagonal nagusiaren gaineko osagai guztiak zero direlako. Haren determinantea zehazten duen diagonala nabarmentzen dugu.",
  "Diagonal principal": "Diagonal nagusia",
  "Sustituimos en la condición y resolvemos": "Baldintzan ordezkatu eta ebazten dugu",
  "Como det(A) = a, su cuadrado debe valer 4.": "det(A) = a denez, haren karratuak 4 izan behar du.",
  "Comprobamos los dos valores": "Bi balioak egiaztatzen ditugu",
  "El cuadrado elimina el signo, por eso ambos valores cumplen la condición.": "Karratuak zeinua ezabatzen du; horregatik, bi balioek betetzen dute baldintza.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalDeterminantExerciseText = new WeakMap();

const determinantExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-square-matrix", attribute: "aria-label", eu: "A a-ren matrizea da: bat, zero, zero; bat, a, zero; bat, bat, bat", es: "A de a es la matriz uno, cero, cero; uno, a, cero; uno, uno, uno" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".triangular-figure", attribute: "aria-label", eu: "A matrize behe-triangeluarra da eta bere diagonal nagusia bat, a, bat da; determinantea bat bider a bider bat da", es: "Matriz triangular inferior A con diagonal principal uno, a, uno; su determinante es uno por a por uno" },
];

function applyDeterminantExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalDeterminantExerciseText.has(node)) {
      originalDeterminantExerciseText.set(node, node.nodeValue);
    }

    const original = originalDeterminantExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && determinantExerciseTextEu.has(key)) {
      const translation = determinantExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyDeterminantExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Matrize triangeluarraren determinantea · Matematika II"
    : "Determinante de una matriz triangular · Matemáticas II";

  applyDeterminantExerciseText(language);

  determinantExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyDeterminantExerciseLanguage(event.detail.language);
});

applyDeterminantExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

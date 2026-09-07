const detailTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "Ejercicio piloto · Fuente por catalogar": "Ariketa pilotua · Iturria katalogatzeke",
  "Álgebra · Matrices · Pregunta 1, opción B": "Aljebra · Matrizeak · 1. galdera, B aukera",
  "Matrices con parámetro": "Parametrodun matrizeak",
  "Enunciado": "Enuntziatua",
  "Para cada": "",
  "∈ ℝ se considera la matriz:": "∈ ℝ balio bakoitzerako, matrize hau hartzen da:",
  "Se pide:": "Eskatzen da:",
  "Calcular los valores de": "Kalkulatu A² = I betetzen duten",
  "que hacen que A² = I.": "-ren balioak.",
  "Si B ∈": "B ∈",
  "verifica B² = 2I, determinar los posibles valores de det(B).": "matrizeak B² = 2I betetzen badu, zehaztu det(B)-ren balio posibleak.",
  "Calcular el rango y el determinante de A para cada": "Kalkulatu A-ren heina eta determinantea",
  "∈ ℝ.": "∈ ℝ balio bakoitzerako.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Buscamos los valores de": "A² identitatea izatea eragiten duten",
  "para los que A² es la identidad. Como dos matrices son iguales cuando coinciden todas sus entradas, el camino natural es calcular A·A y compararlo posición por posición con I₃. Esa comparación convertirá la condición matricial en ecuaciones sencillas para": "-ren balioak bilatzen ditugu. Bi matrize berdinak dira osagai guztiak bat datozenean; beraz, bide naturala A·A kalkulatzea eta I₃-rekin osagaiz osagai alderatzea da. Konparazio horrek baldintza matriziala ekuazio erraz bihurtuko du parametro honetarako:",
  "¿Cuándo se cumple A² = I?": "Noiz betetzen da A² = I?",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Producto de matrices": "1. Matrizeen biderketa",
  "Para multiplicar dos matrices, cada entrada del resultado se obtiene haciendo el producto escalar de una fila de la primera matriz por una columna de la segunda.": "Bi matrize biderkatzeko, emaitzaren osagai bakoitza lehen matrizeko errenkada baten eta bigarreneko zutabe baten biderkadura eskalarra eginez lortzen da.",
  "Por ejemplo, la entrada (1, 2) de A² se obtiene con la primera fila de A y la segunda columna de A.": "Adibidez, A²-ren (1, 2) osagaia A-ren lehen errenkadarekin eta bigarren zutabearekin lortzen da.",
  "2. Matriz identidad e igualdad de matrices": "2. Identitate-matrizea eta matrizeen berdintasuna",
  "La identidad I₃ tiene unos en la diagonal y ceros fuera de ella. Dos matrices son iguales si coinciden una a una todas sus entradas.": "I₃ identitateak batekoak ditu diagonalean eta zeroak handik kanpo. Bi matrize berdinak dira osagai guztiak banan-banan bat datozenean.",
  "Resolución completa": "Ebazpen osoa",
  "Planteamos el cuadrado": "Karratua planteatzen dugu",
  "A² significa A·A. Como A tiene 3 filas y 3 columnas, el resultado será otra matriz 3 × 3.": "A² adierazpenak A·A esan nahi du. A-k 3 errenkada eta 3 zutabe dituenez, emaitza beste 3 × 3 matrize bat izango da.",
  "Calculamos las nueve entradas": "Bederatzi osagaiak kalkulatzen ditugu",
  "En cada línea se indica la posición de la entrada y el producto fila por columna correspondiente.": "Lerro bakoitzean osagaiaren kokapena eta dagokion errenkada bider zutabe eragiketa adierazten dira.",
  "Primera fila del resultado": "Emaitzaren lehen errenkada",
  "Segunda fila del resultado": "Emaitzaren bigarren errenkada",
  "Tercera fila del resultado": "Emaitzaren hirugarren errenkada",
  "Comparamos A² con I₃": "A² eta I₃ alderatzen ditugu",
  "Colocamos las dos matrices en la misma posición. Para que sean iguales, cada entrada de A² debe coincidir con la entrada que ocupa el mismo lugar en I₃:": "Bi matrizeak elkarren ondoan jartzen ditugu. Berdinak izateko, A²-ren osagai bakoitzak I₃-n kokapen bera duen osagaiarekin bat etorri behar du:",
  "Ahora igualamos las posiciones destacadas. En la diagonal necesitamos un 1 y fuera de la diagonal necesitamos un 0:": "Orain nabarmendutako kokapenak berdintzen ditugu. Diagonalean 1 behar dugu, eta diagonaletik kanpo 0:",
  "Las tres condiciones son compatibles y dan el mismo valor.": "Hiru baldintzak bateragarriak dira eta balio bera ematen dute.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Para que esta matriz sea I₃, todos los términos que contienen": "Matrize hau I₃ izan dadin,",
  "deben anularse.": "-ren menpeko gai guztiek zero izan behar dute.",
  "Resultado": "Emaitza",
  "No necesitamos encontrar la matriz B: solamente su determinante. Como el determinante transforma un producto de matrices en un producto de números, aplicarlo a B² = 2I₃ convertirá la igualdad matricial en una ecuación numérica para det(B). Después solo habrá que resolver esa ecuación y comprobar qué signos son posibles.": "Ez dugu B matrizea aurkitu behar, haren determinantea baizik. Determinanteak matrizeen biderkadura zenbakien biderkadura bihurtzen duenez, B² = 2I₃ berdintzan aplikatzeak berdintza matriziala det(B)-rentzako zenbakizko ekuazio bihurtuko du. Ondoren ekuazioa ebatzi eta zeinu posibleak egiaztatu besterik ez da egin behar.",
  "Valores posibles de det(B)": "det(B)-ren balio posibleak",
  "1. El determinante de un producto": "1. Biderkadura baten determinantea",
  "Si X e Y son matrices cuadradas del mismo orden, el determinante del producto es el producto de los determinantes:": "X eta Y ordena bereko matrize karratuak badira, bideraduraren determinantea determinanteen biderkadura da:",
  "Por eso det(B²) = det(B·B) = det(B)².": "Horregatik, det(B²) = det(B·B) = det(B)².",
  "2. El determinante de λI": "2. λI-ren determinantea",
  "Una matriz diagonal tiene como determinante el producto de los elementos de su diagonal. En orden 3:": "Matrize diagonal baten determinantea diagonaleko elementuen biderkadura da. 3. ordenan:",
  "En particular, det(2I₃) = 2³ = 8. Es importante usar el exponente 3 porque la matriz es 3 × 3.": "Zehazki, det(2I₃) = 2³ = 8. Garrantzitsua da 3 berretzailea erabiltzea, matrizea 3 × 3 delako.",
  "3. Una ecuación de segundo grado muy simple": "3. Bigarren mailako ekuazio oso erraza",
  "Si un número real x cumple x² = k con k > 0, existen dos soluciones: x = √k y x = −√k. Al elevar al cuadrado, ambos signos producen el mismo resultado.": "x zenbaki erreal batek x² = k betetzen badu, k > 0 izanik, bi soluzio daude: x = √k eta x = −√k. Karratura jasotzean, bi zeinuek emaitza bera ematen dute.",
  "Tomamos determinantes": "Determinanteak hartzen ditugu",
  "Partimos de B² = 2I₃. Si dos matrices son iguales, sus determinantes también son iguales:": "B² = 2I₃ berdintzatik abiatzen gara. Bi matrize berdinak badira, haien determinanteak ere berdinak dira:",
  "Simplificamos el lado izquierdo": "Ezkerreko aldea sinplifikatzen dugu",
  "Calculamos el lado derecho": "Eskuineko aldea kalkulatzen dugu",
  "Como 2I₃ = diag(2, 2, 2), multiplicamos los tres elementos de la diagonal:": "2I₃ = diag(2, 2, 2) denez, diagonaleko hiru elementuak biderkatzen ditugu:",
  "Resolvemos la ecuación numérica": "Zenbakizko ekuazioa ebazten dugu",
  "Los dos signos son posibles. Por ejemplo, √2I₃ tiene determinante 2√2, mientras que diag(−√2, √2, √2) tiene determinante −2√2; ambas matrices cumplen B² = 2I₃.": "Bi zeinuak dira posible. Adibidez, √2I₃ matrizearen determinantea 2√2 da; diag(−√2, √2, √2) matrizearena, berriz, −2√2. Biek betetzen dute B² = 2I₃.",
  "Primero calcularemos det(A) en función de": "Lehenik, det(A) kalkulatuko dugu",
  ". Cuando sea distinto de cero, A será invertible y tendrá rango 3. En el valor excepcional que anule el determinante solo sabremos que el rango es menor que 3; entonces buscaremos un menor de orden 2 no nulo para decidir si el rango es 2 o todavía menor.": "-ren arabera. Zero ez denean, A alderantzikagarria izango da eta 3ko heina izango du. Determinantea zero egiten duen balio berezian, heina 3 baino txikiagoa dela bakarrik jakingo dugu; orduan, zero ez den 2. ordenako minore bat bilatuko dugu, heina 2 den edo are txikiagoa den erabakitzeko.",
  "Determinante y rango de A": "A-ren determinantea eta heina",
  "1. Determinante de una matriz 3 × 3": "1. 3 × 3 matrize baten determinantea",
  "Podemos desarrollar por una fila. Al hacerlo por la primera fila, los signos son +, −, +. Cada elemento multiplica el determinante 2 × 2 que queda al eliminar su fila y su columna.": "Errenkada baten arabera gara dezakegu. Lehen errenkadaren arabera egitean, zeinuak +, −, + dira. Elementu bakoitzak bere errenkada eta zutabea ezabatzean geratzen den 2 × 2 determinantea biderkatzen du.",
  "Para una matriz 2 × 2, el determinante se calcula cruzando:": "2 × 2 matrize batean, determinantea gurutzatuz kalkulatzen da:",
  "2. Determinante e invertibilidad": "2. Determinantea eta alderantzikagarritasuna",
  "Una matriz 3 × 3 tiene rango 3 exactamente cuando su determinante es distinto de cero. En ese caso es invertible. Si el determinante vale cero, el rango es menor que 3.": "3 × 3 matrize batek 3ko heina du baldin eta soilik baldin haren determinantea zero ez bada. Kasu horretan alderantzikagarria da. Determinantea zero bada, heina 3 baino txikiagoa da.",
  "det(A) ≠ 0 ⇔ A es invertible ⇔ rango(A) = 3": "det(A) ≠ 0 ⇔ A alderantzikagarria da ⇔ heina(A) = 3",
  "3. Cómo encontrar el rango cuando det(A) = 0": "3. Nola aurkitu heina det(A) = 0 denean",
  "El rango es el mayor orden de un menor no nulo. Si det(A) = 0, buscamos un determinante 2 × 2 no nulo. Si existe, el rango es 2; si todos fueran cero, habría que estudiar menores de orden 1.": "Heina zero ez den minore baten ordenarik handiena da. det(A) = 0 bada, zero ez den 2 × 2 determinante bat bilatzen dugu. Existitzen bada, heina 2 da; guztiak zero balira, 1. ordenako minoreak aztertu beharko lirateke.",
  "Calculamos det(A) por la primera fila": "det(A) lehen errenkadaren arabera kalkulatzen dugu",
  "Primer término": "Lehen gaia",
  "Segundo término": "Bigarren gaia",
  "Tercer término": "Hirugarren gaia",
  "Sumamos los tres términos:": "Hiru gaiak batzen ditugu:",
  "Buscamos cuándo se anula": "Noiz den zero bilatzen dugu",
  "Por tanto, hay que separar los casos a ≠ 1/2 y a = 1/2.": "Beraz, a ≠ 1/2 eta a = 1/2 kasuak bereizi behar dira.",
  "Caso a ≠ 1/2": "a ≠ 1/2 kasua",
  "Entonces 1 − 2a ≠ 0. El determinante no se anula, así que A es invertible y tiene rango 3.": "Orduan 1 − 2a ≠ 0. Determinantea ez da zero; beraz, A alderantzikagarria da eta 3ko heina du.",
  "Caso a = 1/2": "a = 1/2 kasua",
  "Ahora det(A) = 0, de modo que el rango es menor que 3. Para comprobar que no baja de 2, tomamos el menor de las dos primeras filas y las dos primeras columnas:": "Orain det(A) = 0 da; beraz, heina 3 baino txikiagoa da. 2tik behera ez dela jaisten egiaztatzeko, lehen bi errenkaden eta lehen bi zutabeen minorea hartzen dugu:",
  "Hay un menor de orden 2 no nulo, así que rango(A) ≥ 2. Como ya sabemos que rango(A) < 3, concluimos que rango(A) = 2.": "Zero ez den 2. ordenako minore bat dago; beraz, heina(A) ≥ 2. Dagoeneko heina(A) < 3 dela dakigunez, heina(A) = 2 dela ondorioztatzen dugu.",
  "det(A) ≠ 0, luego A es invertible.": "det(A) ≠ 0; beraz, A alderantzikagarria da.",
  "rango(A) = 3": "heina(A) = 3",
  "det(A) = 0, pero existe un menor de orden 2 no nulo.": "det(A) = 0, baina zero ez den 2. ordenako minore bat dago.",
  "rango(A) = 2": "heina(A) = 2",
  "Rango 3 si a ≠ 1/2; rango 2 si a = 1/2.": "3ko heina a ≠ 1/2 bada; 2ko heina a = 1/2 bada.",
}));

const originalDetailText = new WeakMap();

const detailAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-matrix", attribute: "aria-label", eu: "A matrizea: minus bat, bi, minus bi; zero, hiru, minus lau; a, bi, minus hiru", es: "A es la matriz menos uno, dos, menos dos; cero, tres, menos cuatro; a, dos, menos tres" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Soluzioaren atalak", es: "Apartados de la solución" },
  { selector: ".matrix-comparison", attribute: "aria-label", eu: "A karratuaren eta identitate-matrizearen osagaiz osagaiko konparazioa", es: "Comparación entrada a entrada entre A al cuadrado y la matriz identidad" },
];

function applyDetailText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalDetailText.has(node)) {
      originalDetailText.set(node, node.nodeValue);
    }

    const original = originalDetailText.get(node);
    const key = original.trim();

    if (language === "eu" && detailTextEu.has(key)) {
      const translation = detailTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyDetailLanguage(language) {
  document.title = language === "eu"
    ? "Parametrodun matrizeak · Matematika II"
    : "Matrices con parámetro · Matemáticas II";

  applyDetailText(language);

  detailAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyDetailLanguage(event.detail.language);
});

applyDetailLanguage(window.I18n?.getLanguage() ?? "eu");

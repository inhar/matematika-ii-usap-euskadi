const successiveDeterminantTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción B · Problema B.1": "2019 · Ezohikoa · B aukera · B.1 problema",
  "Álgebra lineal · Propiedades de los determinantes · Julio de 2019": "Aljebra lineala · Determinanteen propietateak · 2019ko uztaila",
  "Determinante tras varias operaciones matriciales": "Hainbat matrize-eragiketaren ondorengo determinantea",
  "Enunciado": "Enuntziatua",
  "Una matriz A de tamaño 3 × 3 cumple:": "3 × 3 tamainako A matrize batek hau betetzen du:",
  "Se realizan sucesivamente las siguientes operaciones:": "Ondoz ondoko eragiketa hauek egiten dira:",
  "Se intercambian la primera y la segunda fila.": "Lehenengo eta bigarren errenkadak trukatzen dira.",
  "Se multiplica la tercera columna por −2.": "Hirugarren zutabea −2z biderkatzen da.",
  "Se multiplica toda la matriz por 2.": "Matrize osoa 2z biderkatzen da.",
  "Se transpone la matriz.": "Matrizea transposatzen da.",
  "Calcular razonadamente el determinante de la matriz obtenida.": "Kalkulatu arrazoituz lortutako matrizearen determinantea.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.1": "B.1 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "No necesitamos conocer las entradas de la matriz: cada operación modifica su determinante mediante un factor conocido. Seguiremos las transformaciones en el orden indicado, actualizando el valor después de cada una. El intercambio de filas cambia el signo; multiplicar una columna por −2 multiplica el determinante por −2; multiplicar toda una matriz 3 × 3 por 2 aporta el factor 2³; y transponerla no cambia su determinante.": "Ez ditugu matrizearen osagaiak ezagutu behar: eragiketa bakoitzak faktore ezagun baten bidez aldatzen du haren determinantea. Transformazioei adierazitako ordenan jarraituko diegu, eragiketa bakoitzaren ondoren balioa eguneratuz. Errenkadak trukatzeak zeinua aldatzen du; zutabe bat −2z biderkatzeak determinantea −2z biderkatzen du; 3 × 3 matrize osoa 2z biderkatzeak 2³ faktorea ematen du; eta transposatzeak ez du determinantea aldatzen.",
  "Efecto de las operaciones sobre el determinante": "Eragiketen eragina determinantean",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intercambio de dos filas": "1. Bi errenkadaren trukea",
  "Si se intercambian dos filas de una matriz cuadrada, el determinante conserva su valor absoluto, pero cambia de signo.": "Matrize karratu baten bi errenkada trukatzen badira, determinanteak balio absolutua mantentzen du, baina zeinua aldatzen du.",
  "2. Multiplicación de una fila o columna": "2. Errenkada edo zutabe baten biderketa",
  "Si una sola fila o una sola columna se multiplica por un número k, el determinante queda multiplicado por ese mismo número.": "Errenkada bakar bat edo zutabe bakar bat k zenbakiaz biderkatzen bada, determinantea zenbaki beraz biderkatzen da.",
  "3. Multiplicación de toda la matriz": "3. Matrize osoaren biderketa",
  "Multiplicar toda una matriz de orden n por k equivale a multiplicar sus n filas por k. Por eso aparecen n factores iguales.": "n ordenako matrize osoa kz biderkatzea haren n errenkadak kz biderkatzearen baliokidea da. Horregatik, n faktore berdin agertzen dira.",
  "En una matriz 3 × 3, el factor es k³. Esta propiedad no debe confundirse con multiplicar una única fila o columna.": "3 × 3 matrize batean, faktorea k³ da. Propietate hori ez da nahasi behar errenkada edo zutabe bakarra biderkatzearekin.",
  "4. Determinante de la traspuesta": "4. Transposatuaren determinantea",
  "La trasposición intercambia filas por columnas, pero no modifica el valor del determinante.": "Transposizioak errenkadak eta zutabeak trukatzen ditu, baina ez du determinantearen balioa aldatzen.",
  "Resolución completa": "Ebazpen osoa",
  "Nombramos las matrices de cada etapa": "Etapa bakoitzeko matrizeak izendatzen ditugu",
  "Llamaremos A₀ a la matriz inicial y A₁, A₂, A₃ y A₄ a las matrices obtenidas después de las operaciones a, b, c y d, respectivamente.": "Hasierako matrizeari A₀ deituko diogu, eta a, b, c eta d eragiketen ondoren lortutako matrizeei A₁, A₂, A₃ eta A₄, hurrenez hurren.",
  "Intercambiamos la primera y la segunda fila": "Lehenengo eta bigarren errenkadak trukatzen ditugu",
  "Un único intercambio de dos filas cambia el signo del determinante. No altera su valor absoluto.": "Bi errenkadaren truke bakar batek determinantearen zeinua aldatzen du. Ez du haren balio absolutua aldatzen.",
  "Multiplicamos la tercera columna por −2": "Hirugarren zutabea −2z biderkatzen dugu",
  "Al multiplicar una sola columna por −2, el determinante anterior queda multiplicado por −2. Los dos signos negativos se cancelan.": "Zutabe bakar bat −2z biderkatzean, aurreko determinantea −2z biderkatzen da. Bi zeinu negatiboak ezeztatu egiten dira.",
  "Multiplicamos toda la matriz por 2": "Matrize osoa 2z biderkatzen dugu",
  "A₂ es de tamaño 3 × 3. Multiplicar toda la matriz por 2 multiplica cada una de sus tres filas por 2; por eso el determinante recibe el factor 2³ = 8, no solamente el factor 2.": "A₂ matrizea 3 × 3 tamainakoa da. Matrize osoa 2z biderkatzeak haren hiru errenkadetako bakoitza 2z biderkatzen du; horregatik, determinanteak 2³ = 8 faktorea jasotzen du, ez 2 faktorea bakarrik.",
  "Transponemos la matriz": "Matrizea transposatzen dugu",
  "La traspuesta tiene el mismo determinante que la matriz de la que procede.": "Transposatuak jatorrizko matrizearen determinante bera du.",
  "Reunimos toda la secuencia": "Sekuentzia osoa biltzen dugu",
  "La siguiente lectura permite comprobar el valor después de cada operación, no solo el resultado final.": "Ondorengo irakurketak eragiketa bakoitzaren ondorengo balioa egiaztatzeko aukera ematen du, ez azken emaitza bakarrik.",
  "Evolución del determinante": "Determinantearen bilakaera",
  "Matriz inicial": "Hasierako matrizea",
  "Valor dado": "Emandako balioa",
  "Factor −1": "−1 faktorea",
  "Factor −2": "−2 faktorea",
  "Factor 2³ = 8": "2³ = 8 faktorea",
  "Factor 1": "1 faktorea",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Intercambiar F₁ y F₂:": "F₁ eta F₂ trukatu:",
  "Multiplicar C₃ por −2:": "C₃ −2z biderkatu:",
  "Multiplicar toda la matriz 3 × 3 por 2:": "3 × 3 matrize osoa 2z biderkatu:",
  "Transponer:": "Transposatu:",
    "el determinante no cambia": "determinantea ez da aldatzen",
  "Resultado": "Emaitza"
}));

const originalSuccessiveDeterminantText = new WeakMap();

const successiveDeterminantAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".det-operation-figure", attribute: "aria-label", eu: "Lau eragiketen eta bakoitzaren ondoren lortutako determinantearen sekuentzia", es: "Secuencia de las cuatro operaciones y del determinante obtenido tras cada una" },
];

function applySuccessiveDeterminantText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalSuccessiveDeterminantText.has(node)) {
      originalSuccessiveDeterminantText.set(node, node.nodeValue);
    }

    const original = originalSuccessiveDeterminantText.get(node);
    const key = original.trim();

    if (language === "eu" && successiveDeterminantTextEu.has(key)) {
      const translation = successiveDeterminantTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applySuccessiveDeterminantLanguage(language) {
  document.title = language === "eu"
    ? "Eragiketa jarraituen ondorengo determinantea · Matematika II"
    : "Determinante tras operaciones sucesivas · Matemáticas II";

  applySuccessiveDeterminantText(language);

  successiveDeterminantAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applySuccessiveDeterminantLanguage(event.detail.language);
});

applySuccessiveDeterminantLanguage(window.I18n?.getLanguage() ?? "eu");

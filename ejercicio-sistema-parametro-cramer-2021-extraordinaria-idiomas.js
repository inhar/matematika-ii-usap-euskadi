const cramer2021ExtraTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Extraordinaria · Problema 1": "2021 · Ezohikoa · 1. problema",
  "Álgebra lineal · Sistemas con parámetros · 2021": "Aljebra lineala · Parametrodun sistemak · 2021",
  "Sistema con parámetro mediante Cramer": "Parametrodun sistema Cramerren bidez",
  "Enunciado": "Enuntziatua",
  "Discutir el siguiente sistema de ecuaciones lineales en función del parámetro": "Eztabaidatu ekuazio linealen sistema hau",
  ". Resolverlo, también en función de": " parametroaren arabera. Ebatzi sistema,",
  ", mediante el método de Cramer en los casos en que sea posible.": "-ren arabera ere, Cramerren metodoaren bidez posible den kasuetan.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema 1": "1. problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El determinante de la matriz de coeficientes separa el problema en dos partes. Cuando no se anula, el sistema tiene solución única y podemos calcularla con Cramer. Cuando se anula, Cramer deja de ser aplicable y debemos comparar los rangos de la matriz de coeficientes y de la ampliada. Así obtenemos primero los valores excepcionales, después la solución general y, por último, clasificamos esos casos por separado.": "Koefizienteen matrizearen determinanteak problema bi zatitan banatzen du. Zero ez denean, sistemak soluzio bakarra du eta Cramerren bidez kalkula dezakegu. Zero denean, Cramer ezin da erabili, eta koefizienteen matrizearen heina matrize hedatuarenarekin alderatu behar dugu. Horrela, lehenik balio bereziak lortzen ditugu; ondoren, soluzio orokorra; eta, azkenik, kasu bereziak banan-banan sailkatzen ditugu.",
  "Discusión y solución del sistema": "Sistemaren eztabaida eta soluzioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Matrices asociadas a un sistema": "1. Sistema bati lotutako matrizeak",
  "Al escribir un sistema como A·X = b, A es la matriz de coeficientes, X contiene las incógnitas y b los términos independientes. La matriz ampliada A* se obtiene añadiendo b a la derecha de A.": "Sistema bat A·X = b moduan idaztean, A koefizienteen matrizea da, X-k ezezagunak ditu eta b-k gai askeak. A* matrize hedatua A-ren eskuinean b gehituz lortzen da.",
  "2. Determinante y método de Cramer": "2. Determinantea eta Cramerren metodoa",
  "Si A es cuadrada y su determinante no es cero, el sistema tiene una única solución. Cramer calcula cada incógnita dividiendo dos determinantes: en el numerador se sustituye por b la columna de la incógnita correspondiente.": "A karratua bada eta haren determinantea zero ez bada, sistemak soluzio bakarra du. Cramerrek ezezagun bakoitza bi determinante zatituz kalkulatzen du: zenbakitzailean dagokion ezezagunaren zutabea b-z ordezkatzen da.",
  "Cramer solo puede usarse cuando D = det(A) ≠ 0, porque no es posible dividir entre cero.": "Cramer D = det(A) ≠ 0 denean bakarrik erabil daiteke, ezin baita zeroz zatitu.",
  "3. Teorema de Rouché-Frobenius": "3. Rouché-Frobeniusen teorema",
  "Cuando det(A) = 0, el determinante ya no decide el tipo de sistema. Comparamos entonces los rangos de A y A*:": "det(A) = 0 denean, determinanteak ez du jada sistema mota erabakitzen. Orduan A-ren eta A*-ren heinak alderatzen ditugu:",
  "Una solución": "Soluzio bat",
  "Infinitas soluciones": "Infinitu soluzio",
  "Ninguna solución": "Soluziorik ez",
  "Un menor de orden 2 no nulo demuestra que el rango es al menos 2; un menor de orden 3 no nulo demuestra que es 3.": "Zero ez den 2. ordenako minore batek heina gutxienez 2 dela frogatzen du; zero ez den 3. ordenako minore batek heina 3 dela frogatzen du.",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos la matriz de coeficientes y la ampliada": "Koefizienteen matrizea eta matrize hedatua idazten ditugu",
  "Las columnas siguen el orden de las incógnitas x, y, z. La última columna de A* contiene los términos independientes 2, 1, 3.": "Zutabeek x, y, z ezezagunen ordena jarraitzen dute. A*-ren azken zutabeak 2, 1, 3 gai askeak ditu.",
  "Calculamos y factorizamos el determinante de A": "A-ren determinantea kalkulatu eta faktorizatzen dugu",
  "Desarrollamos por la primera fila, cuyos signos son +, −, +.": "Lehen errenkadaren arabera garatzen dugu; haren zeinuak +, −, + dira.",
  "Primer término": "Lehen gaia",
  "Segundo término": "Bigarren gaia",
  "Tercer término": "Hirugarren gaia",
  "Igualamos cada factor a cero para localizar los únicos valores en los que el sistema puede cambiar de tipo.": "Faktore bakoitza zerorekin berdintzen dugu, sistema mota alda daitekeen balio bakarrak aurkitzeko.",
  "Clasificamos el caso general": "Kasu orokorra sailkatzen dugu",
  "Si a no es 3 ni −3/2, entonces D ≠ 0. Por tanto, A tiene rango 3 y el sistema es compatible determinado. En este caso, y solo en este, podemos aplicar Cramer.": "a ez bada 3 ezta −3/2 ere, D ≠ 0 da. Beraz, A-ren heina 3 da eta sistema bateragarri determinatua da. Kasu honetan, eta honetan bakarrik, erabil dezakegu Cramer.",
  "Una única solución": "Soluzio bakarra",
  "Calculamos los tres numeradores de Cramer": "Cramerren hiru zenbakitzaileak kalkulatzen ditugu",
  "Para hallar D": "D",
  ", D": ", D",
  "y D": "eta D",
  "sustituimos, respectivamente, la primera, la segunda y la tercera columna de A por la columna de términos independientes.": "aurkitzeko, hurrenez hurren A-ren lehen, bigarren eta hirugarren zutabeak gai askeen zutabeaz ordezkatzen ditugu.",
  "Numerador de x": "x-ren zenbakitzailea",
  "Numerador de y": "y-ren zenbakitzailea",
  "Numerador de z": "z-ren zenbakitzailea",
  "Escribimos la solución para el caso regular": "Kasu erregularraren soluzioa idazten dugu",
  "Dividimos cada numerador entre D. Las tres fracciones tienen sentido exactamente cuando a ≠ 3 y a ≠ −3/2.": "Zenbakitzaile bakoitza D-z zatitzen dugu. Hiru zatikiek a ≠ 3 eta a ≠ −3/2 denean dute zentzua, eta orduan bakarrik.",
  "Estudiamos el caso a = 3": "a = 3 kasua aztertzen dugu",
  "Como D = 0, el rango de A es menor que 3. El menor de las dos primeras filas y columnas no se anula, por lo que el rango de A es 2.": "D = 0 denez, A-ren heina 3 baino txikiagoa da. Lehen bi errenkada eta zutabeetako minorea ez da zero; beraz, A-ren heina 2 da.",
  "En A* tomamos las columnas 1, 2 y 4. Ese menor de orden 3 sí es distinto de cero.": "A*-n 1., 2. eta 4. zutabeak hartzen ditugu. 3. ordenako minore hori zero ez da.",
  "Los rangos son distintos: el sistema es incompatible y no tiene solución.": "Heinak desberdinak dira: sistema bateraezina da eta ez du soluziorik.",
  "Estudiamos el caso a = −3/2": "a = −3/2 kasua aztertzen dugu",
  "Repetimos el argumento. El mismo menor de orden 2 de A sigue siendo no nulo.": "Argudioa errepikatzen dugu. A-ren 2. ordenako minore bera zero ez da oraindik.",
  "El menor formado por las columnas 1, 2 y 4 de A* tampoco se anula.": "A*-ren 1., 2. eta 4. zutabeek osatutako minorea ere ez da zero.",
  "De nuevo, rango(A) < rango(A*): el sistema es incompatible y no tiene solución.": "Berriro ere, heina(A) < heina(A*): sistema bateraezina da eta ez du soluziorik.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Compatible determinado": "Bateragarri determinatua",
  "Se resuelve mediante Cramer.": "Cramerren bidez ebazten da.",
  "Incompatible": "Bateraezina",
  "No tiene solución.": "Ez du soluziorik.",
  "Para": "",
  "Resultado": "Emaitza",
  "a ≠ 3 y a ≠ −3/2: una solución": "a ≠ 3 eta a ≠ −3/2: soluzio bat",
  "a = 3 o a = −3/2: ninguna solución": "a = 3 edo a = −3/2: soluziorik ez"
}));

const originalCramer2021ExtraText = new WeakMap();

const cramer2021ExtraAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".cramer-system-statement", attribute: "aria-label", eu: "a parametrodun hiru ekuazioko sistema", es: "Sistema de tres ecuaciones con parámetro a" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyCramer2021ExtraText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCramer2021ExtraText.has(node)) {
      originalCramer2021ExtraText.set(node, node.nodeValue);
    }

    const original = originalCramer2021ExtraText.get(node);
    const key = original.trim();

    if (language === "eu" && cramer2021ExtraTextEu.has(key)) {
      const translation = cramer2021ExtraTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCramer2021ExtraLanguage(language) {
  document.title = language === "eu"
    ? "Parametrodun sistema bat Cramerren bidez · Matematika II"
    : "Sistema con parámetro mediante Cramer · Matemáticas II";

  applyCramer2021ExtraText(language);

  cramer2021ExtraAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCramer2021ExtraLanguage(event.detail.language);
});

applyCramer2021ExtraLanguage(window.I18n?.getLanguage() ?? "eu");

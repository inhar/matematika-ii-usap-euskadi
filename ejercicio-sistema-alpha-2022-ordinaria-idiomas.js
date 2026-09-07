const systemAlpha2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio A1": "2022 · Ohikoa · A1 ariketa",
  "Álgebra lineal · Sistemas con parámetros · 2022": "Aljebra lineala · Parametrodun sistemak · 2022",
  "Sistema lineal con parámetro α": "α parametrodun sistema lineala",
  "Enunciado": "Enuntziatua",
  "Discute la existencia de soluciones del siguiente sistema de ecuaciones lineales en función de los valores del parámetro α:": "Eztabaidatu ekuazio linealen sistema honen soluzioen existentzia α parametroaren balioen arabera:",
  "Resuelve el sistema para los dos valores siguientes, si es posible:": "Ebatzi sistema hurrengo bi balioetarako, posible bada:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "El determinante de la matriz de coeficientes resuelve de inmediato el caso general: si no es cero, el sistema tiene una única solución. Por eso calcularemos primero el determinante y estudiaremos por separado únicamente los valores del parámetro que lo anulan.": "Koefizienteen matrizearen determinanteak berehala ebazten du kasu orokorra: zero ez bada, sistemak soluzio bakarra du. Horregatik, lehenik determinantea kalkulatuko dugu, eta nulua egiten duten parametroaren balioak bakarrik aztertuko ditugu bereiz.",
  "Aquí solo aparece un valor excepcional. En él, el determinante ya no basta y debemos comparar los rangos de la matriz de coeficientes y de la matriz ampliada mediante operaciones elementales de fila.": "Hemen salbuespenezko balio bakarra agertzen da. Balio horretan, determinantea ez da nahikoa, eta koefizienteen matrizearen eta matrize hedatuaren heinak alderatu behar ditugu errenkada-eragiketa elementalen bidez.",
  "Discusión del sistema": "Sistemaren eztabaida",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Matrices asociadas al sistema": "1. Sistemari lotutako matrizeak",
  "La matriz de coeficientes contiene los números que multiplican a las incógnitas. La matriz ampliada añade, como última columna, los términos independientes.": "Koefizienteen matrizeak ezezagunak biderkatzen dituzten zenbakiak ditu. Matrize hedatuak gai independenteak gehitzen ditu azken zutabe gisa.",
  "2. Qué decide el determinante": "2. Determinanteak zer erabakitzen duen",
  "Si una matriz cuadrada tiene determinante distinto de cero, su rango es máximo. En un sistema de tres ecuaciones con tres incógnitas esto garantiza una única solución.": "Matrize karratu baten determinantea zero ez bada, haren heina maximoa da. Hiru ekuazio eta hiru ezezaguneko sistema batean horrek soluzio bakarra bermatzen du.",
  "3. Teorema de Rouché-Frobenius": "3. Rouché-Frobeniusen teorema",
  "Cuando el determinante se anula, comparamos el rango de la matriz de coeficientes con el de la ampliada. Como hay tres incógnitas, las posibilidades son:": "Determinantea nulua denean, koefizienteen matrizearen heina eta matrize hedatuarena alderatzen ditugu. Hiru ezezagun daudenez, aukerak hauek dira:",
  "Una solución": "Soluzio bakarra",
  "Infinitas soluciones": "Soluzio infinitu",
  "Ninguna solución": "Soluziorik ez",
  "4. Operaciones elementales de fila": "4. Errenkada-eragiketa elementalak",
  "Intercambiar filas, multiplicar una fila por un número distinto de cero o sumar a una fila un múltiplo de otra conserva el sistema equivalente y permite leer sus rangos.": "Errenkadak trukatzeak, errenkada bat zero ez den zenbaki batez biderkatzeak edo errenkada bati beste baten multiplo bat gehitzeak sistema baliokidea mantentzen du eta heinak irakurtzea ahalbidetzen du.",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos las matrices asociadas": "Lotutako matrizeak idazten ditugu",
  "Las tres primeras columnas siguen el orden de las incógnitas. La última columna de la matriz ampliada contiene los términos independientes.": "Lehen hiru zutabeek ezezagunen ordena jarraitzen dute. Matrize hedatuaren azken zutabeak gai independenteak ditu.",
  "Calculamos y factorizamos el determinante": "Determinantea kalkulatu eta faktorizatzen dugu",
  "Desarrollamos por la primera fila. Cada término incorpora el signo de su posición y su menor de orden dos.": "Lehen errenkadatik garatzen dugu. Gai bakoitzak bere posizioaren zeinua eta bigarren ordenako minorea ditu.",
  "El determinante se anula únicamente para el siguiente valor:": "Determinantea hurrengo baliorako bakarrik da nulua:",
  "Clasificamos el caso general": "Kasu orokorra sailkatzen dugu",
  "Si el parámetro no vale uno, el determinante es distinto de cero. La matriz de coeficientes tiene rango tres y el sistema posee una única solución.": "Parametroak ez badu bat balio, determinantea zero ez da. Koefizienteen matrizeak hiru heina du, eta sistemak soluzio bakarra du.",
  "El sistema es compatible determinado.": "Sistema bateragarri determinatua da.",
  "Estudiamos el valor excepcional": "Salbuespenezko balioa aztertzen dugu",
  "Sustituimos el parámetro en la matriz ampliada y realizamos dos operaciones elementales.": "Parametroa matrize hedatuan ordezkatu eta bi eragiketa elemental egiten ditugu.",
  "Comparamos los rangos": "Heinak alderatzen ditugu",
  "En la forma escalonada hay dos filas no nulas tanto en la parte de coeficientes como en la matriz completa. Los dos rangos son dos.": "Forma mailakatuan bi errenkada ez-nulu daude bai koefizienteen zatian bai matrize osoan. Bi heinak bi dira.",
  "El sistema es compatible indeterminado.": "Sistema bateragarri indeterminatua da.",
  "Resumimos la discusión": "Eztabaida laburbiltzen dugu",
  "Compatible determinado": "Bateragarri determinatua",
  "Compatible indeterminado": "Bateragarri indeterminatua",
  "Una única solución.": "Soluzio bakarra.",
  "Infinitas soluciones.": "Soluzio infinitu.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "El valor −1 pertenece al caso regular, así que el sistema tendrá una única solución. Sustituiremos el parámetro y eliminaremos incógnitas restando ecuaciones.": "−1 balioa kasu erregularrari dagokio; beraz, sistemak soluzio bakarra izango du. Parametroa ordezkatu eta ezezagunak ezabatuko ditugu ekuazioak kenduz.",
  "El valor 1 es el caso singular ya estudiado. La forma escalonada deja una variable libre: la elegimos como parámetro y expresamos las otras dos en función de ella.": "1 balioa aurretik aztertutako kasu singularra da. Forma mailakatuak aldagai libre bat uzten du: parametro gisa aukeratu eta beste biak haren arabera adierazten ditugu.",
  "Resolución para los valores indicados": "Adierazitako balioetarako ebazpena",
  "1. Sustituir el parámetro": "1. Parametroa ordezkatzea",
  "Una vez fijado el valor del parámetro obtenemos un sistema numérico. La clasificación previa nos anticipa si su solución será única o si aparecerán variables libres.": "Parametroaren balioa finkatutakoan zenbakizko sistema bat lortzen dugu. Aurreko sailkapenak soluzioa bakarra izango den edo aldagai libreak agertuko diren aurreratzen digu.",
  "2. Eliminación de incógnitas": "2. Ezezagunen ezabaketa",
  "Restar ecuaciones permite cancelar términos. Las nuevas ecuaciones son equivalentes a las originales y suelen resultar más sencillas de resolver.": "Ekuazioak kentzeak gaiak ezabatzea ahalbidetzen du. Ekuazio berriak jatorrizkoen baliokideak dira eta, normalean, errazago ebazten dira.",
  "3. Variable libre": "3. Aldagai librea",
  "Cuando el rango común es menor que el número de incógnitas, algunas variables no quedan determinadas. Asignamos un parámetro real a una de ellas y expresamos las demás en función de él.": "Hein komuna ezezagun kopurua baino txikiagoa denean, aldagai batzuk ez dira zehaztuta geratzen. Haietako bati parametro erreal bat esleitu eta gainerakoak haren arabera adierazten ditugu.",
  "Resolvemos el primer valor": "Lehen balioa ebazten dugu",
  "Como el determinante no se anula, sabemos que este sistema tiene una única solución.": "Determinantea nulua ez denez, badakigu sistema honek soluzio bakarra duela.",
  "Eliminamos la incógnita x": "x ezezaguna ezabatzen dugu",
  "Restamos dos veces la primera ecuación a la segunda y restamos la primera a la tercera.": "Lehen ekuazioaren bikoitza bigarrenari kentzen diogu, eta lehen ekuazioa hirugarrenari.",
  "Calculamos las tres incógnitas": "Hiru ezezagunak kalkulatzen ditugu",
  "Restamos la segunda ecuación reducida a la primera; después sustituimos hacia atrás.": "Bigarren ekuazio murriztua lehenengoari kentzen diogu; ondoren, atzerantz ordezkatzen dugu.",
  "Comprobamos la solución única": "Soluzio bakarra egiaztatzen dugu",
  "Primera ecuación": "Lehen ekuazioa",
  "Segunda ecuación": "Bigarren ekuazioa",
  "Tercera ecuación": "Hirugarren ekuazioa",
  "Resolvemos el segundo valor": "Bigarren balioa ebazten dugu",
  "La primera y la tercera ecuación coinciden. Al restar la primera a la segunda obtenemos directamente la primera incógnita.": "Lehen eta hirugarren ekuazioak berdinak dira. Lehenengoa bigarrenari kenduta, zuzenean lortzen dugu lehen ezezaguna.",
  "Introducimos la variable libre": "Aldagai librea sartzen dugu",
  "Elegimos z como parámetro real. Entonces la ecuación restante determina y.": "z parametro erreal gisa aukeratzen dugu. Orduan, geratzen den ekuazioak y zehazten du.",
  "Comprobamos la familia de soluciones": "Soluzio-familia egiaztatzen dugu",
  "Las tres ecuaciones se cumplen para cualquier valor real de t.": "Hiru ekuazioak t-ren edozein balio errealetarako betetzen dira."
}));

const originalSystemAlpha2022Text = new WeakMap();

const systemAlpha2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".system-alpha-2022-statement", attribute: "aria-label", eu: "Alfa parametrodun hiru ekuazioko sistema", es: "Sistema de tres ecuaciones con parámetro alfa" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" }
];

function applySystemAlpha2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalSystemAlpha2022Text.has(node)) {
      originalSystemAlpha2022Text.set(node, node.nodeValue);
    }

    const original = originalSystemAlpha2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && systemAlpha2022TextEu.has(key)) {
      const translation = systemAlpha2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applySystemAlpha2022Language(language) {
  document.title = language === "eu"
    ? "α parametrodun sistema lineala · Matematika II"
    : "Sistema lineal con parámetro α · Matemáticas II";

  applySystemAlpha2022Text(language);

  systemAlpha2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applySystemAlpha2022Language(event.detail.language);
});

applySystemAlpha2022Language(window.I18n?.getLanguage() ?? "eu");

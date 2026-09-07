const system2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio A1": "2023 · Ohikoa · A1 ariketa",
  "Álgebra lineal · Sistemas con parámetro · 2023": "Aljebra lineala · Parametrodun sistemak · 2023",
  "Discusión de un sistema lineal con parámetro": "Parametrodun sistema lineal baten eztabaida",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Discusión": "Eztabaida",
  "Idea de resolución": "Ebazpenaren ideia",
  "Clasificación del sistema según el parámetro": "Sistemaren sailkapena parametroaren arabera",
  "Teoría necesaria": "Beharrezko teoria",
  "1. El determinante detecta el caso regular": "1. Determinanteak kasu erregularra hautematen du",
  "En un sistema cuadrado, un determinante no nulo garantiza que la matriz de coeficientes es invertible y que existe una única solución.": "Sistema karratu batean, zero ez den determinanteak koefizienteen matrizea alderantzikagarria dela eta soluzio bakarra dagoela bermatzen du.",
  "2. Teorema de Rouché-Frobenius": "2. Rouché-Frobeniusen teorema",
  "Cuando el determinante se anula, debemos comparar el rango de la matriz de coeficientes con el de la matriz ampliada.": "Determinantea anulatzen denean, koefizienteen matrizearen heina eta matrize hedatuarena alderatu behar ditugu.",
  "Una única solución.": "Soluzio bakarra.",
  "Infinitas soluciones.": "Infinitu soluzio.",
  "Ninguna solución.": "Soluziorik ez.",
  "3. El parámetro excepcional": "3. Parametroaren balio berezia",
  "Solo hay que estudiar rangos en los valores que anulan el determinante. El resto queda clasificado de una sola vez.": "Heinak determinantea anulatzen duten balioetan bakarrik aztertu behar dira. Gainerako balio guztiak batera sailkatzen dira.",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos la matriz de coeficientes": "Koefizienteen matrizea idazten dugu",
  "Calculamos su determinante": "Haren determinantea kalkulatzen dugu",
  "Desarrollamos por la primera fila y simplificamos.": "Lehen errenkadatik garatu eta sinplifikatzen dugu.",
  "Clasificamos el caso regular": "Kasu erregularra sailkatzen dugu",
  "Estudiamos el único caso singular": "Kasu singular bakarra aztertzen dugu",
  "Los rangos son iguales pero menores que el número de incógnitas: hay infinitas soluciones.": "Heinak berdinak dira, baina ezezagunen kopurua baino txikiagoak: infinitu soluzio daude.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Caso α = 1": "α = 1 kasua",
  "Resolución del sistema indeterminado": "Sistema indeterminatua ebaztea",
  "1. Operaciones elementales por filas": "1. Errenkaden oinarrizko eragiketak",
  "Sumar a una fila un múltiplo de otra no cambia el conjunto de soluciones. Usamos estas operaciones para obtener un sistema equivalente más sencillo.": "Errenkada bati beste baten multiplo bat batzeak ez du soluzio multzoa aldatzen. Eragiketa horiek sistema baliokide sinpleago bat lortzeko erabiltzen ditugu.",
  "2. Variable libre": "2. Aldagai askea",
  "Si el rango es menor que el número de incógnitas, alguna variable puede elegirse libremente. Cada valor de esa variable produce una solución distinta.": "Heina ezezagunen kopurua baino txikiagoa bada, aldagai bat askatasunez hauta daiteke. Aldagai horren balio bakoitzak soluzio desberdin bat sortzen du.",
  "3. Solución paramétrica": "3. Soluzio parametrikoa",
  "La solución no es un único punto, sino una familia de puntos descrita mediante un parámetro real.": "Soluzioa ez da puntu bakar bat, parametro erreal baten bidez deskribatutako puntu-familia bat baizik.",
  "Sustituimos el parámetro": "Parametroa ordezkatzen dugu",
  "Reducimos la matriz ampliada": "Matrize hedatua murrizten dugu",
  "Elegimos la variable libre": "Aldagai askea aukeratzen dugu",
  "Calculamos la variable restante": "Geratzen den aldagaia kalkulatzen dugu",
  "Escribimos la familia de soluciones": "Soluzio-familia idazten dugu",
  "Caso α = 2": "α = 2 kasua",
  "Resolución del sistema determinado": "Sistema determinatua ebaztea",
  "1. Un determinante no nulo garantiza unicidad": "1. Zero ez den determinanteak bakartasuna bermatzen du",
  "Como la matriz de coeficientes es invertible, no puede haber ni contradicciones ni variables libres: existe exactamente una solución.": "Koefizienteen matrizea alderantzikagarria denez, ezin da kontraesanik edo aldagai askerik egon: soluzio bakarra dago.",
  "2. Eliminación de incógnitas": "2. Ezezagunen ezabaketa",
  "Restar ecuaciones permite cancelar términos y obtener un sistema equivalente más sencillo. Elegimos las restas que aíslan antes una incógnita.": "Ekuazioak kentzeak gaiak ezabatu eta sistema baliokide sinpleago bat lortzeko aukera ematen du. Ezezagun bat lehenago bakartzen duten kenketak aukeratzen ditugu.",
  "Restamos las dos primeras ecuaciones": "Lehen bi ekuazioak kentzen ditugu",
  "Eliminamos x con la primera y la tercera ecuación": "x ezabatzen dugu lehen eta hirugarren ekuazioekin",
  "Sustituimos en la primera ecuación": "Lehen ekuazioan ordezkatzen dugu",
  "El sistema tiene una única solución.": "Sistemak soluzio bakarra du.",
}));

const originalSystem2023Text = new WeakMap();

const system2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".system-2023-tabs", attribute: "aria-label", eu: "Ebazpenaren zatiak", es: "Partes de la solución" },
];

function applySystem2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalSystem2023Text.has(node)) {
      originalSystem2023Text.set(node, node.nodeValue);
    }

    const original = originalSystem2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && system2023TextEu.has(key)) {
      const translation = system2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applySystem2023Language(language) {
  document.title = language === "eu"
    ? "Parametrodun sistema lineal baten eztabaida · Matematika II"
    : "Discusión de un sistema lineal con parámetro · Matemáticas II";

  applySystem2023Text(language);

  document.querySelectorAll("[data-system-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-system-2023-language") !== language;
  });

  system2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applySystem2023Language(event.detail.language);
});

applySystem2023Language(window.I18n?.getLanguage() ?? "eu");

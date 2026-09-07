const parameterASystem2020TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2020 · Extraordinaria · Opción A · Ejercicio A.1": "2020 · Ezohikoa · A aukera · A.1 ariketa",
  "Álgebra lineal · Sistemas con parámetro · 2020": "Aljebra lineala · Parametrodun sistemak · 2020",
  "Discusión y resolución de un sistema con parámetro": "Parametrodun sistema baten eztabaida eta ebazpena",
  "Enunciado": "Enuntziatua",
  "Discutir, en función de": "Eztabaidatu",
  ", el sistema siguiente y resolverlo cuando sea posible:": "-ren arabera sistema hau, eta ebatzi ahal denean:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A.1": "A.1 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Necesitamos saber para qué valores del parámetro el sistema tiene una solución, ninguna o infinitas, y además resolver los casos compatibles. Aplicaremos eliminación de Gauss a la matriz ampliada: las operaciones elementales conservan las soluciones y dejan visible la ecuación final que contiene el parámetro.": "Parametroaren zein baliotarako sistemak soluzio bat, bat ere ez edo infinitu dituen jakin behar dugu, eta kasu bateragarriak ere ebatzi. Gaussen ezabaketa aplikatuko diogu matrize hedatuari: oinarrizko eragiketek soluzioak mantentzen dituzte eta parametroa duen azken ekuazioa agerian uzten dute.",
  "Esa misma forma escalonada permitirá clasificar cada caso y, cuando haya solución única, resolver hacia atrás en el orden": "Forma mailakatu horrek berak kasu bakoitza sailkatzeko aukera emango du, eta soluzio bakarra dagoenean, ordena honetan atzerantz ebazteko:",
  "Discusión y resolución completa": "Eztabaida eta ebazpen osoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Matriz ampliada y operaciones elementales": "1. Matrize hedatua eta oinarrizko eragiketak",
  "La matriz ampliada contiene los coeficientes de las incógnitas y la columna de términos independientes. Sumar a una fila un múltiplo de otra produce un sistema equivalente: cambia su escritura, pero no sus soluciones.": "Matrize hedatuak ezezagunen koefizienteak eta gai askeen zutabea ditu. Errenkada bati beste baten multiplo bat gehitzeak sistema baliokidea sortzen du: idazkera aldatzen da, baina ez soluzioak.",
  "2. Forma escalonada y pivotes": "2. Forma mailakatua eta piboteak",
  "En una matriz escalonada, cada fila no nula aporta un pivote. El número de pivotes es el rango. Si aparecen tres pivotes para tres incógnitas, el sistema tiene una única solución.": "Matrize mailakatu batean, zero ez den errenkada bakoitzak pibote bat ematen du. Pibote kopurua heina da. Hiru ezezagunetarako hiru pibote agertzen badira, sistemak soluzio bakarra du.",
  "3. Teorema de Rouché-Frobenius": "3. Rouché-Frobeniusen teorema",
  "Un sistema es compatible cuando la matriz de coeficientes y la ampliada tienen el mismo rango. Si la ampliada tiene mayor rango, aparece una contradicción y no existe solución.": "Sistema bateragarria da koefizienteen matrizeak eta hedatuak hein bera dutenean. Hedatuak hein handiagoa badu, kontraesan bat agertzen da eta ez dago soluziorik.",
  "Una solución": "Soluzio bat",
  "Infinitas soluciones": "Infinitu soluzio",
  "Ninguna solución": "Soluziorik ez",
  "4. Sustitución hacia atrás": "4. Atzeranzko ordezkapena",
  "Una vez escalonado un sistema compatible determinado, resolvemos desde la última ecuación hacia la primera. Cada incógnita ya calculada se sustituye en la ecuación inmediatamente anterior.": "Sistema bateragarri determinatua mailakatu ondoren, azken ekuaziotik lehenengora ebazten dugu. Kalkulatutako ezezagun bakoitza aurreko ekuazioan ordezkatzen da.",
  "Resolución completa": "Ebazpen osoa",
  "Construimos la matriz ampliada": "Matrize hedatua eraikitzen dugu",
  "Las tres primeras columnas contienen, en ese orden, los coeficientes de": "Lehen hiru zutabeek, ordena horretan,",
  "; la última contiene los términos independientes.": "-ren koefizienteak dituzte; azkenak gai askeak ditu.",
  "Eliminamos la primera entrada de la segunda fila": "Bigarren errenkadako lehen sarrera ezabatzen dugu",
  "Restamos dos veces la primera fila a la segunda. Escribimos cada nueva entrada para que no quede ningún salto.": "Lehen errenkadaren bikoitza bigarrenari kentzen diogu. Sarrera berri bakoitza idazten dugu urratsik ez uzteko.",
  "Columna 1": "1. zutabea",
  "Columna 2": "2. zutabea",
  "Columna 3": "3. zutabea",
  "Columna ampliada": "Zutabe hedatua",
  "Eliminamos la primera entrada de la tercera fila": "Hirugarren errenkadako lehen sarrera ezabatzen dugu",
  "Ahora restamos cuatro veces la primera fila a la tercera.": "Orain lehen errenkadaren laukoitza hirugarrenari kentzen diogu.",
  "La última fila corresponde a la ecuación que decide toda la discusión.": "Azken errenkada eztabaida osoa erabakitzen duen ekuazioari dagokio.",
  "Caso": "Kasua",
  "Sustituimos el valor en la última fila de la matriz escalonada.": "Balioa matrize mailakatuaren azken errenkadan ordezkatzen dugu.",
  "La igualdad": "Berdintza",
  "es imposible. La matriz de coeficientes tiene dos pivotes, mientras que la columna ampliada crea un tercero.": "ezinezkoa da. Koefizienteen matrizeak bi pibote ditu, eta zutabe hedatuak hirugarren bat sortzen du.",
  "Por Rouché-Frobenius, el sistema es incompatible: no tiene solución.": "Rouché-Frobeniusen arabera, sistema bateraezina da: ez du soluziorik.",
  "El coeficiente": "Koefizientea",
  "no se anula, así que la última fila aporta un tercer pivote. Los rangos coinciden con el número de incógnitas.": "ez da zero; beraz, azken errenkadak hirugarren pibote bat ematen du. Heinak ezezagun kopuruarekin bat datoz.",
  "El sistema es compatible determinado. Ahora podemos dividir por": "Sistema bateragarri determinatua da. Orain",
  "y resolver hacia atrás.": "-z zatitu eta atzerantz ebatz dezakegu.",
  "Despejamos": "Bakandu egiten dugu:",
  "Partimos de la tercera ecuación escalonada.": "Hirugarren ekuazio mailakatutik abiatzen gara.",
  "La segunda ecuación escalonada es": "Bigarren ekuazio mailakatua hau da:",
  ". Sustituimos el valor de": ".",
  "y reducimos a un único denominador.": "-ren balioa ordezkatu eta izendatzaile bakarrera eramaten dugu.",
  "Usamos la primera ecuación,": "Lehen ekuazioa erabiltzen dugu,",
  ", y sustituimos las dos incógnitas ya calculadas.": ", eta aurretik kalkulatutako bi ezezagunak ordezkatzen ditugu.",
  "Comprobamos la solución": "Soluzioa egiaztatzen dugu",
  "La suma de los tres numeradores reproduce la primera ecuación:": "Hiru zenbakitzaileen baturak lehen ekuazioa berreskuratzen du:",
  "Las expresiones satisfacen también las dos ecuaciones escalonadas, que son equivalentes a las originales.": "Adierazpenek bi ekuazio mailakatuak ere betetzen dituzte, eta horiek jatorrizkoen baliokideak dira.",
  "Corrección de la fuente:": "Iturriaren zuzenketa:",
  "el solucionario de la página 22 contiene errores al simplificar los numeradores de": "22. orrialdeko ebazpenak kalkulu-erroreak ditu aldagai hauen zenbakitzaileetan:",
  ". Las expresiones anteriores son las que verifican el sistema.": ". Goiko adierazpenek egiaztatzen dute sistema.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Compatible determinado": "Bateragarri determinatua",
  "Una única solución.": "Soluzio bakarra.",
  "Incompatible": "Bateraezina",
  "No tiene solución.": "Ez du soluziorik.",
  "Resultado": "Emaitza",
  ": una solución": ": soluzio bat",
  ": ninguna solución": ": soluziorik ez",
  "No hay ningún caso con infinitas soluciones.": "Ez dago infinitu soluzio dituen kasurik."
}));

const originalParameterASystem2020Text = new WeakMap();

const parameterASystem2020Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".parameter-a-system-statement", attribute: "aria-label", eu: "A parametrodun hiru ekuazioko sistema", es: "Sistema de tres ecuaciones con parámetro A" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyParameterASystem2020Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalParameterASystem2020Text.has(node)) {
      originalParameterASystem2020Text.set(node, node.nodeValue);
    }

    const original = originalParameterASystem2020Text.get(node);
    const key = original.trim();

    if (language === "eu" && parameterASystem2020TextEu.has(key)) {
      const translation = parameterASystem2020TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyParameterASystem2020Language(language) {
  document.title = language === "eu"
    ? "A parametrodun sistema baten eztabaida · Matematika II"
    : "Discusión de un sistema con parámetro A · Matemáticas II";

  applyParameterASystem2020Text(language);

  parameterASystem2020Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyParameterASystem2020Language(event.detail.language);
});

applyParameterASystem2020Language(window.I18n?.getLanguage() ?? "eu");

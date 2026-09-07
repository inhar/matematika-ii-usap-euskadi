const cubicTangent2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio B3": "2022 · Ohikoa · B3 ariketa",
  "Análisis · Derivadas y tangentes · 2022": "Analisia · Deribatuak eta ukitzaileak · 2022",
  "Parámetros de una cúbica con tangentes paralelas": "Ukitzaile paraleloak dituen funtzio kubikoaren parametroak",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B3": "B3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Traducimos las condiciones y resolvemos": "Baldintzak itzuli eta sistema ebazten dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Cero de una función": "1. Funtzio baten zeroa",
  "Decir que una función se anula en una abscisa significa que el valor de la función en ella es cero. El punto correspondiente pertenece al eje horizontal.": "Funtzioa abzisa batean zero dela esateak abzisa horretako funtzioaren balioa zero dela esan nahi du. Dagokion puntua ardatz horizontalean dago.",
  "2. Derivada y pendiente de la tangente": "2. Deribatua eta ukitzailearen malda",
  "La derivada de una función en un punto es la pendiente de la recta tangente a su gráfica en ese punto.": "Funtzio baten puntu bateko deribatua haren grafikoaren puntu horretako zuzen ukitzailearen malda da.",
  "3. Rectas paralelas": "3. Zuzen paraleloak",
  "Dos rectas no verticales son paralelas cuando tienen la misma pendiente. En una ecuación": "Bertikalak ez diren bi zuzen paraleloak dira malda bera dutenean. Ekuazio honetan:",
  ", la pendiente es el coeficiente": ", malda koefiziente hau da:",
  "4. Ecuación de una recta tangente": "4. Zuzen ukitzailearen ekuazioa",
  "Una vez conocidos el punto de tangencia y su pendiente, la ecuación punto-pendiente permite escribir la tangente y comprobar gráficamente el paralelismo.": "Ukitze-puntua eta haren malda ezagututa, puntu-malda ekuazioak ukitzailea idazteko eta paralelismoa grafikoki egiaztatzeko aukera ematen du.",
  "Resolución completa": "Ebazpen osoa",
  "Traducimos la condición de anulación": "Zero izateko baldintza itzultzen dugu",
  "Calculamos la derivada": "Deribatua kalkulatzen dugu",
  "Derivamos término a término. Los parámetros son constantes y el término independiente desaparece.": "Gaiz gai deribatzen dugu. Parametroak konstanteak dira eta gai independentea desagertzen da.",
  "Traducimos el paralelismo": "Paralelismoa itzultzen dugu",
  "Usamos la tangente en": "Puntu honetako ukitzailea erabiltzen dugu:",
  "Sustituimos": "Hau ordezkatzen dugu:",
  "en la derivada y simplificamos con cuidado los signos.": "deribatuan, eta zeinuak arretaz sinplifikatzen ditugu.",
  "Sustituimos ahora": "Orain hau ordezkatzen dugu:",
  "en la misma expresión.": "adierazpen berean.",
  "Resolvemos las dos ecuaciones de las pendientes": "Malden bi ekuazioak ebazten ditugu",
  "Restamos la primera ecuación a la segunda. Así desaparece": "Lehenengo ekuazioa bigarrenari kentzen diogu. Horrela, aldagai hau desagertzen da:",
  "y obtenemos directamente": "eta zuzenean hau lortzen dugu:",
  "Calculamos el parámetro restante": "Geratzen den parametroa kalkulatzen dugu",
  "Sustituimos": "Hauek ordezkatzen ditugu:",
  "y": "eta",
  "en la ecuación que procedía de": "baldintza honetatik zetorren ekuazioan:",
  "Comprobamos las tres condiciones": "Hiru baldintzak egiaztatzen ditugu",
  "Con los parámetros obtenidos escribimos la función y su derivada. Las tres sustituciones recuperan exactamente las condiciones del enunciado.": "Lortutako parametroekin funtzioa eta haren deribatua idazten ditugu. Hiru ordezkapenek enuntziatuko baldintzak zehazki berreskuratzen dituzte.",
  "Visualizamos las tangentes paralelas": "Ukitzaile paraleloak irudikatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalCubicTangent2022Text = new WeakMap();

const cubicTangent2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".cubic-tangent-2022-statement", attribute: "aria-label", eu: "f x-ren funtzioa berdin x ber hiru gehi A x ber bi gehi B x gehi C", es: "f de x igual a x al cubo más A x al cuadrado más B x más C" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".cubic-tangent-2022-figure", attribute: "aria-label", eu: "Funtzio kubikoa, bi ukitzaile paralelo eta erreferentziako zuzena", es: "Función cúbica, dos tangentes paralelas y recta de referencia" },
  { selector: "#cubic-tangent-2022-board", attribute: "aria-label", eu: "Funtzio kubikoa, minus bateko eta hiruko ukitzaileak, bi x gehi bat zuzenarekiko paraleloak", es: "Cúbica con tangentes en menos uno y tres, paralelas a y igual a dos x más uno" }
];

function applyCubicTangent2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCubicTangent2022Text.has(node)) {
      originalCubicTangent2022Text.set(node, node.nodeValue);
    }

    const original = originalCubicTangent2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && cubicTangent2022TextEu.has(key)) {
      const translation = cubicTangent2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCubicTangent2022Language(language) {
  document.title = language === "eu"
    ? "Ukitzaile paraleloak dituen funtzio kubikoaren parametroak · Matematika II"
    : "Parámetros de una cúbica con tangentes paralelas · Matemáticas II";

  applyCubicTangent2022Text(language);

  document.querySelectorAll("[data-cubic-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-cubic-2022-language") !== language;
  });

  cubicTangent2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCubicTangent2022Language(event.detail.language);
});

applyCubicTangent2022Language(window.I18n?.getLanguage() ?? "eu");

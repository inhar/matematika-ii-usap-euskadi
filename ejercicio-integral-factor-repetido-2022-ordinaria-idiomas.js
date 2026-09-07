const partialRepeat2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio A4": "2022 · Ohikoa · A4 ariketa",
  "Análisis · Integrales racionales · 2022": "Analisia · Integral arrazionalak · 2022",
  "Integral racional con un factor repetido": "Faktore errepikatua duen integral arrazionala",
  "Enunciado": "Enuntziatua",
  "Calcula:": "Kalkulatu:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A4": "A4 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Factorizamos, descomponemos e integramos": "Faktorizatu, deskonposatu eta integratzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Función racional propia": "1. Funtzio arrazional propioa",
  "Una función racional es propia cuando el grado del numerador es menor que el del denominador. En ese caso podemos intentar una descomposición en fracciones simples sin dividir antes los polinomios.": "Funtzio arrazional bat propioa da zenbakitzailearen maila izendatzailearena baino txikiagoa denean. Kasu horretan, zatiki sinpletako deskonposizioa egin dezakegu polinomioak aurretik zatitu gabe.",
  "2. Factor lineal repetido": "2. Faktore lineal errepikatua",
  "3. Cómo calcular los coeficientes": "3. Koefizienteak nola kalkulatu",
  "Multiplicamos por el denominador común y obtenemos una identidad polinómica. Sustituir las raíces del denominador anula varios términos y permite aislar algunos coeficientes; para el restante podemos usar cualquier otro valor sencillo.": "Izendatzaile komunaz biderkatu eta identitate polinomiko bat lortzen dugu. Izendatzailearen erroak ordezkatzean hainbat gai deuseztatzen dira eta koefiziente batzuk bakandu daitezke; geratzen denerako beste edozein balio erraz erabil dezakegu.",
  "4. Primitivas que necesitamos": "4. Behar ditugun primitiboak",
  "Un factor lineal simple produce un logaritmo. Su cuadrado produce una potencia negativa, que se integra con la regla de las potencias.": "Faktore lineal sinple batek logaritmo bat ematen du. Haren karratuak berretura negatibo bat ematen du, eta berreturen arauarekin integratzen da.",
  "5. Intervalos y comprobación": "5. Tarteak eta egiaztapena",
  "Resolución completa": "Ebazpen osoa",
  "Comprobamos que la fracción es propia": "Zatikia propioa dela egiaztatzen dugu",
  "Factorizamos todo el denominador": "Izendatzaile osoa faktorizatzen dugu",
  "Planteamos las fracciones simples": "Zatiki sinpleak planteatzen ditugu",
  "Eliminamos los denominadores": "Izendatzaileak ezabatzen ditugu",
  "Multiplicamos toda la igualdad por el denominador común. Cada fracción pierde exactamente el factor que tenía debajo.": "Berdintza osoa izendatzaile komunaz biderkatzen dugu. Zatiki bakoitzak azpian zuen faktorea galtzen du.",
  "Calculamos dos coeficientes con las raíces": "Bi koefiziente erroekin kalkulatzen ditugu",
  "Calculamos el coeficiente restante": "Geratzen den koefizientea kalkulatzen dugu",
  "Escribimos la descomposición obtenida": "Lortutako deskonposizioa idazten dugu",
  "Sustituimos los tres coeficientes antes de integrar.": "Hiru koefizienteak integratu aurretik ordezkatzen ditugu.",
  "Integramos término a término": "Gaiz gai integratzen dugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Derivamos la primitiva. Al reunir las fracciones recuperamos exactamente la función inicial.": "Primitiboa deribatzen dugu. Zatikiak elkartzean, hasierako funtzioa zehazki berreskuratzen dugu.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalPartialRepeat2022Text = new WeakMap();

const partialRepeat2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".partial-repeat-2022-statement", attribute: "aria-label", eu: "Zazpi x gehi hamahiru zati x gehi bat bider x ber bi ken x ken bi, x-rekiko integrala", es: "Integral de siete x más trece dividido entre x más uno por x al cuadrado menos x menos dos, respecto de x" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyPartialRepeat2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPartialRepeat2022Text.has(node)) {
      originalPartialRepeat2022Text.set(node, node.nodeValue);
    }

    const original = originalPartialRepeat2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && partialRepeat2022TextEu.has(key)) {
      const translation = partialRepeat2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPartialRepeat2022Language(language) {
  document.title = language === "eu"
    ? "Faktore errepikatua duen integral arrazionala · Matematika II"
    : "Integral racional con un factor repetido · Matemáticas II";

  applyPartialRepeat2022Text(language);

  document.querySelectorAll("[data-partial-repeat-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-partial-repeat-2022-language") !== language;
  });

  partialRepeat2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPartialRepeat2022Language(event.detail.language);
});

applyPartialRepeat2022Language(window.I18n?.getLanguage() ?? "eu");

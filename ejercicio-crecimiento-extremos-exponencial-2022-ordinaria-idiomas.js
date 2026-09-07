const extrema2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio A3": "2022 · Ohikoa · A3 ariketa",
  "Análisis · Monotonía y extremos · 2022": "Analisia · Monotonia eta muturrak · 2022",
  "Crecimiento y extremos de una función exponencial": "Funtzio esponentzial baten hazkundea eta muturrak",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A3": "A3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Derivada, monotonía y extremos": "Deribatua, monotonia eta muturrak",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Regla del producto y regla de la cadena": "1. Biderkaduraren erregela eta katearen erregela",
  "Para derivar un producto, derivamos cada factor por turno. En una exponencial con exponente variable también multiplicamos por la derivada de ese exponente.": "Biderkadura bat deribatzeko, faktore bakoitza txandaka deribatzen dugu. Berretzaile aldakorra duen esponentzial batean, berretzaile horren deribatuaz ere biderkatzen dugu.",
  "2. Positividad de la función exponencial": "2. Funtzio esponentzialaren positibotasuna",
  "Una exponencial real nunca vale cero ni es negativa. Por eso no puede aportar soluciones a una ecuación de producto igual a cero y tampoco modifica el signo de los demás factores.": "Esponentzial erreal bat ez da inoiz zero, ezta negatiboa ere. Horregatik, ezin dio soluziorik eman zero den biderkadura bati, eta ez du gainerako faktoreen zeinua aldatzen.",
  "3. Derivada y monotonía": "3. Deribatua eta monotonia",
  "Los puntos críticos separan los intervalos que debemos estudiar. En cada uno, el signo de la primera derivada indica el sentido de variación de la función.": "Puntu kritikoek aztertu beharreko tarteak bereizten dituzte. Tarte bakoitzean, lehenengo deribatuaren zeinuak funtzioaren aldakuntza-noranzkoa adierazten du.",
  "4. Extremo local y extremo absoluto": "4. Mutur lokala eta mutur absolutua",
  "El cambio de signo de la derivada clasifica un extremo local. Para decidir si también es absoluto debemos comparar con el comportamiento global de la función, incluidos sus límites en los extremos del dominio.": "Deribatuaren zeinu-aldaketak mutur lokal bat sailkatzen du. Absolutua ere baden erabakitzeko, funtzioaren portaera globalarekin alderatu behar dugu, domeinuaren muturretako limiteak barne.",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos los dos factores": "Bi faktoreak identifikatzen ditugu",
  "La función es un producto. Escribimos por separado cada factor y su derivada para aplicar la regla sin omitir ningún término.": "Funtzioa biderkadura bat da. Faktore bakoitza eta haren deribatua bereiz idazten ditugu, erregela terminorik ahaztu gabe aplikatzeko.",
  "Calculamos la primera derivada": "Lehenengo deribatua kalkulatzen dugu",
  "Aplicamos la regla del producto. En la segunda línea sustituimos las dos derivadas anteriores.": "Biderkaduraren erregela aplikatzen dugu. Bigarren lerroan aurreko bi deribatuak ordezkatzen ditugu.",
  "Factorizamos la derivada": "Deribatua faktorizatzen dugu",
  "Extraemos el factor común": "Faktore komuna ateratzen dugu:",
  ". La factorización deja visibles los factores que decidirán el signo.": ". Faktorizazioak zeinua erabakiko duten faktoreak agerian uzten ditu.",
  "Hallamos los puntos críticos": "Puntu kritikoak kalkulatzen ditugu",
  "Igualamos la derivada a cero. Los factores": "Deribatua zerorekin berdintzen dugu. Faktore hauek:",
  "y": "eta",
  "son siempre positivos, de modo que solo pueden anularse los dos factores lineales.": "beti positiboak dira; beraz, bi faktore linealak bakarrik izan daitezke zero.",
  "Estudiamos el signo de la derivada": "Deribatuaren zeinua aztertzen dugu",
  "Los puntos críticos dividen la recta real en tres intervalos. Como la constante y la exponencial son positivas, basta combinar los signos de": "Puntu kritikoek zuzen erreala hiru tartetan banatzen dute. Konstantea eta esponentziala positiboak direnez, faktore hauen zeinuak konbinatzea nahikoa da:",
  "y": "eta",
  ".": ".",
  "Clasificamos los extremos y calculamos sus valores": "Muturrak sailkatu eta haien balioak kalkulatzen ditugu",
  "Decidimos cuáles son absolutos": "Mutur absolutuak zein diren erabakitzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "No existe máximo absoluto.": "Ez dago maximo absoluturik."
}));

const originalExtrema2022Text = new WeakMap();

const extrema2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".extrema-2022-statement", attribute: "aria-label", eu: "f x-ren funtzioa berdin x ken bat ber bi bider e ber minus bi x", es: "f de x igual a x menos uno al cuadrado por e elevado a menos dos x" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".extrema-2022-figure", attribute: "aria-label", eu: "Funtzioaren grafiko handitua, minimo absolutua eta maximo lokala adierazita", es: "Gráfica ampliada de la función con el mínimo absoluto y el máximo local" },
  { selector: "#extrema-2022-board", attribute: "aria-label", eu: "x ken bat ber bi bider e ber minus bi x funtzioaren grafikoa, muturrak batean eta bian", es: "Gráfica de f de x igual a x menos uno al cuadrado por e elevado a menos dos x, con extremos en uno y dos" }
];

function applyExtrema2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalExtrema2022Text.has(node)) {
      originalExtrema2022Text.set(node, node.nodeValue);
    }

    const original = originalExtrema2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && extrema2022TextEu.has(key)) {
      const translation = extrema2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyExtrema2022Language(language) {
  document.title = language === "eu"
    ? "Funtzio esponentzial baten hazkundea eta muturrak · Matematika II"
    : "Crecimiento y extremos de una función exponencial · Matemáticas II";

  applyExtrema2022Text(language);

  document.querySelectorAll("[data-extrema-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-extrema-2022-language") !== language;
  });

  extrema2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyExtrema2022Language(event.detail.language);
});

applyExtrema2022Language(window.I18n?.getLanguage() ?? "eu");

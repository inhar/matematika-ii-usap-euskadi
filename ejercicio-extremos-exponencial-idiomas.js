const exponentialExtremaTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción B · Problema B.3": "2019 · Ohikoa · B aukera · B.3 problema",
  "Análisis · Derivadas y extremos · Junio de 2019": "Analisia · Deribatuak eta muturrak · 2019ko ekaina",
  "Derivadas y extremos de una función exponencial": "Funtzio esponentzial baten deribatuak eta muturrak",
  "Enunciado": "Enuntziatua",
  "Sea f la función": "Izan bedi f funtzioa",
  "Calcular la primera y la segunda derivada de f. Hallar los máximos y mínimos de f.": "Kalkulatu f-ren lehenengo eta bigarren deribatuak. Aurkitu f-ren maximoak eta minimoak.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.3": "B.3 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "La función es un producto: un polinomio y una exponencial cuyo exponente también depende de x. Por eso calcularemos sus dos derivadas combinando la regla del producto con la regla de la cadena. Después resolveremos f′(x) = 0 para localizar los posibles extremos. Como": "Funtzioa biderkadura bat da: polinomio bat eta berretzailea x-ren mendekoa duen esponentzial bat. Horregatik, bi deribatuak kalkulatzeko biderkaduraren erregela eta katearen erregela konbinatuko ditugu. Ondoren, f′(x) = 0 ebatziko dugu balizko muturrak aurkitzeko.",
  "siempre es positiva, el signo de f′ dependerá únicamente de sus factores polinómicos; con ese signo sabremos dónde crece o decrece la función y podremos clasificar cada punto crítico.": "beti positiboa denez, f′-ren zeinua faktore polinomikoen mende bakarrik egongo da; zeinu horren bidez funtzioa non hazten edo beheratzen den jakingo dugu, eta puntu kritiko bakoitza sailkatuko dugu.",
  "Derivadas, crecimiento y extremos": "Deribatuak, hazkundea eta muturrak",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Regla del producto y regla de la cadena": "1. Biderkaduraren erregela eta katearen erregela",
  "Si una función es el producto de u(x) y v(x), hay que derivar cada factor por turno. Para derivar una exponencial con exponente variable se aplica además la regla de la cadena.": "Funtzio bat u(x) eta v(x) funtzioen biderkadura bada, faktore bakoitza txandaka deribatu behar da. Berretzaile aldakorra duen esponentzial bat deribatzeko, katearen erregela ere aplikatu behar da.",
  "2. Puntos críticos": "2. Puntu kritikoak",
  "Los máximos y mínimos interiores solo pueden aparecer en puntos donde la derivada vale cero o no existe. En este ejercicio f es derivable para todo número real, así que basta con resolver:": "Barneko maximoak eta minimoak deribatua zero den edo existitzen ez den puntuetan bakarrik ager daitezke. Ariketa honetan f deribagarria da zenbaki erreal guztietarako; beraz, hau ebaztea nahikoa da:",
  "3. Signo de la derivada": "3. Deribatuaren zeinua",
  "Si f′ es positiva en un intervalo, f es creciente; si f′ es negativa, f es decreciente. Un cambio de signo de negativo a positivo produce un mínimo, y uno de positivo a negativo produce un máximo.": "Tarte batean f′ positiboa bada, f gorakorra da; f′ negatiboa bada, f beherakorra da. Zeinua negatibotik positibora aldatzeak minimo bat sortzen du, eta positibotik negatibora aldatzeak maximo bat.",
  "f′: − → + ⇒ mínimo   ·   f′: + → − ⇒ máximo": "f′: − → + ⇒ minimoa   ·   f′: + → − ⇒ maximoa",
  "4. Criterio de la segunda derivada": "4. Bigarren deribatuaren irizpidea",
  "En un punto crítico x₀, el signo de f″ permite confirmar la clasificación: una segunda derivada positiva indica curvatura hacia arriba y una negativa, curvatura hacia abajo.": "x₀ puntu kritiko batean, f″-ren zeinuak sailkapena baieztatzeko balio du: bigarren deribatu positiboak goranzko kurbadura adierazten du, eta negatiboak beheranzkoa.",
  "f″(x₀) > 0 ⇒ mínimo   ·   f″(x₀) < 0 ⇒ máximo": "f″(x₀) > 0 ⇒ minimoa   ·   f″(x₀) < 0 ⇒ maximoa",
  "Resolución completa": "Ebazpen osoa",
  "Calculamos la primera derivada": "Lehenengo deribatua kalkulatzen dugu",
  "Identificamos los dos factores del producto y derivamos cada uno. En la exponencial usamos la regla de la cadena: la derivada del exponente −4x es −4.": "Biderkaduraren bi faktoreak identifikatzen ditugu eta bakoitza deribatzen dugu. Esponentzialean katearen erregela erabiltzen dugu: −4x berretzailearen deribatua −4 da.",
  "Calculamos la segunda derivada": "Bigarren deribatua kalkulatzen dugu",
  "Volvemos a usar la regla del producto, ahora sobre": "Biderkaduraren erregela berriro erabiltzen dugu, oraingoan",
  ". Escribimos todos los términos antes de simplificar.": " adierazpenean. Sinplifikatu aurretik termino guztiak idazten ditugu.",
  "Buscamos los puntos críticos": "Puntu kritikoak bilatzen ditugu",
  "Igualamos la primera derivada a cero. La exponencial nunca se anula, de modo que el producto solo puede valer cero por alguno de los factores polinómicos.": "Lehenengo deribatua zerorekin berdintzen dugu. Esponentziala ez da inoiz nulua; beraz, biderkadura zero izan daiteke faktore polinomikoetako batengatik bakarrik.",
  "> 0 para todo x ∈ ℝ": "> 0 x ∈ ℝ guztietarako",
  "2x = 0   o   1 − 2x = 0": "2x = 0   edo   1 − 2x = 0",
  "x = 0   o   x = 1/2": "x = 0   edo   x = 1/2",
  "Estudiamos el signo de f′": "f′-ren zeinua aztertzen dugu",
  "Como 2 y": "2 eta",
  "son positivos, basta con mirar los signos de x y de 1 − 2x en los tres intervalos separados por 0 y 1/2.": "positiboak direnez, x-ren eta 1 − 2x-ren zeinuak begiratzea nahikoa da 0-k eta 1/2-k bereizitako hiru tarteetan.",
  "x es − y 1 − 2x es + ⇒ f′(x) < 0": "x negatiboa da eta 1 − 2x positiboa ⇒ f′(x) < 0",
  "x es + y 1 − 2x es + ⇒ f′(x) > 0": "x positiboa da eta 1 − 2x positiboa ⇒ f′(x) > 0",
  "x es + y 1 − 2x es − ⇒ f′(x) < 0": "x positiboa da eta 1 − 2x negatiboa ⇒ f′(x) < 0",
  "mín.": "min.",
  "máx.": "max.",
  "Clasificamos los extremos y calculamos sus valores": "Muturrak sailkatzen ditugu eta haien balioak kalkulatzen ditugu",
  "En x = 0 la derivada cambia de negativa a positiva, luego hay un mínimo. En x = 1/2 cambia de positiva a negativa, luego hay un máximo local.": "x = 0 puntuan deribatua negatibotik positibora aldatzen da; beraz, minimo bat dago. x = 1/2 puntuan positibotik negatibora aldatzen da; beraz, maximo lokal bat dago.",
  "La segunda derivada confirma la clasificación: f″(0) = 2 > 0 y f″(1/2) = −2": "Bigarren deribatuak sailkapena baieztatzen du: f″(0) = 2 > 0 eta f″(1/2) = −2",
  "< 0.": "< 0.",
  "La gráfica permite leer el descenso, el ascenso y el nuevo descenso alrededor de los dos puntos críticos.": "Grafikoak bi puntu kritikoen inguruko beherakada, gorakada eta ondorengo beherakada erakusten ditu.",
  "Además, f(x) ≥ 0 para todo x, así que (0, 0) es un mínimo absoluto. El punto de x = 1/2 es solo un máximo local: cuando x tiende a −∞, f(x) tiende a +∞ y, por tanto, no existe máximo absoluto.": "Gainera, f(x) ≥ 0 da x guztietarako; beraz, (0, 0) minimo absolutua da. x = 1/2 puntukoa maximo lokala baino ez da: x −∞-rantz doanean, f(x) +∞-rantz doa, eta, beraz, ez dago maximo absoluturik.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "f′(x) = 0 ⇔ x = 0 o x = 1/2": "f′(x) = 0 ⇔ x = 0 edo x = 1/2",
  "f′(x) < 0 en (−∞, 0) y (1/2, +∞) ⇒ f decrece": "f′(x) < 0 tarte hauetan: (−∞, 0) eta (1/2, +∞) ⇒ f beherakorra da",
  "f′(x) > 0 en (0, 1/2) ⇒ f crece": "f′(x) > 0 tarte honetan: (0, 1/2) ⇒ f gorakorra da",
  "Mínimo absoluto: (0, 0) · Máximo local: (1/2, 1/(4e²))": "Minimo absolutua: (0, 0) · Maximo lokala: (1/2, 1/(4e²))",
  "Resultado": "Emaitza",
  "Mínimo absoluto:": "Minimo absolutua:",
  "Máximo local:": "Maximo lokala:",
  "No existe máximo absoluto.": "Ez dago maximo absoluturik."
}));

const originalExponentialExtremaText = new WeakMap();

const exponentialExtremaAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".extrema-statement-function", attribute: "aria-label", eu: "f x-ren funtzioa berdin x ber bi bider e ber minus lau x", es: "f de x igual a x al cuadrado por e elevado a menos cuatro x" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".variation-table", attribute: "aria-label", eu: "Lehenengo deribatuaren zeinu-taula eta funtzioaren aldakuntza", es: "Tabla de signos de la primera derivada y variación de la función" },
  { selector: ".extrema-figure", attribute: "aria-label", eu: "Funtzioaren grafikoa, minimoa eta maximo lokala adierazita", es: "Gráfica de la función con su mínimo y su máximo local señalados" },
  { selector: ".extrema-function-board", attribute: "aria-label", eu: "f x-ren funtzioa berdin x ber bi bider e ber minus lau x grafikoa, zero eta erdi bateko muturrekin", es: "Gráfica de f de x igual a x al cuadrado por e elevado a menos cuatro x, con los extremos en cero y un medio" }
];

function applyExponentialExtremaText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalExponentialExtremaText.has(node)) {
      originalExponentialExtremaText.set(node, node.nodeValue);
    }

    const original = originalExponentialExtremaText.get(node);
    const key = original.trim();

    if (language === "eu" && exponentialExtremaTextEu.has(key)) {
      const translation = exponentialExtremaTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyExponentialExtremaLanguage(language) {
  document.title = language === "eu"
    ? "Funtzio esponentzial baten deribatuak eta muturrak · Matematika II"
    : "Derivadas y extremos de una función exponencial · Matemáticas II";

  applyExponentialExtremaText(language);

  exponentialExtremaAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyExponentialExtremaLanguage(event.detail.language);
});

applyExponentialExtremaLanguage(window.I18n?.getLanguage() ?? "eu");

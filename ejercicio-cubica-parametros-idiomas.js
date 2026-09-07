const cubicParametersExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción A · Problema A.3": "2019 · Ezohikoa · A aukera · A.3 problema",
  "Análisis · Derivadas y extremos · Julio de 2019": "Analisia · Deribatuak eta muturrak · 2019ko uztaila",
  "Función cúbica: parámetros y extremos locales": "Funtzio kubikoa: parametroak eta mutur lokalak",
  "Enunciado": "Enuntziatua",
  "Sea f la función": "Izan bedi f funtzioa:",
  "Obtener los valores A, B y C para que su gráfica contenga el punto P(0, 1) y para que f tenga un mínimo local en Q(2, 0).": "Lortu A, B eta C-ren balioak, grafikoak P(0, 1) puntua izan dezan eta f-k Q(2, 0) puntuan minimo lokal bat izan dezan.",
  "¿La función obtenida tiene otros máximos o mínimos locales?": "Lortutako funtzioak ba al du beste maximo edo minimo lokalik?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Tenemos tres parámetros desconocidos y el enunciado proporciona tres condiciones independientes. Que P(0, 1) esté en la gráfica significa f(0) = 1. Que Q(2, 0) sea un mínimo exige, primero, que pertenezca a la gráfica, f(2) = 0, y segundo, que sea un punto estacionario, f′(2) = 0. Resolveremos esas tres ecuaciones y después comprobaremos con f″(2) > 0 que el punto es efectivamente un mínimo.": "Hiru parametro ezezagun ditugu, eta enuntziatuak hiru baldintza independente ematen ditu. P(0, 1) grafikoan egoteak f(0) = 1 esan nahi du. Q(2, 0) minimoa izateko, lehenik grafikoan egon behar du, f(2) = 0, eta, bigarrenik, puntu geldikorra izan behar du, f′(2) = 0. Hiru ekuazioak ebatziko ditugu, eta ondoren f″(2) > 0 erabiliz puntua benetan minimoa dela egiaztatuko dugu.",
  "Determinación de A, B y C": "A, B eta C-ren zehaztapena",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Un punto pertenece a una gráfica": "1. Puntu bat grafiko batekoa izatea",
  "El punto (x₀, y₀) está en la gráfica de f exactamente cuando su ordenada coincide con el valor de la función en x₀.": "(x₀, y₀) puntua f-ren grafikoan dago baldin eta soilik baldin haren ordenatua x₀ puntuko funtzioaren balioarekin bat badator.",
  "(x₀, y₀) ∈ gráfica(f) ⇔ f(x₀) = y₀": "(x₀, y₀) ∈ grafikoa(f) ⇔ f(x₀) = y₀",
  "2. Condición necesaria de extremo local": "2. Mutur lokalaren beharrezko baldintza",
  "Si f es derivable y tiene un máximo o un mínimo local en un punto interior x₀, su derivada se anula allí. Esta condición localiza candidatos, pero todavía hay que clasificarlos.": "f deribagarria bada eta x₀ barne-puntuan maximo edo minimo lokal bat badu, haren deribatua zero da bertan. Baldintza horrek hautagaiak aurkitzen ditu, baina oraindik sailkatu egin behar dira.",
  "x₀ extremo local ⇒ f′(x₀) = 0": "x₀ mutur lokala ⇒ f′(x₀) = 0",
  "3. Criterio de la segunda derivada": "3. Bigarren deribatuaren irizpidea",
  "En un punto estacionario, una segunda derivada positiva indica curvatura hacia arriba y confirma un mínimo local.": "Puntu geldikor batean, bigarren deribatu positiboak goranzko kurbadura adierazten du eta minimo lokal bat baieztatzen du.",
  "f′(x₀) = 0 y f″(x₀) > 0 ⇒ mínimo local": "f′(x₀) = 0 eta f″(x₀) > 0 ⇒ minimo lokala",
  "4. Tres condiciones para tres parámetros": "4. Hiru baldintza hiru parametrotarako",
  "Cada dato del enunciado produce una ecuación. Si las tres ecuaciones son independientes, permiten determinar los tres parámetros A, B y C.": "Enuntziatuko datu bakoitzak ekuazio bat sortzen du. Hiru ekuazioak independenteak badira, A, B eta C parametroak zehazteko aukera ematen dute.",
  "Resolución completa": "Ebazpen osoa",
  "Calculamos las dos primeras derivadas": "Lehen bi deribatuak kalkulatzen ditugu",
  "Derivamos término a término, tratando A, B y C como constantes.": "Gaiz gai deribatzen dugu, A, B eta C konstante gisa hartuta.",
  "Usamos que P(0, 1) pertenece a la gráfica": "P(0, 1) grafikoan dagoela erabiltzen dugu",
  "Sustituimos x = 0 en f y exigimos que el resultado sea la ordenada 1.": "x = 0 ordezkatzen dugu f-n, eta emaitza 1 ordenatua izatea eskatzen dugu.",
  "Usamos que Q(2, 0) pertenece a la gráfica": "Q(2, 0) grafikoan dagoela erabiltzen dugu",
  "Como Q es un punto de la función, al sustituir x = 2 debemos obtener y = 0.": "Q funtzioaren puntu bat denez, x = 2 ordezkatzean y = 0 lortu behar dugu.",
  "Usamos que x = 2 es estacionario": "x = 2 geldikorra dela erabiltzen dugu",
  "Todo mínimo local interior de una función derivable debe cumplir f′(2) = 0.": "Funtzio deribagarri baten barneko minimo lokal orok f′(2) = 0 bete behar du.",
  "Resolvemos el sistema sin saltos": "Sistema urratsik baztertu gabe ebazten dugu",
  "Empezamos con C = 1 y lo sustituimos en la ecuación f(2) = 0.": "C = 1 baliotik abiatu eta f(2) = 0 ekuazioan ordezkatzen dugu.",
  "Restamos la segunda ecuación de la primera para eliminar A.": "Bigarren ekuazioa lehenengoari kentzen diogu A ezabatzeko.",
  "Sustituimos B = 3 en 4A + B = −12.": "B = 3 ordezkatzen dugu 4A + B = −12 ekuazioan.",
  "Verificamos todas las condiciones": "Baldintza guztiak egiaztatzen ditugu",
  "La función obtenida es la siguiente:": "Lortutako funtzioa hau da:",
  "P pertenece": "P barne dago",
  "Q pertenece": "Q barne dago",
  "Q es estacionario": "Q geldikorra da",
  "Q es mínimo": "Q minimoa da",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Q es un mínimo local": "Q minimo lokala da",
  "P(0, 1) ∈ gráfica(f) ⇒ C = 1": "P(0, 1) ∈ grafikoa(f) ⇒ C = 1",
  "Q(2, 0) ∈ gráfica(f) ⇒": "Q(2, 0) ∈ grafikoa(f) ⇒",
  "Q(2, 0) ∈ gráfica(f) ⇒ 8 + 4A + 2B + C = 0": "Q(2, 0) ∈ grafikoa(f) ⇒ 8 + 4A + 2B + C = 0",
  "Q mínimo ⇒ f′(2) = 12 + 4A + B = 0": "Q minimoa ⇒ f′(2) = 12 + 4A + B = 0",
  "f″(2) = 9/2 > 0 ⇒ Q es un mínimo local": "f″(2) = 9/2 > 0 ⇒ Q minimo lokala da",
  "Resultado": "Emaitza",
  "La función es f(x) = x³ − (15/4)x² + 3x + 1.": "Funtzioa f(x) = x³ − (15/4)x² + 3x + 1 da.",
  "Los únicos máximos o mínimos locales posibles aparecen donde f′(x) = 0. Factorizaremos la derivada de la función obtenida y encontraremos dos puntos críticos: x = 1/2 y x = 2. El enunciado ya anticipa el mínimo en x = 2; el signo de f′ a ambos lados de x = 1/2 mostrará que allí hay un máximo. Finalmente calcularemos su ordenada exacta.": "Maximo edo minimo lokal posible bakarrak f′(x) = 0 den tokietan agertzen dira. Lortutako funtzioaren deribatua faktorizatuko dugu, eta bi puntu kritiko aurkituko ditugu: x = 1/2 eta x = 2. Enuntziatuak x = 2 puntuko minimoa aurreratzen du; x = 1/2-ren bi aldeetako f′-ren zeinuak bertan maximo bat dagoela erakutsiko du. Azkenik, haren ordenatu zehatza kalkulatuko dugu.",
  "Estudio completo de los extremos locales": "Mutur lokalen azterketa osoa",
  "1. Puntos críticos": "1. Puntu kritikoak",
  "En una función derivable, los extremos locales interiores solo pueden aparecer en los ceros de la primera derivada.": "Funtzio deribagarri batean, barneko mutur lokalak lehen deribatuaren zeroetan bakarrik ager daitezke.",
  "f′(x) = 0 ⇒ candidato a extremo": "f′(x) = 0 ⇒ muturrerako hautagaia",
  "2. Signo de la derivada": "2. Deribatuaren zeinua",
  "Si f′ es positiva, f crece; si f′ es negativa, f decrece. El cambio de signo clasifica el punto crítico.": "f′ positiboa bada, f hazi egiten da; f′ negatiboa bada, f beheratu egiten da. Zeinu-aldaketak puntu kritikoa sailkatzen du.",
  "f′: + → − ⇒ máximo": "f′: + → − ⇒ maximoa",
  "f′: − → + ⇒ mínimo": "f′: − → + ⇒ minimoa",
  "3. Coordenadas del extremo": "3. Muturraren koordenatuak",
  "Resolver f′(x) = 0 proporciona la abscisa. Para obtener el punto completo todavía hay que calcular la ordenada sustituyendo esa abscisa en f.": "f′(x) = 0 ebazteak abzisa ematen du. Puntu osoa lortzeko, oraindik ordenatua kalkulatu behar da abzisa hori f-n ordezkatuz.",
  "x = x₀ ⇒ extremo en (x₀, f(x₀))": "x = x₀ ⇒ muturra (x₀, f(x₀)) puntuan",
  "Escribimos y factorizamos la derivada": "Deribatua idatzi eta faktorizatzen dugu",
  "Sustituimos A = −15/4 y B = 3 en la expresión general de f′.": "A = −15/4 eta B = 3 ordezkatzen ditugu f′-ren adierazpen orokorrean.",
  "Localizamos todos los puntos críticos": "Puntu kritiko guztiak aurkitzen ditugu",
  "Un producto es cero cuando alguno de sus factores es cero.": "Biderkadura bat zero da haren faktoreetako bat zero denean.",
  "No puede haber más extremos locales porque f′ es un polinomio cuadrático y estos son sus dos únicos ceros.": "Ezin da beste mutur lokalik egon, f′ polinomio koadratikoa baita eta horiek baitira haren bi zero bakarrak.",
  "Estudiamos el signo de f′": "f′-ren zeinua aztertzen dugu",
  "El signo se obtiene directamente de los factores x − 1/2 y x − 2.": "Zeinua zuzenean lortzen da x − 1/2 eta x − 2 faktoreetatik.",
  "f crece": "f hazi egiten da",
  "f decrece": "f beheratu egiten da",
  "(−)(−) ⇒ f′(x) > 0 ⇒ f crece": "(−)(−) ⇒ f′(x) > 0 ⇒ f hazi egiten da",
  "(+)(−) ⇒ f′(x) < 0 ⇒ f decrece": "(+)(−) ⇒ f′(x) < 0 ⇒ f beheratu egiten da",
  "(+)(+) ⇒ f′(x) > 0 ⇒ f crece": "(+)(+) ⇒ f′(x) > 0 ⇒ f hazi egiten da",
  "máx.": "max.",
  "mín.": "min.",
  "Calculamos la ordenada del máximo": "Maximoaren ordenatua kalkulatzen dugu",
  "Sustituimos x = 1/2 en la función y expresamos todos los términos con denominador 16.": "x = 1/2 funtzioan ordezkatzen dugu, eta gai guztiak 16 izendatzailearekin adierazten ditugu.",
  "Corrección de la fuente:": "Iturriaren zuzenketa:",
  "la solución publicada escribe 57/16. La suma anterior muestra que la ordenada correcta es 27/16.": "argitaratutako ebazpenak 57/16 idazten du. Aurreko batuketak erakusten du ordenatu zuzena 27/16 dela.",
  "Interpretamos los cambios de signo": "Zeinu-aldaketak interpretatzen ditugu",
  "f′ cambia de + a − ⇒ máximo local en (1/2, 27/16)": "f′ + izatetik − izatera aldatzen da ⇒ maximo lokala (1/2, 27/16) puntuan",
  "f′ cambia de − a + ⇒ mínimo local en (2, 0)": "f′ − izatetik + izatera aldatzen da ⇒ minimo lokala (2, 0) puntuan",
  "La gráfica confirma el crecimiento, el decrecimiento y el nuevo crecimiento alrededor de los dos puntos críticos.": "Grafikoak bi puntu kritikoen inguruko hazkundea, beherakada eta hazkunde berria baieztatzen ditu.",
  "f′: + en (−∞, 1/2), − en (1/2, 2), + en (2, +∞)": "f′: + (−∞, 1/2) tartean, − (1/2, 2) tartean, + (2, +∞) tartean",
  "Máximo local: (1/2, 27/16) · Mínimo local: (2, 0)": "Maximo lokala: (1/2, 27/16) · Minimo lokala: (2, 0)",
  "Otro extremo: máximo local en": "Beste muturra, maximo lokala:",
  "El mínimo dado está en": "Emandako minimoaren puntua:",
  "No existen más extremos locales.": "Ez dago beste mutur lokalik."
}));

const originalCubicParametersExerciseText = new WeakMap();

const cubicParametersExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".cubic-variation-table", attribute: "aria-label", eu: "Funtzio kubikoaren deribatuaren zeinu-taula eta aldakuntza", es: "Tabla de signos de la derivada y variación de la función cúbica" },
  { selector: ".cubic-extrema-figure", attribute: "aria-label", eu: "Funtzio kubikoaren grafikoa, emandako puntua, maximo lokala eta minimo lokala adierazita", es: "Gráfica de la función cúbica con el punto dado, el máximo local y el mínimo local" },
  { selector: ".cubic-extrema-board", attribute: "aria-label", eu: "Funtzio kubikoaren grafikoa: P zero bat puntuan, maximoa erdi hogeita zazpi hamaseiren puntuan eta minimoa bi zero puntuan", es: "Gráfica de la función cúbica con P en cero uno, un máximo en un medio veintisiete dieciseisavos y un mínimo en dos cero" },
];

function applyCubicParametersExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCubicParametersExerciseText.has(node)) {
      originalCubicParametersExerciseText.set(node, node.nodeValue);
    }

    const original = originalCubicParametersExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && cubicParametersExerciseTextEu.has(key)) {
      const translation = cubicParametersExerciseTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCubicParametersExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Funtzio kubikoa: parametroak eta muturrak · Matematika II"
    : "Función cúbica: parámetros y extremos · Matemáticas II";

  applyCubicParametersExerciseText(language);

  cubicParametersExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCubicParametersExerciseLanguage(event.detail.language);
});

applyCubicParametersExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

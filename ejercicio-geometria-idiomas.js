const geometryExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción A · Problema A.2": "2019 · Ohikoa · A aukera · A.2 problema",
  "Geometría · Rectas y planos · Junio de 2019": "Geometria · Zuzenak eta planoak · 2019ko ekaina",
  "Recta y plano: paralelismo y perpendicularidad": "Zuzena eta planoa: paralelotasuna eta perpendikulartasuna",
  "Enunciado": "Enuntziatua",
  "Sean la recta": "Izan bitez",
  "y el plano": "zuzena eta",
  "definidos por:": "planoa, honela definituak:",
  "¿Existe algún valor de A para que el plano sea paralelo a": "Ba al dago A-ren baliorik planoa",
  "?": " zuzenarekiko paraleloa izan dadin?",
  "Encontrar el plano perpendicular a la recta": "Aurkitu",
  "que pasa por el punto (0, 0, 0).": "zuzenarekiko perpendikularra den eta (0, 0, 0) puntutik igarotzen den planoa.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Primero necesitamos la dirección de la recta": "Lehenik,",
  ". Como": " zuzenaren norabidea behar dugu.",
  "es la intersección de dos planos, su vector director se obtiene mediante el producto vectorial de sus dos vectores normales. Después, para que": "bi planoren ebakidura denez, haren norabide-bektorea bi planoen bektore normalen biderkadura bektorialaren bidez lortzen da. Ondoren,",
  "sea paralelo a la recta, esa dirección debe ser perpendicular al vector normal de": "planoa zuzenarekiko paraleloa izan dadin, norabide horrek",
  "; al igualar a cero su producto escalar encontraremos A. Finalmente comprobaremos con un punto de": "-ren bektore normalarekiko perpendikularra izan behar du; haien biderkadura eskalarra zero eginez A aurkituko dugu. Azkenik,",
  "que la recta no está contenida en el plano.": "zuzeneko puntu batekin zuzena planoaren barruan ez dagoela egiaztatuko dugu.",
  "¿Cuándo son paralelos el plano y la recta?": "Noiz dira paraleloak planoa eta zuzena?",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Vector normal de un plano": "1. Plano baten bektore normala",
  "En la ecuación ax + by + cz + d = 0, los coeficientes de x, y, z forman un vector perpendicular al plano.": "ax + by + cz + d = 0 ekuazioan, x, y eta z-ren koefizienteek planoarekiko perpendikularra den bektore bat osatzen dute.",
  "2. Dirección de una recta intersección": "2. Ebakidura-zuzen baten norabidea",
  "Una recta definida por dos planos pertenece a ambos. Su vector director debe ser perpendicular a los dos vectores normales; por eso se obtiene con su producto vectorial.": "Bi planok definitutako zuzena bi planoetakoa da. Haren norabide-bektoreak bi bektore normalekiko perpendikularra izan behar du; horregatik, haien biderkadura bektorialarekin lortzen da.",
  "3. Paralelismo entre recta y plano": "3. Zuzenaren eta planoaren arteko paralelotasuna",
  "El vector director de una recta paralela a un plano es una dirección del plano y, por tanto, es perpendicular al vector normal del plano.": "Plano batekiko paraleloa den zuzenaren norabide-bektorea planoaren norabide bat da; beraz, planoaren bektore normalarekiko perpendikularra da.",
  "4. Paralela o contenida": "4. Paraleloa edo barnean",
  "El producto escalar igual a cero también permite que la recta esté contenida en el plano. Para distinguir ambos casos, basta tomar un punto de la recta y comprobar si satisface la ecuación del plano.": "Biderkadura eskalarra zero izateak zuzena planoaren barruan egotea ere ahalbidetzen du. Bi kasuak bereizteko, nahikoa da zuzeneko puntu bat hartu eta planoaren ekuazioa betetzen duen egiaztatzea.",
  "Resolución completa": "Ebazpen osoa",
  "Leemos los vectores normales de los dos planos": "Bi planoen bektore normalak irakurtzen ditugu",
  "Los coeficientes de x, y, z en cada ecuación de la recta forman sus vectores normales.": "Zuzenaren ekuazio bakoitzeko x, y eta z-ren koefizienteek dagozkien bektore normalak osatzen dituzte.",
  "Calculamos el vector director de la recta": "Zuzenaren norabide-bektorea kalkulatzen dugu",
  "Hacemos el producto vectorial n₁ × n₂, componente por componente:": "n₁ × n₂ biderkadura bektoriala osagaiz osagai egiten dugu:",
  "Leemos el vector normal del plano π": "π planoaren bektore normala irakurtzen dugu",
  "En π ≡ x − y + Az = 0, los coeficientes de x, y, z son 1, −1 y A.": "π ≡ x − y + Az = 0 ekuazioan, x, y eta z-ren koefizienteak 1, −1 eta A dira.",
  "Imponemos la condición de paralelismo": "Paralelotasun-baldintza ezartzen dugu",
  "El vector director de la recta debe ser perpendicular al normal del plano. Por tanto, su producto escalar debe valer cero.": "Zuzenaren norabide-bektoreak planoaren normalarekiko perpendikularra izan behar du. Beraz, haien biderkadura eskalarrak zero balio behar du.",
  "Comprobamos que la recta no está contenida": "Zuzena planoaren barruan ez dagoela egiaztatzen dugu",
  "Buscamos un punto sencillo de r tomando z = 0. La segunda ecuación da y = 3x/2 y, al sustituir en la primera, obtenemos x = −2 e y = −3.": "r zuzeneko puntu erraz bat bilatzen dugu z = 0 hartuta. Bigarren ekuazioak y = 3x/2 ematen du eta, lehenengoan ordezkatuta, x = −2 eta y = −3 lortzen ditugu.",
  "Evaluamos ese punto en el plano correspondiente a A = 3:": "Puntu hori A = 3 balioari dagokion planoan ebaluatzen dugu:",
  "La dirección es paralela al plano y la recta no está contenida en él; por tanto, el paralelismo es estricto.": "Norabidea planoarekiko paraleloa da eta zuzena ez dago haren barruan; beraz, paralelotasuna hertsia da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Además, P = (−2, −3, 0) pertenece a r pero no al plano obtenido, así que la recta no está contenida en él.": "Gainera, P = (−2, −3, 0) puntua r zuzenekoa da, baina ez lortutako planokoa; beraz, zuzena ez dago haren barruan.",
  "Resultado": "Emaitza",
  "Para este valor, π es paralelo a r.": "Balio horretarako, π planoa r zuzenarekiko paraleloa da.",
  "Un plano perpendicular a una recta tiene como vector normal una dirección paralela a la recta. Ya podemos obtener esa dirección a partir de los dos planos que definen": "Zuzen batekiko perpendikularra den plano baten bektore normala zuzenaren norabidearekiko paraleloa da. Norabide hori",
  ": n₁ × n₂ = (5, 8, 1). Usaremos ese vector como normal del plano buscado y el punto (0, 0, 0) para determinar su término independiente.": " zuzena definitzen duten bi planoetatik lor dezakegu: n₁ × n₂ = (5, 8, 1). Bektore hori bilatutako planoaren normal gisa erabiliko dugu, eta (0, 0, 0) puntua gai askea zehazteko.",
  "Plano por el origen perpendicular a la recta": "Jatorritik igarotzen den eta zuzenarekiko perpendikularra den planoa",
  "1. Dirección de la recta intersección": "1. Ebakidura-zuzenaren norabidea",
  "Si una recta es la intersección de dos planos de normales n₁ y n₂, un vector director se obtiene con el producto vectorial de ambas normales.": "Zuzen bat n₁ eta n₂ normalak dituzten bi planoren ebakidura bada, norabide-bektore bat bi normalen biderkadura bektorialarekin lortzen da.",
  "2. Plano perpendicular a una recta": "2. Zuzen batekiko plano perpendikularra",
  "Una recta es perpendicular a un plano cuando la dirección de la recta es paralela al vector normal del plano. Podemos elegir directamente el mismo vector.": "Zuzen bat plano batekiko perpendikularra da zuzenaren norabidea planoaren bektore normalarekiko paraleloa denean. Bektore bera aukera dezakegu zuzenean.",
  "3. Ecuación de un plano por un punto": "3. Puntu batetik igarotzen den planoaren ekuazioa",
  "Si n = (a, b, c) es normal al plano y P₀ = (x₀, y₀, z₀) pertenece a él, su ecuación punto-normal es:": "n = (a, b, c) planoaren normala bada eta P₀ = (x₀, y₀, z₀) puntua planokoa bada, puntu-normal ekuazioa hau da:",
  "Obtenemos la dirección de r": "r zuzenaren norabidea lortzen dugu",
  "Los normales de los planos que definen la recta son n₁ = (4, −3, 4) y n₂ = (3, −2, 1). Su producto vectorial es:": "Zuzena definitzen duten planoen normalak n₁ = (4, −3, 4) eta n₂ = (3, −2, 1) dira. Haien biderkadura bektoriala hau da:",
  "Elegimos el vector normal del plano": "Planoaren bektore normala aukeratzen dugu",
  "Como el plano buscado debe ser perpendicular a r, su vector normal tiene que ser paralelo a": "Bilatutako planoak r zuzenarekiko perpendikularra izan behar duenez, haren bektore normalak",
  ". Tomamos el más sencillo:": "-rekiko paraleloa izan behar du. Errazena hartzen dugu:",
  "Usamos que el plano pasa por el origen": "Planoa jatorritik igarotzen dela erabiltzen dugu",
  "Aplicamos la ecuación punto-normal con P₀ = (0, 0, 0):": "Puntu-normal ekuazioa P₀ = (0, 0, 0) puntuarekin aplikatzen dugu:",
  "El término independiente es cero precisamente porque el plano pasa por el origen.": "Gai askea zero da, hain zuzen, planoa jatorritik igarotzen delako.",
  "Es perpendicular a r y pasa por (0, 0, 0).": "r zuzenarekiko perpendikularra da eta (0, 0, 0) puntutik igarotzen da.",
}));

const originalGeometryExerciseText = new WeakMap();

const geometryExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".geometry-object .equation-system", attribute: "aria-label", eu: "r zuzena bi planoren ebakidura gisa", es: "Recta r como intersección de dos planos" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Soluzioaren atalak", es: "Apartados de la solución" },
];

function applyGeometryExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalGeometryExerciseText.has(node)) {
      originalGeometryExerciseText.set(node, node.nodeValue);
    }

    const original = originalGeometryExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && geometryExerciseTextEu.has(key)) {
      const translation = geometryExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyGeometryExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Zuzena eta planoa · Matematika II"
    : "Recta y plano · Matemáticas II";

  applyGeometryExerciseText(language);

  geometryExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyGeometryExerciseLanguage(event.detail.language);
});

applyGeometryExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

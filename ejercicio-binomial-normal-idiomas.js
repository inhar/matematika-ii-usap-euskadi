const binomialNormalTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción B · Problema B.5": "2019 · Ohikoa · B aukera · B.5 problema",
  "Probabilidad · Distribuciones binomial y normal · Junio de 2019": "Probabilitatea · Banaketa binomiala eta normala · 2019ko ekaina",
  "Aproximación normal de una distribución binomial": "Banaketa binomialaren hurbilketa normala",
  "Enunciado": "Enuntziatua",
  "Lanzamos un dado de seis caras 6.000 veces. Calcular la probabilidad de que el número de veces que salga el 5:": "Sei aurpegiko dado bat 6.000 aldiz jaurtitzen dugu. Kalkulatu 5 zenbakia ateratzen den aldi kopuruaren probabilitatea:",
  "sea superior a 1.500;": "1.500 baino handiagoa izateko;",
  "esté comprendido entre 1.000 y 1.100.": "1.000 eta 1.100 artean egoteko.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Contaremos cuántas veces aparece el 5 mediante una variable binomial: hay 6.000 ensayos independientes y en cada uno la probabilidad de éxito es 1/6. Como el número de lanzamientos es muy grande, aproximaremos esa binomial por una normal con la misma media y desviación típica. Después aplicaremos la corrección de continuidad y mediremos cuántas desviaciones típicas separan 1.500,5 de la media; esa distancia decidirá el tamaño de la probabilidad buscada.": "5 zenbat aldiz agertzen den aldagai binomial baten bidez zenbatuko dugu: 6.000 saiakuntza independente daude, eta bakoitzean arrakasta izateko probabilitatea 1/6 da. Jaurtiketa kopurua oso handia denez, binomial hori batezbesteko eta desbideratze estandar bereko normal baten bidez hurbilduko dugu. Ondoren, jarraitutasun-zuzenketa aplikatu, eta 1.500,5 balioa batezbestekotik zenbat desbideratze estandarrera dagoen neurtuko dugu; distantzia horrek zehaztuko du bilatutako probabilitatearen tamaina.",
  "Probabilidad de superar 1.500 cincos": "1.500 bosteko baino gehiago ateratzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Distribución binomial": "1. Banaketa binomiala",
  "Si repetimos n veces un experimento independiente con dos resultados y la probabilidad de éxito p no cambia, el número X de éxitos sigue una distribución binomial.": "Bi emaitzako esperimentu independente bat n aldiz errepikatzen badugu eta p arrakasta-probabilitatea aldatzen ez bada, X arrakasta kopuruak banaketa binomiala du.",
  "Aquí un «éxito» es obtener un 5: n = 6.000 y p = 1/6.": "Hemen «arrakasta» 5 bat ateratzea da: n = 6.000 eta p = 1/6.",
  "2. Aproximación por una normal": "2. Normal baten bidezko hurbilketa",
  "Cuando np y n(1 − p) son suficientemente grandes, la binomial puede aproximarse por una normal con la misma media y desviación típica.": "np eta n(1 − p) behar bezain handiak direnean, binomiala batezbesteko eta desbideratze estandar bereko normal baten bidez hurbil daiteke.",
  "En este ejercicio ambos productos superan ampliamente 5, así que la aproximación es adecuada.": "Ariketa honetan bi biderkadurak 5 baino askoz handiagoak dira; beraz, hurbilketa egokia da.",
  "3. Corrección de continuidad": "3. Jarraitutasun-zuzenketa",
  "La binomial solo toma valores enteros, mientras que la normal es continua. Para representar X ≥ 1.501 con una normal, situamos la frontera entre 1.500 y 1.501.": "Binomialak balio osoak soilik hartzen ditu; normala, berriz, jarraitua da. X ≥ 1.501 normal baten bidez adierazteko, muga 1.500 eta 1.501 artean kokatzen dugu.",
  "4. Tipificación": "4. Tipifikazioa",
  "Restar la media y dividir por la desviación típica transforma Y en una normal estándar Z. El valor obtenido indica la distancia a la media medida en desviaciones típicas.": "Batezbestekoa kendu eta desbideratze estandarraren bidez zatitzeak Y Z normal estandarrean bihurtzen du. Lortutako balioak batezbestekorainoko distantzia adierazten du, desbideratze estandarretan neurtuta.",
  "Resolución completa": "Ebazpen osoa",
  "Definimos la variable aleatoria": "Zorizko aldagaia definitzen dugu",
  "Llamamos X al número de veces que aparece el 5 en los 6.000 lanzamientos. Cada lanzamiento es independiente y tiene la misma probabilidad de éxito.": "6.000 jaurtiketetan 5 agertzen den aldi kopuruari X deitzen diogu. Jaurtiketa bakoitza independentea da eta arrakasta-probabilitate bera du.",
  "Ensayos": "Saiakuntzak",
  "Éxito": "Arrakasta",
  "obtener un 5": "5 bat ateratzea",
  "Probabilidad": "Probabilitatea",
  "Comprobamos y construimos la aproximación normal": "Hurbilketa normala egiaztatu eta eraikitzen dugu",
  "Los dos productos que controlan la aproximación son grandes.": "Hurbilketa kontrolatzen duten bi biderkadurak handiak dira.",
  "Calculamos la media y la desviación típica de la normal que utilizaremos.": "Erabiliko dugun normalaren batezbestekoa eta desbideratze estandarra kalkulatzen ditugu.",
  "El segundo parámetro es la desviación típica.": "Bigarren parametroa desbideratze estandarra da.",
  "Aplicamos la corrección de continuidad": "Jarraitutasun-zuzenketa aplikatzen dugu",
  "«Superior a 1.500» significa que X puede valer 1.501, 1.502, etc. En la normal continua desplazamos la frontera media unidad.": "«1.500 baino handiagoa» esateak X-k 1.501, 1.502 eta abar balio ditzakeela esan nahi du. Normal jarraituan, muga unitate erdi desplazatzen dugu.",
  "Tipificamos la frontera": "Muga tipifikatzen dugu",
  "Restamos la media y dividimos por la desviación típica.": "Batezbestekoa kendu eta desbideratze estandarraren bidez zatitzen dugu.",
  "La frontera está 17,34 desviaciones típicas por encima de la media. La cola normal a partir de un valor tan extremo es despreciable.": "Muga batezbestekotik 17,34 desbideratze estandar gorago dago. Hain muturreko balio batetik aurrerako normalaren isatsa baztergarria da.",
  "Leemos la probabilidad": "Probabilitatea irakurtzen dugu",
  "La tabla normal ya da una cola prácticamente nula mucho antes de z = 17,34. Por tanto, con la precisión habitual de las tablas:": "Taula normalak ia nulua den isatsa ematen du z = 17,34 baino askoz lehenago. Beraz, taulen ohiko zehaztasunarekin:",
  "No significa que sea matemáticamente imposible, sino que su probabilidad es tan pequeña que se redondea a 0.": "Horrek ez du esan nahi matematikoki ezinezkoa denik; probabilitatea hain txikia da, non 0ra biribiltzen baita.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Con la precisión de las tablas, el suceso es prácticamente imposible.": "Taulen zehaztasunarekin, gertaera ia ezinezkoa da.",
  "Usaremos la misma variable binomial y la misma aproximación normal, cuya media es precisamente 1.000. Siguiendo la interpretación de la solución de la fuente, «entre 1.000 y 1.100» significa": "Aldagai binomial eta hurbilketa normal berak erabiliko ditugu; haren batezbestekoa, hain zuzen, 1.000 da. Iturriko ebazpenaren interpretazioari jarraituz, «1.000 eta 1.100 artean» esateak hau esan nahi du:",
  ". Convertiremos ese intervalo discreto en uno continuo mediante las fronteras 1.000,5 y 1.099,5; después tipificaremos ambos extremos y restaremos las áreas acumuladas de la normal estándar.": ". Tarte diskretu hori tarte jarraitu bihurtuko dugu 1.000,5 eta 1.099,5 mugen bidez; ondoren, bi muturrak tipifikatu eta normal estandarraren azalera metatuak kenduko ditugu.",
  "Probabilidad entre 1.000 y 1.100 cincos": "1.000 eta 1.100 bosteko artean ateratzeko probabilitatea",
  "1. Modelo binomial y aproximación normal": "1. Eredu binomiala eta hurbilketa normala",
  "El número X de cincos sigue B(n, p). Si np y nq son grandes, usamos una normal Y con media μ = np y desviación típica σ = √(npq).": "X bosteko kopuruak B(n, p) banaketa du. np eta nq handiak badira, μ = np batezbestekoa eta σ = √(npq) desbideratze estandarra dituen Y normal bat erabiltzen dugu.",
  "2. Corrección de continuidad en un intervalo abierto": "2. Jarraitutasun-zuzenketa tarte ireki batean",
  "La condición a < X < b incluye los enteros desde a + 1 hasta b − 1. La normal continua debe empezar media unidad antes del primer entero incluido y terminar media unidad después del último.": "a < X < b baldintzak a + 1etik b − 1era arteko zenbaki osoak hartzen ditu. Normal jarraituak barne hartutako lehen zenbaki osoa baino unitate erdi lehenago hasi eta azkena baino unitate erdi geroago amaitu behar du.",
  "3. Tipificación de los dos extremos": "3. Bi muturren tipifikazioa",
  "Aplicamos Z = (Y − μ)/σ a cada frontera. Así transformamos el intervalo de Y en otro equivalente para la normal estándar Z.": "Z = (Y − μ)/σ muga bakoitzari aplikatzen diogu. Horrela, Y-ren tartea Z normal estandarrerako tarte baliokide bihurtzen dugu.",
  "4. Probabilidad entre dos valores": "4. Bi balioren arteko probabilitatea",
  "La tabla proporciona Φ(z) = P(Z ≤ z), es decir, el área acumulada a la izquierda. Para conservar solo el área comprendida entre z₁ y z₂, restamos las dos acumuladas.": "Taulak Φ(z) = P(Z ≤ z) ematen du, hau da, ezkerrean metatutako azalera. z₁ eta z₂ artean dagoen azalera soilik gordetzeko, metatutako bi azalerak kentzen ditugu.",
  "Recuperamos el modelo": "Eredua berreskuratzen dugu",
  "La variable sigue siendo el número X de cincos obtenidos en 6.000 lanzamientos.": "Aldagaiak 6.000 jaurtiketetan lortutako X bosteko kopurua izaten jarraitzen du.",
  "Precisamos el intervalo y corregimos la continuidad": "Tartea zehaztu eta jarraitutasuna zuzentzen dugu",
  "La solución de la fuente interpreta «comprendido entre» con extremos excluidos. Por tanto, los valores enteros favorables van desde 1.001 hasta 1.099.": "Iturriko ebazpenak «artean» muturrak kanpoan utzita interpretatzen du. Beraz, aldeko balio osoak 1.001etik 1.099ra doaz.",
  "Las dos fronteras continuas quedan a media unidad de los primeros valores excluidos.": "Bi muga jarraituak kanpoan utzitako lehen balioetatik unitate erdira geratzen dira.",
  "Tipificamos los dos extremos": "Bi muturrak tipifikatzen ditugu",
  "Usamos la misma transformación en las dos fronteras.": "Bi mugetan transformazio bera erabiltzen dugu.",
  "Límite inferior": "Beheko muga",
  "Límite superior": "Goiko muga",
  "Identificamos el área en la normal estándar": "Normal estandarreko azalera identifikatzen dugu",
  "La zona sombreada comienza apenas a la derecha de la media y termina en z = 3,45. Es casi la mitad derecha de la campana, salvo una franja muy estrecha junto a z = 0 y una cola final diminuta.": "Itzaleztatutako eremua batezbestekoaren eskuinaldean bertan hasten da, eta z = 3,45 puntuan amaitzen. Kanpaiaren eskuineko erdia da ia, z = 0 ondoko zerrenda oso estu bat eta amaierako isats txiki bat izan ezik.",
  "El área sombreada representa": "Itzaleztatutako azalerak hau adierazten du:",
  ".": ".",
  "Restamos las probabilidades acumuladas": "Probabilitate metatuak kentzen ditugu",
  "Buscamos en la tabla los valores acumulados a la izquierda de cada extremo.": "Taulan mutur bakoitzaren ezkerrean metatutako balioak bilatzen ditugu.",
  "El área entre ambos valores es la diferencia.": "Bi balioen arteko azalera haien diferentzia da.",
  "El resultado equivale aproximadamente al 49,17 %. El redondeo coincide con la tabla usada en la solución de la fuente.": "Emaitza gutxi gorabehera % 49,17 da. Biribiltzea bat dator iturriko ebazpenean erabilitako taularekin.",
  "Aproximadamente, un 49,17 %.": "Gutxi gorabehera, % 49,17."
}));

const originalBinomialNormalText = new WeakMap();

const binomialNormalAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Soluzioaren atalak", es: "Apartados de la solución" },
  { selector: ".normal-distance", attribute: "aria-label", eu: "Muga batezbestekotik hamazazpi koma hogeita hamalau desbideratze estandar gorago dago", es: "La frontera está diecisiete coma treinta y cuatro desviaciones típicas por encima de la media" },
  { selector: ".normal-distribution-figure", attribute: "aria-label", eu: "Normal estandarraren zero koma zero bi eta hiru koma berrogeita bost arteko azalera", es: "Área de la normal estándar comprendida entre cero coma cero dos y tres coma cuarenta y cinco" },
  { selector: ".normal-distribution-board", attribute: "aria-label", eu: "Kanpai normal estandarra, z berdin zero koma zero bitik z berdin hiru koma berrogeita bostera arteko azalera itzaleztatuta", es: "Campana normal estándar con el área entre z igual a cero coma cero dos y z igual a tres coma cuarenta y cinco sombreada" },
];

function applyBinomialNormalText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalBinomialNormalText.has(node)) {
      originalBinomialNormalText.set(node, node.nodeValue);
    }

    const original = originalBinomialNormalText.get(node);
    const key = original.trim();
    if (language === "eu" && binomialNormalTextEu.has(key)) {
      const translation = binomialNormalTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyBinomialNormalLanguage(language) {
  document.title = language === "eu"
    ? "Banaketa binomialaren hurbilketa normala · Matematika II"
    : "Aproximación normal de una distribución binomial · Matemáticas II";

  applyBinomialNormalText(language);

  binomialNormalAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyBinomialNormalLanguage(event.detail.language);
});

applyBinomialNormalLanguage(window.I18n?.getLanguage() ?? "eu");

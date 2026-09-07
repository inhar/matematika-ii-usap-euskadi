const birthdays2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Ordinaria · Problema 10": "2021 · Ohikoa · 10. problema",
  "Probabilidad · Binomial y normal · 2021": "Probabilitatea · Binomiala eta normala · 2021",
  "Cumpleaños: aproximación normal de una binomial": "Urtebetetzeak: binomialaren hurbilketa normala",
  "Enunciado": "Enuntziatua",
  "En una ciudad se seleccionan al azar 3.900 personas. Suponemos que los cumpleaños se distribuyen por igual entre los 365 días del año. Se pide calcular la probabilidad de que el número de personas que cumplen años el día del patrón de la ciudad:": "Hiri batean 3.900 pertsona aukeratzen dira zoriz. Urtebetetzeak urteko 365 egunetan berdin banatzen direla suposatzen dugu. Kalkulatu hiriko zaindariaren egunean urteak betetzen dituzten pertsonen kopuruak:",
  "sea, al menos, 15;": "gutxienez 15 izateko probabilitatea;",
  "esté comprendido entre 5 y 15, ambos incluidos.": "5 eta 15 artean egoteko probabilitatea, biak barne.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Contaremos las personas cuyo cumpleaños coincide con ese día mediante una binomial. Como hay muchos ensayos y la probabilidad individual es pequeña, sustituiremos la binomial por una normal con la misma media y desviación típica.": "Egun horretan urteak betetzen dituzten pertsonak binomial baten bidez zenbatuko ditugu. Saiakuntza asko daudenez eta banakako probabilitatea txikia denez, binomiala batezbesteko eta desbideratze estandar bereko normal batez ordezkatuko dugu.",
  "«Al menos 15» incluye los valores 15, 16, 17… Al pasar de una variable discreta a otra continua, la frontera se coloca media unidad antes, en 14,5. Después tipificamos esa frontera y calculamos la cola derecha de la normal estándar.": "«Gutxienez 15» esateak 15, 16, 17… balioak barne hartzen ditu. Aldagai diskretutik jarraitura igarotzean, muga unitate erdi lehenago jartzen da, 14,5ean. Ondoren, muga hori tipifikatu eta normal estandarraren eskuineko isatsa kalkulatzen dugu.",
  "Probabilidad de que cumplan años al menos 15 personas": "Gutxienez 15 pertsonak urteak betetzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Recuento binomial": "1. Zenbaketa binomiala",
  "Si repetimos un ensayo independiente con dos resultados y una probabilidad de éxito constante, el número de éxitos sigue una distribución binomial. Aquí cada persona es un ensayo y «cumplir años el día del patrón» es el éxito.": "Bi emaitzako saiakuntza independente bat arrakasta-probabilitate konstantearekin errepikatzen badugu, arrakasta kopuruak banaketa binomial bati jarraitzen dio. Hemen pertsona bakoitza saiakuntza bat da, eta «zaindariaren egunean urteak betetzea» arrakasta da.",
  "2. Cuándo se puede aproximar por una normal": "2. Noiz hurbil daitekeen normal baten bidez",
  "La normal aproxima bien a la binomial cuando hay suficientes éxitos y fracasos esperados. Usaremos el criterio habitual:": "Normalak binomiala ondo hurbiltzen du espero diren arrakasta eta porrot kopuruak nahiko handiak direnean. Ohiko irizpidea erabiliko dugu:",
  "3. Parámetros de la normal aproximante": "3. Normal hurbiltzailearen parametroak",
  "La normal debe conservar la media y la desviación típica de la binomial.": "Normalak binomialaren batezbestekoa eta desbideratze estandarra mantendu behar ditu.",
  "4. Corrección de continuidad": "4. Jarraitutasun-zuzenketa",
  "La binomial concentra la probabilidad en números enteros; la normal reparte área de forma continua. Para incluir desde el entero 15, situamos la frontera continua entre 14 y 15.": "Binomialak probabilitatea zenbaki osoetan biltzen du; normalak azalera modu jarraituan banatzen du. 15 zenbaki osotik aurrera sartzeko, muga jarraitua 14 eta 15 artean kokatzen dugu.",
  "5. Tipificación y cola derecha": "5. Tipifikazioa eta eskuineko isatsa",
  "Tipificar convierte la normal de este ejercicio en una normal estándar. La tabla proporciona el área acumulada a la izquierda, por lo que una cola derecha se obtiene restando de uno.": "Tipifikatzeak ariketako normala normal estandar bihurtzen du. Taulak ezkerrean metatutako azalera ematen du; beraz, eskuineko isatsa batetik kenduz lortzen da.",
  "Resolución completa": "Ebazpen osoa",
  "Definimos la variable y el modelo": "Aldagaia eta eredua definitzen ditugu",
  "Sea": "Izan bedi",
  "el número de personas, entre las 3.900 seleccionadas, cuyo cumpleaños cae el día del patrón. Para cada persona hay éxito o fracaso, y la probabilidad de éxito es la misma.": "aukeratutako 3.900 pertsonen artean zaindariaren egunean urteak betetzen dituztenen kopurua. Pertsona bakoitzarentzat arrakasta edo porrota dago, eta arrakasta-probabilitatea bera da.",
  "Comprobamos que la aproximación normal es adecuada": "Hurbilketa normala egokia dela egiaztatzen dugu",
  "Calculamos los números esperados de éxitos y de fracasos. Ambos superan ampliamente 5.": "Espero diren arrakasta eta porrot kopuruak kalkulatzen ditugu. Biek 5 gainditzen dute nabarmen.",
  "Calculamos la media y la desviación típica": "Batezbestekoa eta desbideratze estandarra kalkulatzen ditugu",
  "Aplicamos la corrección de continuidad": "Jarraitutasun-zuzenketa aplikatzen dugu",
  "El primer valor entero incluido es 15. En la normal, su barra de probabilidad se representa mediante el área que comienza en 14,5.": "Barne hartutako lehen zenbaki osoa 15 da. Normalean, haren probabilitate-barra 14,5ean hasten den azaleraren bidez adierazten da.",
  "Tipificamos la frontera": "Muga tipifikatzen dugu",
  "Usamos los parámetros sin redondear hasta el final para evitar acumular error.": "Parametroak biribildu gabe erabiltzen ditugu amaierara arte, errorea ez pilatzeko.",
  "Calculamos la cola derecha": "Eskuineko isatsa kalkulatzen dugu",
  "La tabla da el área a la izquierda de": "Taulak honen ezkerreko azalera ematen du:",
  "La probabilidad pedida es la parte que queda a su derecha.": "Eskatutako probabilitatea haren eskuinean geratzen den zatia da.",
  ". La probabilidad pedida es la parte que queda a su derecha.": ". Eskatutako probabilitatea haren eskuinean geratzen den zatia da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "La zona sombreada representa la probabilidad situada a la derecha de": "Itzaldutako eremuak honen eskuinean dagoen probabilitatea adierazten du:",
  "Resultado": "Emaitza",
  "La probabilidad es aproximadamente del": "Probabilitatea gutxi gorabehera hau da:",
  "Usaremos la misma normal aproximante. Como los extremos 5 y 15 están incluidos, la corrección de continuidad amplía el intervalo media unidad por cada lado: desde 4,5 hasta 15,5.": "Normal hurbiltzaile bera erabiliko dugu. 5 eta 15 muturrak barne daudenez, jarraitutasun-zuzenketak tartea unitate erdi zabaltzen du alde bakoitzean: 4,5etik 15,5era.",
  "Tipificaremos las dos fronteras y restaremos las probabilidades acumuladas. De ese modo conservamos únicamente el área central situada entre ambas.": "Bi mugak tipifikatu eta probabilitate metatuak kenduko ditugu. Horrela, bien artean dagoen erdiko azalera baino ez dugu gordeko.",
  "Probabilidad de que cumplan años entre 5 y 15 personas": "5 eta 15 pertsona artean urteak betetzeko probabilitatea",
  "1. Conservamos el mismo modelo": "1. Eredu bera mantentzen dugu",
  "La variable aleatoria no cambia: seguimos contando cumpleaños entre las mismas 3.900 personas. Por tanto, usamos la misma binomial y la misma normal aproximante.": "Zorizko aldagaia ez da aldatzen: 3.900 pertsona beren artean urtebetetzeak zenbatzen jarraitzen dugu. Beraz, binomial eta normal hurbiltzaile berak erabiltzen ditugu.",
  "2. Corrección de continuidad en un intervalo cerrado": "2. Jarraitutasun-zuzenketa tarte itxi batean",
  "Para incluir todos los enteros desde 5 hasta 15, la zona continua debe comenzar a mitad de camino entre 4 y 5 y terminar a mitad de camino entre 15 y 16.": "5etik 15era bitarteko zenbaki oso guztiak sartzeko, eremu jarraituak 4 eta 5 arteko erdian hasi eta 15 eta 16 arteko erdian amaitu behar du.",
  "3. Tipificación de un intervalo": "3. Tarte baten tipifikazioa",
  "Aplicamos la misma transformación a cada extremo. Así obtenemos un intervalo equivalente para la normal estándar.": "Transformazio bera aplikatzen diogu mutur bakoitzari. Horrela, normal estandarrerako tarte baliokide bat lortzen dugu.",
  "4. Área entre dos valores": "4. Bi balioren arteko azalera",
  "La función": "Funtzioak",
  "acumula el área situada a la izquierda de": "honen ezkerrean dagoen azalera metatzen du:",
  "Para aislar la zona entre dos fronteras restamos las dos áreas acumuladas.": "Bi mugen arteko eremua bakartzeko, metatutako bi azalerak kentzen ditugu.",
  ". Para aislar la zona entre dos fronteras restamos las dos áreas acumuladas.": ". Bi mugen arteko eremua bakartzeko, metatutako bi azalerak kentzen ditugu.",
  "Si la tabla solo contiene valores positivos, usamos la simetría de la normal:": "Taulak balio positiboak baino ez baditu, normalaren simetria erabiltzen dugu:",
  "Recuperamos la aproximación normal": "Hurbilketa normala berreskuratzen dugu",
  "Ya hemos comprobado que": "Dagoeneko egiaztatu dugu",
  "y": "eta",
  "son mayores que 5.": "5 baino handiagoak direla.",
  "Corregimos los dos extremos": "Bi muturrak zuzentzen ditugu",
  "El intervalo incluye tanto el 5 como el 15. Por eso desplazamos el límite inferior hacia 4,5 y el superior hacia 15,5.": "Tarteak 5 eta 15 barne hartzen ditu. Horregatik, beheko muga 4,5era eta goikoa 15,5era eramaten ditugu.",
  "Tipificamos el límite inferior": "Beheko muga tipifikatzen dugu",
  "Tipificamos el límite superior": "Goiko muga tipifikatzen dugu",
  "Buscamos las dos probabilidades acumuladas": "Metatutako bi probabilitateak bilatzen ditugu",
  "Para el límite negativo usamos la simetría de la campana normal.": "Muga negatiborako kanpai normalaren simetria erabiltzen dugu.",
  "Restamos las áreas acumuladas": "Metatutako azalerak kentzen ditugu",
  "La zona sombreada conserva el área central comprendida entre": "Itzaldutako eremuak honen artean dagoen erdiko azalera gordetzen du:",
  "y": "eta"
}));

const originalBirthdays2021Text = new WeakMap();

const birthdays2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".birthday-2021-data", attribute: "aria-label", eu: "Esperimentuaren datuak", es: "Datos del experimento" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: "#birthday-2021-part-a .birthday-2021-figure", attribute: "aria-label", eu: "Normal estandarraren eskuineko isatsa bat koma hamazazpitik aurrera", es: "Cola derecha de la distribución normal estándar a partir de uno coma diecisiete" },
  { selector: "#birthday-normal-2021-board-a", attribute: "aria-label", eu: "Kanpai normal estandarra, z bat koma hamazazpitik eskuinerako isatsa itzalduta", es: "Campana normal estándar con la cola a la derecha de z igual a uno coma diecisiete sombreada" },
  { selector: "#birthday-2021-part-b .birthday-2021-figure", attribute: "aria-label", eu: "Normal estandarraren azalera ken bat koma laurogeita hamar eta bat koma berrogeita zortzi artean", es: "Área de la distribución normal estándar comprendida entre menos uno coma noventa y uno coma cuarenta y ocho" },
  { selector: "#birthday-normal-2021-board-b", attribute: "aria-label", eu: "Kanpai normal estandarra, z ken bat koma laurogeita hamar eta bat koma berrogeita zortzi arteko azalera itzalduta", es: "Campana normal estándar con el área entre z igual a menos uno coma noventa y z igual a uno coma cuarenta y ocho sombreada" }
];

function applyBirthdays2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalBirthdays2021Text.has(node)) {
      originalBirthdays2021Text.set(node, node.nodeValue);
    }

    const original = originalBirthdays2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && birthdays2021TextEu.has(key)) {
      const translation = birthdays2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyBirthdays2021Language(language) {
  document.title = language === "eu"
    ? "Urtebetetzeak: binomialaren hurbilketa normala · Matematika II"
    : "Cumpleaños: aproximación normal de una binomial · Matemáticas II";

  applyBirthdays2021Text(language);

  birthdays2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyBirthdays2021Language(event.detail.language);
});

applyBirthdays2021Language(window.I18n?.getLanguage() ?? "eu");

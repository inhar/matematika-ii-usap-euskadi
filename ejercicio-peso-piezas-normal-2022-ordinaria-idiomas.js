const normalWeight2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio B5": "2022 · Ohikoa · B5 ariketa",
  "Probabilidad · Distribución normal · 2022": "Probabilitatea · Banaketa normala · 2022",
  "Distribución normal del peso de unas piezas": "Piezen pisuaren banaketa normala",
  "Enunciado": "Enuntziatua",
  "El peso, en gramos, de una pieza fabricada en serie sigue una distribución normal de media 52 y desviación típica 6,5.": "Seriean fabrikatutako pieza baten pisuak, gramotan, 52ko batezbestekoa eta 6,5eko desbideratze tipikoa dituen banaketa normala jarraitzen du.",
  "Calcula la probabilidad de que el peso de una pieza fabricada esté comprendido entre 50 y 68 gramos.": "Kalkulatu fabrikatutako pieza baten pisua 50 eta 68 gramo artean egoteko probabilitatea.",
  "Si el 30 % de las piezas fabricadas pesa más que una pieza dada, ¿cuánto pesa esta última?": "Fabrikatutako piezen %30ek pieza jakin batek baino gehiago pisatzen badute, zenbat pisatzen du azken horrek?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "El modelo ya es normal. Tipificamos 50 y 68 gramos para expresar ambos límites en la escala de la normal estándar. Después restamos las probabilidades acumuladas: el área hasta el límite superior menos el área hasta el inferior.": "Eredua normala da dagoeneko. 50 eta 68 gramo tipifikatzen ditugu, bi mugak normal estandarraren eskalan adierazteko. Ondoren, probabilitate metatuak kentzen ditugu: goiko mugarainoko azalera ken beheko mugarainokoa.",
  "Como el límite inferior queda a la izquierda de la media, su valor tipificado es negativo. La simetría de la campana permite obtener esa probabilidad usando la tabla de valores positivos.": "Beheko muga batezbestekoaren ezkerrean dagoenez, haren balio tipifikatua negatiboa da. Kanpaiaren simetriari esker, probabilitate hori balio positiboen taula erabiliz lor dezakegu.",
  "Probabilidad de un peso entre 50 y 68 gramos": "Pisua 50 eta 68 gramo artean egoteko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Una distribución normal": "1. Banaketa normala",
  "Una variable normal queda determinada por su media y su desviación típica. La media fija el centro de la campana y la desviación típica mide su dispersión.": "Aldagai normal bat haren batezbestekoak eta desbideratze tipikoak zehazten dute. Batezbestekoak kanpaiaren erdigunea finkatzen du eta desbideratze tipikoak sakabanaketa neurtzen du.",
  "2. Tipificación": "2. Tipifikazioa",
  "Tipificar transforma cualquier valor de la variable original en su distancia a la media medida en desviaciones típicas. Así podemos usar una única tabla, la de la normal estándar.": "Tipifikatzeak jatorrizko aldagaiaren edozein balio batezbestekoarekiko distantzia bihurtzen du, desbideratze tipikotan neurtuta. Horrela, taula bakarra erabil dezakegu: normal estandarrarena.",
  "3. Probabilidad acumulada y simetría": "3. Probabilitate metatua eta simetria",
  "La función acumulada proporciona el área situada a la izquierda de un valor. Para un intervalo restamos dos acumuladas. La simetría permite convertir un valor negativo en uno positivo.": "Funtzio metatuak balio baten ezkerrean dagoen azalera ematen du. Tarte baterako, bi probabilitate metatu kentzen ditugu. Simetriak balio negatibo bat positibo bihurtzeko aukera ematen du.",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos el modelo": "Eredua identifikatzen dugu",
  "Llamamos": "Adieraz dezagun",
  "al peso, en gramos, de una pieza. El enunciado proporciona directamente la media y la desviación típica.": "pieza baten pisua, gramotan. Enuntziatuak zuzenean ematen ditu batezbestekoa eta desbideratze tipikoa.",
  "Tipificamos el límite inferior": "Beheko muga tipifikatzen dugu",
  "Restamos la media y dividimos entre la desviación típica.": "Batezbestekoa kendu eta desbideratze tipikoaz zatitzen dugu.",
  "Tipificamos el límite superior": "Goiko muga tipifikatzen dugu",
  "Leemos las probabilidades acumuladas": "Probabilitate metatuak irakurtzen ditugu",
  "La tabla de la normal estándar da": "Normal estandarraren taulak",
  "y": "eta",
  "Para el valor negativo usamos la simetría.": "ematen ditu. Balio negatiborako simetria erabiltzen dugu.",
  "Restamos las dos áreas acumuladas": "Bi azalera metatuak kentzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Buscamos un peso": "Pisu bat bilatzen dugu,",
  "que deje el 30 % de las piezas por encima. Eso significa que el 70 % queda por debajo. Localizamos en la normal estándar el valor": "piezen %30 haren gainetik uzten duena. Horrek esan nahi du %70 azpitik geratzen dela. Normal estandarrean probabilitate metatua 0,70 duen",
  "cuya probabilidad acumulada es 0,70 y después deshacemos la tipificación.": "balioa aurkitu eta, ondoren, tipifikazioa desegiten dugu.",
  "Peso que deja un 30 % de piezas por encima": "Piezen %30 gainetik uzten duen pisua",
  "1. Un percentil es un problema inverso": "1. Pertzentil bat alderantzizko problema da",
  "En el apartado anterior conocíamos el peso y buscábamos una probabilidad. Ahora conocemos la probabilidad acumulada y debemos encontrar el peso que la produce.": "Aurreko atalean pisua ezagutzen genuen eta probabilitate bat bilatzen genuen. Orain probabilitate metatua ezagutzen dugu eta hura sortzen duen pisua aurkitu behar dugu.",
  "2. De la cola derecha al área acumulada": "2. Eskuineko buztanetik azalera metatura",
  "La tabla normal proporciona el área situada a la izquierda. Si el 30 % queda a la derecha, el área acumulada a la izquierda es el 70 %.": "Taula normalak ezkerrean dagoen azalera ematen du. %30 eskuinean geratzen bada, ezkerreko azalera metatua %70 da.",
  "3. Lectura e interpolación en la tabla": "3. Taularen irakurketa eta interpolazioa",
  "El valor 0,7000 queda entre dos entradas consecutivas de la tabla. Tomamos un valor intermedio de": "0,7000 balioa taulako elkarren segidako bi sarreraren artean dago.",
  ", suficiente para la precisión pedida.": "-ren tarteko balio bat hartzen dugu, eskatutako zehaztasunerako nahikoa.",
  "4. Deshacer la tipificación": "4. Tipifikazioa desegitea",
  "Una vez conocido el valor tipificado, recuperamos el peso original multiplicando por la desviación típica y sumando la media.": "Balio tipifikatua ezagutu ondoren, jatorrizko pisua berreskuratzen dugu desbideratze tipikoaz biderkatu eta batezbestekoa batuz.",
  "Traducimos el enunciado a una probabilidad": "Enuntziatua probabilitate baten bidez adierazten dugu",
  "al peso de la pieza. El 30 % de las piezas pesa más que ella.": "piezaren pisua. Piezen %30ek hark baino gehiago pisatzen dute.",
  "Pasamos a la probabilidad acumulada": "Probabilitate metatura pasatzen gara",
  "La probabilidad total es uno. Por tanto, el área situada a la izquierda del peso buscado es el 70 %.": "Probabilitate osoa bat da. Beraz, bilatutako pisuaren ezkerrean dagoen azalera %70 da.",
  "Buscamos el valor tipificado": "Balio tipifikatua bilatzen dugu",
  "En la tabla, 0,7000 está entre 0,6985 y 0,7019. Sus valores tipificados son 0,52 y 0,53, respectivamente; una interpolación sencilla da aproximadamente 0,525.": "Taulan, 0,7000 balioa 0,6985 eta 0,7019 artean dago. Haien balio tipifikatuak 0,52 eta 0,53 dira, hurrenez hurren; interpolazio sinple batek 0,525 inguruko balioa ematen du.",
  "Deshacemos la tipificación": "Tipifikazioa desegiten dugu",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Aproximadamente el 70 % de las piezas pesa como máximo 55,41 gramos y el 30 % pesa más.": "Piezen %70 inguruk gehienez 55,41 gramo pisatzen dute, eta %30ek gehiago.",
}));

const originalNormalWeight2022Text = new WeakMap();

const normalWeight2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: "#normal-weight-2022-part-a .normal-weight-2022-figure", attribute: "aria-label", eu: "Pisuaren banaketa normala, 50 eta 68 gramo arteko tartea itzalduta", es: "Distribución normal del peso con el intervalo entre 50 y 68 gramos sombreado" },
  { selector: "#normal-weight-2022-interval-board", attribute: "aria-label", eu: "Kanpai normala, 50 eta 68 gramo artean dagoen azalera itzalduta", es: "Campana normal con el área situada entre 50 y 68 gramos sombreada" },
  { selector: "#normal-weight-2022-part-b .normal-weight-2022-figure", attribute: "aria-label", eu: "Pisuaren banaketa normala, eskuineko ehuneko hogeita hamarreko buztanarekin", es: "Distribución normal del peso con una cola derecha del 30 por ciento" },
  { selector: "#normal-weight-2022-tail-board", attribute: "aria-label", eu: "Kanpai normala, 55,41 gramotik aurrerako eskuineko ehuneko hogeita hamarreko buztana itzalduta", es: "Campana normal con el 30 por ciento de la cola derecha sombreado a partir de 55,41 gramos" },
];

function applyNormalWeight2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalNormalWeight2022Text.has(node)) {
      originalNormalWeight2022Text.set(node, node.nodeValue);
    }

    const original = originalNormalWeight2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && normalWeight2022TextEu.has(key)) {
      const translation = normalWeight2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyNormalWeight2022Language(language) {
  document.title = language === "eu"
    ? "Piezen pisuaren banaketa normala · Matematika II"
    : "Distribución normal del peso de unas piezas · Matemáticas II";

  applyNormalWeight2022Text(language);

  document.querySelectorAll("[data-normal-weight-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-normal-weight-2022-language") !== language;
  });

  normalWeight2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyNormalWeight2022Language(event.detail.language);
});

applyNormalWeight2022Language(window.I18n?.getLanguage() ?? "eu");

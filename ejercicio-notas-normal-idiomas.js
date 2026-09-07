const normalScoreTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción B · Problema B.5": "2019 · Ezohikoa · B aukera · B.5 problema",
  "Probabilidad · Distribución normal · Julio de 2019": "Probabilitatea · Banaketa normala · 2019ko uztaila",
  "Distribución normal de las puntuaciones de una prueba": "Azterketa bateko puntuazioen banaketa normala",
  "Enunciado": "Enuntziatua",
  "Los resultados de una prueba realizada a 500 estudiantes se distribuyen normalmente con media 40 puntos y desviación típica 10 puntos. Se pide:": "500 ikasleri egindako proba baten emaitzek banaketa normala dute, 40 puntuko batezbestekoarekin eta 10 puntuko desbideratze estandarrarekin. Hau eskatzen da:",
  "¿Qué porcentaje del alumnado tiene una puntuación entre 30 y 60 puntos?": "Ikasleen zer ehunekok du 30 eta 60 puntu arteko puntuazioa?",
  "¿Cuántos estudiantes tienen una puntuación superior a 60 puntos?": "Zenbat ikaslek dute 60 puntutik gorako puntuazioa?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "La puntuación ya sigue una distribución normal, así que no necesitamos aproximarla ni aplicar corrección de continuidad. Convertiremos 30 y 60 puntos en valores de la normal estándar mediante la tipificación. Después calcularemos el área situada entre esos dos valores y la expresaremos como porcentaje.": "Puntuazioak banaketa normala du jada; beraz, ez dugu hurbilketarik ezta jarraitutasun-zuzenketarik behar. 30 eta 60 puntuak normal estandarreko balio bihurtuko ditugu tipifikazioaren bidez. Ondoren, bi balio horien arteko azalera kalkulatu eta ehunekotan adieraziko dugu.",
  "Porcentaje entre 30 y 60 puntos": "30 eta 60 puntu arteko ehunekoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Distribución normal": "1. Banaketa normala",
  "Una variable normal queda determinada por su media y su desviación típica. La media sitúa el centro de la campana y la desviación típica mide su dispersión.": "Aldagai normal bat haren batezbestekoak eta desbideratze estandarrak zehazten dute. Batezbestekoak kanpaiaren erdigunea kokatzen du, eta desbideratze estandarrak sakabanaketa neurtzen du.",
  "2. Tipificación": "2. Tipifikazioa",
  "Tipificar consiste en restar la media y dividir por la desviación típica. El resultado indica a cuántas desviaciones típicas de la media se encuentra un valor.": "Tipifikatzea batezbestekoa kendu eta desbideratze estandarraren bidez zatitzea da. Emaitzak balio bat batezbestekotik zenbat desbideratze estandarrera dagoen adierazten du.",
  "3. Probabilidad entre dos valores": "3. Bi balioren arteko probabilitatea",
  "La función acumulada": "Funtzio metatuak",
  "proporciona el área situada a la izquierda de z. El área entre dos límites se obtiene restando sus probabilidades acumuladas.": "z-ren ezkerrean dagoen azalera ematen du. Bi mugaren arteko azalera haien probabilitate metatuak kenduz lortzen da.",
  "4. Simetría de la normal estándar": "4. Normal estandarraren simetria",
  "La campana es simétrica respecto de cero. Si la tabla solo contiene valores positivos, usamos esta relación para obtener la acumulada de un valor negativo.": "Kanpaia simetrikoa da zeroarekiko. Taulak balio positiboak soilik baditu, erlazio hau erabiltzen dugu balio negatibo baten metatua lortzeko.",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos el modelo": "Eredua identifikatzen dugu",
  "Llamamos X a la puntuación obtenida por un estudiante. El enunciado proporciona directamente los dos parámetros de la distribución.": "Ikasle batek lortutako puntuazioari X deitzen diogu. Enuntziatuak zuzenean ematen ditu banaketaren bi parametroak.",
  "Modelo": "Eredua",
  "Media": "Batezbestekoa",
  "Desviación típica": "Desbideratze estandarra",
  "Tipificamos los dos límites": "Bi mugak tipifikatzen ditugu",
  "Aplicamos la misma transformación a 30 y a 60. Así expresamos ambos valores en la escala de la normal estándar.": "Transformazio bera aplikatzen diegu 30i eta 60ri. Horrela, bi balioak normal estandarraren eskalan adierazten ditugu.",
  "Límite inferior": "Beheko muga",
  "Límite superior": "Goiko muga",
  "Interpretamos el área en la campana": "Kanpaiko azalera interpretatzen dugu",
  "La región buscada empieza una desviación típica por debajo de la media y termina dos desviaciones típicas por encima. Por eso contiene la mayor parte de la campana.": "Bilatutako eremua batezbestekoaren azpitik desbideratze estandar batera hasi eta gainetik bi desbideratze estandarrera amaitzen da. Horregatik hartzen du kanpaiaren zatirik handiena.",
  "El área sombreada representa": "Itzaleztatutako azalerak hau adierazten du:",
  "Leemos la tabla y usamos la simetría": "Taula irakurri eta simetria erabiltzen dugu",
  "La tabla proporciona las probabilidades acumuladas de 2 y de 1. Para el límite negativo usamos la simetría de la distribución.": "Taulak 2ren eta 1en probabilitate metatuak ematen ditu. Muga negatiborako banaketaren simetria erabiltzen dugu.",
  "Restamos las probabilidades acumuladas": "Probabilitate metatuak kentzen ditugu",
  "Conservamos únicamente el área comprendida entre los dos límites.": "Bi mugaren arteko azalera soilik gordetzen dugu.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "El 81,85 % del alumnado.": "Ikasleen % 81,85.",
  "La puntuación se encuentra entre 30 y 60 puntos.": "Puntuazioa 30 eta 60 puntu artean dago.",
  "Tipificaremos 60 puntos para localizarlo en la normal estándar. La probabilidad de superar esa puntuación es la cola situada a la derecha del valor obtenido. Finalmente multiplicaremos esa proporción por los 500 estudiantes para estimar cuántos pertenecen a ese grupo.": "60 puntu tipifikatuko ditugu normal estandarrean kokatzeko. Puntuazio hori gainditzeko probabilitatea lortutako balioaren eskuineko isatsa da. Azkenik, proportzio hori 500 ikasleez biderkatuko dugu talde horretan zenbat dauden estimatzeko.",
  "Estudiantes con más de 60 puntos": "60 puntu baino gehiago dituzten ikasleak",
  "1. Cola derecha de una distribución": "1. Banaketa baten eskuineko isatsa",
  "La tabla normal proporciona el área acumulada a la izquierda. Para hallar la probabilidad situada a la derecha de z, restamos esa acumulada a la probabilidad total.": "Taula normalak ezkerrean metatutako azalera ematen du. z-ren eskuineko probabilitatea aurkitzeko, metatu hori probabilitate osotik kentzen dugu.",
  "2. De probabilidad a frecuencia esperada": "2. Probabilitatetik espero den maiztasunera",
  "Si una proporción p de una población de n personas cumple una condición, el número esperado de personas que la cumplen es el producto n·p.": "n pertsonako populazio baten p proportzioak baldintza bat betetzen badu, baldintza betetzen duten pertsonen espero den kopurua n·p biderkadura da.",
  "3. Interpretación del resultado": "3. Emaitzaren interpretazioa",
  "El modelo produce una estimación, que puede no ser entera. Si se pide un número aproximado de estudiantes, el criterio habitual es redondear al entero más cercano y explicar la aproximación.": "Ereduak estimazio bat ematen du, eta baliteke osoa ez izatea. Ikasleen gutxi gorabeherako kopurua eskatzen bada, ohiko irizpidea hurbileneko zenbaki osora biribiltzea eta hurbilketa azaltzea da.",
  "Tipificamos 60 puntos": "60 puntu tipifikatzen ditugu",
  "Calculamos cuántas desviaciones típicas separan 60 de la media 40.": "60 balioa 40ko batezbestekotik zenbat desbideratze estandarrera dagoen kalkulatzen dugu.",
  "Una puntuación de 60 está dos desviaciones típicas por encima de la media.": "60ko puntuazioa batezbestekoaren gainetik bi desbideratze estandarrera dago.",
  "Calculamos la cola derecha": "Eskuineko isatsa kalkulatzen dugu",
  "Buscamos la probabilidad complementaria al área acumulada hasta z = 2.": "z = 2 arte metatutako azaleraren probabilitate osagarria bilatzen dugu.",
  "La cola sombreada representa": "Itzaleztatutako isatsak hau adierazten du:",
  "Pasamos de proporción a estudiantes": "Proportziotik ikasle kopurura igarotzen gara",
  "Multiplicamos la probabilidad por el tamaño del grupo.": "Probabilitatea taldearen tamainaz biderkatzen dugu.",
  "El modelo estima 11,4 estudiantes. Redondeando al entero más cercano, hablamos de aproximadamente 11 estudiantes.": "Ereduak 11,4 ikasle estimatzen ditu. Hurbileneko zenbaki osora biribilduta, gutxi gorabehera 11 ikaslez ari gara.",
  "Aclaramos el redondeo de la fuente": "Iturriaren biribiltzea argitzen dugu",
  "El solucionario publicado redondea hacia arriba y responde 12 estudiantes. Sin embargo, 11,4 está más cerca de 11 que de 12; por eso el redondeo ordinario da 11. En cualquier caso, el dato matemático esencial es la estimación 11,4.": "Argitaratutako ebazpenak gorantz biribildu eta 12 ikasle ematen ditu. Hala ere, 11,4 hurbilago dago 11tik 12tik baino; horregatik, ohiko biribiltzeak 11 ematen du. Nolanahi ere, funtsezko datu matematikoa 11,4ko estimazioa da.",
  "La fuente ofrece 12 estudiantes al redondear hacia arriba; el redondeo al entero más cercano da 11.": "Iturriak 12 ikasle ematen ditu gorantz biribilduta; hurbileneko zenbaki osora biribiltzeak 11 ematen du.",
  "Aproximadamente 11 estudiantes.": "Gutxi gorabehera 11 ikasle.",
  "La estimación del modelo es 11,4; la fuente responde 12.": "Ereduaren estimazioa 11,4 da; iturriak 12 erantzuten du."
}));

const originalNormalScoreText = new WeakMap();

const normalScoreAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Soluzioaren atalak", es: "Apartados de la solución" },
  { selector: "#normal-score-interval-board", attribute: "aria-label", eu: "Kanpai normal estandarra, z berdin minus bat eta z berdin bi arteko azalera itzaleztatuta", es: "Campana normal estándar con el área entre z igual a menos uno y z igual a dos sombreada" },
  { selector: "#normal-score-tail-board", attribute: "aria-label", eu: "Kanpai normal estandarra, z berdin bitik eskuinera dagoen isatsa itzaleztatuta", es: "Campana normal estándar con la cola situada a la derecha de z igual a dos sombreada" },
  { selector: "#normal-score-part-a .normal-score-figure", attribute: "aria-label", eu: "Normal estandarraren minus bat eta bi arteko azalera", es: "Área de la normal estándar comprendida entre menos uno y dos" },
  { selector: "#normal-score-part-b .normal-score-figure", attribute: "aria-label", eu: "Normal estandarraren bi baliotik aurrerako eskuineko isatsa", es: "Cola derecha de la normal estándar a partir de dos" },
];

function applyNormalScoreText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalNormalScoreText.has(node)) {
      originalNormalScoreText.set(node, node.nodeValue);
    }

    const original = originalNormalScoreText.get(node);
    const key = original.trim();
    if (language === "eu" && normalScoreTextEu.has(key)) {
      const translation = normalScoreTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyNormalScoreLanguage(language) {
  document.title = language === "eu"
    ? "Azterketa bateko puntuazioen banaketa normala · Matematika II"
    : "Distribución normal de las puntuaciones de una prueba · Matemáticas II";

  applyNormalScoreText(language);

  normalScoreAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyNormalScoreLanguage(event.detail.language);
});

applyNormalScoreLanguage(window.I18n?.getLanguage() ?? "eu");

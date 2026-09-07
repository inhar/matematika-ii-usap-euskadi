const perpendicularPointLine2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Ordinaria · Problema 4": "2021 · Ohikoa · 4. problema",
  "Geometría en el espacio · Rectas y distancias · 2021": "Espazioko geometria · Zuzenak eta distantziak · 2021",
  "Perpendicular desde un punto a una recta": "Puntutik zuzenerako perpendikularra",
  "Enunciado": "Enuntziatua",
  "Se consideran el punto y la recta:": "Puntua eta zuzena hauek dira:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema 4": "4. problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El punto de corte buscado,": "Bilatutako ebakidura-puntua,",
  ", está sobre la recta": ", zuzen honetan dago:",
  "; por tanto, sus coordenadas dependen del parámetro de esa recta. El vector que une": "; beraz, haren koordenatuak zuzen horren parametroaren mende daude. Honako puntuak lotzen dituen bektoreak:",
  "con": "eta",
  "debe ser perpendicular al vector director de": "zuzenaren norabide-bektorearekiko perpendikularra izan behar du:",
  "Impondremos esa perpendicularidad con un producto escalar igual a cero. Así hallaremos primero": "Perpendikulartasun hori zero den biderkadura eskalar batekin ezarriko dugu. Horrela, lehenik",
  ". Después,": " kalkulatuko dugu. Ondoren,",
  "será el vector director de la recta pedida, y su módulo será la distancia solicitada.": "eskatutako zuzenaren norabide-bektorea izango da, eta haren modulua eskatutako distantzia.",
  "Pie de la perpendicular, recta y distancia": "Perpendikularraren oina, zuzena eta distantzia",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Punto genérico de una recta paramétrica": "1. Zuzen parametriko bateko puntu orokorra",
  "Cada valor del parámetro produce un punto de la recta. Mantener el parámetro permite representar el punto de corte todavía desconocido.": "Parametroaren balio bakoitzak zuzeneko puntu bat ematen du. Parametroa mantenduta oraindik ezezaguna den ebakidura-puntua adieraz dezakegu.",
  "2. Perpendicularidad de vectores": "2. Bektoreen perpendikulartasuna",
  "Dos vectores no nulos son perpendiculares exactamente cuando su producto escalar vale cero.": "Zero ez diren bi bektore perpendikularrak dira baldin eta soilik baldin haien biderkadura eskalarra zero bada.",
  "3. Recta definida por un punto y una dirección": "3. Puntu batek eta norabide batek zehaztutako zuzena",
  "Una recta queda determinada por uno de sus puntos y un vector director. El parámetro recorre todos sus puntos.": "Zuzen bat haren puntu batek eta norabide-bektore batek zehazten dute. Parametroak zuzeneko puntu guztiak zeharkatzen ditu.",
  "4. Distancia entre dos puntos": "4. Bi punturen arteko distantzia",
  "La distancia es el módulo del vector que une los puntos. En este problema, el segmento perpendicular es además la distancia mínima desde el punto a la recta.": "Distantzia puntuak lotzen dituen bektorearen modulua da. Problema honetan, segmentu perpendikularra puntutik zuzenerako distantzia minimoa ere bada.",
  "Resolución completa": "Ebazpen osoa",
  "Leemos la dirección de la recta dada": "Emandako zuzenaren norabidea irakurtzen dugu",
  "Los coeficientes del parámetro forman el vector director de": "Parametroaren koefizienteek zuzen honen norabide-bektorea osatzen dute:",
  "Representamos el punto de corte sobre la recta": "Ebakidura-puntua zuzenean adierazten dugu",
  "es el punto donde se cortan las dos rectas. Como pertenece a": "bi zuzenen ebakidura-puntua da. Zuzen honetan dagoenez:",
  ", conserva sus ecuaciones paramétricas.": ", haren ekuazio parametrikoak betetzen ditu.",
  "Construimos el vector perpendicular": "Bektore perpendikularra eraikitzen dugu",
  "A las coordenadas de": "Puntu honen koordenatuei:",
  "les restamos las de": "puntu honen koordenatuak kentzen dizkiegu:",
  "Imponemos el producto escalar nulo": "Biderkadura eskalar nulua ezartzen dugu",
  "El segmento que une": "Honako puntuak lotzen dituen segmentuak:",
  "debe ser perpendicular a la dirección de": "zuzen honen norabidearekiko perpendikularra izan behar du:",
  "Hallamos el punto de corte y la nueva dirección": "Ebakidura-puntua eta norabide berria kalkulatzen ditugu",
  "En la recta dada sustituimos": "Emandako zuzenean",
  "y calculamos el vector que parte de": "ordezkatzen dugu eta puntu honetatik abiatzen den bektorea kalkulatzen dugu:",
  "Escribimos las ecuaciones de la recta pedida": "Eskatutako zuzenaren ekuazioak idazten ditugu",
  "es la recta que pasa por": "zuzena",
  "y tiene dirección": "puntutik igarotzen da eta norabide hau du:",
  ". Usamos": ". Hau erabiltzen dugu:",
  "para no confundir su parámetro con el de": "haren parametroa zuzen honenarekin ez nahasteko:",
  "Calculamos la distancia": "Distantzia kalkulatzen dugu",
  "La distancia pedida es la longitud del segmento perpendicular": "Eskatutako distantzia segmentu perpendikular honen luzera da:",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalPerpendicularPointLine2021Text = new WeakMap();

const perpendicularPointLine2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".perpendicular-2021-system", attribute: "aria-label", eu: "r zuzena ekuazio parametrikoetan", es: "Recta r en ecuaciones paramétricas" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".perpendicular-2021-figure", attribute: "aria-label", eu: "P puntutik igaro eta r zuzena Q puntuan perpendikularki ebakitzen duen s zuzena", es: "Recta s que pasa por P y corta perpendicularmente a la recta r en Q" },
  { selector: "#perpendicular-2021-board", attribute: "aria-label", eu: "r eta s zuzen perpendikularrak, kanpoko P puntua eta Q ebakidura-puntua", es: "Rectas r y s perpendiculares, punto P exterior y punto de corte Q" },
];

function applyPerpendicularPointLine2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalPerpendicularPointLine2021Text.has(node)) {
      originalPerpendicularPointLine2021Text.set(node, node.nodeValue);
    }

    const original = originalPerpendicularPointLine2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && perpendicularPointLine2021TextEu.has(key)) {
      const translation = perpendicularPointLine2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyPerpendicularPointLine2021Language(language) {
  document.title = language === "eu"
    ? "Puntutik zuzenerako perpendikularra · Matematika II"
    : "Perpendicular desde un punto a una recta · Matemáticas II";

  applyPerpendicularPointLine2021Text(language);

  perpendicularPointLine2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyPerpendicularPointLine2021Language(event.detail.language);
});

applyPerpendicularPointLine2021Language(window.I18n?.getLanguage() ?? "eu");

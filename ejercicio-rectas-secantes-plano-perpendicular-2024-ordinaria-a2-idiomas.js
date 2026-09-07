const lines2024TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio A2": "2024 · Ohikoa · A2 ariketa",
  "Geometría en el espacio · Rectas y planos · 2024": "Espazioko geometria · Zuzenak eta planoak · 2024",
  "Dos rectas secantes, plano común y perpendicular": "Bi zuzen ebakitzaile, plano komuna eta perpendikularra",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "A · Posición relativa": "A · Kokapen erlatiboa",
  "B · Plano común": "B · Plano komuna",
  "C · Proyección perpendicular": "C · Proiekzio perpendikularra",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Posición relativa de las rectas": "Zuzenen kokapen erlatiboa",
  "Plano que contiene ambas rectas": "Bi zuzenak barne hartzen dituen planoa",
  "Pie de la perpendicular desde P": "P puntutik egindako perpendikularraren oina",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Forma paramétrica y vector director": "1. Forma parametrikoa eta bektore zuzendaria",
  "2. Posiciones relativas de dos rectas": "2. Bi zuzenen kokapen erlatiboak",
  "3. Cómo se comprueba una intersección": "3. Ebakidura nola egiaztatzen den",
  "1. Dos rectas secantes determinan un plano": "1. Bi zuzen ebakitzailek plano bat zehazten dute",
  "2. Producto vectorial y vector normal": "2. Biderkadura bektoriala eta bektore normala",
  "3. Ecuación punto-normal del plano": "3. Planoaren puntu-normal ekuazioa",
  "1. Punto genérico de una recta": "1. Zuzen bateko puntu orokorra",
  "2. Criterio de perpendicularidad": "2. Perpendikulartasun-irizpidea",
  "3. Proyección ortogonal": "3. Proiekzio ortogonala",
  "Resolución completa": "Ebazpen osoa",
  "Parametrizamos la recta s": "s zuzena parametrizatzen dugu",
  "Comparamos los vectores directores": "Bektore zuzendariak alderatzen ditugu",
  "Buscamos un punto común": "Puntu komun bat bilatzen dugu",
  "Comprobamos las tres coordenadas": "Hiru koordenatuak egiaztatzen ditugu",
  "Elegimos dos direcciones del plano": "Planoaren bi norabide aukeratzen ditugu",
  "Calculamos un vector normal": "Bektore normal bat kalkulatzen dugu",
  "Escribimos la ecuación del plano": "Planoaren ekuazioa idazten dugu",
  "Comprobamos que contiene las dos rectas": "Bi zuzenak barne hartzen dituela egiaztatzen dugu",
  "Escribimos un punto genérico Q de r": "r zuzeneko Q puntu orokor bat idazten dugu",
  "Formamos el vector PQ": "PQ bektorea osatzen dugu",
  "Imponemos la perpendicularidad": "Perpendikulartasuna ezartzen dugu",
  "Calculamos las coordenadas de Q": "Q-ren koordenatuak kalkulatzen ditugu",
  "Comprobamos el resultado": "Emaitza egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalLines2024Text = new WeakMap();

const lines2024Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".lines-2024-tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".lines-2024-intersection-figure", attribute: "aria-label", eu: "I puntuan ebakitzen diren r eta s zuzenen eskema", es: "Esquema de las rectas r y s que se cortan en el punto I" },
  { selector: "#lines-2024-intersection-board", attribute: "aria-label", eu: "I puntuan ebakitzen diren r eta s zuzenen irudikapena", es: "Representación de las rectas r y s que se cortan en I" },
  { selector: ".lines-2024-perpendicular-figure", attribute: "aria-label", eu: "P puntutik r zuzenera egindako proiekzio perpendikularraren eskema", es: "Esquema de la proyección perpendicular de P sobre la recta r" },
  { selector: "#lines-2024-perpendicular-board", attribute: "aria-label", eu: "PQ bektorea r zuzenarekiko perpendikularra dela erakusten duen irudikapena", es: "Representación que muestra que el vector PQ es perpendicular a la recta r" },
];

function applyLines2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalLines2024Text.has(node)) {
      originalLines2024Text.set(node, node.nodeValue);
    }

    const original = originalLines2024Text.get(node);
    const key = original.trim();

    if (language === "eu" && lines2024TextEu.has(key)) {
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + lines2024TextEu.get(key) + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyLines2024Language(language) {
  document.title = language === "eu"
    ? "Bi zuzen ebakitzaile, plano komuna eta perpendikularra · Matematika II"
    : "Dos rectas secantes, plano común y perpendicular · Matemáticas II";

  applyLines2024Text(language);

  document.querySelectorAll("[data-lines-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-lines-2024-language") !== language;
  });

  lines2024Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyLines2024Language(event.detail.language);
});

applyLines2024Language(window.I18n?.getLanguage() ?? "eu");

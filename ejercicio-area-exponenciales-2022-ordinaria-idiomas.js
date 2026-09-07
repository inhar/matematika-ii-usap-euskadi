const areaExp2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio B4": "2022 · Ohikoa · B4 ariketa",
  "Análisis · Área entre curvas · 2022": "Analisia · Kurben arteko azalera · 2022",
  "Área entre dos exponenciales y una recta": "Bi esponentzialen eta zuzen baten arteko azalera",
  "Enunciado": "Enuntziatua",
  "Dibuja el recinto limitado por las gráficas de las funciones": "Marraztu funtzio hauen grafikoek mugatutako esparrua:",
  "y calcula el área de dicho recinto.": "eta kalkulatu esparru horren azalera.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B4": "B4 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Delimitamos el recinto y calculamos su área": "Esparrua mugatu eta haren azalera kalkulatzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Intersecciones de gráficas": "1. Grafikoen ebakidurak",
  "Dos gráficas se cortan cuando tienen la misma ordenada para una misma abscisa. Igualamos sus expresiones y, después, calculamos la coordenada vertical del punto.": "Bi grafiko ebakitzen dira abzisa bererako ordenatu bera dutenean. Haien adierazpenak berdindu eta, ondoren, puntuaren koordenatu bertikala kalkulatzen dugu.",
  "2. Simetría de las exponenciales": "2. Esponentzialen simetria",
  "3. Área entre dos curvas": "3. Bi kurben arteko azalera",
  "En cada intervalo integramos la función que está arriba menos la que está abajo. Si una frontera cambia, también debe cambiar la integral.": "Tarte bakoitzean, goian dagoen funtzioari behean dagoena kentzen diogu eta diferentzia integratzen dugu. Muga bat aldatzen bada, integrala ere aldatu behar da.",
  "4. Integral definida y regla de Barrow": "4. Integral definitua eta Barrow-ren araua",
  "Hallamos una primitiva de la función y la evaluamos en los extremos: valor en el extremo superior menos valor en el inferior.": "Funtzioaren primitibo bat aurkitu eta muturretan ebaluatzen dugu: goiko muturreko balioa ken beheko muturrekoa.",
  "5. Primitivas necesarias": "5. Beharrezko primitiboak",
  "La exponencial conserva su forma al integrar. Cuando el exponente es negativo aparece un signo menos.": "Esponentzialak bere forma mantentzen du integratzean. Berretzailea negatiboa denean, minus zeinu bat agertzen da.",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos las tres fronteras": "Hiru mugak identifikatzen ditugu",
  "Hallamos el corte de las dos exponenciales": "Bi esponentzialen ebakidura aurkitzen dugu",
  "Igualamos sus ordenadas. Como la función exponencial es inyectiva, la igualdad de potencias obliga a que los exponentes sean iguales.": "Haien ordenatuak berdintzen ditugu. Funtzio esponentziala injektiboa denez, berreturen berdintzak berretzaileak berdinak izatea eskatzen du.",
  "Hallamos los cortes con la recta": "Zuzenarekiko ebakidurak aurkitzen ditugu",
  "Determinamos qué función limita por abajo": "Beheko muga zein funtziok osatzen duen zehazten dugu",
  "Planteamos el área en dos tramos": "Azalera bi tartetan planteatzen dugu",
  "En cada mitad restamos la frontera inferior a la recta superior.": "Erdi bakoitzean, goiko zuzenari beheko muga kentzen diogu.",
  "Calculamos la mitad izquierda": "Ezkerreko erdia kalkulatzen dugu",
  "Calculamos la mitad derecha": "Eskuineko erdia kalkulatzen dugu",
  "Sumamos y comprobamos la simetría": "Batuketa egin eta simetria egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalAreaExp2022Text = new WeakMap();

const areaExp2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".area-exp-2022-figure", attribute: "aria-label", eu: "Bi esponentzialek eta y berdin e zuzenak mugatutako esparrua", es: "Recinto limitado por dos exponenciales y la recta y igual a e" },
  { selector: ".area-exp-2022-board", attribute: "aria-label", eu: "e ber x, e ber minus x eta y berdin e grafikoak, esparrua koloreztatuta", es: "Gráficas de e elevado a x, e elevado a menos x y la recta y igual a e, con el recinto sombreado" },
];

function applyAreaExp2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalAreaExp2022Text.has(node)) {
      originalAreaExp2022Text.set(node, node.nodeValue);
    }

    const original = originalAreaExp2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && areaExp2022TextEu.has(key)) {
      const translation = areaExp2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyAreaExp2022Language(language) {
  document.title = language === "eu"
    ? "Bi esponentzialen eta zuzen baten arteko azalera · Matematika II"
    : "Área entre dos exponenciales y una recta · Matemáticas II";

  applyAreaExp2022Text(language);

  document.querySelectorAll("[data-area-exp-2022-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-area-exp-2022-language") !== language;
  });

  areaExp2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyAreaExp2022Language(event.detail.language);
});

applyAreaExp2022Language(window.I18n?.getLanguage() ?? "eu");

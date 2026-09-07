const coinsNormal2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio B5": "2023 · Ohikoa · 2. eredua · B5 ariketa",
  "Probabilidad · Aproximación normal de la binomial · 2023": "Probabilitatea · Binomialaren hurbilketa normala · 2023",
  "500 monedas: aproximación normal de una binomial": "500 txanpon: binomial baten hurbilketa normala",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Más de 240 caras": "240 aurpegi baino gehiago",
  "Menos de 230 caras": "230 aurpegi baino gutxiago",
  "Entre 230 y 240 caras": "230 eta 240 aurpegi artean",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Del experimento a la binomial": "1. Esperimentutik binomialera",
  "2. Aproximación normal": "2. Hurbilketa normala",
  "3. Corrección de continuidad": "3. Jarraitutasun-zuzenketa",
  "3. Corrección de continuidad en un intervalo": "3. Jarraitutasun-zuzenketa tarte batean",
  "4. Simetría de la normal estándar": "4. Normal estandarraren simetria",
  "4. Probabilidad de un intervalo": "4. Tarte baten probabilitatea",
  "4. Partición de casos": "4. Kasuen zatiketa",
  "Resolución completa": "Ebazpen osoa",
  "Definimos la variable aleatoria": "Zorizko aldagaia definitzen dugu",
  "Comprobamos la aproximación y calculamos sus parámetros": "Hurbilketa egiaztatu eta haren parametroak kalkulatzen ditugu",
  "Traducimos la desigualdad y corregimos la continuidad": "Desberdintza itzuli eta jarraitutasuna zuzentzen dugu",
  "Tipificamos la frontera": "Muga tipifikatzen dugu",
  "Leemos la probabilidad en la tabla": "Probabilitatea taulan irakurtzen dugu",
  "Recuperamos el modelo común": "Eredu komuna berreskuratzen dugu",
  "Aplicamos la corrección de continuidad": "Jarraitutasun-zuzenketa aplikatzen dugu",
  "Usamos la simetría de la normal": "Normalaren simetria erabiltzen dugu",
  "Corregimos los dos extremos": "Bi muturrak zuzentzen ditugu",
  "Tipificamos los dos extremos": "Bi muturrak tipifikatzen ditugu",
  "Calculamos el área central": "Erdiko azalera kalkulatzen dugu",
  "Comprobamos mediante los tres casos posibles": "Hiru kasu posibleen bidez egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalCoinsNormal2023Text = new WeakMap();

const coinsNormal2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: "#coins-normal-2023-a-board", attribute: "aria-label", eu: "Normal estandarraren kanpaia, ken zero koma laurogeita bostetik eskuinera dagoen azalera itzaleztatuta", es: "Campana normal estándar con el área a la derecha de menos cero coma ochenta y cinco sombreada" },
  { selector: "#coins-normal-2023-b-board", attribute: "aria-label", eu: "Normal estandarraren kanpaia, ken bat koma laurogeita hirutik ezkerrera dagoen azalera itzaleztatuta", es: "Campana normal estándar con el área a la izquierda de menos uno coma ochenta y tres sombreada" },
  { selector: "#coins-normal-2023-c-board", attribute: "aria-label", eu: "Normal estandarraren kanpaia, ken bat koma laurogeita hiru eta ken zero koma laurogeita bost arteko azalera itzaleztatuta", es: "Campana normal estándar con el área entre menos uno coma ochenta y tres y menos cero coma ochenta y cinco sombreada" },
];

function applyCoinsNormal2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCoinsNormal2023Text.has(node)) {
      originalCoinsNormal2023Text.set(node, node.nodeValue);
    }

    const original = originalCoinsNormal2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && coinsNormal2023TextEu.has(key)) {
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + coinsNormal2023TextEu.get(key) + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCoinsNormal2023Language(language) {
  document.title = language === "eu"
    ? "500 txanpon: binomial baten hurbilketa normala · Matematika II"
    : "500 monedas: aproximación normal de una binomial · Matemáticas II";

  applyCoinsNormal2023Text(language);

  document.querySelectorAll("[data-coins-normal-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-coins-normal-2023-language") !== language;
  });

  coinsNormal2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCoinsNormal2023Language(event.detail.language);
});

applyCoinsNormal2023Language(window.I18n?.getLanguage() ?? "eu");

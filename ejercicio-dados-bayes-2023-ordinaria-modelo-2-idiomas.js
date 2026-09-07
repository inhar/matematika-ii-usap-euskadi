const diceBayes2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio A5": "2023 · Ohikoa · 2. eredua · A5 ariketa",
  "Probabilidad · Probabilidad total y Bayes · 2023": "Probabilitatea · Probabilitate osoa eta Bayes · 2023",
  "Dado normal o trucado: probabilidad total y Bayes": "Dado arrunta edo trukatua: probabilitate osoa eta Bayes",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Probabilidad de obtener primero 1 y después 2": "Lehenik 1 eta ondoren 2 ateratzeko probabilitatea",
  "Probabilidad de que se eligiera el dado trucado": "Dado trukatua aukeratu izanaren probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Regla del producto": "1. Biderkadura-erregela",
  "2. Teorema de la probabilidad total": "2. Probabilitate osoaren teorema",
  "1. Probabilidad condicionada": "1. Probabilitate baldintzatua",
  "2. Teorema de Bayes": "2. Bayesen teorema",
  "3. Normalización de los caminos": "3. Bideen normalizazioa",
  "Resolución completa": "Ebazpen osoa",
  "Definimos los sucesos y las probabilidades iniciales": "Gertaerak eta hasierako probabilitateak definitzen ditugu",
  "Calculamos el camino del dado normal": "Dado arruntaren bidea kalkulatzen dugu",
  "Calculamos el camino del dado trucado": "Dado trukatuaren bidea kalkulatzen dugu",
  "Sumamos los dos caminos": "Bi bideak batzen ditugu",
  "Recuperamos la probabilidad del resultado observado": "Behatutako emaitzaren probabilitatea berreskuratzen dugu",
  "Calculamos el camino favorable del numerador": "Zenbakitzaileko aldeko bidea kalkulatzen dugu",
  "Aplicamos la probabilidad condicionada": "Probabilitate baldintzatua aplikatzen dugu",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalDiceBayes2023Text = new WeakMap();

const diceBayes2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".dice-bayes-2023-tree-figure", attribute: "aria-label", eu: "Dadoa aukeratzeko eta bi jaurtiketetarako probabilitate-zuhaitza", es: "Árbol de probabilidades de la elección del dado y las dos tiradas" },
  { selector: "#dice-bayes-2023-tree-board", attribute: "aria-label", eu: "Zuhaitz osoa, arrunta bat bi eta trukatua bat bi bideak nabarmenduta", es: "Árbol completo con los caminos normal uno dos y trucado uno dos destacados" },
  { selector: ".dice-bayes-2023-posterior-figure", attribute: "aria-label", eu: "Behatutako gertaeraren banaketa dado arruntaren eta trukatuaren artean", es: "Reparto del suceso observado entre el dado normal y el trucado" },
  { selector: ".dice-bayes-2023-posterior", attribute: "aria-label", eu: "Bederatziren bat arrunta eta bederatziren zortzi trukatua", es: "Una novena parte normal y ocho novenas partes trucado" },
];

function applyDiceBayes2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalDiceBayes2023Text.has(node)) {
      originalDiceBayes2023Text.set(node, node.nodeValue);
    }

    const original = originalDiceBayes2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && diceBayes2023TextEu.has(key)) {
      const translation = diceBayes2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = leadingSpace + translation + trailingSpace;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyDiceBayes2023Language(language) {
  document.title = language === "eu"
    ? "Dado arrunta edo trukatua: probabilitate osoa eta Bayes · Matematika II"
    : "Dado normal o trucado: probabilidad total y Bayes · Matemáticas II";

  applyDiceBayes2023Text(language);

  document.querySelectorAll("[data-dice-bayes-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-dice-bayes-2023-language") !== language;
  });

  diceBayes2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyDiceBayes2023Language(event.detail.language);
});

applyDiceBayes2023Language(window.I18n?.getLanguage() ?? "eu");

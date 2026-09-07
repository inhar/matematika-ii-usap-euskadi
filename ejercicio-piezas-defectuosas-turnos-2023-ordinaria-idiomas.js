const shifts2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio A5": "2023 · Ohikoa · A5 ariketa",
  "Probabilidad · Probabilidad total y Bayes · 2023": "Probabilitatea · Probabilitate osoa eta Bayes · 2023",
  "Piezas defectuosas en cuatro turnos": "Pieza akastunak lau txandatan",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Probabilidad de obtener una pieza defectuosa": "Pieza akastuna lortzeko probabilitatea",
  "Probabilidad de que proceda de un turno diurno": "Eguneko txanda batetik etortzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Probabilidades condicionadas en un árbol": "1. Probabilitate baldintzatuak zuhaitz batean",
  "2. Suceso complementario": "2. Gertaera osagarria",
  "3. Regla del producto": "3. Biderkaduraren erregela",
  "4. Teorema de la probabilidad total": "4. Probabilitate osoaren teorema",
  "1. Probabilidad condicionada": "1. Probabilitate baldintzatua",
  "2. Teorema de Bayes": "2. Bayesen teorema",
  "3. El orden de la condición importa": "3. Baldintzaren ordenak garrantzia du",
  "Resolución completa": "Ebazpen osoa",
  "Definimos los sucesos": "Gertaerak definitzen ditugu",
  "Calculamos la probabilidad de cada tipo de turno": "Txanda mota bakoitzaren probabilitatea kalkulatzen dugu",
  "Completamos las probabilidades de la segunda etapa": "Bigarren etapako probabilitateak osatzen ditugu",
  "Construimos y leemos el árbol": "Zuhaitza eraiki eta irakurtzen dugu",
  "Calculamos los dos caminos favorables": "Aldeko bi bideak kalkulatzen ditugu",
  "Sumamos los caminos favorables": "Aldeko bideak batzen ditugu",
  "Traducimos la pregunta": "Galdera probabilitate-hizkuntzara itzultzen dugu",
  "Calculamos el camino favorable": "Aldeko bidea kalkulatzen dugu",
  "Tomamos el total de piezas defectuosas": "Pieza akastunen guztizkoa hartzen dugu",
  "Aplicamos Bayes y simplificamos": "Bayes aplikatu eta sinplifikatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Turno": "Txanda",
  "Estado": "Egoera",
  "Camino": "Bidea",
}));

const originalShifts2023Text = new WeakMap();

const shifts2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".shifts-2023-tree-figure", attribute: "aria-label", eu: "Txanden eta piezaren egoeraren probabilitate-zuhaitza", es: "Árbol de probabilidades de los turnos y el estado de la pieza" },
  { selector: ".shifts-2023-tree-desktop", attribute: "aria-label", eu: "Eguneko eta gaueko txandak, pieza akastunak eta ez-akastunak eta baterako probabilitateak dituen zuhaitza", es: "Árbol con turnos diurno y nocturno, piezas defectuosas y no defectuosas, y probabilidades conjuntas" },
  { selector: ".shifts-2023-tree-mobile", attribute: "aria-label", eu: "Txanden zuhaitzeko adarren mugikorreko laburpena", es: "Resumen móvil de las ramas del árbol de turnos" },
  { selector: ".shifts-2023-bayes-figure", attribute: "aria-label", eu: "Pieza akastunen osaera txanda motaren arabera", es: "Composición de las piezas defectuosas según el tipo de turno" },
  { selector: ".shifts-2023-bayes-bar", attribute: "aria-label", eu: "Barra: ehuneko 37,5 eguneko txandetakoa eta ehuneko 62,5 gaueko txandakoa", es: "Barra dividida entre 37,5 por ciento de turnos diurnos y 62,5 por ciento de turno nocturno" },
];

function applyShifts2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalShifts2023Text.has(node)) {
      originalShifts2023Text.set(node, node.nodeValue);
    }

    const original = originalShifts2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && shifts2023TextEu.has(key)) {
      const translation = shifts2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyShifts2023Language(language) {
  document.title = language === "eu"
    ? "Pieza akastunak: probabilitate osoa eta Bayes · Matematika II"
    : "Piezas defectuosas: probabilidad total y Bayes · Matemáticas II";

  applyShifts2023Text(language);

  document.querySelectorAll("[data-shifts-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-shifts-2023-language") !== language;
  });

  shifts2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyShifts2023Language(event.detail.language);
});

applyShifts2023Language(window.I18n?.getLanguage() ?? "eu");

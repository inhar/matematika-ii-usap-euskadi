const quartic2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio A3": "2023 · Ohikoa · A3 ariketa",
  "Análisis · Monotonía, extremos y tangente · 2023": "Analisia · Monotonia, muturrak eta ukitzailea · 2023",
  "Estudio de una función cuártica y su recta tangente": "Funtzio kuartiko baten azterketa eta haren zuzen ukitzailea",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio A3": "A3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "Derivada, monotonía, extremos y tangente": "Deribatua, monotonia, muturrak eta ukitzailea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Derivada y monotonía": "1. Deribatua eta monotonia",
  "2. Clasificación de los extremos": "2. Muturren sailkapena",
  "3. Ecuación de la recta tangente": "3. Zuzen ukitzailearen ekuazioa",
  "Resolución completa": "Ebazpen osoa",
  "Reescribimos la función": "Funtzioa berridazten dugu",
  "Calculamos y factorizamos la derivada": "Deribatua kalkulatu eta faktorizatzen dugu",
  "Hallamos los puntos críticos": "Puntu kritikoak aurkitzen ditugu",
  "Estudiamos el signo de la derivada": "Deribatuaren zeinua aztertzen dugu",
  "Clasificamos y calculamos los extremos": "Muturrak sailkatu eta kalkulatzen ditugu",
  "Calculamos la recta tangente en": "Zuzen ukitzailea kalkulatzen dugu hemen:",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalQuartic2023Text = new WeakMap();

const quartic2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".quartic-2023-extrema-figure", attribute: "aria-label", eu: "Funtzio kuartikoaren grafiko handitua haren hiru muturren inguruan", es: "Gráfica ampliada de la función cuártica alrededor de sus tres extremos" },
  { selector: ".quartic-2023-tangent-figure", attribute: "aria-label", eu: "Funtzio kuartikoaren eta x berdin bi puntuko zuzen ukitzailearen grafikoa", es: "Gráfica de la función cuártica y su recta tangente en x igual a dos" },
  { selector: "#quartic-2023-extrema-board", attribute: "aria-label", eu: "Funtzio kuartikoa, minimoak zero eta bat puntuetan eta maximoa erdi batean", es: "Función cuártica con mínimos en cero y uno y máximo en un medio" },
  { selector: "#quartic-2023-tangent-board", attribute: "aria-label", eu: "Funtzio kuartikoa eta y berdin hamabi x ken hogei zuzena bi lau puntuan ukitzaileak", es: "Función cuártica y recta y igual a doce x menos veinte tangentes en el punto dos cuatro" },
];

function applyQuartic2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalQuartic2023Text.has(node)) {
      originalQuartic2023Text.set(node, node.nodeValue);
    }

    const original = originalQuartic2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && quartic2023TextEu.has(key)) {
      const translation = quartic2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyQuartic2023Language(language) {
  document.title = language === "eu"
    ? "Funtzio kuartiko baten aldakuntza eta ukitzailea · Matematika II"
    : "Estudio de una función cuártica y su tangente · Matemáticas II";

  applyQuartic2023Text(language);

  document.querySelectorAll("[data-quartic-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-quartic-2023-language") !== language;
  });

  quartic2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyQuartic2023Language(event.detail.language);
});

applyQuartic2023Language(window.I18n?.getLanguage() ?? "eu");

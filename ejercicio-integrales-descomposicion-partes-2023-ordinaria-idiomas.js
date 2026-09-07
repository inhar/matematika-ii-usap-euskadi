const integralsB42023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Ejercicio B4": "2023 · Ohikoa · B4 ariketa",
  "Análisis · Integrales indefinidas · 2023": "Analisia · Integral mugagabeak · 2023",
  "Descomposición algebraica e integración por partes": "Deskonposizio algebraikoa eta zatikako integrazioa",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Integral I": "I integrala",
  "Integral II": "II integrala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Descomposición del integrando": "Integrakizunaren deskonposizioa",
  "Integración por partes": "Zatikako integrazioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Reescritura respecto de un binomio": "1. Binomio baten araberako berridazketa",
  "2. Linealidad de la integral": "2. Integralaren linealtasuna",
  "3. Primitivas que vamos a utilizar": "3. Erabiliko ditugun primitiboak",
  "1. Cuándo utilizar la integración por partes": "1. Noiz erabili zatikako integrazioa",
  "2. Fórmula de integración por partes": "2. Zatikako integrazioaren formula",
  "3. Primitivas trigonométricas con argumento lineal": "3. Argumentu linealeko primitibo trigonometrikoak",
  "Resolución completa": "Ebazpen osoa",
  "Tomamos como referencia el binomio del denominador": "Izendatzaileko binomioa hartzen dugu erreferentziatzat",
  "Reescribimos el numerador": "Zenbakitzailea berridazten dugu",
  "Separamos el cociente": "Zatidura banatzen dugu",
  "Integramos término a término": "Terminoz termino integratzen dugu",
  "Reconocemos el método": "Metodoa identifikatzen dugu",
  "Elegimos y calculamos las dos partes": "Bi zatiak aukeratu eta kalkulatzen ditugu",
  "Sustituimos en la fórmula": "Formulan ordezkatzen dugu",
  "Calculamos la integral restante": "Geratzen den integrala kalkulatzen dugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalIntegralsB42023Text = new WeakMap();

const integralsB42023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpeneko integralak", es: "Integrales de la solución" },
];

function applyIntegralsB42023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalIntegralsB42023Text.has(node)) {
      originalIntegralsB42023Text.set(node, node.nodeValue);
    }

    const original = originalIntegralsB42023Text.get(node);
    const key = original.trim();

    if (language === "eu" && integralsB42023TextEu.has(key)) {
      const translation = integralsB42023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyIntegralsB42023Language(language) {
  document.title = language === "eu"
    ? "Deskonposizio algebraikoa eta zatikako integrazioa · Matematika II"
    : "Descomposición algebraica e integración por partes · Matemáticas II";

  applyIntegralsB42023Text(language);

  document.querySelectorAll("[data-integrals-b4-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-integrals-b4-2023-language") !== language;
  });

  integralsB42023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyIntegralsB42023Language(event.detail.language);
});

applyIntegralsB42023Language(window.I18n?.getLanguage() ?? "eu");

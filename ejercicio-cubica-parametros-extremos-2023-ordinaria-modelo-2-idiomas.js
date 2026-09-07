const cubicExtrema2023TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2023 · Ordinaria · Modelo 2 · Ejercicio B3": "2023 · Ohikoa · 2. eredua · B3 ariketa",
  "Análisis · Parámetros, tangentes y extremos · 2023": "Analisia · Parametroak, ukitzaileak eta muturrak · 2023",
  "Parámetros y extremos de una función cúbica": "Funtzio kubikoaren parametroak eta muturrak",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Ejercicio B3": "B3 ariketa",
  "Idea de resolución": "Ebazpenaren ideia",
  "De las condiciones a la función y sus extremos": "Baldintzetatik funtziora eta haren muturretara",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Derivada y pendiente de una tangente": "1. Deribatua eta ukitzaile baten malda",
  "2. Condición necesaria de extremo": "2. Mutur baterako beharrezko baldintza",
  "3. Clasificación mediante el signo de la derivada": "3. Deribatuaren zeinuaren bidezko sailkapena",
  "Resolución completa": "Ebazpen osoa",
  "Usamos el valor de la función en": "Funtzioaren balioa erabiltzen dugu hemen:",
  "Calculamos la derivada": "Deribatua kalkulatzen dugu",
  "Traducimos el paralelismo de las tangentes": "Ukitzaileen paralelismoa ekuazio bihurtzen dugu",
  "Usamos el extremo situado en": "Puntu honetan dagoen muturra erabiltzen dugu:",
  "Escribimos la función obtenida y factorizamos su derivada": "Lortutako funtzioa idatzi eta haren deribatua faktorizatzen dugu",
  "Clasificamos los dos extremos": "Bi muturrak sailkatzen ditugu",
  "Comprobamos las tangentes paralelas": "Ukitzaile paraleloak egiaztatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalCubicExtrema2023Text = new WeakMap();

const cubicExtrema2023Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".cubic-extrema-2023-figure", attribute: "aria-label", eu: "Bi ukitzaile paralelo, maximo bat eta minimo bat dituen funtzio kubikoa", es: "Función cúbica con dos tangentes paralelas, un máximo y un mínimo" },
  { selector: "#cubic-extrema-2023-board", attribute: "aria-label", eu: "Funtzio kubikoa: maximoa ken batean, minimoa bostean eta ukitzaile paraleloak batean eta hiruan", es: "Cúbica con máximo en menos uno, mínimo en cinco y tangentes paralelas en uno y tres" },
];

function applyCubicExtrema2023Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCubicExtrema2023Text.has(node)) {
      originalCubicExtrema2023Text.set(node, node.nodeValue);
    }

    const original = originalCubicExtrema2023Text.get(node);
    const key = original.trim();

    if (language === "eu" && cubicExtrema2023TextEu.has(key)) {
      const translation = cubicExtrema2023TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCubicExtrema2023Language(language) {
  document.title = language === "eu"
    ? "Funtzio kubikoaren parametroak eta muturrak · Matematika II"
    : "Parámetros y extremos de una función cúbica · Matemáticas II";

  applyCubicExtrema2023Text(language);

  document.querySelectorAll("[data-cubic-extrema-2023-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-cubic-extrema-2023-language") !== language;
  });

  cubicExtrema2023Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCubicExtrema2023Language(event.detail.language);
});

applyCubicExtrema2023Language(window.I18n?.getLanguage() ?? "eu");

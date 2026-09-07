const integrals2024TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio A4": "2024 · Ohikoa · A4 ariketa",
  "Análisis · Integrales racionales · 2024": "Analisia · Integral arrazionalak · 2024",
  "Dos integrales racionales, dos preparaciones": "Bi integral arrazional, bi prestaketa",
  "Enunciado": "Enuntziatua",
  "Calcula las dos integrales siguientes:": "Kalkulatu bi integral hauek:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartados de la solución": "Ebazpenaren atalak",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Dividimos antes de integrar": "Integratu aurretik zatitzen dugu",
  "Descomponemos el factor repetido": "Faktore errepikatua deskonposatzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Fracción racional impropia": "1. Zatiki arrazional inpropioa",
  "2. Linealidad y regla de las potencias": "2. Linealtasuna eta berreturen araua",
  "1. Fracciones simples con un factor repetido": "1. Faktore errepikatuko zatiki sinpleak",
  "2. Dos primitivas básicas": "2. Oinarrizko bi primitibo",
  "Resolución completa": "Ebazpen osoa",
  "Factorizamos el denominador": "Izendatzailea faktorizatzen dugu",
  "Realizamos la división de polinomios": "Polinomioen zatiketa egiten dugu",
  "Separamos el integrando": "Integrakizuna bereizten dugu",
  "Integramos término a término": "Gaiz gai integratzen dugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Factorizamos y planteamos la descomposición": "Faktorizatu eta deskonposizioa planteatzen dugu",
  "Calculamos los coeficientes": "Koefizienteak kalkulatzen ditugu",
  "Integramos los dos términos": "Bi gaiak integratzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalIntegrals2024Text = new WeakMap();

function applyIntegrals2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalIntegrals2024Text.has(node)) originalIntegrals2024Text.set(node, node.nodeValue);
    const original = originalIntegrals2024Text.get(node);
    const key = original.trim();
    if (language === "eu" && integrals2024TextEu.has(key)) {
      node.nodeValue = `${original.match(/^\s*/)?.[0] ?? ""}${integrals2024TextEu.get(key)}${original.match(/\s*$/)?.[0] ?? ""}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyIntegrals2024Language(language) {
  document.title = language === "eu" ? "Bi integral arrazional · Matematika II" : "Dos integrales racionales · Matemáticas II";
  applyIntegrals2024Text(language);
  document.querySelectorAll("[data-integrals-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-integrals-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applyIntegrals2024Language(event.detail.language));
applyIntegrals2024Language(window.I18n?.getLanguage() ?? "eu");

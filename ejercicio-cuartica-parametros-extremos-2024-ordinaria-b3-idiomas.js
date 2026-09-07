const quartic2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio B3": "2024 · Ohikoa · B3 ariketa",
  "Análisis · Derivadas y extremos · 2024": "Analisia · Deribatuak eta muturrak · 2024",
  "De la tangente a la función": "Ukitzailetik funtziora",
  "Enunciado": "Enuntziatua",
  "La función": "Funtzioak",
  "Encuentra los valores de los parámetros": "Aurkitu parametro hauen balioak:",
  "Encuentra todos los extremos relativos de": "Aurkitu",
  "y clasifícalos.": "funtzioaren mutur erlatibo guztiak eta sailkatu.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Traducimos los datos en tres ecuaciones": "Datuak hiru ekuazio bihurtzen ditugu",
  "Hallamos y clasificamos los tres puntos críticos": "Hiru puntu kritikoak aurkitu eta sailkatzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Condición necesaria de extremo": "1. Mutur baterako beharrezko baldintza",
  "2. Información de una recta tangente": "2. Zuzen ukitzaile baten informazioa",
  "1. Puntos críticos": "1. Puntu kritikoak",
  "2. Criterio de la segunda derivada": "2. Bigarren deribatuaren irizpidea",
  "Resolución completa": "Ebazpen osoa",
  "Derivamos la función": "Funtzioa deribatzen dugu",
  "Usamos el extremo situado en": "Puntu honetan dagoen muturra erabiltzen dugu:",
  "Obtenemos el punto de tangencia": "Ukitze-puntua lortzen dugu",
  "Usamos la pendiente de la tangente": "Ukitzailearen malda erabiltzen dugu",
  "Resolvemos el sistema": "Sistema ebazten dugu",
  "Derivamos y factorizamos": "Deribatu eta faktorizatzen dugu",
  "Encontramos los puntos críticos": "Puntu kritikoak aurkitzen ditugu",
  "Calculamos la segunda derivada": "Bigarren deribatua kalkulatzen dugu",
  "Clasificamos cada candidato": "Hautagai bakoitza sailkatzen dugu",
  "Calculamos las ordenadas": "Ordenatuak kalkulatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalQuartic2024Text = new WeakMap();

function applyQuartic2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalQuartic2024Text.has(node)) originalQuartic2024Text.set(node, node.nodeValue);
    const original = originalQuartic2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && quartic2024Eu.has(key)
      ? `${original.match(/^\s*/)?.[0] ?? ""}${quartic2024Eu.get(key)}${original.match(/\s*$/)?.[0] ?? ""}`
      : original;
  }
}

function applyQuartic2024Language(language) {
  document.title = language === "eu"
    ? "Funtzio kuartikoaren parametroak eta muturrak · Matematika II"
    : "Parámetros y extremos de una función cuártica · Matemáticas II";
  applyQuartic2024Text(language);
  document.querySelectorAll("[data-quartic-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-quartic-2024-language") !== language;
  });
  document.querySelectorAll("[data-math-es][data-math-eu]").forEach((element) => {
    element.dataset.math = language === "eu" ? element.dataset.mathEu : element.dataset.mathEs;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
  document.querySelector(".quartic-2024-figure")?.setAttribute("aria-label", language === "eu" ? "Funtzio kuartikoaren hiru muturren inguruko handitze lokala" : "Ampliación local de la función cuártica alrededor de sus extremos");
  document.querySelector("#quartic-2024-board")?.setAttribute("aria-label", language === "eu" ? "Maximoa zero puntuan eta minimoak ken erdian eta erdian" : "Máximo en cero y mínimos en menos un medio y un medio");
  document.dispatchEvent(new CustomEvent("mathematicschange"));
}

document.addEventListener("languagechange", (event) => applyQuartic2024Language(event.detail.language));
applyQuartic2024Language(window.I18n?.getLanguage() ?? "eu");

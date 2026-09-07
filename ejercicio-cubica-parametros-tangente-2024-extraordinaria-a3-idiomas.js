const cubicExtra2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio A3": "2024 · Ezohikoa · A3 ariketa",
  "Análisis · Parámetros y recta tangente · 2024": "Analisia · Parametroak eta zuzen ukitzailea · 2024",
  "De cuatro condiciones a una cúbica": "Lau baldintzatatik funtzio kubikora",
  "Enunciado": "Enuntziatua",
  "Encuentra": "Aurkitu:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Traducimos cada dato en una ecuación": "Datu bakoitza ekuazio bihurtzen dugu",
  "Hallamos el punto y la pendiente de tangencia": "Ukitze-puntua eta malda aurkitzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Derivada y tangentes": "1. Deribatua eta ukitzaileak",
  "2. Regla de L’Hôpital": "2. L’Hôpitalen erregela",
  "Ecuación de la tangente": "Ukitzailearen ekuazioa",
  "Resolución completa": "Ebazpen osoa",
  "Derivamos": "Deribatzen dugu",
  "Igualamos las pendientes paralelas": "Malda paraleloak berdintzen ditugu",
  "Usamos el extremo en": "Puntu honetako muturra erabiltzen dugu:",
  "Calculamos el límite": "Limitea kalkulatzen dugu",
  "Escribimos la nueva función": "Funtzio berria idazten dugu",
  "Calculamos el punto de tangencia": "Ukitze-puntua kalkulatzen dugu",
  "Calculamos la pendiente": "Malda kalkulatzen dugu",
  "Aplicamos la ecuación punto-pendiente": "Puntu-malda ekuazioa aplikatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalCubicExtra2024Text = new WeakMap();
function applyCubicExtra2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalCubicExtra2024Text.has(node)) originalCubicExtra2024Text.set(node, node.nodeValue);
    const original = originalCubicExtra2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && cubicExtra2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + cubicExtra2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyCubicExtra2024Language(language) {
  document.title = language === "eu" ? "Funtzio kubikoaren parametroak eta ukitzailea · Matematika II" : "Parámetros y tangente de una función cúbica · Matemáticas II";
  applyCubicExtra2024Text(language);
  document.querySelectorAll("[data-cubic-extra-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-cubic-extra-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}
document.addEventListener("languagechange", (event) => applyCubicExtra2024Language(event.detail.language));
applyCubicExtra2024Language(window.I18n?.getLanguage() ?? "eu");

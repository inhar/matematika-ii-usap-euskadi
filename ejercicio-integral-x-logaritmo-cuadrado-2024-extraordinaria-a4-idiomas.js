const logIntegral2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio A4": "2024 · Ezohikoa · A4 ariketa",
  "Análisis · Integración por partes · 2024": "Analisia · Zatizko integrazioa · 2024",
  "Dos integraciones por partes encadenadas": "Kateatutako bi zatizko integrazio",
  "Enunciado": "Enuntziatua",
  "Calcula la integral y explica el método empleado.": "Kalkulatu integrala eta azaldu erabilitako metodoa.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Integral": "Integrala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Reducimos progresivamente la potencia del logaritmo": "Logaritmoaren berretura urratsez urrats txikitzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Integración por partes": "1. Zatizko integrazioa",
  "2. Derivada del logaritmo": "2. Logaritmoaren deribatua",
  "3. Constante de integración": "3. Integrazio-konstantea",
  "Resolución completa": "Ebazpen osoa",
  "Elegimos las partes": "Zatiak aukeratzen ditugu",
  "Aplicamos por partes una primera vez": "Zatizko integrazioa lehen aldiz aplikatzen dugu",
  "Resolvemos la integral que queda": "Geratzen den integrala ebazten dugu",
  "Sustituimos y simplificamos": "Ordezkatu eta sinplifikatzen dugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalLogIntegral2024Text = new WeakMap();
function applyLogIntegral2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalLogIntegral2024Text.has(node)) originalLogIntegral2024Text.set(node, node.nodeValue);
    const original = originalLogIntegral2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && logIntegral2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + logIntegral2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyLogIntegral2024Language(language) {
  document.title = language === "eu" ? "x bider logaritmo karratuaren integrala · Matematika II" : "Integral de x por logaritmo al cuadrado · Matemáticas II";
  applyLogIntegral2024Text(language);
  document.querySelectorAll("[data-log-integral-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-log-integral-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
}
document.addEventListener("languagechange", (event) => applyLogIntegral2024Language(event.detail.language));
applyLogIntegral2024Language(window.I18n?.getLanguage() ?? "eu");

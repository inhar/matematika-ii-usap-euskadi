const exponentialStudy2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio B3": "2024 · Ezohikoa · B3 ariketa",
  "Análisis · Monotonía y asíntotas · 2024": "Analisia · Monotonia eta asintotak · 2024",
  "Una exponencial que se aproxima al eje": "Ardatzera hurbiltzen den esponentziala",
  "Enunciado": "Enuntziatua",
  "Encuentra los intervalos de crecimiento y decrecimiento.": "Aurkitu gorakortasun- eta beherakortasun-tarteak.",
  "Halla los extremos relativos y clasifícalos.": "Aurkitu mutur erlatiboak eta sailkatu.",
  "Calcula las asíntotas de la función.": "Kalkulatu funtzioaren asintotak.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Monotonía y extremos": "Monotonia eta muturrak",
  "Asíntotas": "Asintotak",
  "Apartados A y B": "A eta B atalak",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Estudiamos el signo de la derivada": "Deribatuaren zeinua aztertzen dugu",
  "Calculamos las posibles asíntotas": "Asintota posibleak kalkulatzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Monotonía y derivada": "1. Monotonia eta deribatua",
  "2. Extremos por cambio de signo": "2. Muturrak zeinu-aldaketaren bidez",
  "3. Regla del producto y regla de la cadena": "3. Biderkaduraren eta katearen erregelak",
  "Asíntota vertical": "Asintota bertikala",
  "Asíntota horizontal": "Asintota horizontala",
  "Asíntota oblicua": "Asintota zeiharra",
  "Resolución completa": "Ebazpen osoa",
  "Derivamos el producto": "Biderkadura deribatzen dugu",
  "Buscamos los puntos críticos": "Puntu kritikoak bilatzen ditugu",
  "Determinamos el signo": "Zeinua zehazten dugu",
  "Calculamos y clasificamos los extremos": "Muturrak kalkulatu eta sailkatzen ditugu",
  "Descartamos las asíntotas verticales": "Asintota bertikalak baztertzen ditugu",
  "Calculamos el límite en los dos infinitos": "Limitea bi infinituetan kalkulatzen dugu",
  "Interpretamos el límite": "Limitea interpretatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalExponentialStudy2024Text = new WeakMap();
function applyExponentialStudy2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalExponentialStudy2024Text.has(node)) originalExponentialStudy2024Text.set(node, node.nodeValue);
    const original = originalExponentialStudy2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && exponentialStudy2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + exponentialStudy2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyExponentialStudy2024Language(language) {
  document.title = language === "eu" ? "Funtzio esponentzialaren monotonia eta asintotak · Matematika II" : "Monotonía y asíntotas de una función exponencial · Matemáticas II";
  applyExponentialStudy2024Text(language);
  document.querySelectorAll("[data-exponential-study-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-exponential-study-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}
document.addEventListener("languagechange", (event) => applyExponentialStudy2024Language(event.detail.language));
applyExponentialStudy2024Language(window.I18n?.getLanguage() ?? "eu");

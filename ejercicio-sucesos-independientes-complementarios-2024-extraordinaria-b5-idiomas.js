const independentEvents2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio B5": "2024 · Ezohikoa · B5 ariketa",
  "Probabilidad · Independencia y complementarios · 2024": "Probabilitatea · Independentzia eta osagarriak · 2024",
  "Cinco preguntas, cuatro regiones básicas": "Bost galdera, oinarrizko lau eskualde",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Unión": "Bildura",
  "Complementarios": "Osagarriak",
  "Diferencia y condicionada": "Kenketa eta baldintzatua",
  "Apartado A": "A atala",
  "Apartados B y C": "B eta C atalak",
  "Apartados D y E": "D eta E atalak",
  "Idea de resolución": "Ebazpenaren ideia",
  "Corregimos el doble recuento de la intersección": "Ebakiduraren zenbaketa bikoitza zuzentzen dugu",
  "Aplicamos complementarios y De Morgan": "Osagarriak eta De Morgan aplikatzen ditugu",
  "Calculamos una región y después una proporción": "Eskualde bat eta gero proportzio bat kalkulatzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Regla de la unión": "1. Bilduraren erregela",
  "2. Independencia": "2. Independentzia",
  "1. Suceso complementario": "1. Gertaera osagarria",
  "2. Leyes de De Morgan": "2. De Morganen legeak",
  "1. Independencia de complementarios": "1. Osagarrien independentzia",
  "2. Probabilidad condicionada": "2. Probabilitate baldintzatua",
  "Resolución completa": "Ebazpen osoa",
  "Calculamos la intersección": "Ebakidura kalkulatzen dugu",
  "Aplicamos la regla de la unión": "Bilduraren erregela aplikatzen dugu",
  "Unión de los complementarios": "Osagarrien bildura",
  "Intersección de los complementarios": "Osagarrien ebakidura",
  "Calculamos los complementarios": "Osagarriak kalkulatzen ditugu",
  "Calculamos": "Kalkulatzen dugu:",
  "Planteamos la condicionada": "Baldintzatua planteatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Resultados": "Emaitzak"
}));

const originalIndependentEvents2024Text = new WeakMap();
function applyIndependentEvents2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalIndependentEvents2024Text.has(node)) originalIndependentEvents2024Text.set(node, node.nodeValue);
    const original = originalIndependentEvents2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && independentEvents2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + independentEvents2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyIndependentEvents2024Language(language) {
  document.title = language === "eu" ? "Gertaera independenteak eta osagarriak · Matematika II" : "Sucesos independientes y complementarios · Matemáticas II";
  applyIndependentEvents2024Text(language);
  document.querySelectorAll("[data-independent-events-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-independent-events-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}
document.addEventListener("languagechange", (event) => applyIndependentEvents2024Language(event.detail.language));
applyIndependentEvents2024Language(window.I18n?.getLanguage() ?? "eu");

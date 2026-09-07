const skewLines2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio A2": "2024 · Ezohikoa · A2 ariketa",
  "Geometría · Posición y distancia entre rectas · 2024": "Geometria · Zuzenen kokapena eta distantzia · 2024",
  "Dos rectas que no comparten plano": "Plano bera ez duten bi zuzen",
  "Enunciado": "Enuntziatua",
  "Se consideran las rectas": "Zuzen hauek emanda:",
  "Determina su posición relativa.": "Zehaztu haien kokapen erlatiboa.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Comprobamos que las tres direcciones no son coplanarias": "Hiru norabideak koplanarioak ez direla egiaztatzen dugu",
  "Dividimos el producto mixto por el área de la base": "Biderkadura mistoa oinarriaren azaleraz zatitzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Posiciones de dos rectas en el espacio": "1. Espazioko bi zuzenen kokapenak",
  "2. Criterio de coplanariedad": "2. Koplanariotasunaren irizpidea",
  "Distancia entre rectas cruzadas": "Zuzen gurutzatuen arteko distantzia",
  "Resolución completa": "Ebazpen osoa",
  "Extraemos un punto y un vector de cada recta": "Zuzen bakoitzetik puntu eta bektore bana ateratzen ditugu",
  "Descartamos el paralelismo": "Paralelotasuna baztertzen dugu",
  "Unimos los puntos elegidos": "Aukeratutako puntuak lotzen ditugu",
  "Calculamos el producto mixto": "Biderkadura mistoa kalkulatzen dugu",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Calculamos el producto vectorial de los directores": "Zuzendarien biderkadura bektoriala kalkulatzen dugu",
  "Calculamos el área de la base": "Oinarriaren azalera kalkulatzen dugu",
  "Usamos el producto mixto del apartado anterior": "Aurreko ataleko biderkadura mistoa erabiltzen dugu",
  "Dividimos y racionalizamos": "Zatitu eta arrazionalizatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Las rectas": "Zuzenak",
  "y": "eta",
  "son cruzadas.": "gurutzatuak dira.",
}));

const originalSkewLines2024Text = new WeakMap();

function applySkewLines2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalSkewLines2024Text.has(node)) originalSkewLines2024Text.set(node, node.nodeValue);
    const original = originalSkewLines2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && skewLines2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + skewLines2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}

function applySkewLines2024Language(language) {
  document.title = language === "eu" ? "Zuzen gurutzatuen arteko distantzia · Matematika II" : "Distancia entre rectas cruzadas · Matemáticas II";
  applySkewLines2024Text(language);
  document.querySelectorAll("[data-skew-lines-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-skew-lines-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applySkewLines2024Language(event.detail.language));
applySkewLines2024Language(window.I18n?.getLanguage() ?? "eu");

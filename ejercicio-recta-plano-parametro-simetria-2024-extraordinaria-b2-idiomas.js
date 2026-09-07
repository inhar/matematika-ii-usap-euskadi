const linePlaneExtra2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio B2": "2024 · Ezohikoa · B2 ariketa",
  "Geometría · Recta, plano y simetría · 2024": "Geometria · Zuzena, planoa eta simetria · 2024",
  "Un mismo plano, tres preguntas": "Plano bera, hiru galdera",
  "Enunciado": "Enuntziatua",
  "Se consideran la recta y el plano": "Zuzen eta plano hauek emanda:",
  "Calcula": "Kalkulatu",
  "para que": "hau gerta dadin:",
  "y": "eta",
  "sean paralelos.": "paraleloak izatea.",
  "Si": "Baldin",
  ", calcula la intersección de": "bada, kalkulatu honen ebakidura:",
  ".": ".",
  ", calcula el simétrico del origen respecto de": "bada, kalkulatu jatorriaren simetrikoa honekiko:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Hacemos perpendicular la dirección al vector normal": "Norabidea bektore normalarekiko perpendikular egiten dugu",
  "Sustituimos la recta en el plano": "Zuzena planoan ordezkatzen dugu",
  "Proyectamos el origen y duplicamos el vector": "Jatorria proiektatu eta bektorea bikoizten dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "Recta paralela a un plano": "Planoarekiko zuzen paraleloa",
  "Intersección recta-plano": "Zuzen-plano ebakidura",
  "1. Recta perpendicular a un plano": "1. Planoarekiko zuzen perpendikularra",
  "2. Simetría respecto de un plano": "2. Planoarekiko simetria",
  "Resolución completa": "Ebazpen osoa",
  "Parametrizamos la recta": "Zuzena parametrizatzen dugu",
  "Extraemos el vector normal del plano": "Planoaren bektore normala ateratzen dugu",
  "Imponemos perpendicularidad": "Perpendikulartasuna ezartzen dugu",
  "Comprobamos que la recta no está contenida": "Zuzena barnean ez dagoela egiaztatzen dugu",
  "Escribimos el plano para": "Plano hau idazten dugu:",
  "Sustituimos la recta": "Zuzena ordezkatzen dugu",
  "Calculamos las tres coordenadas": "Hiru koordenatuak kalkulatzen ditugu",
  "Escribimos el plano y su normal": "Planoa eta haren normala idazten ditugu",
  "Construimos la perpendicular por el origen": "Jatorritik igarotzen den perpendikularra eraikitzen dugu",
  "Hallamos el pie": "Oina aurkitzen dugu:",
  "Reflejamos el origen": "Jatorria islatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalLinePlaneExtra2024Text = new WeakMap();

function applyLinePlaneExtra2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalLinePlaneExtra2024Text.has(node)) originalLinePlaneExtra2024Text.set(node, node.nodeValue);
    const original = originalLinePlaneExtra2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && linePlaneExtra2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + linePlaneExtra2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}

function applyLinePlaneExtra2024Language(language) {
  document.title = language === "eu" ? "Zuzenaren eta planoaren arteko hiru erlazio · Matematika II" : "Tres relaciones entre una recta y un plano · Matemáticas II";
  applyLinePlaneExtra2024Text(language);
  document.querySelectorAll("[data-line-plane-extra-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-line-plane-extra-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applyLinePlaneExtra2024Language(event.detail.language));
applyLinePlaneExtra2024Language(window.I18n?.getLanguage() ?? "eu");

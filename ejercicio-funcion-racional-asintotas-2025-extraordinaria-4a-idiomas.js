const rationalExtraEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2025 · Extraordinaria · Ejercicio 4A": "2025 · Ezohikoa · 4A ariketa",
  "Análisis · Funciones racionales · 2025": "Analisia · Funtzio arrazionalak · 2025",
  "Una función racional, tres intervalos": "Funtzio arrazional bat, hiru tarte",
  "Enunciado": "Enuntziatua",
  "Sea la función": "Izan bedi funtzio hau:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Asíntotas": "Asintotak",
  "Monotonía": "Monotonia",
  "Tangente": "Ukitzailea",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Estudiamos dónde y cómo se aproxima la función": "Funtzioa non eta nola hurbiltzen den aztertzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "Asíntota vertical": "Asintota bertikala",
  "Asíntota horizontal": "Asintota horizontala",
  "Resolución completa": "Ebazpen osoa",
  "Factorizamos el denominador y hallamos el dominio": "Izendatzailea faktorizatu eta definizio-eremua aurkitzen dugu",
  "Comprobamos la asíntota vertical x = −1": "x = −1 asintota bertikala egiaztatzen dugu",
  "Comprobamos la asíntota vertical x = 4": "x = 4 asintota bertikala egiaztatzen dugu",
  "Buscamos la asíntota horizontal": "Asintota horizontala bilatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Leemos la monotonía en el signo de la derivada": "Monotonia deribatuaren zeinutik irakurtzen dugu",
  "Criterio de monotonía": "Monotonia-irizpidea",
  "Signo de un cuadrado": "Karratu baten zeinua",
  "Aplicamos la regla del cociente": "Zatiduraren erregela aplikatzen dugu",
  "Simplificamos el numerador": "Zenbakitzailea sinplifikatzen dugu",
  "Determinamos el signo": "Zeinua zehazten dugu",
  "Separamos los intervalos del dominio": "Definizio-eremuko tarteak bereizten ditugu",
  "Usamos el punto y la pendiente": "Puntua eta malda erabiltzen ditugu",
  "Ecuación de la recta tangente": "Zuzen ukitzailearen ekuazioa",
  "Hallamos el punto de tangencia": "Ukitze-puntua aurkitzen dugu",
  "Calculamos la pendiente": "Malda kalkulatzen dugu",
  "Sustituimos en la ecuación punto-pendiente": "Puntu-malda ekuazioan ordezkatzen dugu",
}));

const originalRationalExtraText = new WeakMap();

function applyRationalExtraText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalRationalExtraText.has(node)) originalRationalExtraText.set(node, node.nodeValue);
    const original = originalRationalExtraText.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && rationalExtraEu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + rationalExtraEu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}

function applyRationalExtraLanguage(language) {
  document.title = language === "eu"
    ? "Funtzio arrazional bat, hiru tarte · Matematika II"
    : "Una función racional, tres intervalos · Matemáticas II";
  applyRationalExtraText(language);
  document.querySelectorAll("[data-rational-extra-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-rational-extra-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
  document.querySelector("#rational-extra-board")?.setAttribute("aria-label", language === "eu" ? "Funtzio arrazionalaren, haren asintoten eta jatorriko ukitzailearen grafikoa" : "Gráfica de la función racional, sus asíntotas y su tangente en el origen");
}

document.addEventListener("languagechange", (event) => applyRationalExtraLanguage(event.detail.language));
applyRationalExtraLanguage(window.I18n?.getLanguage() ?? "eu");

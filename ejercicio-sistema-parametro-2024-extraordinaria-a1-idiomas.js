const systemExtra2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio A1": "2024 · Ezohikoa · A1 ariketa",
  "Álgebra lineal · Sistemas con parámetros · 2024": "Aljebra lineala · Parametrodun sistemak · 2024",
  "Una excepción, infinitas soluciones": "Salbuespen bat, infinitu soluzio",
  "Enunciado": "Enuntziatua",
  "Discute la existencia de solución del sistema según el parámetro": "Eztabaidatu sistemaren soluzioen existentzia parametro honen arabera:",
  "Resuélvelo, si es posible:": "Ebatzi, ahal bada:",
  "cuando": "hau denean:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Discusión": "Eztabaida",
  "Idea de resolución": "Ebazpenaren ideia",
  "Estudiamos el único valor que anula el determinante": "Determinantea nulua egiten duen balio bakarra aztertzen dugu",
  "Resolvemos primero las ecuaciones sin": "Lehenik, hau ez duten ekuazioak ebazten ditugu:",
  "Introducimos una variable libre": "Aldagai aske bat sartzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Determinante no nulo": "1. Determinante ez-nulua",
  "2. Teorema de Rouché-Frobenius": "2. Rouché-Frobeniusen teorema",
  "Eliminación y sustitución": "Ezabaketa eta ordezkapena",
  "Grado de libertad": "Askatasun-gradua",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos la matriz de coeficientes": "Koefizienteen matrizea idazten dugu",
  "Calculamos su determinante": "Haren determinantea kalkulatzen dugu",
  "Separamos el caso regular": "Kasu erregularra bereizten dugu",
  "Analizamos": "Aztertzen dugu:",
  "Sustituimos": "Ordezkatzen dugu:",
  "Despejamos": "Bakantzen dugu:",
  "en la primera ecuación": "lehen ekuazioan",
  "Sustituimos en la segunda": "Bigarren ekuazioan ordezkatzen dugu",
  "Calculamos": "Kalkulatzen dugu:",
  "Usamos la tercera ecuación para hallar": "Hirugarren ekuazioa erabiltzen dugu hau aurkitzeko:",
  "Conservamos las dos ecuaciones independientes": "Bi ekuazio independenteak gordetzen ditugu",
  "Elegimos la variable libre": "Aldagai askea aukeratzen dugu",
  "Restamos la primera ecuación a la segunda": "Lehen ekuazioa bigarrenari kentzen diogu",
  "Recuperamos": "Berreskuratzen dugu:",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalSystemExtra2024Text = new WeakMap();

function applySystemExtra2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalSystemExtra2024Text.has(node)) originalSystemExtra2024Text.set(node, node.nodeValue);
    const original = originalSystemExtra2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && systemExtra2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + systemExtra2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}

function applySystemExtra2024Language(language) {
  document.title = language === "eu" ? "Parametrodun sistemaren eztabaida · Matematika II" : "Discusión de un sistema con parámetro · Matemáticas II";
  applySystemExtra2024Text(language);
  document.querySelectorAll("[data-system-extra-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-system-extra-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applySystemExtra2024Language(event.detail.language));
applySystemExtra2024Language(window.I18n?.getLanguage() ?? "eu");

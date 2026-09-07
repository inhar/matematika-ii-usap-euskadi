const apneaNormal2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Ordinaria · Ejercicio B5": "2024 · Ohikoa · B5 ariketa",
  "Probabilidad · Distribución normal · 2024": "Probabilitatea · Banaketa normala · 2024",
  "Tiempo sin respirar bajo el agua": "Ur azpian arnasari eusteko denbora",
  "Enunciado": "Enuntziatua",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Tipificamos y calculamos la cola derecha": "Tipifikatu eta eskuineko isatsa kalkulatzen dugu",
  "Restamos las dos probabilidades acumuladas": "Bi probabilitate metatuak kentzen ditugu",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Tipificación de una normal": "1. Normal baten tipifikazioa",
  "2. Tabla acumulada y complemento": "2. Taula metatua eta osagarria",
  "1. Probabilidad de un intervalo": "1. Tarte baten probabilitatea",
  "2. Simetría de la normal estándar": "2. Normal estandarraren simetria",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos los parámetros": "Parametroak identifikatzen ditugu",
  "Tipificamos los": "Tipifikatzen ditugu:",
  "segundos": "segundo",
  "Leemos la tabla de la normal": "Normalaren taula irakurtzen dugu",
  "Tomamos el complemento": "Osagarria hartzen dugu",
  "Pasamos de probabilidad a porcentaje": "Probabilitatetik ehunekora pasatzen gara",
  "Tipificamos el límite inferior": "Beheko muga tipifikatzen dugu",
  "Tipificamos el límite superior": "Goiko muga tipifikatzen dugu",
  "Escribimos la probabilidad tipificada": "Probabilitate tipifikatua idazten dugu",
  "Leemos la tabla y usamos la simetría": "Taula irakurri eta simetria erabiltzen dugu",
  "Restamos y expresamos el porcentaje": "Kendu eta ehunekoa adierazten dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
}));

const originalApneaNormal2024Text = new WeakMap();

function applyApneaNormal2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalApneaNormal2024Text.has(node)) originalApneaNormal2024Text.set(node, node.nodeValue);
    const original = originalApneaNormal2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && apneaNormal2024Eu.has(key)
      ? `${original.match(/^\s*/)?.[0] ?? ""}${apneaNormal2024Eu.get(key)}${original.match(/\s*$/)?.[0] ?? ""}`
      : original;
  }
}

function applyApneaNormal2024Language(language) {
  document.title = language === "eu" ? "Arnasari eusteko denbora · Matematika II" : "Tiempo de apnea · Matemáticas II";
  applyApneaNormal2024Text(language);
  document.querySelectorAll("[data-apnea-normal-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-apnea-normal-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}

document.addEventListener("languagechange", (event) => applyApneaNormal2024Language(event.detail.language));
applyApneaNormal2024Language(window.I18n?.getLanguage() ?? "eu");

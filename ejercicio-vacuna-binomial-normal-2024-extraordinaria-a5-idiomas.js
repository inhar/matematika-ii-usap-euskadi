const vaccineBinomial2024Eu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2024 · Extraordinaria · Ejercicio A5": "2024 · Ezohikoa · A5 ariketa",
  "Probabilidad · Binomial y aproximación normal · 2024": "Probabilitatea · Binomiala eta hurbilketa normala · 2024",
  "De 3289 ensayos a una curva normal": "3289 saiakuntzatatik kurba normal batera",
  "Enunciado": "Enuntziatua",
  "Identifica la distribución del número de personas protegidas y sus parámetros.": "Identifikatu babestutako pertsona-kopuruaren banaketa eta haren parametroak.",
  "Calcula la probabilidad de que la vacuna sea efectiva exactamente en 1800 personas.": "Kalkulatu txertoa zehazki 1800 pertsonarengan eraginkorra izateko probabilitatea.",
  "Calcula la probabilidad de que sea efectiva en menos de 1700 personas.": "Kalkulatu 1700 pertsona baino gutxiagorengan eraginkorra izateko probabilitatea.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Distribución": "Banaketa",
  "Exactamente 1800": "Zehazki 1800",
  "Menos de 1700": "1700 baino gutxiago",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Identificamos el modelo aleatorio": "Zorizko eredua identifikatzen dugu",
  "Aproximamos un único valor por una franja normal": "Balio bakarra zerrenda normal baten bidez hurbiltzen dugu",
  "Convertimos el límite discreto en una cola normal": "Muga diskretua buztan normal bihurtzen dugu",
  "Teoría necesaria": "Beharrezko teoria",
  "Distribución binomial": "Banaketa binomiala",
  "1. Aproximación normal de la binomial": "1. Binomialaren hurbilketa normala",
  "2. Corrección de continuidad": "2. Jarraitutasun-zuzenketa",
  "3. Tipificación": "3. Tipifikazioa",
  "Corrección en una desigualdad estricta": "Zuzenketa desberdintza zorrotz batean",
  "Simetría de la normal": "Normalaren simetria",
  "Resolución completa": "Ebazpen osoa",
  "Definimos el éxito": "Arrakasta definitzen dugu",
  "Identificamos el número de ensayos": "Saiakuntza-kopurua identifikatzen dugu",
  "Escribimos la distribución": "Banaketa idazten dugu",
  "Comprobamos que la aproximación es válida": "Hurbilketa baliozkoa dela egiaztatzen dugu",
  "Calculamos los parámetros de la normal": "Normalaren parametroak kalkulatzen ditugu",
  "Aplicamos la corrección de continuidad": "Jarraitutasun-zuzenketa aplikatzen dugu",
  "Tipificamos los dos extremos": "Bi muturrak tipifikatzen ditugu",
  "Usamos la tabla de la normal": "Normalaren taula erabiltzen dugu",
  "Interpretamos “menos de”": "«Baino gutxiago» interpretatzen dugu",
  "Tipificamos": "Tipifikatzen dugu",
  "Consultamos la tabla": "Taula kontsultatzen dugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza"
}));

const originalVaccineBinomial2024Text = new WeakMap();
function applyVaccineBinomial2024Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalVaccineBinomial2024Text.has(node)) originalVaccineBinomial2024Text.set(node, node.nodeValue);
    const original = originalVaccineBinomial2024Text.get(node);
    const key = original.trim();
    node.nodeValue = language === "eu" && vaccineBinomial2024Eu.has(key)
      ? (original.match(/^\s*/)?.[0] ?? "") + vaccineBinomial2024Eu.get(key) + (original.match(/\s*$/)?.[0] ?? "")
      : original;
  }
}
function applyVaccineBinomial2024Language(language) {
  document.title = language === "eu" ? "Txerto baten eraginkortasuna: binomiala eta normala · Matematika II" : "Eficacia de una vacuna: binomial y normal · Matemáticas II";
  applyVaccineBinomial2024Text(language);
  document.querySelectorAll("[data-vaccine-binomial-2024-language]").forEach((element) => {
    element.hidden = element.getAttribute("data-vaccine-binomial-2024-language") !== language;
  });
  document.querySelector(".exercise-nav")?.setAttribute("aria-label", language === "eu" ? "Ariketaren nabigazioa" : "Navegación del ejercicio");
  document.querySelector(".level-switch")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren ideia edo sakontasun-maila" : "Idea o nivel de profundidad de la solución");
  document.querySelector(".tabs")?.setAttribute("aria-label", language === "eu" ? "Ebazpenaren atalak" : "Apartados de la solución");
}
document.addEventListener("languagechange", (event) => applyVaccineBinomial2024Language(event.detail.language));
applyVaccineBinomial2024Language(window.I18n?.getLanguage() ?? "eu");

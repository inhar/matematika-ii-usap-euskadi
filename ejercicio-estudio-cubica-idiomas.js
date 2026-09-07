const cubicStudyTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción B · Problema B.3": "2019 · Ezohikoa · B aukera · B.3 problema",
  "Análisis · Crecimiento y extremos · Julio de 2019": "Analisia · Monotonia eta muturrak · 2019ko uztaila",
  "Estudio completo de una función cúbica": "Funtzio kubiko baten azterketa osoa",
  "Enunciado": "Enuntziatua",
  "Estudiar los intervalos de crecimiento y decrecimiento y los extremos de la función": "Aztertu funtzioaren gorakortasun- eta beherakortasun-tarteak eta muturrak:",
  "Representar gráficamente f.": "Irudikatu f grafikoki.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema B.3": "B.3 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "La derivada mide la pendiente de la gráfica. Primero calcularemos f′ y buscaremos dónde vale cero; esos puntos dividirán la recta real en intervalos en los que el signo de la derivada permanece constante.": "Deribatuak grafikoaren malda neurtzen du. Lehenik f′ kalkulatu eta non den zero bilatuko dugu; puntu horiek zuzen erreala deribatuaren zeinua konstante mantentzen den tartetan banatuko dute.",
  "El signo positivo, negativo y de nuevo positivo nos dará crecimiento, decrecimiento y crecimiento. Evaluaremos f en los puntos críticos para obtener los extremos y calcularemos los cortes con los ejes para dibujar la cúbica sin depender de una gráfica aproximada.": "Zeinu positiboak, negatiboak eta berriz positiboak gorakortasuna, beherakortasuna eta gorakortasuna emango dizkigute. Puntu kritikoetan f ebaluatuko dugu muturrak lortzeko, eta ardatzekiko ebakidurak kalkulatuko ditugu kubikoa zehaztasunez marrazteko.",
  "Monotonía, extremos y gráfica": "Monotonia, muturrak eta grafikoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Signo de la derivada y monotonía": "1. Deribatuaren zeinua eta monotonia",
  "La derivada indica el signo de la pendiente. Si f′ es positiva en un intervalo, f crece; si f′ es negativa, f decrece.": "Deribatuak maldaren zeinua adierazten du. Tarte batean f′ positiboa bada, f gorakorra da; f′ negatiboa bada, f beherakorra da.",
  "2. Puntos críticos": "2. Puntu kritikoak",
  "En una función polinómica la derivada existe para todo número real. Por eso los únicos candidatos a extremo son las soluciones de f′(x) = 0. Esos valores separan los intervalos cuyo signo debemos estudiar.": "Funtzio polinomiko batean deribatua zenbaki erreal guztietarako existitzen da. Horregatik, mutur izateko hautagai bakarrak f′(x) = 0 ekuazioaren soluzioak dira. Balio horiek aztertu beharreko zeinu-tarteak bereizten dituzte.",
  "es candidato a extremo": "mutur izateko hautagaia da",
  "3. Clasificación mediante el cambio de signo": "3. Zeinu-aldaketaren bidezko sailkapena",
  "Un punto crítico es un máximo local cuando la función pasa de crecer a decrecer. Es un mínimo local cuando pasa de decrecer a crecer.": "Puntu kritiko bat maximo lokala da funtzioa gorakorra izatetik beherakorra izatera pasatzen denean. Minimo lokala da beherakorra izatetik gorakorra izatera pasatzen denean.",
  "creciente": "gorakorra",
  "decreciente": "beherakorra",
  "máximo local": "maximo lokala",
  "mínimo local": "minimo lokala",
  "+ → − ⇒ máximo local": "+ → − ⇒ maximo lokala",
  "− → + ⇒ mínimo local": "− → + ⇒ minimo lokala",
  "4. Información necesaria para representar la función": "4. Funtzioa irudikatzeko behar den informazioa",
  "La monotonía y los extremos dan la forma general. Los cortes con el eje x se obtienen resolviendo f(x) = 0 y el corte con el eje y se obtiene calculando f(0). Al ser un polinomio, la gráfica es continua y une toda esa información sin saltos.": "Monotoniak eta muturrek forma orokorra ematen dute. x ardatzarekiko ebakidurak f(x) = 0 ebatziz lortzen dira, eta y ardatzarekikoa f(0) kalkulatuz. Polinomioa denez, grafikoa jarraitua da eta informazio hori guztia jauzirik gabe lotzen du.",
  "Resolución completa": "Ebazpen osoa",
  "Calculamos y factorizamos la derivada": "Deribatua kalkulatu eta faktorizatzen dugu",
  "Aplicamos la regla de la potencia a cada término. La constante −2 tiene derivada cero.": "Berreturaren erregela gai bakoitzari aplikatzen diogu. −2 konstantearen deribatua zero da.",
  "Hallamos los puntos críticos": "Puntu kritikoak aurkitzen ditugu",
  "Un producto es cero cuando alguno de sus factores es cero.": "Biderkadura bat zero da haren faktoreren bat zero denean.",
  "Los valores −2 y 0 dividen la recta real en tres intervalos.": "−2 eta 0 balioek zuzen erreala hiru tartetan banatzen dute.",
  "Estudiamos el signo de f′ en cada intervalo": "Tarte bakoitzean f′-ren zeinua aztertzen dugu",
  "Basta elegir un valor de prueba dentro de cada intervalo, porque la derivada no vuelve a anularse en su interior.": "Nahikoa da tarte bakoitzaren barruan proba-balio bat aukeratzea, deribatua ez baita berriro zero egiten haren barnean.",
  "Crece": "Gorakorra",
  "Decrece": "Beherakorra",
  "↗ Crece": "↗ Gorakorra",
  "↘ Decrece": "↘ Beherakorra",
  "Máximo": "Maximoa",
  "Mínimo": "Minimoa",
  "Escribimos los intervalos y calculamos los extremos": "Tarteak idatzi eta muturrak kalkulatzen ditugu",
  "Crecimiento": "Gorakortasuna",
  "Decrecimiento": "Beherakortasuna",
  "El cambio de signo clasifica cada punto crítico. Para obtener el punto completo calculamos su coordenada y.": "Zeinu-aldaketak puntu kritiko bakoitza sailkatzen du. Puntu osoa lortzeko, haren y koordenatua kalkulatzen dugu.",
  "Máximo local: (−2, 2)": "Maximo lokala: (−2, 2)",
  "Mínimo local: (0, −2)": "Minimo lokala: (0, −2)",
  "Calculamos los cortes con los ejes": "Ardatzekiko ebakidurak kalkulatzen ditugu",
  "El corte con el eje y es inmediato: f(0) = −2. Para hallar los cortes con el eje x resolvemos f(x) = 0.": "y ardatzarekiko ebakidura berehalakoa da: f(0) = −2. x ardatzarekiko ebakidurak aurkitzeko f(x) = 0 ebazten dugu.",
  "Un factor proporciona x = −1. Resolvemos el factor cuadrático con la fórmula general.": "Faktore batek x = −1 ematen du. Faktore koadratikoa formula orokorrarekin ebazten dugu.",
  "Representamos la función": "Funtzioa irudikatzen dugu",
  "Situamos los tres cortes con el eje x, el máximo y el mínimo. Después unimos la información respetando los intervalos de crecimiento y decrecimiento.": "x ardatzarekiko hiru ebakidurak, maximoa eta minimoa kokatzen ditugu. Ondoren, informazioa gorakortasun- eta beherakortasun-tarteak errespetatuz lotzen dugu.",
  "La curva crece hasta el máximo, decrece hasta el mínimo y vuelve a crecer. Las etiquetas de los ejes permiten leer la escala.": "Kurba maximoraino hazten da, minimoraino jaisten da eta berriro hazten da. Ardatzetako etiketek eskala irakurtzeko aukera ematen dute.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Cortes con el eje x:": "x ardatzarekiko ebakidurak:",
  "Máximo local en (−2, 2); mínimo local en (0, −2).": "Maximo lokala (−2, 2) puntuan; minimo lokala (0, −2) puntuan.",
  "Resultado": "Emaitza",
  "Creciente en (−∞, −2) ∪ (0, +∞).": "Gorakorra (−∞, −2) ∪ (0, +∞) tarteetan.",
  "Decreciente en (−2, 0).": "Beherakorra (−2, 0) tartean.",
  "Máximo local en (−2, 2) y mínimo local en (0, −2).": "Maximo lokala (−2, 2) puntuan eta minimo lokala (0, −2) puntuan."
}));

const originalCubicStudyText = new WeakMap();

const cubicStudyAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".cubic-variation-strip", attribute: "aria-label", eu: "Deribatuaren zeinua eta funtzioaren aldakuntza", es: "Signo de la derivada y variación de la función" },
  { selector: ".cubic-study-figure", attribute: "aria-label", eu: "Funtzio kubikoaren grafikoa, ebakidurekin eta muturrekin", es: "Gráfica de la función cúbica con sus cortes y extremos" },
  { selector: ".cubic-study-board", attribute: "aria-label", eu: "f(x) berdin x kubo gehi hiru x karratu ken bi funtzioaren grafikoa, maximoarekin, minimoarekin eta erroekin", es: "Gráfica de f de x igual a x al cubo más tres x al cuadrado menos dos, con máximo, mínimo y raíces" },
];

function applyCubicStudyText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCubicStudyText.has(node)) {
      originalCubicStudyText.set(node, node.nodeValue);
    }

    const original = originalCubicStudyText.get(node);
    const key = original.replace(/\s+/g, " ").trim();

    if (language === "eu" && cubicStudyTextEu.has(key)) {
      const translation = cubicStudyTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCubicStudyLanguage(language) {
  document.title = language === "eu"
    ? "Funtzio kubiko baten monotonia eta muturrak · Matematika II"
    : "Estudio completo de una función cúbica · Matemáticas II";

  applyCubicStudyText(language);

  cubicStudyAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCubicStudyLanguage(event.detail.language);
});

applyCubicStudyLanguage(window.I18n?.getLanguage() ?? "eu");

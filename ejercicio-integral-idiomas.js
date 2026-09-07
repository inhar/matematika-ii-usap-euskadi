const integralExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción A · Problema A.4": "2019 · Ohikoa · A aukera · A.4 problema",
  "Análisis · Integrales · Junio de 2019": "Analisia · Integralak · 2019ko ekaina",
  "Integración por partes de un producto exponencial": "Biderkadura esponentzial baten zatikako integrazioa",
  "Enunciado": "Enuntziatua",
  "Calcular la integral, explicando el proceso utilizado:": "Kalkulatu integral hau, erabilitako prozesua azalduz:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.4": "A.4 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "El integrando es el producto del polinomio x y la exponencial e⁻⁴ˣ. No tiene una primitiva inmediata, pero la integración por partes permite derivar el factor que se simplifica e integrar el que permanece reconocible. Elegiremos u = x porque al derivarlo se convierte en 1, y dv = e⁻⁴ˣ dx porque su integral es directa. Después aplicaremos la fórmula, calcularemos la integral restante y derivaremos el resultado para comprobar los signos.": "Integrakizuna x polinomioaren eta e⁻⁴ˣ esponentzialaren biderkadura da. Ez da berehalako integral bat, baina zatikako integrazioak faktoreetako bat deribatzeko eta bestea integratzeko aukera ematen du; aukera egokiarekin, biderkadura sinplifikatu egiten da. u = x aukeratuko dugu, deribatzean 1 bihurtzen delako, eta dv = e⁻⁴ˣ dx, erraz integra daitekeelako. Ondoren, formula aplikatu, geratzen den integrala kalkulatu eta emaitza deribatuko dugu zeinuak egiaztatzeko.",
  "Integral por partes": "Zatikako integrazioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. De dónde sale la integración por partes": "1. Zatikako integrazioa nondik datorren",
  "Partimos de la regla de derivación de un producto. Al integrar ambos lados y despejar uno de los términos aparece la fórmula de integración por partes.": "Biderkadura baten deribazio-erregelatik abiatzen gara. Bi aldeak integratu eta gaietako bat bakanduta, zatikako integrazioaren formula agertzen da.",
  "2. Cómo elegir u y dv": "2. Nola aukeratu u eta dv",
  "Conviene escoger como u el factor que se simplifica al derivarlo y como dv el factor que sabemos integrar. Aquí x baja a 1 y e⁻⁴ˣ conserva su forma al integrarlo.": "u gisa deribatzean sinplifikatzen den faktorea aukeratzea komeni da, eta dv gisa integratzen dakiguna. Hemen x 1 bihurtzen da eta e⁻⁴ˣ adierazpenak bere forma mantentzen du integratzean.",
  "3. Integral de una exponencial compuesta": "3. Esponentzial konposatu baten integrala",
  "Para k ≠ 0, integrar eᵏˣ exige dividir por la derivada k del exponente.": "k ≠ 0 denean, eᵏˣ integratzeko k zenbakiaz, hau da, berretzailearen deribatuaz, zatitu behar da.",
  "En este ejercicio k = −4, por eso aparece el factor −1/4.": "Ariketa honetan k = −4 da; horregatik agertzen da −1/4 faktorea.",
  "4. Constante y comprobación": "4. Konstantea eta egiaztapena",
  "Una integral indefinida representa una familia de primitivas y debe incluir + C. Para comprobar el resultado basta derivarlo: debemos recuperar exactamente el integrando.": "Integral zehaztugabe batek primitiboen familia bat adierazten du eta + C izan behar du. Emaitza egiaztatzeko nahikoa da deribatzea: integrakizun bera berreskuratu behar dugu.",
  "Resolución completa": "Ebazpen osoa",
  "Reconocemos el método": "Metodoa identifikatzen dugu",
  "Tenemos un producto de dos tipos de funciones: un polinomio y una exponencial. Al derivar x obtenemos 1, así que la integración por partes simplificará el producto.": "Bi funtzio motaren biderkadura dugu: polinomio bat eta esponentzial bat. x deribatzean 1 lortzen dugu; beraz, zatikako integrazioak biderkadura sinplifikatuko du.",
  "Elegimos las dos partes": "Bi zatiak aukeratzen ditugu",
  "Tomamos x como u y la exponencial, junto con dx, como dv.": "x hartzen dugu u gisa, eta esponentziala, dx-rekin batera, dv gisa.",
  "El signo negativo de v aparece porque la derivada del exponente −4x es −4.": "v-ren zeinu negatiboa −4x berretzailearen deribatua −4 delako agertzen da.",
  "Aplicamos la fórmula": "Formula aplikatzen dugu",
  "Sustituimos u, v, du y dv en ∫u dv = uv − ∫v du:": "u, v, du eta dv ordezkatzen ditugu ∫u dv = uv − ∫v du formulan:",
  "Hay un signo más delante de la integral restante porque estamos restando una expresión negativa.": "Geratzen den integralaren aurrean plus zeinua dago, adierazpen negatibo bat kentzen ari garelako.",
  "Calculamos la integral restante": "Geratzen den integrala kalkulatzen dugu",
  "Usamos ∫e⁻⁴ˣ dx = −(1/4)e⁻⁴ˣ:": "∫e⁻⁴ˣ dx = −(1/4)e⁻⁴ˣ erabiltzen dugu:",
  "Simplificamos": "Sinplifikatzen dugu",
  "Sacamos como factor común −e⁻⁴ˣ y escribimos x/4 con denominador 16.": "−e⁻⁴ˣ faktore komuna ateratzen dugu eta x/4 adierazpena 16 izendatzailearekin idazten dugu.",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Sea F(x) = −[(4x + 1)e⁻⁴ˣ] / 16. Aplicamos la regla del producto:": "Izan bedi F(x) = −[(4x + 1)e⁻⁴ˣ] / 16. Biderkaduraren erregela aplikatzen dugu:",
  "La derivada coincide con el integrando, por lo que la primitiva es correcta.": "Deribatua eta integrakizuna bat datoz; beraz, primitiboa zuzena da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Su derivada es x e⁻⁴ˣ.": "Haren deribatua x e⁻⁴ˣ da.",
}));

const originalIntegralExerciseText = new WeakMap();

const integralExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-integral", attribute: "aria-label", eu: "x bider e ber minus lau x-ren integrala x-rekiko", es: "Integral de x por e elevado a menos cuatro x respecto de x" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyIntegralExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalIntegralExerciseText.has(node)) {
      originalIntegralExerciseText.set(node, node.nodeValue);
    }

    const original = originalIntegralExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && integralExerciseTextEu.has(key)) {
      const translation = integralExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyIntegralExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Zatikako integrazioa · Matematika II"
    : "Integración por partes · Matemáticas II";

  applyIntegralExerciseText(language);

  integralExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyIntegralExerciseLanguage(event.detail.language);
});

applyIntegralExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

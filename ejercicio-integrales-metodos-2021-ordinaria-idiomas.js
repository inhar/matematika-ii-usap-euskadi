const integrationMethods2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Ordinaria · Problema 8": "2021 · Ohikoa · 8. problema",
  "Análisis · Integrales · 2021": "Analisia · Integralak · 2021",
  "Integración por partes y fracciones simples": "Zatikako integrazioa eta zatiki sinpleak",
  "Enunciado": "Enuntziatua",
  "Calcular, explicando los métodos utilizados, las integrales:": "Kalkulatu integral hauek, erabilitako metodoak azalduz:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Integral I": "I integrala",
  "Integral J": "J integrala",
  "Idea de resolución": "Ebazpenaren ideia",
  "El integrando es el producto de un polinomio y una función trigonométrica. No tiene una primitiva inmediata, pero la integración por partes permite derivar el factor polinómico, que se simplifica, e integrar el seno, cuya primitiva conocemos.": "Integrakizuna polinomio baten eta funtzio trigonometriko baten biderkadura da. Ez du berehalako primitiborik, baina zatikako integrazioak biderkagai polinomikoa deribatzeko aukera ematen du, sinplifikatu egiten baita, eta sinua integratzeko, haren primitiboa ezagutzen baitugu.",
  "Elegiremos como primer factor el polinomio. Su derivada es uno, así que la integral que queda después de aplicar la fórmula es inmediata. Hay que prestar especial atención al factor un medio que aparece al integrar una función de argumento doble.": "Lehen biderkagai gisa polinomioa aukeratuko dugu. Haren deribatua bat da; beraz, formula aplikatu ondoren geratzen den integrala berehalakoa da. Arreta berezia jarri behar zaio argumentu bikoitzeko funtzio bat integratzean agertzen den erdi faktoreari.",
  "Integración por partes": "Zatikako integrazioa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Cuándo utilizar la integración por partes": "1. Noiz erabili zatikako integrazioa",
  "Este método es útil en productos donde uno de los factores se simplifica al derivarlo y el otro puede integrarse directamente. Es especialmente frecuente en productos de polinomios con exponenciales o funciones trigonométricas.": "Metodo hau erabilgarria da biderkagaietako bat deribatzean sinplifikatzen den eta bestea zuzenean integra daitekeen biderkaduretan. Bereziki ohikoa da polinomioen eta funtzio esponentzial edo trigonometrikoen arteko biderkaduretan.",
  "2. Fórmula de integración por partes": "2. Zatikako integrazioaren formula",
  "La fórmula se obtiene a partir de la derivada de un producto. En ella, una parte se deriva y la otra se integra.": "Formula biderkadura baten deribatutik lortzen da. Bertan, zati bat deribatu eta bestea integratu egiten da.",
  "3. Primitiva del seno de una función lineal": "3. Funtzio lineal baten sinuaren primitiboa",
  "Al integrar una función trigonométrica compuesta hay que dividir por la derivada de su argumento. El signo negativo procede de la derivada del coseno.": "Funtzio trigonometriko konposatu bat integratzean, haren argumentuaren deribatuaz zatitu behar da. Zeinu negatiboa kosinuaren deribatutik dator.",
  "4. Comprobación de una primitiva": "4. Primitibo baten egiaztapena",
  "Una integral indefinida se comprueba derivando el resultado. Los términos adicionales deben cancelarse y debe recuperarse exactamente el integrando inicial.": "Integral mugagabe bat emaitza deribatuz egiaztatzen da. Termino gehigarriek elkar ezeztatu behar dute, eta hasierako integrakizuna zehazki berreskuratu behar da.",
  "Resolución completa": "Ebazpen osoa",
  "Reconocemos el método": "Metodoa identifikatzen dugu",
  "El polinomio se simplifica al derivarlo y el factor trigonométrico se integra directamente. Por tanto, aplicamos integración por partes.": "Polinomioa deribatzean sinplifikatzen da eta biderkagai trigonometrikoa zuzenean integratzen da. Beraz, zatikako integrazioa aplikatuko dugu.",
  "Elegimos las dos partes": "Bi zatiak aukeratzen ditugu",
  "Derivamos el polinomio e integramos la función trigonométrica.": "Polinomioa deribatu eta funtzio trigonometrikoa integratzen dugu.",
  "El factor un medio aparece porque la derivada del argumento es dos.": "Erdi faktorea agertzen da argumentuaren deribatua bi delako.",
  "Sustituimos en la fórmula": "Formulan ordezkatzen dugu",
  "La integral restante queda sumando porque en la fórmula estamos restando una expresión negativa.": "Geratzen den integrala batzen agertzen da, formulan adierazpen negatibo bat kentzen ari garelako.",
  "Calculamos la integral restante": "Geratzen den integrala kalkulatzen dugu",
  "Comprobamos derivando": "Deribatuz egiaztatzen dugu",
  "Derivamos los dos sumandos no constantes. Los términos con coseno se cancelan.": "Konstanteak ez diren bi batugaiak deribatzen ditugu. Kosinua duten terminoek elkar ezeztatzen dute.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Al derivar se recupera exactamente el integrando.": "Deribatzean integrakizuna zehazki berreskuratzen da.",
  "Tenemos una función racional propia: el grado del numerador es menor que el del denominador. Al factorizar el denominador aparecen dos factores lineales distintos, de modo que la fracción puede separarse en dos fracciones simples.": "Funtzio arrazional propioa dugu: zenbakitzailearen maila izendatzailearena baino txikiagoa da. Izendatzailea faktorizatzean bi faktore lineal desberdin agertzen dira; beraz, zatikia bi zatiki sinpletan bana daiteke.",
  "Calcularemos sus coeficientes usando los valores que anulan cada factor. Después integraremos las dos fracciones como logaritmos. Los valores absolutos son necesarios porque la función original no está definida en las raíces del denominador.": "Koefizienteak faktore bakoitza zero egiten duten balioak erabiliz kalkulatuko ditugu. Ondoren, bi zatikiak logaritmo gisa integratuko ditugu. Balio absolutuak beharrezkoak dira jatorrizko funtzioa ez dagoelako definituta izendatzailearen erroetan.",
  "Descomposición en fracciones simples": "Zatiki sinpleetako deskonposizioa",
  "1. Función racional propia": "1. Funtzio arrazional propioa",
  "Una función racional es propia cuando el grado del numerador es menor que el del denominador. En ese caso puede intentarse directamente una descomposición en fracciones simples.": "Funtzio arrazional bat propioa da zenbakitzailearen maila izendatzailearena baino txikiagoa denean. Kasu horretan, zuzenean saia gaitezke zatiki sinpleetako deskonposizioarekin.",
  "2. Denominador con factores lineales distintos": "2. Faktore lineal desberdinak dituen izendatzailea",
  "Si el denominador es el producto de dos factores lineales distintos, asociamos una constante a cada uno.": "Izendatzailea bi faktore lineal desberdinen biderkadura bada, konstante bana lotzen diogu bakoitzari.",
  "3. Cálculo de los coeficientes": "3. Koefizienteen kalkulua",
  "Al multiplicar por el denominador común obtenemos una identidad polinómica. Sustituir las raíces del denominador anula un término cada vez y permite aislar cada coeficiente.": "Izendatzaile komunaz biderkatzean identitate polinomiko bat lortzen dugu. Izendatzailearen erroak ordezkatzeak termino bana ezeztatzen du aldi bakoitzean, eta koefiziente bakoitza bakartzeko aukera ematen du.",
  "4. Primitiva logarítmica y dominio": "4. Primitibo logaritmikoa eta definizio-eremua",
  "Cada fracción simple produce un logaritmo. El valor absoluto hace válida la primitiva en cualquier intervalo que no atraviese una raíz del denominador.": "Zatiki sinple bakoitzak logaritmo bat sortzen du. Balio absolutuak primitiboa baliozkoa egiten du izendatzailearen errorik zeharkatzen ez duen edozein tartetan.",
  "Factorizamos el denominador": "Izendatzailea faktorizatzen dugu",
  "Buscamos dos números cuyo producto sea menos cinco y cuya suma sea menos cuatro.": "Biderkadura minus bost eta batura minus lau duten bi zenbaki bilatzen ditugu.",
  "Planteamos la descomposición": "Deskonposizioa planteatzen dugu",
  "Asignamos una constante a cada factor lineal.": "Konstante bana esleitzen diogu faktore lineal bakoitzari.",
  "Eliminamos los denominadores": "Izendatzaileak ezabatzen ditugu",
  "Multiplicamos la igualdad por el denominador común. La identidad resultante debe cumplirse para todos los valores permitidos.": "Berdintza izendatzaile komunaz biderkatzen dugu. Lortutako identitatea onartutako balio guztietarako bete behar da.",
  "Calculamos los coeficientes": "Koefizienteak kalkulatzen ditugu",
  "Usamos las dos raíces del denominador para anular alternativamente uno de los sumandos.": "Izendatzailearen bi erroak erabiltzen ditugu batugaietako bat txandaka zero egiteko.",
  "Integramos término a término": "Terminoz termino integratzen dugu",
  "Derivamos los logaritmos y reunimos las fracciones con el denominador común.": "Logaritmoak deribatu eta zatikiak izendatzaile komunarekin elkartzen ditugu.",
  "La primitiva es válida en cada intervalo del dominio, con": "Primitiboa definizio-eremuko tarte bakoitzean da baliozkoa, baldintza honekin:"
}));

const originalIntegrationMethods2021Text = new WeakMap();

const integrationMethods2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpeneko integralak", es: "Integrales de la solución" },
];

function applyIntegrationMethods2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalIntegrationMethods2021Text.has(node)) {
      originalIntegrationMethods2021Text.set(node, node.nodeValue);
    }

    const original = originalIntegrationMethods2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && integrationMethods2021TextEu.has(key)) {
      const translation = integrationMethods2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyIntegrationMethods2021Language(language) {
  document.title = language === "eu"
    ? "Zatikako integrazioa eta zatiki sinpleak · Matematika II"
    : "Integración por partes y fracciones simples · Matemáticas II";

  applyIntegrationMethods2021Text(language);

  integrationMethods2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyIntegrationMethods2021Language(event.detail.language);
});

applyIntegrationMethods2021Language(window.I18n?.getLanguage() ?? "eu");

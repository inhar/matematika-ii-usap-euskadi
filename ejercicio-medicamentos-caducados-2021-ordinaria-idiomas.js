const expiredMedicines2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Ordinaria · Problema 9": "2021 · Ohikoa · 9. problema",
  "Probabilidad · Probabilidad total y Bayes · 2021": "Probabilitatea · Probabilitate osoa eta Bayes · 2021",
  "Medicamentos caducados": "Iraungitako sendagaiak",
  "Enunciado": "Enuntziatua",
  "Una farmacia recibe un lote con medicamentos de los tipos A, I y M. La distribución del lote y el porcentaje de medicamentos caducados dentro de cada tipo son:": "Farmazia batek A, I eta M motetako sendagaiak dituen lote bat jaso du. Lotearen banaketa eta mota bakoitzean iraungitako sendagaien ehunekoa hauek dira:",
  "el resto del lote": "lotearen gainerakoa",
  "Se elige al azar una caja del lote. Llamaremos": "Loteko kaxa bat zoriz aukeratzen da. Honela deituko diogu",
  "al suceso «el medicamento está caducado».": "«sendagaia iraungita dago» gertakariari.",
  "Calcular la probabilidad de elegir un medicamento caducado.": "Kalkulatu iraungitako sendagai bat aukeratzeko probabilitatea.",
  "Sabiendo que el medicamento está caducado, calcular la probabilidad de que sea del tipo A.": "Sendagaia iraungita dagoela jakinda, kalkulatu A motakoa izateko probabilitatea.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Un medicamento caducado puede proceder de cualquiera de los tres tipos. Representaremos esos tres caminos en un árbol: primero se elige el tipo y después se observa si el medicamento está caducado.": "Iraungitako sendagai bat hiru motetako edozeinetatik etor daiteke. Hiru bide horiek zuhaitz batean adieraziko ditugu: lehenik mota aukeratzen da, eta gero sendagaia iraungita dagoen ala ez ikusten da.",
  "La probabilidad de cada camino se obtiene multiplicando sus dos ramas. Como los tres caminos que terminan en caducado son incompatibles, sumaremos sus probabilidades. Esta es la estructura del teorema de la probabilidad total.": "Bide bakoitzaren probabilitatea haren bi adarrak biderkatuz lortzen da. Iraungita egoeran amaitzen diren hiru bideak bateraezinak direnez, haien probabilitateak batuko ditugu. Hori da probabilitate osoaren teoremaren egitura.",
  "Probabilidad de elegir un medicamento caducado": "Iraungitako sendagai bat aukeratzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Probabilidades condicionadas en un árbol": "1. Probabilitate baldintzatuak zuhaitz batean",
  "La primera etapa representa el tipo de medicamento. La segunda contiene probabilidades condicionadas, porque la proporción de caducados depende del tipo elegido.": "Lehen etapak sendagai mota adierazten du. Bigarrenak probabilitate baldintzatuak ditu, iraungitakoen proportzioa aukeratutako motaren araberakoa delako.",
  "2. Suceso contrario": "2. Aurkako gertakaria",
  "En cada tipo, estar caducado y no estarlo son sucesos complementarios. Sus probabilidades suman uno.": "Mota bakoitzean, iraungita egotea eta ez egotea gertakari osagarriak dira. Haien probabilitateen batura bat da.",
  "3. Regla del producto": "3. Biderkaduraren erregela",
  "La probabilidad de recorrer un camino completo se obtiene multiplicando la probabilidad de la primera rama por la probabilidad condicionada de la segunda.": "Bide oso bat egitearen probabilitatea lehen adarraren probabilitatea eta bigarrenaren probabilitate baldintzatua biderkatuz lortzen da.",
  "4. Teorema de la probabilidad total": "4. Probabilitate osoaren teorema",
  "Los tipos A, I y M forman una partición del lote: cada medicamento pertenece exactamente a uno de ellos. Sumamos los tres caminos capaces de producir un medicamento caducado.": "A, I eta M motek lotearen partiketa osatzen dute: sendagai bakoitza haietako bati eta bakarrari dagokio. Iraungitako sendagai bat sor dezaketen hiru bideak batzen ditugu.",
  "Resolución completa": "Ebazpen osoa",
  "Completamos la proporción del tipo M": "M motaren proportzioa osatzen dugu",
  "Las proporciones de los tres tipos deben sumar uno. El tipo M ocupa la parte que falta.": "Hiru moten proportzioek bat batu behar dute. M motak falta den zatia hartzen du.",
  "Calculamos las probabilidades de no estar caducado": "Iraungita ez egoteko probabilitateak kalkulatzen ditugu",
  "Restamos de uno la probabilidad de caducidad de cada tipo.": "Batetik mota bakoitzaren iraungitze-probabilitatea kentzen dugu.",
  "Leemos los caminos del árbol": "Zuhaitzeko bideak irakurtzen ditugu",
  "En cada camino aparece primero el tipo, después el estado del medicamento y, al final, el producto de las dos ramas.": "Bide bakoitzean lehenik mota agertzen da, gero sendagaiaren egoera eta, amaieran, bi adarren biderkadura.",
  "Calculamos los caminos que terminan en caducado": "Iraungita egoeran amaitzen diren bideak kalkulatzen ditugu",
  "Sumamos los tres caminos": "Hiru bideak batzen ditugu",
  "Son incompatibles porque un medicamento no puede pertenecer a dos tipos a la vez.": "Bateraezinak dira, sendagai bat ezin delako aldi berean bi motatakoa izan.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Árbol de probabilidades. A la derecha se muestra el producto completo de cada camino.": "Probabilitate-zuhaitza. Eskuinean bide bakoitzaren biderkadura osoa agertzen da.",
  "Tipo": "Mota",
  "Estado": "Egoera",
  "Camino": "Bidea",
  "Resultado": "Emaitza",
  "La probabilidad de elegir un medicamento caducado es del": "Iraungitako sendagai bat aukeratzeko probabilitatea hau da:",
  "Ahora sabemos que el medicamento está caducado. Por tanto, el nuevo conjunto de referencia está formado únicamente por los tres caminos del árbol que terminan en C.": "Orain badakigu sendagaia iraungita dagoela. Beraz, erreferentzia-multzo berria C-n amaitzen diren zuhaitzeko hiru bideek baino ez dute osatzen.",
  "Dentro de ese conjunto, el camino favorable es el que comienza en A. Aplicaremos Bayes: dividiremos la probabilidad conjunta de ser del tipo A y estar caducado entre la probabilidad total de estar caducado.": "Multzo horren barruan, aldeko bidea A-n hasten dena da. Bayes aplikatuko dugu: A motakoa eta iraungita egotearen baterako probabilitatea iraungita egotearen probabilitate osoaz zatituko dugu.",
  "Probabilidad de que sea del tipo A": "A motakoa izateko probabilitatea",
  "1. Probabilidad condicionada": "1. Probabilitate baldintzatua",
  "Al saber que ha ocurrido C, descartamos todos los medicamentos no caducados. La probabilidad buscada compara el camino donde ocurren A y C con todo el suceso C.": "C gertatu dela jakinda, iraungita ez dauden sendagai guztiak baztertzen ditugu. Bilatutako probabilitateak A eta C gertatzen diren bidea C gertakari osoarekin alderatzen du.",
  "2. Teorema de Bayes": "2. Bayesen teorema",
  "La probabilidad conjunta del numerador se calcula siguiendo una rama. El denominador se obtiene mediante la probabilidad total.": "Zenbakitzaileko baterako probabilitatea adar bati jarraituz kalkulatzen da. Izendatzailea probabilitate osoaren bidez lortzen da.",
  "3. No invertir la condición": "3. Baldintza ez alderantzikatzea",
  "La probabilidad de estar caducado sabiendo que es del tipo A es un dato del enunciado. La pregunta pide la dirección contraria, que en general tiene un valor distinto.": "A motakoa dela jakinda iraungita egoteko probabilitatea enuntziatuko datu bat da. Galderak kontrako noranzkoa eskatzen du, eta horrek, oro har, beste balio bat du.",
  "Traducimos la pregunta": "Galdera sinboloetara eramaten dugu",
  "La información conocida se escribe después de la barra y lo que queremos averiguar, delante.": "Ezagutzen dugun informazioa barraren ondoren idazten da, eta jakin nahi duguna aurrean.",
  "Calculamos el camino favorable": "Aldeko bidea kalkulatzen dugu",
  "El medicamento debe ser del tipo A y, además, estar caducado.": "Sendagaiak A motakoa izan behar du eta, gainera, iraungita egon.",
  "Usamos la probabilidad total": "Probabilitate osoa erabiltzen dugu",
  "El denominador reúne todos los medicamentos caducados, independientemente de su tipo.": "Izendatzaileak iraungitako sendagai guztiak biltzen ditu, mota edozein dela ere.",
  "Aplicamos Bayes y simplificamos": "Bayes aplikatu eta sinplifikatzen dugu",
  "Entre todos los medicamentos caducados, la mayor parte procede del tipo A.": "Iraungitako sendagai guztien artean, zatirik handiena A motatik dator.",
  "La probabilidad pedida es aproximadamente del": "Eskatutako probabilitatea gutxi gorabehera hau da:"
}));

const originalExpiredMedicines2021Text = new WeakMap();

const expiredMedicines2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".medicine-2021-data", attribute: "aria-label", eu: "Lotearen banaketa eta iraungitako sendagaien ehunekoak", es: "Distribución del lote y porcentajes de medicamentos caducados" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".medicine-2021-tree-figure", attribute: "aria-label", eu: "Hiru sendagai moten eta iraungitze-egoeraren probabilitate-zuhaitza", es: "Árbol de probabilidades de los tres tipos de medicamentos y su estado de caducidad" },
  { selector: ".medicine-2021-tree-desktop", attribute: "aria-label", eu: "A, I eta M motak, iraungita eta ez iraungita egoteko probabilitateak eta baterako probabilitateak dituen zuhaitza", es: "Árbol con tipos A, I y M, probabilidades de caducado y no caducado, y probabilidades conjuntas" },
  { selector: ".medicine-2021-tree-mobile", attribute: "aria-label", eu: "A, I eta M moten zuhaitz-adarren mugikorrerako laburpena", es: "Resumen móvil de las ramas del árbol para los tipos A, I y M" },
  { selector: ".medicine-2021-bayes-figure", attribute: "aria-label", eu: "Iraungitako sendagaien osaera motaren arabera", es: "Composición de los medicamentos caducados según su tipo" },
  { selector: ".medicine-2021-bayes-bar", attribute: "aria-label", eu: "A motako 0,080, I motako 0,020 eta M motako 0,005 baterako probabilitateen arabera zatitutako barra", es: "Barra dividida según las probabilidades conjuntas 0,080 del tipo A, 0,020 del tipo I y 0,005 del tipo M" },
];

function applyExpiredMedicines2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalExpiredMedicines2021Text.has(node)) {
      originalExpiredMedicines2021Text.set(node, node.nodeValue);
    }

    const original = originalExpiredMedicines2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && expiredMedicines2021TextEu.has(key)) {
      const translation = expiredMedicines2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyExpiredMedicines2021Language(language) {
  document.title = language === "eu"
    ? "Iraungitako sendagaiak: probabilitate osoa eta Bayes · Matematika II"
    : "Medicamentos caducados: probabilidad total y Bayes · Matemáticas II";

  applyExpiredMedicines2021Text(language);

  expiredMedicines2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyExpiredMedicines2021Language(event.detail.language);
});

applyExpiredMedicines2021Language(window.I18n?.getLanguage() ?? "eu");

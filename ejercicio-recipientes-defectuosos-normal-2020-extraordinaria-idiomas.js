const containersNormal2020TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2020 · Extraordinaria · Opción A · Ejercicio A.5": "2020 · Ezohikoa · A aukera · A.5 ariketa",
  "Probabilidad · Distribución normal · 2020": "Probabilitatea · Banaketa normala · 2020",
  "Recipientes defectuosos y distribución normal": "Ontzi akastunak banaketa normal batean",
  "Enunciado": "Enuntziatua",
  "Una máquina produce recipientes cuyas capacidades siguen una distribución normal:": "Makina batek banaketa normala duten edukierako ontziak ekoizten ditu:",
  "Un fabricante considera defectuoso un recipiente si su capacidad no está entre 9,8 y 10,1. Calcular:": "Fabrikatzaile batek ontzi bat akastuntzat jotzen du haren edukiera 9,8 eta 10,1 artean ez badago. Kalkulatu:",
  "La probabilidad de que un recipiente sea considerado defectuoso.": "Ontzi bat akastuntzat hartzeko probabilitatea.",
  "Si se han fabricado 1 500 recipientes, ¿cuántos se esperan defectuosos?": "1 500 ontzi fabrikatu badira, zenbat espero dira akastunak?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Un recipiente es correcto cuando su capacidad queda dentro del intervalo indicado y es defectuoso cuando queda fuera. Como la tabla normal trabaja con la variable estándar, primero convertiremos los dos límites en valores de": "Ontzi bat zuzena da haren edukiera adierazitako tartean badago, eta akastuna kanpoan badago. Taula normalak aldagai estandarra erabiltzen duenez, lehenik bi mugak honen balio bihurtuko ditugu:",
  "Es más directo calcular el área central correspondiente a los recipientes correctos y restarla de 1. El resultado restante reúne las dos colas de la campana: capacidades demasiado pequeñas y capacidades demasiado grandes.": "Zuzenekoagoa da ontzi zuzenen erdiko azalera kalkulatzea eta 1i kentzea. Geratzen den emaitzak kanpaiaren bi isatsak biltzen ditu: edukiera txikiegiak eta edukiera handiegiak.",
  "Probabilidad de obtener un recipiente defectuoso": "Ontzi akastun bat lortzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Parámetros de una distribución normal": "1. Banaketa normal baten parametroak",
  "La media sitúa el centro de la campana y la desviación típica mide la dispersión. En este ejercicio, el solucionario interpreta el segundo parámetro del enunciado como desviación típica.": "Batezbestekoak kanpaiaren erdigunea kokatzen du, eta desbideratze estandarrak sakabanaketa neurtzen du. Ariketa honetan, ebazpenak enuntziatuko bigarren parametroa desbideratze estandar gisa interpretatzen du.",
  "2. Tipificación": "2. Tipifikazioa",
  "Tipificar transforma una capacidad en el número de desviaciones típicas que la separan de la media. Así podemos utilizar la tabla de la normal estándar.": "Tipifikatzeak edukiera bat batezbestekotik bereizten duten desbideratze estandarren kopuru bihurtzen du. Horrela, normal estandarraren taula erabil dezakegu.",
  "3. Probabilidades acumuladas y simetría": "3. Probabilitate metatuak eta simetria",
  "La función acumulada proporciona el área situada a la izquierda. Para valores negativos podemos aprovechar la simetría de la campana.": "Funtzio metatuak ezkerrean dagoen azalera ematen du. Balio negatiboetarako kanpaiaren simetria erabil dezakegu.",
  "4. Suceso complementario": "4. Gertaera osagarria",
  "Un recipiente es correcto o defectuoso, y ambas posibilidades abarcan todos los casos. Por tanto, sus probabilidades suman 1.": "Ontzi bat zuzena edo akastuna da, eta bi aukerek kasu guztiak hartzen dituzte. Beraz, haien probabilitateen batura 1 da.",
  "Resolución completa": "Ebazpen osoa",
  "Identificamos el modelo y los sucesos": "Eredua eta gertaerak identifikatzen ditugu",
  "Llamamos": "Honela deitzen diogu:",
  "a la capacidad de un recipiente. El modelo y los dos sucesos relevantes son:": "ontzi baten edukierari. Eredua eta bi gertaera garrantzitsuak hauek dira:",
  "Modelo": "Eredua",
  "Correcto": "Zuzena",
  "Defectuoso": "Akastuna",
  "Tipificamos los dos límites": "Bi mugak tipifikatzen ditugu",
  "Restamos la media y dividimos por la desviación típica en ambos extremos.": "Batezbestekoa kendu eta desbideratze estandarrarekin zatitzen dugu bi muturretan.",
  "Límite inferior": "Beheko muga",
  "Límite superior": "Goiko muga",
  "Situamos el intervalo en la campana": "Tartea kanpaian kokatzen dugu",
  "La zona central representa los recipientes correctos. Las dos zonas sombreadas son las capacidades consideradas defectuosas.": "Erdiko eremuak ontzi zuzenak adierazten ditu. Itzaleztatutako bi eremuak akastuntzat jotzen diren edukierei dagozkie.",
  "El defecto reúne la cola izquierda, por debajo de 9,8, y la cola derecha, por encima de 10,1.": "Akatsak ezkerreko isatsa, 9,8tik beherakoa, eta eskuineko isatsa, 10,1etik gorakoa, biltzen ditu.",
  "Calculamos la probabilidad del intervalo correcto": "Tarte zuzenaren probabilitatea kalkulatzen dugu",
  "El área entre dos valores se obtiene restando las probabilidades acumuladas de sus extremos.": "Bi balioren arteko azalera haien muturretako probabilitate metatuak kenduz lortzen da.",
  "Tomamos el suceso complementario": "Gertaera osagarria hartzen dugu",
  "La probabilidad defectuosa es toda el área que queda fuera del intervalo correcto.": "Akatsaren probabilitatea tarte zuzenetik kanpo geratzen den azalera osoa da.",
  "Comprobamos sumando las dos colas": "Bi isatsak batuz egiaztatzen dugu",
  "La cola izquierda vale 0,0228. La derecha se obtiene restando a 1 la acumulada hasta 1.": "Ezkerreko isatsak 0,0228 balio du. Eskuinekoa 1i 1erainoko probabilitate metatua kenduz lortzen da.",
  "Cola izquierda": "Ezkerreko isatsa",
  "Cola derecha": "Eskuineko isatsa",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Probabilidad de defecto:": "Akatsaren probabilitatea:",
  "Equivale aproximadamente al 18,15 % de la producción.": "Ekoizpenaren % 18,15 da gutxi gorabehera.",
  "La probabilidad calculada en el apartado anterior representa la proporción de recipientes defectuosos que predice el modelo. Multiplicaremos esa proporción por el tamaño de la producción.": "Aurreko atalean kalkulatutako probabilitateak ereduak aurreikusten duen ontzi akastunen proportzioa adierazten du. Proportzio hori ekoizpenaren tamainarekin biderkatuko dugu.",
  "El producto puede ser decimal porque es un valor esperado, no un recuento observado. Para expresar un número práctico de recipientes lo aproximaremos al entero más cercano.": "Biderkadura hamartarra izan daiteke, espero den balioa delako eta ez behatutako zenbaketa. Ontzi kopuru praktiko bat adierazteko, hurbilen dagoen zenbaki osora hurbilduko dugu.",
  "Número esperado de recipientes defectuosos": "Espero den ontzi akastunen kopurua",
  "1. De probabilidad a frecuencia esperada": "1. Probabilitatetik espero den maiztasunera",
  "Si cada elemento tiene probabilidad p de cumplir una condición y se producen n elementos, el número esperado que la cumple es el producto de ambos valores.": "Elementu bakoitzak baldintza bat betetzeko p probabilitatea badu eta n elementu ekoizten badira, baldintza betetzen dutenen espero den kopurua bi balioen biderkadura da.",
  "2. Interpretación y redondeo": "2. Interpretazioa eta biribiltzea",
  "La esperanza matemática es un promedio teórico y no tiene por qué ser entera. Si se pide un número aproximado de objetos, se redondea al entero más cercano y se mantiene visible el valor previo al redondeo.": "Itxaropen matematikoa batezbesteko teorikoa da eta ez du zertan osoa izan. Objektuen gutxi gorabeherako kopurua eskatzen bada, hurbilen dagoen zenbaki osora biribiltzen da eta biribildu aurreko balioa ikusgai uzten da.",
  "Recuperamos la probabilidad de defecto": "Akatsaren probabilitatea berreskuratzen dugu",
  "Del apartado anterior sabemos qué fracción de la producción se espera que quede fuera del intervalo admitido.": "Aurreko ataletik badakigu ekoizpenaren zer zati espero den onartutako tartetik kanpo geratzea.",
  "Multiplicamos por el número fabricado": "Fabrikatutako kopuruarekin biderkatzen dugu",
  "Aplicamos la proporción a los 1 500 recipientes producidos.": "Proportzioa ekoitzitako 1 500 ontziei aplikatzen diegu.",
  "Expresamos una cantidad práctica": "Kopuru praktiko bat adierazten dugu",
  "La esperanza del modelo es 272,25. Como el número real de recipientes debe ser entero, lo aproximamos al entero más cercano.": "Ereduaren itxaropena 272,25 da. Ontzien benetako kopurua osoa izan behar denez, hurbilen dagoen zenbaki osora hurbiltzen dugu.",
  "Se esperan aproximadamente 272 recipientes defectuosos.": "Gutxi gorabehera 272 ontzi akastun espero dira.",
  "La esperanza matemática antes de redondear es 272,25.": "Biribildu aurreko itxaropen matematikoa 272,25 da."
}));

const originalContainersNormal2020Text = new WeakMap();

const containersNormal2020Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".containers-normal-statement", attribute: "aria-label", eu: "X aldagaiak hamar batezbestekoa eta zero koma bat desbideratze estandarra dituen banaketa normala du", es: "X sigue una distribución normal de media diez y desviación típica cero coma uno" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".containers-normal-figure", attribute: "aria-label", eu: "Edukieren banaketa normala, bi isats akastunak itzaleztatuta", es: "Distribución normal de capacidades con las dos colas defectuosas sombreadas" },
  { selector: ".containers-normal-board", attribute: "aria-label", eu: "Hamarrean zentratutako kanpai normala, bederatzi koma zortzi baino lehenagoko eta hamar koma bat baino ondorengo isatsak itzaleztatuta", es: "Campana normal centrada en diez con las colas anteriores a nueve coma ocho y posteriores a diez coma uno sombreadas" },
];

function applyContainersNormal2020Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalContainersNormal2020Text.has(node)) {
      originalContainersNormal2020Text.set(node, node.nodeValue);
    }

    const original = originalContainersNormal2020Text.get(node);
    const key = original.trim();

    if (language === "eu" && containersNormal2020TextEu.has(key)) {
      const translation = containersNormal2020TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyContainersNormal2020Language(language) {
  document.title = language === "eu"
    ? "Ontzi akastunak banaketa normal batean · Matematika II"
    : "Recipientes defectuosos y distribución normal · Matemáticas II";

  applyContainersNormal2020Text(language);

  containersNormal2020Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyContainersNormal2020Language(event.detail.language);
});

applyContainersNormal2020Language(window.I18n?.getLanguage() ?? "eu");

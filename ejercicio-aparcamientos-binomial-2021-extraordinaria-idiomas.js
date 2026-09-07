const parkingBinomial2021TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2021 · Extraordinaria · Problema 10": "2021 · Ezohikoa · 10. problema",
  "Probabilidad · Distribución binomial · 2021": "Probabilitatea · Banaketa binomiala · 2021",
  "Aparcamientos ocupados": "Aparkaleku okupatuak",
  "Enunciado": "Enuntziatua",
  "En un garaje hay 30 aparcamientos. En cada aparcamiento puede encontrarse o no un automóvil, con independencia de lo que ocurra en los otros. La probabilidad de que un aparcamiento esté ocupado es 0,4. Se pide:": "Garaje batean 30 aparkaleku daude. Aparkaleku bakoitzean automobil bat egon daiteke edo ez, besteetan gertatzen denarekiko independenteki. Aparkaleku bat okupatuta egoteko probabilitatea 0,4 da. Eskatzen da:",
  "Identificar y describir este modelo de probabilidad.": "Probabilitate-eredu hau identifikatzea eta deskribatzea.",
  "Hallar la probabilidad de que cierto día haya 8 automóviles aparcados.": "Egun jakin batean 8 automobil aparkatuta egoteko probabilitatea kalkulatzea.",
  "Hallar la probabilidad de que un día haya entre 10 y 20 automóviles aparcados.": "Egun batean 10 eta 20 automobil artean aparkatuta egoteko probabilitatea kalkulatzea.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Apartado C": "C atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Miramos cada aparcamiento como un ensayo: solo puede estar ocupado o libre. Los 30 ensayos son independientes y todos tienen la misma probabilidad de ocupación.": "Aparkaleku bakoitza saiakuntza gisa hartzen dugu: okupatuta edo libre egon daiteke. 30 saiakuntzak independenteak dira, eta guztiek okupazio-probabilitate bera dute.",
  "Cuando contamos cuántas veces aparece uno de los dos resultados en un número fijo de ensayos de este tipo, obtenemos una variable binomial. El «éxito» será que el aparcamiento esté ocupado.": "Mota horretako saiakuntza kopuru finko batean bi emaitzetako bat zenbat aldiz agertzen den zenbatzean, aldagai binomial bat lortzen dugu. «Arrakasta» aparkalekua okupatuta egotea izango da.",
  "Identificación y descripción del modelo": "Ereduaren identifikazioa eta deskribapena",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Ensayo de Bernoulli": "1. Bernoulliren saiakuntza",
  "Un ensayo de Bernoulli tiene dos resultados posibles. Llamamos éxito al resultado que queremos contar y representamos su probabilidad mediante": "Bernoulliren saiakuntza batek bi emaitza posible ditu. Zenbatu nahi dugun emaitzari arrakasta deitzen diogu, eta haren probabilitatea honen bidez adierazten dugu:",
  "2. Condiciones de una distribución binomial": "2. Banaketa binomial baten baldintzak",
  "El número de ensayos debe estar fijado, cada ensayo debe tener dos resultados, los ensayos deben ser independientes y la probabilidad de éxito debe permanecer constante.": "Saiakuntza kopuruak finkoa izan behar du, saiakuntza bakoitzak bi emaitza izan behar ditu, saiakuntzek independenteak izan behar dute eta arrakasta-probabilitateak konstante iraun behar du.",
  "3. Parámetros y valores posibles": "3. Parametroak eta balio posibleak",
  "La notación": "Notazio honek:",
  "indica que": "adierazten du",
  "cuenta éxitos en": "arrakastak zenbatzen dituela",
  "ensayos. Por ello solo puede tomar valores enteros desde cero hasta": "saiakuntzatan. Horregatik, zerotik honaino bitarteko balio osoak soilik har ditzake:",
  "4. Media y dispersión": "4. Batezbestekoa eta sakabanatzea",
  "La esperanza indica el número medio de éxitos a largo plazo. La varianza y la desviación típica miden cuánto se separan los recuentos de esa media.": "Itxaropenak epe luzeko batez besteko arrakasta kopurua adierazten du. Bariantzak eta desbideratze tipikoak zenbaketak batezbesteko horretatik zenbat aldentzen diren neurtzen dute.",
  "Resolución completa": "Ebazpen osoa",
  "Definimos qué vamos a contar": "Zer zenbatuko dugun definitzen dugu",
  "Sea": "Izan bedi",
  "el número de aparcamientos ocupados entre los 30 del garaje.": "garajeko 30 aparkalekuen artean okupatuta daudenen kopurua.",
  "Comprobamos las condiciones del modelo": "Ereduaren baldintzak egiaztatzen ditugu",
  "Hay un número fijo de ensayos: 30 aparcamientos.": "Saiakuntza kopurua finkoa da: 30 aparkaleku.",
  "Cada uno tiene dos resultados: ocupado o libre.": "Bakoitzak bi emaitza ditu: okupatuta edo libre.",
  "La ocupación de cada plaza es independiente de las demás.": "Aparkaleku bakoitzaren okupazioa gainerakoekiko independentea da.",
  "La probabilidad de ocupación es constante:": "Okupazio-probabilitatea konstantea da:",
  "Identificamos los parámetros": "Parametroak identifikatzen ditugu",
  "El suceso que contamos es «aparcamiento ocupado». Su contrario es «aparcamiento libre».": "Zenbatzen dugun gertakaria «aparkaleku okupatua» da. Haren aurkakoa «aparkaleku librea» da.",
  "Describimos su centro y su dispersión": "Zentroa eta sakabanatzea deskribatzen ditugu",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Es una distribución binomial que cuenta cuántos de los 30 aparcamientos están ocupados.": "30 aparkalekuetatik zenbat dauden okupatuta zenbatzen duen banaketa binomiala da.",
  "«Hay 8 automóviles» significa que queremos exactamente 8 aparcamientos ocupados. Elegimos cuáles son esas 8 plazas y exigimos que las 22 restantes estén libres.": "«8 automobil daude» esateak zehazki 8 aparkaleku okupatu nahi ditugula esan nahi du. 8 aparkaleku horiek zein diren aukeratzen dugu, eta gainerako 22ak libre egotea eskatzen dugu.",
  "La fórmula binomial reúne esas tres piezas: el número de elecciones posibles, la probabilidad de 8 ocupaciones y la probabilidad de 22 plazas libres.": "Formula binomialak hiru osagai horiek biltzen ditu: aukera posibleen kopurua, 8 okupazioren probabilitatea eta 22 aparkaleku libreren probabilitatea.",
  "Probabilidad de que haya exactamente 8 automóviles": "Zehazki 8 automobil egoteko probabilitatea",
  "1. Probabilidad de un valor concreto": "1. Balio zehatz baten probabilitatea",
  "Si": "Baldin eta",
  ", la probabilidad de obtener exactamente": ", zehazki",
  "éxitos es:": "arrakasta lortzeko probabilitatea hau da:",
  "2. Por qué aparece cada factor": "2. Zergatik agertzen den faktore bakoitza",
  "El coeficiente": "Koefiziente honek:",
  "elige las posiciones de los éxitos. El factor": "arrakasten kokalekuak aukeratzen ditu. Faktore hau:",
  "corresponde a esos éxitos y": "arrakasta horiei dagokie, eta hau:",
  "a los fracasos restantes.": "gainerako porrotei.",
  "Traducimos el enunciado a la variable": "Enuntziatua aldagaira eramaten dugu",
  "La variable": "Aldagaiak",
  "cuenta aparcamientos ocupados. Pedir 8 automóviles equivale a pedir exactamente 8 ocupaciones.": "okupatutako aparkalekuak zenbatzen ditu. 8 automobil eskatzea zehazki 8 okupazio eskatzea da.",
  "Determinamos ocupaciones y plazas libres": "Okupazioak eta aparkaleku libreak zehazten ditugu",
  "Si 8 de las 30 plazas están ocupadas, las otras 22 deben estar libres.": "30 aparkalekuetatik 8 okupatuta badaude, beste 22ak libre egon behar dute.",
  "Sustituimos en la fórmula binomial": "Formula binomialean ordezten dugu",
  "Calculamos y expresamos el resultado": "Emaitza kalkulatu eta adierazten dugu",
  "Cada barra representa un número entero de aparcamientos ocupados. La barra naranja corresponde al caso exacto": "Barra bakoitzak okupatutako aparkaleku kopuru oso bat adierazten du. Barra laranja kasu zehatz honi dagokio:",
  "La probabilidad es aproximadamente del": "Probabilitatea gutxi gorabehera hau da:",
  "«Entre 10 y 20» incluye los dos extremos. Como la variable solo toma valores enteros, debemos reunir los once casos desde": "«10 eta 20 artean» esateak bi muturrak barne hartzen ditu. Aldagaiak balio osoak soilik hartzen dituenez, hamaika kasuak bildu behar ditugu, hemendik:",
  "hasta": "honaino:",
  "Esos casos son incompatibles, así que sumamos sus probabilidades binomiales. De forma equivalente, podemos restar dos probabilidades acumuladas.": "Kasu horiek bateraezinak dira; beraz, haien probabilitate binomialak batzen ditugu. Baliokidetasunez, metatutako bi probabilitate ken ditzakegu.",
  "Probabilidad de que haya entre 10 y 20 automóviles": "10 eta 20 automobil artean egoteko probabilitatea",
  "1. Intervalo inclusivo en una variable discreta": "1. Muturrak barne dituen tartea aldagai diskretu batean",
  "La expresión": "Adierazpen honek:",
  "incluye todos los enteros desde 10 hasta 20, incluidos ambos extremos.": "10etik 20ra bitarteko zenbaki oso guztiak hartzen ditu barne, bi muturrak barne.",
  "2. Suma de casos incompatibles": "2. Kasu bateraezinen batura",
  "La variable no puede tomar dos valores distintos a la vez. Por eso las probabilidades de los valores 10, 11, ..., 20 se suman.": "Aldagaiak ezin ditu bi balio desberdin aldi berean hartu. Horregatik, 10, 11, ..., 20 balioen probabilitateak batu egiten dira.",
  "3. Cálculo mediante probabilidades acumuladas": "3. Probabilitate metatuen bidezko kalkulua",
  "Si una calculadora proporciona": "Kalkulagailu batek hau ematen badu:",
  ", el intervalo se obtiene restando lo acumulado hasta el entero anterior al límite inferior.": ", tartea beheko mugaren aurreko zenbaki osora arte metatutakoa kenduz lortzen da.",
  "Interpretamos correctamente los extremos": "Muturrak zuzen interpretatzen ditugu",
  "La frase «entre 10 y 20» incluye 10 y 20. Por tanto, los valores favorables son:": "«10 eta 20 artean» esaldiak 10 eta 20 barne hartzen ditu. Beraz, aldeko balioak hauek dira:",
  "Escribimos la suma de probabilidades": "Probabilitateen batura idazten dugu",
  "Aplicamos la fórmula binomial a cada valor y sumamos los once resultados.": "Balio bakoitzari formula binomiala aplikatu eta hamaika emaitzak batzen ditugu.",
  "Usamos la forma acumulada": "Forma metatua erabiltzen dugu",
  "Para empezar en 10, quitamos todos los valores hasta 9 de lo acumulado hasta 20.": "10ean hasteko, 20ra arte metatutakotik 9ra arteko balio guztiak kentzen ditugu.",
  "Restamos y redondeamos": "Kendu eta biribiltzen dugu",
  "Las barras naranjas son los once valores incluidos en el intervalo": "Barra laranjak tarte honetan sartutako hamaika balioak dira:"
}));

const originalParkingBinomial2021Text = new WeakMap();

const parkingBinomial2021Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: "#parking-2021-part-b .parking-2021-figure", attribute: "aria-label", eu: "Banaketa binomiala, zortzi balioa nabarmenduta", es: "Distribución binomial con el valor ocho destacado" },
  { selector: "#parking-binomial-2021-board-b", attribute: "aria-label", eu: "Hogeita hamar saiakuntzako eta zero koma lauko probabilitateko banaketa binomiala, zortzigarren barra nabarmenduta", es: "Distribución binomial de treinta ensayos y probabilidad cero coma cuatro con la barra ocho destacada" },
  { selector: "#parking-2021-part-c .parking-2021-figure", attribute: "aria-label", eu: "Banaketa binomiala, hamarretik hogeira arteko balioak nabarmenduta", es: "Distribución binomial con los valores de diez a veinte destacados" },
  { selector: "#parking-binomial-2021-board-c", attribute: "aria-label", eu: "Hogeita hamar saiakuntzako eta zero koma lauko probabilitateko banaketa binomiala, hamarretik hogeira arteko barrak nabarmenduta", es: "Distribución binomial de treinta ensayos y probabilidad cero coma cuatro con las barras de diez a veinte destacadas" }
];

function applyParkingBinomial2021Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalParkingBinomial2021Text.has(node)) {
      originalParkingBinomial2021Text.set(node, node.nodeValue);
    }

    const original = originalParkingBinomial2021Text.get(node);
    const key = original.trim();

    if (language === "eu" && parkingBinomial2021TextEu.has(key)) {
      const translation = parkingBinomial2021TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyParkingBinomial2021Language(language) {
  document.title = language === "eu"
    ? "Aparkaleku okupatuak: banaketa binomiala · Matematika II"
    : "Aparcamientos ocupados: distribución binomial · Matemáticas II";

  applyParkingBinomial2021Text(language);

  parkingBinomial2021Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyParkingBinomial2021Language(event.detail.language);
});

applyParkingBinomial2021Language(window.I18n?.getLanguage() ?? "eu");

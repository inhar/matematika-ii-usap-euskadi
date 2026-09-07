const probabilityExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción A · Problema A.5": "2019 · Ohikoa · A aukera · A.5 problema",
  "Probabilidad · Probabilidad condicionada · Junio de 2019": "Probabilitatea · Probabilitate baldintzatua · 2019ko ekaina",
  "Tres cajas: probabilidad total y teorema de Bayes": "Hiru kutxa: probabilitate osoa eta Bayesen teorema",
  "Enunciado": "Enuntziatua",
  "Sobre una mesa hay tres cajas con botones. La primera contiene 3 botones, la segunda 5 y la tercera 4. Cada caja contiene un único botón rojo. Se elige una caja al azar y, después, un botón de esa caja también al azar.": "Mahai baten gainean botoiak dituzten hiru kutxa daude. Lehenengoak 3 botoi ditu, bigarrenak 5 eta hirugarrenak 4. Kutxa bakoitzean botoi gorri bakarra dago. Kutxa bat zoriz aukeratzen da, eta, ondoren, kutxa horretako botoi bat ere zoriz ateratzen da.",
  "3 botones": "3 botoi",
  "5 botones": "5 botoi",
  "4 botones": "4 botoi",
  "1 rojo": "botoi gorri bat",
  "¿Cuál es la probabilidad de que el botón extraído sea rojo?": "Zein da ateratako botoia gorria izateko probabilitatea?",
  "Si el botón extraído es rojo, ¿cuál es la probabilidad de que proceda de la primera caja?": "Ateratako botoia gorria bada, zein da lehenengo kutxatik etortzeko probabilitatea?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Conocemos la probabilidad de elegir cada caja, 1/3, y la probabilidad de extraer su único botón rojo una vez elegida. Buscamos que ocurra «rojo» sin saber de qué caja procede: representaremos las dos elecciones en un árbol, multiplicaremos las probabilidades de cada camino que termina en rojo y sumaremos esos tres caminos incompatibles. Esa es precisamente la estructura de la probabilidad total.": "Kutxa bakoitza aukeratzeko probabilitatea, 1/3, ezagutzen dugu, baita kutxa aukeratu ondoren haren botoi gorri bakarra ateratzeko probabilitatea ere. «Gorria» gertatzeko probabilitatea bilatzen dugu, zein kutxatatik datorren jakin gabe: bi aukeraketak zuhaitz batean adieraziko ditugu, gorriz amaitzen den bide bakoitzeko probabilitateak biderkatu eta bateraezinak diren hiru bideak batuko ditugu. Hori da, hain zuzen, probabilitate osoaren egitura.",
  "Probabilidad de extraer un botón rojo": "Botoi gorria ateratzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Probabilidades en un árbol": "1. Probabilitateak zuhaitz batean",
  "La primera ramificación representa la caja elegida. La segunda contiene probabilidades condicionadas, porque la proporción de botones rojos depende de la caja en la que ya estamos.": "Lehen adarkatzeak aukeratutako kutxa adierazten du. Bigarrenak probabilitate baldintzatuak ditu, botoi gorrien proportzioa aurretik aukeratutako kutxaren araberakoa baita.",
  "P(R | Cᵢ) = botones rojos en Cᵢ / botones totales en Cᵢ": "P(R | Cᵢ) = Cᵢ-ko botoi gorriak / Cᵢ-ko botoi guztiak",
  "2. Regla del producto para un camino": "2. Biderkadura-erregela bide baterako",
  "Para que un camino completo ocurra deben suceder sus dos etapas. La probabilidad conjunta se obtiene multiplicando la probabilidad de llegar a la caja por la probabilidad condicionada de extraer rojo en ella.": "Bide oso bat gertatzeko, bi etapak bete behar dira. Probabilitate bateratua kutxara iristeko probabilitatea eta kutxa horretan botoi gorria ateratzeko probabilitate baldintzatua biderkatuz lortzen da.",
  "3. Teorema de la probabilidad total": "3. Probabilitate osoaren teorema",
  "Las cajas C₁, C₂ y C₃ forman una partición: siempre se elige exactamente una. Por eso el suceso R se descompone en tres caminos incompatibles y sus probabilidades se suman.": "C₁, C₂ eta C₃ kutxek partizio bat osatzen dute: beti kutxa bakarra aukeratzen da. Horregatik, R gertaera bateraezinak diren hiru bidetan banatzen da, eta haien probabilitateak batu egiten dira.",
  "Resolución completa": "Ebazpen osoa",
  "Nombramos los sucesos": "Gertaerak izendatzen ditugu",
  "Llamamos C₁, C₂ y C₃ a elegir la primera, segunda o tercera caja, y R a extraer un botón rojo.": "Lehenengo, bigarren edo hirugarren kutxa aukeratzeari C₁, C₂ eta C₃ deitzen diegu, eta botoi gorria ateratzeari R.",
  "Las tres cajas tienen la misma probabilidad porque la caja se elige al azar entre tres opciones.": "Hiru kutxek probabilitate bera dute, kutxa hiru aukeren artean zoriz hautatzen delako.",
  "Calculamos las probabilidades dentro de cada caja": "Kutxa bakoitzaren barruko probabilitateak kalkulatzen ditugu",
  "Cada caja tiene un solo botón rojo. Dividimos ese botón favorable entre el número total de botones de la caja.": "Kutxa bakoitzak botoi gorri bakarra du. Aldeko botoi hori kutxako botoi guztien kopuruaz zatitzen dugu.",
  "Rᶜ significa «no rojo»; su probabilidad es la parte que falta hasta 1.": "Rᶜ-k «ez gorria» esan nahi du; haren probabilitatea 1era iristeko falta den zatia da.",
  "Organizamos las dos elecciones en un árbol": "Bi aukeraketak zuhaitz batean antolatzen ditugu",
  "En cada fila se ve primero la probabilidad de elegir la caja y, después, las dos posibles extracciones dentro de ella.": "Errenkada bakoitzean, lehenik kutxa aukeratzeko probabilitatea ageri da, eta, ondoren, kutxa horren barruko bi ateratze posibleak.",
  "Diagrama de árbol del experimento": "Esperimentuaren zuhaitz-diagrama",
  "1 · Caja elegida": "1 · Aukeratutako kutxa",
  "2 · Botón extraído": "2 · Ateratako botoia",
  "Caja 1 (C₁)": "1. kutxa (C₁)",
  "Caja 2 (C₂)": "2. kutxa (C₂)",
  "Caja 3 (C₃)": "3. kutxa (C₃)",
  "Rojo (R)": "Gorria (R)",
  "No rojo (Rᶜ)": "Ez gorria (Rᶜ)",
  "R = rojo · Rᶜ = no rojo": "R = gorria · Rᶜ = ez gorria",
  "Inicio": "Hasiera",
  "Calculamos los tres caminos que terminan en rojo": "Gorriz amaitzen diren hiru bideak kalkulatzen ditugu",
  "La probabilidad de cada camino se obtiene multiplicando sus dos ramas.": "Bide bakoitzaren probabilitatea haren bi adarrak biderkatuz lortzen da.",
  "Sumamos todos los caminos rojos": "Bide gorri guztiak batzen ditugu",
  "Los tres caminos son incompatibles porque el botón solo puede proceder de una caja. Sumamos sus probabilidades usando el denominador común 180.": "Hiru bideak bateraezinak dira, botoia kutxa bakar batetik etor baitaiteke. Haien probabilitateak batzen ditugu 180 izendatzaile komuna erabiliz.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Ahora sabemos que el botón es rojo y queremos averiguar de qué caja procede. La condición ha cambiado el espacio que debemos comparar: entre todos los caminos que producen un botón rojo, solo uno pasa por la primera caja. Aplicaremos el teorema de Bayes dividiendo la probabilidad de ese camino favorable, C₁ y R, entre la probabilidad total de obtener rojo calculada en el apartado anterior.": "Orain badakigu botoia gorria dela, eta zein kutxatatik datorren jakin nahi dugu. Baldintzak alderatu beharreko lagin-espazioa aldatu du: botoi gorria sortzen duten bide guztien artean, bakarra igarotzen da lehenengo kutxatik. Bayesen teorema aplikatuko dugu, aldeko bide horren, C₁ eta R-ren, probabilitatea aurreko atalean kalkulatutako gorria lortzeko probabilitate osoaz zatituz.",
  "Probabilidad de que el botón rojo proceda de C₁": "Botoi gorria C₁ kutxatik etortzeko probabilitatea",
  "1. Probabilidad condicionada": "1. Probabilitate baldintzatua",
  "Al saber que ha ocurrido R, dejamos de considerar los resultados no rojos. La probabilidad de C₁ dentro de ese nuevo conjunto se obtiene comparando la parte en la que ocurren C₁ y R con todo el suceso R.": "R gertatu dela dakigunean, emaitza ez-gorriak baztertzen ditugu. Multzo berri horren barruan C₁-ren probabilitatea lortzeko, C₁ eta R batera gertatzen diren zatia R gertaera osoarekin alderatzen dugu.",
  "2. Teorema de Bayes": "2. Bayesen teorema",
  "La probabilidad conjunta del numerador puede escribirse siguiendo el camino del árbol. El denominador reúne todos los caminos capaces de producir R mediante la probabilidad total.": "Zenbakitzaileko probabilitate bateratua zuhaitzeko bideari jarraituz idatz daiteke. Izendatzaileak R sor dezaketen bide guztiak biltzen ditu probabilitate osoaren bidez.",
  "Traducimos la pregunta a símbolos": "Galdera sinboloetara itzultzen dugu",
  "La información conocida, «el botón es rojo», se escribe después de la barra. Lo que queremos averiguar, «procede de la primera caja», se escribe delante.": "Ezagutzen dugun informazioa, «botoia gorria da», barraren ondoren idazten da. Jakin nahi duguna, «lehenengo kutxatik dator», barraren aurrean idazten da.",
  "No estamos calculando P(R | C₁): esa probabilidad sería 1/3 y respondería a una pregunta distinta.": "Ez dugu P(R | C₁) kalkulatzen: probabilitate hori 1/3 litzateke, eta beste galdera bati erantzungo lioke.",
  "Calculamos el camino favorable": "Aldeko bidea kalkulatzen dugu",
  "Para que el botón sea rojo y proceda de C₁ hay que elegir primero C₁ y extraer después su botón rojo.": "Botoia gorria izan eta C₁ kutxatik etortzeko, lehenik C₁ aukeratu behar da, eta ondoren haren botoi gorria atera.",
  "Recuperamos la probabilidad total de rojo": "Gorriaren probabilitate osoa berreskuratzen dugu",
  "El botón rojo puede proceder de cualquiera de las tres cajas. Sumamos de nuevo los tres caminos para que el apartado sea autosuficiente.": "Botoi gorria hiru kutxetako edozeinetatik etor daiteke. Hiru bideak berriro batzen ditugu atala bere kabuz uler dadin.",
  "Aplicamos Bayes y simplificamos": "Bayesen teorema aplikatu eta sinplifikatzen dugu",
  "Dividimos el camino favorable entre todos los caminos que terminan en rojo.": "Aldeko bidea gorriz amaitzen diren bide guztien artean zatitzen dugu.",
  "De las 47 partes que producen rojo, 20 corresponden a C₁.": "Gorria sortzen duten 47 zatietatik, 20 C₁ kutxari dagozkio.",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Entre todos los botones rojos que puede producir el experimento, aproximadamente el 42,55 % procede de la primera caja. Es más que 1/3 porque C₁ tiene la mayor proporción de botones rojos: 1 de cada 3.": "Esperimentuak sor ditzakeen botoi gorri guztien artean, gutxi gorabehera % 42,55 lehenengo kutxatik dator. 1/3 baino handiagoa da, C₁ kutxak botoi gorrien proportziorik handiena duelako: 3tik 1.",
}));

const originalProbabilityExerciseText = new WeakMap();

const probabilityExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".box-data", attribute: "aria-label", eu: "Hiru kutxen osaera", es: "Composición de las tres cajas" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Soluzioaren atalak", es: "Apartados de la solución" },
  { selector: ".probability-tree-figure", attribute: "aria-label", eu: "Kutxa bat aukeratu eta botoi gorria edo ez-gorria ateratzeko probabilitate-zuhaitza", es: "Árbol de probabilidades de elegir una caja y extraer un botón rojo o no rojo" },
  { selector: ".bayes-composition", attribute: "aria-label", eu: "Gorria lortzeko probabilitatearen banaketa hiru kutxen artean: 20 zati 1. kutxari, 12 zati 2. kutxari eta 15 zati 3. kutxari dagozkio", es: "Reparto de la probabilidad de obtener rojo entre las tres cajas: 20 partes de la caja 1, 12 de la caja 2 y 15 de la caja 3" },
];

function applyProbabilityExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalProbabilityExerciseText.has(node)) {
      originalProbabilityExerciseText.set(node, node.nodeValue);
    }

    const original = originalProbabilityExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && probabilityExerciseTextEu.has(key)) {
      const translation = probabilityExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyProbabilityExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Probabilitate osoa eta Bayes · Matematika II"
    : "Probabilidad total y Bayes · Matemáticas II";

  applyProbabilityExerciseText(language);

  probabilityExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyProbabilityExerciseLanguage(event.detail.language);
});

applyProbabilityExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

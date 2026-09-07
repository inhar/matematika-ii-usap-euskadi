const coinsBayesTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción A · Problema A.5": "2019 · Ezohikoa · A aukera · A.5 problema",
  "Probabilidad · Probabilidad condicionada · Julio de 2019": "Probabilitatea · Probabilitate baldintzatua · 2019ko uztaila",
  "Tres monedas: probabilidad total y teorema de Bayes": "Hiru txanpon: probabilitate osoa eta Bayesen teorema",
  "Enunciado": "Enuntziatua",
  "Una caja contiene tres monedas, R, L y M. Se elige una de ellas al azar y se lanza.": "Kutxa batek hiru txanpon ditu: R, L eta M. Horietako bat zoriz aukeratu eta jaurtitzen da.",
  "Moneda normal": "Txanpon arrunta",
  "Cara por los dos lados": "Aurpegia bi aldeetan",
  "Moneda trucada": "Txanpon trukatua",
  "Calcular la probabilidad de obtener cara.": "Kalkulatu aurpegia lortzeko probabilitatea.",
  "Si ha salido cruz, ¿cuál es la probabilidad de que la moneda elegida sea R?": "Gurutzea atera bada, zein da aukeratutako txanpona R izateko probabilitatea?",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Obtener cara puede ocurrir por tres caminos distintos: elegir R y obtener cara, elegir L y obtener cara, o elegir M y obtener cara. Como primero se elige la moneda y después se observa el resultado, multiplicaremos las probabilidades de las ramas de cada camino. Después sumaremos los tres caminos que terminan en cara. El árbol permite conservar a la vista tanto la primera elección como las probabilidades condicionadas de cada moneda.": "Aurpegia hiru bide desberdinetatik lor daiteke: R aukeratu eta aurpegia lortu, L aukeratu eta aurpegia lortu, edo M aukeratu eta aurpegia lortu. Lehenik txanpona aukeratzen denez eta ondoren emaitza behatzen denez, bide bakoitzeko adarren probabilitateak biderkatuko ditugu. Gero, aurpegian amaitzen diren hiru bideak batuko ditugu. Zuhaitzak lehen aukeraketa eta txanpon bakoitzaren probabilitate baldintzatuak aldi berean ikusteko aukera ematen du.",
  "Probabilidad de obtener cara": "Aurpegia lortzeko probabilitatea",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Probabilidades condicionadas en un árbol": "1. Probabilitate baldintzatuak zuhaitz batean",
  "La primera etapa es elegir una moneda. La segunda depende de la moneda elegida; por eso sus ramas contienen probabilidades condicionadas como P(C | R), la probabilidad de cara sabiendo que se ha elegido R.": "Lehen etapa txanpon bat aukeratzea da. Bigarrena aukeratutako txanponaren araberakoa da; horregatik, adarrek P(C | R) bezalako probabilitate baldintzatuak dituzte, hau da, R aukeratu dela jakinda aurpegia lortzeko probabilitatea.",
  "2. Regla del producto para un camino": "2. Biderkadura-erregela bide baterako",
  "Para recorrer un camino completo deben ocurrir sus dos etapas. La probabilidad conjunta se obtiene multiplicando la probabilidad de elegir la moneda por la probabilidad del resultado dentro de esa moneda.": "Bide oso bat egiteko, haren bi etapak gertatu behar dira. Probabilitate bateratua txanpona aukeratzeko probabilitatea eta txanpon horren emaitzaren probabilitatea biderkatuz lortzen da.",
  "3. Teorema de la probabilidad total": "3. Probabilitate osoaren teorema",
  "R, L y M forman una partición: siempre se elige exactamente una de las tres monedas. El suceso C se descompone en tres caminos incompatibles, de modo que sus probabilidades se suman.": "R, L eta M-k partizio bat osatzen dute: hiru txanponetako bat eta bakarra aukeratzen da beti. C gertaera bateraezinak diren hiru bidetan banatzen da; beraz, haien probabilitateak batu egiten dira.",
  "Resolución completa": "Ebazpen osoa",
  "Nombramos los sucesos": "Gertaerak izendatzen ditugu",
  "Usaremos R, L y M para indicar qué moneda se elige. Llamaremos C a obtener cara y X a obtener cruz.": "R, L eta M erabiliko ditugu zein txanpon aukeratzen den adierazteko. Aurpegia lortzeari C deituko diogu, eta gurutzea lortzeari X.",
  "C = cara · X = cruz": "C = aurpegia · X = gurutzea",
  "Escribimos la probabilidad de elegir cada moneda": "Txanpon bakoitza aukeratzeko probabilitatea idazten dugu",
  "La elección se hace al azar entre tres monedas, así que las tres tienen la misma probabilidad.": "Aukeraketa hiru txanponen artean zoriz egiten da; beraz, hirurek probabilitate bera dute.",
  "Completamos las probabilidades de cara y cruz": "Aurpegiaren eta gurutzearen probabilitateak osatzen ditugu",
  "En cada moneda, las probabilidades de cara y cruz deben sumar 1. La moneda L nunca puede dar cruz porque tiene cara en sus dos lados.": "Txanpon bakoitzean, aurpegiaren eta gurutzearen probabilitateek 1 batu behar dute. L txanponak ezin du inoiz gurutzea eman, bi aldeetan aurpegia baitu.",
  "Organizamos el experimento en un árbol": "Esperimentua zuhaitz batean antolatzen dugu",
  "La primera ramificación representa la moneda elegida. Desde cada moneda salen las dos posibilidades del lanzamiento. Las ramas que terminan en cara aparecen destacadas.": "Lehen adarkatzeak aukeratutako txanpona adierazten du. Txanpon bakoitzetik jaurtiketaren bi aukerak ateratzen dira. Aurpegian amaitzen diren adarrak nabarmenduta daude.",
  "Árbol completo del experimento": "Esperimentuaren zuhaitz osoa",
  "Multiplicamos los tres caminos que terminan en cara": "Aurpegian amaitzen diren hiru bideak biderkatzen ditugu",
  "En cada camino multiplicamos la probabilidad de elegir la moneda por la probabilidad de cara una vez elegida.": "Bide bakoitzean, txanpona aukeratzeko probabilitatea eta, aukeratu ondoren, aurpegia lortzeko probabilitatea biderkatzen ditugu.",
  "Sumamos todos los caminos que producen cara": "Aurpegia sortzen duten bide guztiak batzen ditugu",
  "Los tres caminos son incompatibles porque solo se elige una moneda. Usamos denominador común 30 para ver la suma sin saltos.": "Hiru bideak bateraezinak dira, txanpon bakarra aukeratzen baita. 30 izendatzaile komuna erabiltzen dugu batura urratsik gabe ikusteko.",
  "En decimal, 17/30 = 0,5666…, por lo que la probabilidad es aproximadamente del 56,67 %.": "Hamartarretan, 17/30 = 0,5666…; beraz, probabilitatea gutxi gorabehera % 56,67 da.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Resultado": "Emaitza",
  "Ahora sabemos que el resultado ha sido cruz y queremos reconstruir qué moneda se eligió. Dejamos de comparar todos los resultados del experimento y miramos únicamente los caminos que terminan en cruz. Entre esos caminos, el favorable es «elegir R y obtener cruz». El teorema de Bayes compara la probabilidad de ese camino con la probabilidad total de obtener cruz.": "Orain badakigu emaitza gurutzea izan dela, eta zein txanpon aukeratu den berreraiki nahi dugu. Esperimentuaren emaitza guztiak alderatzeari utzi, eta gurutzean amaitzen diren bideak soilik aztertzen ditugu. Bide horien artean, aldekoa «R aukeratu eta gurutzea lortu» da. Bayesen teoremak bide horren probabilitatea gurutzea lortzeko probabilitate osoarekin alderatzen du.",
  "Probabilidad de haber elegido R sabiendo que salió cruz": "Gurutzea atera dela jakinda R aukeratu izanaren probabilitatea",
  "1. Probabilidad condicionada": "1. Probabilitate baldintzatua",
  "Saber que ha ocurrido X reduce el universo a los resultados que terminan en cruz. Dentro de ese nuevo conjunto comparamos la parte en la que también se eligió R con todo el suceso X.": "X gertatu dela jakiteak unibertsoa gurutzean amaitzen diren emaitzetara murrizten du. Multzo berri horren barruan, R ere aukeratu den zatia X gertaera osoarekin alderatzen dugu.",
  "2. Teorema de Bayes": "2. Bayesen teorema",
  "La intersección del numerador se calcula siguiendo un camino del árbol. El denominador reúne todos los caminos que pueden producir cruz.": "Zenbakitzaileko ebakidura zuhaitzeko bide bati jarraituz kalkulatzen da. Izendatzaileak gurutzea sor dezaketen bide guztiak biltzen ditu.",
  "3. Probabilidad del suceso complementario": "3. Gertaera osagarriaren probabilitatea",
  "Cara y cruz son los dos únicos resultados posibles. Por eso podemos obtener la probabilidad de cruz restando a 1 la probabilidad de cara.": "Aurpegia eta gurutzea dira bi emaitza posible bakarrak. Horregatik, gurutzearen probabilitatea lor dezakegu 1i aurpegiaren probabilitatea kenduz.",
  "Traducimos exactamente la pregunta": "Galdera zehazki sinboloetara itzultzen dugu",
  "Queremos la probabilidad de que la moneda sea R bajo la condición de que ha salido cruz. La condición conocida se escribe después de la barra.": "Txanpona R izateko probabilitatea nahi dugu, gurutzea atera delako baldintzapean. Baldintza ezaguna barraren ondoren idazten da.",
  "No es P(X | R): esa sería la probabilidad de cruz cuando ya sabemos que la moneda es R.": "Ez da P(X | R): hori gurutzea lortzeko probabilitatea litzateke txanpona R dela badakigunean.",
  "Calculamos la probabilidad total de cruz": "Gurutzearen probabilitate osoa kalkulatzen dugu",
  "Como cara y cruz son complementarios, podemos usar el resultado del apartado A.": "Aurpegia eta gurutzea osagarriak direnez, A ataleko emaitza erabil dezakegu.",
  "El árbol ofrece la misma comprobación sumando los caminos que terminan en cruz.": "Zuhaitzak egiaztapen bera ematen du gurutzean amaitzen diren bideak batuz.",
  "Calculamos el camino favorable: R y cruz": "Aldeko bidea kalkulatzen dugu: R eta gurutzea",
  "Para que se elija R y salga cruz deben ocurrir las dos etapas del camino.": "R aukeratu eta gurutzea ateratzeko, bidearen bi etapak gertatu behar dira.",
  "Aplicamos Bayes y simplificamos": "Bayesen teorema aplikatu eta sinplifikatzen dugu",
  "Dividimos la probabilidad del camino favorable entre la probabilidad de todos los caminos compatibles con la información «ha salido cruz».": "Aldeko bidearen probabilitatea «gurutzea atera da» informazioarekin bateragarriak diren bide guztien probabilitateaz zatitzen dugu.",
  "Interpretamos el nuevo universo": "Unibertso berria interpretatzen dugu",
  "Al expresar P(X) con denominador 30, cinco partes proceden de R, ninguna de L y ocho de M. Una vez sabemos que salió cruz, solo quedan esas 13 partes posibles.": "P(X) 30 izendatzailearekin adieraztean, bost zati R-tik datoz, bat ere ez L-tik, eta zortzi M-tik. Gurutzea atera dela dakigunean, 13 zati posible horiek baino ez dira geratzen.",
  "De las 13 partes que producen cruz, 5 corresponden a R. La moneda L aporta 0.": "Gurutzea sortzen duten 13 zatietatik, 5 R-ri dagozkio. L txanponak 0 ematen du.",
  "Por tanto, aproximadamente el 38,46 % de las cruces procede de la moneda R.": "Beraz, gurutzeen % 38,46 inguru R txanponetik dator."
}));

const originalCoinsBayesText = new WeakMap();

const coinsBayesAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".coin-data", attribute: "aria-label", eu: "Hiru txanponen ezaugarriak", es: "Características de las tres monedas" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" },
  { selector: ".coin-tree-figure", attribute: "aria-label", eu: "Hiru txanponetako bat aukeratu eta aurpegia edo gurutzea lortzeko probabilitate-zuhaitza", es: "Árbol de probabilidades de elegir una de tres monedas y obtener cara o cruz" },
  { selector: ".coin-tree-board", attribute: "aria-label", eu: "R, L eta M txanponen eta bakoitzarekin aurpegia edo gurutzea lortzeko probabilitateen zuhaitza", es: "Árbol con las monedas R, L y M y las probabilidades de obtener cara o cruz con cada una" },
  { selector: ".cross-composition", attribute: "aria-label", eu: "Gurutze-emaitzen osaera: bost zati R-tik datoz eta zortzi M-tik", es: "Composición de los resultados cruz: cinco partes proceden de R y ocho de M" },
];

function applyCoinsBayesText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalCoinsBayesText.has(node)) {
      originalCoinsBayesText.set(node, node.nodeValue);
    }

    const original = originalCoinsBayesText.get(node);
    const key = original.trim();

    if (language === "eu" && coinsBayesTextEu.has(key)) {
      const translation = coinsBayesTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyCoinsBayesLanguage(language) {
  document.title = language === "eu"
    ? "Hiru txanpon: probabilitate osoa eta Bayes · Matematika II"
    : "Tres monedas: probabilidad total y Bayes · Matemáticas II";

  applyCoinsBayesText(language);

  coinsBayesAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyCoinsBayesLanguage(event.detail.language);
});

applyCoinsBayesLanguage(window.I18n?.getLanguage() ?? "eu");

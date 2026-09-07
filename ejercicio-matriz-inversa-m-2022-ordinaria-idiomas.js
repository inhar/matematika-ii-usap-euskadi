const inverseM2022TextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2022 · Ordinaria · Ejercicio B1": "2022 · Ohikoa · B1 ariketa",
  "Álgebra lineal · Matrices e inversa · 2022": "Aljebra lineala · Matrizeak eta alderantzizkoa · 2022",
  "Matriz inversa con parámetro m": "m parametrodun matrizearen alderantzizkoa",
  "Enunciado": "Enuntziatua",
  "Sea la matriz:": "Izan bedi matrize hau:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Apartado A": "A atala",
  "Apartado B": "B atala",
  "Idea de resolución": "Ebazpenaren ideia",
  "Una matriz cuadrada tiene inversa exactamente cuando su determinante es distinto de cero. Por tanto, no intentaremos calcular la inversa para todos los valores del parámetro: calcularemos el determinante de la matriz general y buscaremos únicamente sus ceros.": "Matrize karratu batek alderantzizkoa du baldin eta soilik baldin haren determinantea zero ez bada. Beraz, ez dugu parametroaren balio guztietarako alderantzizkoa kalkulatuko: matrize orokorraren determinantea kalkulatu eta haren zeroak bakarrik bilatuko ditugu.",
  "El determinante resulta ser un polinomio de segundo grado. Al factorizarlo, los valores que hacen nulo alguno de sus factores serán precisamente aquellos para los que la matriz pierde la inversa.": "Determinantea bigarren mailako polinomio bat da. Faktorizatzean, faktoreren bat nulu egiten duten balioak izango dira, hain zuzen, matrizeak alderantzizkoa galtzen duenak.",
  "Valores que impiden la inversa": "Alderantzizkoa eragozten duten balioak",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Cuándo existe la inversa": "1. Noiz existitzen den alderantzizkoa",
  "Una matriz cuadrada es invertible si existe otra matriz que, al multiplicarla por cualquiera de los dos lados, produce la matriz identidad.": "Matrize karratu bat alderantzikagarria da, bi aldeetako edozeinetatik biderkatzean identitate matrizea ematen duen beste matrize bat existitzen bada.",
  "2. Criterio del determinante": "2. Determinantearen irizpidea",
  "Para una matriz cuadrada, la existencia de la inversa equivale a que su determinante sea distinto de cero. Los valores que anulan el determinante son exactamente los que debemos encontrar.": "Matrize karratu batean, alderantzizkoa existitzea eta determinantea zero ez izatea baliokideak dira. Determinantea nulu egiten duten balioak dira aurkitu behar ditugunak.",
  "3. Desarrollo por cofactores": "3. Kofaktoreen bidezko garapena",
  "Al desarrollar un determinante por una fila, cada elemento multiplica a su menor y los signos se alternan. En la primera fila de una matriz de orden tres son positivo, negativo y positivo.": "Determinante bat errenkada baten arabera garatzean, elementu bakoitzak bere minorea biderkatzen du, eta zeinuak txandakatzen dira. Hirugarren ordenako matrize baten lehen errenkadan positiboa, negatiboa eta positiboa dira.",
  "Resolución completa": "Ebazpen osoa",
  "Aplicamos el criterio de invertibilidad": "Alderantzikagarritasunaren irizpidea aplikatzen dugu",
  "La matriz no tendrá inversa cuando su determinante sea cero. Mantenemos el parámetro y planteamos el determinante.": "Matrizeak ez du alderantzizkorik izango haren determinantea zero denean. Parametroa mantendu eta determinantea planteatzen dugu.",
  "Desarrollamos por la primera fila": "Lehen errenkadaren arabera garatzen dugu",
  "Calculamos por separado los tres términos, respetando la alternancia de signos.": "Hiru gaiak bereiz kalkulatzen ditugu, zeinuen txandakatzea errespetatuz.",
  "Primer término": "Lehen gaia",
  "Segundo término": "Bigarren gaia",
  "Tercer término": "Hirugarren gaia",
  "Simplificamos y factorizamos": "Sinplifikatu eta faktorizatzen dugu",
  "Sumamos los tres términos y extraemos el factor común dos.": "Hiru gaiak batu eta bi faktore komuna ateratzen dugu.",
  "Buscamos los ceros del determinante": "Determinantearen zeroak bilatzen ditugu",
  "Un producto es cero cuando alguno de sus factores es cero.": "Biderkadura bat zero da haren faktoreren bat zero denean.",
  "Interpretamos el resultado": "Emaitza interpretatzen dugu",
  "Para los dos valores encontrados el determinante es cero y la inversa no existe. Para cualquier otro valor del parámetro, la matriz sí es invertible.": "Aurkitutako bi balioetarako determinantea zero da eta alderantzizkoa ez da existitzen. Parametroaren beste edozein baliotarako, matrizea alderantzikagarria da.",
  "No tiene inversa.": "Ez du alderantzizkorik.",
  "Sí tiene inversa.": "Badu alderantzizkoa.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "no tiene inversa para": "ez du alderantzizkorik balio hauetarako:",
  "Resultado": "Emaitza",
  "Son los únicos valores para los que la matriz no tiene inversa.": "Matrizeak alderantzizkorik ez duen balio bakarrak dira.",
  "Al sustituir el parámetro por cero obtenemos una matriz numérica cuyo determinante vale cuatro, así que la inversa existe. Para calcularla colocaremos la matriz identidad a su derecha.": "Parametroaren ordez zero jarrita, determinantea lau duen zenbakizko matrize bat lortzen dugu; beraz, alderantzizkoa existitzen da. Kalkulatzeko, identitate matrizea jarriko dugu haren eskuinean.",
  "Aplicaremos operaciones elementales a las filas completas hasta convertir el bloque izquierdo en la identidad. En ese mismo instante, el bloque derecho se habrá transformado en la matriz inversa buscada.": "Errenkada osoei eragiketa elementalak aplikatuko dizkiegu ezkerreko blokea identitate bihurtu arte. Une horretan bertan, eskuineko blokea bilatutako matrize alderantzizko bihurtuko da.",
  "1. Método de Gauss-Jordan": "1. Gauss-Jordanen metodoa",
  "Escribimos la matriz junto a la identidad y aplicamos operaciones elementales por filas. Si el bloque izquierdo puede transformarse en la identidad, el bloque derecho termina siendo la inversa.": "Matrizea identitatearen ondoan idatzi eta errenkaden araberako eragiketa elementalak aplikatzen ditugu. Ezkerreko blokea identitate bihur badaiteke, eskuineko blokea alderantzizkoa izango da.",
  "2. Operaciones elementales por filas": "2. Errenkaden araberako eragiketa elementalak",
  "Podemos intercambiar dos filas, multiplicar una fila por un número distinto de cero o sumar a una fila un múltiplo de otra. Cada operación debe aplicarse a la fila completa, incluidos los dos bloques.": "Bi errenkada truka ditzakegu, errenkada bat zero ez den zenbaki batez biderkatu edo errenkada bati beste baten multiplo bat gehitu. Eragiketa bakoitza errenkada osoari aplikatu behar zaio, bi blokeak barne.",
  "3. Por qué aparece la inversa": "3. Zergatik agertzen den alderantzizkoa",
  "Las operaciones de fila equivalen a multiplicar por matrices elementales. La misma sucesión que convierte la matriz original en la identidad convierte la identidad inicial en la matriz inversa.": "Errenkada-eragiketak matrize elementalez biderkatzearen baliokideak dira. Jatorrizko matrizea identitate bihurtzen duen segida berak hasierako identitatea matrize alderantzizko bihurtzen du.",
  "Sustituimos el parámetro por cero": "Parametroaren ordez zero jartzen dugu",
  "Evaluamos la matriz y el determinante obtenido en el apartado anterior.": "Matrizea eta aurreko atalean lortutako determinantea ebaluatzen ditugu.",
  "Como el determinante no es cero, la inversa existe.": "Determinantea zero ez denez, alderantzizkoa existitzen da.",
  "Construimos la matriz ampliada": "Matrize hedatua eraikitzen dugu",
  "Colocamos la identidad de orden tres a la derecha de la matriz que queremos invertir.": "Hirugarren ordenako identitatea alderantzikatu nahi dugun matrizearen eskuinean jartzen dugu.",
  "Colocamos los pivotes en la diagonal": "Piboteak diagonalean kokatzen ditugu",
  "Intercambiamos la primera fila con la segunda y, después, la segunda con la tercera.": "Lehen errenkada bigarrenarekin trukatzen dugu, eta, ondoren, bigarrena hirugarrenarekin.",
  "Convertimos los pivotes en unos": "Piboteak bat bihurtzen ditugu",
  "Dividimos la segunda y la tercera fila entre dos. La operación afecta también al bloque derecho.": "Bigarren eta hirugarren errenkadak biz zatitzen ditugu. Eragiketak eskuineko blokeari ere eragiten dio.",
  "Eliminamos el elemento sobre el tercer pivote": "Hirugarren pibotearen gaineko elementua ezabatzen dugu",
  "Restamos la tercera fila a la segunda para obtener un cero en la posición situada sobre el último pivote.": "Hirugarren errenkada bigarrenari kentzen diogu azken pibotearen gaineko posizioan zero bat lortzeko.",
  "Completamos la identidad": "Identitatea osatzen dugu",
  "Sumamos dos veces la segunda fila a la primera. El bloque izquierdo queda convertido en la identidad.": "Bigarren errenkadaren bikoitza lehenengoari gehitzen diogu. Ezkerreko blokea identitate bihurtzen da.",
  "Leemos y comprobamos la inversa": "Alderantzizkoa irakurri eta egiaztatzen dugu",
  "El bloque derecho es la inversa. Multiplicarlo por la matriz original devuelve la identidad.": "Eskuineko blokea alderantzizkoa da. Jatorrizko matrizeaz biderkatzean identitatea lortzen da.",
  "El producto con la matriz original es la identidad.": "Jatorrizko matrizearekiko biderkadura identitatea da."
}));

const originalInverseM2022Text = new WeakMap();

const inverseM2022Attributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".inverse-m-2022-statement", attribute: "aria-label", eu: "m parametrodun hirugarren ordenako A matrizea", es: "Matriz A de orden tres con parámetro m" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Ebazpenaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
  { selector: ".tabs", attribute: "aria-label", eu: "Ebazpenaren atalak", es: "Apartados de la solución" }
];

function applyInverseM2022Text(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalInverseM2022Text.has(node)) {
      originalInverseM2022Text.set(node, node.nodeValue);
    }

    const original = originalInverseM2022Text.get(node);
    const key = original.trim();

    if (language === "eu" && inverseM2022TextEu.has(key)) {
      const translation = inverseM2022TextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyInverseM2022Language(language) {
  document.title = language === "eu"
    ? "m parametrodun matrizearen alderantzizkoa · Matematika II"
    : "Matriz inversa con parámetro m · Matemáticas II";

  applyInverseM2022Text(language);

  document.querySelectorAll("[data-inverse-m-language]").forEach((element) => {
    element.hidden = element.dataset.inverseMLanguage !== language;
  });

  inverseM2022Attributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyInverseM2022Language(event.detail.language);
});

applyInverseM2022Language(window.I18n?.getLanguage() ?? "eu");

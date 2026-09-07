const systemExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción A · Problema A.1": "2019 · Ohikoa · A aukera · A.1 problema",
  "Álgebra · Sistemas lineales · Junio de 2019": "Aljebra · Sistema linealak · 2019ko ekaina",
  "Discusión de un sistema con parámetro": "Parametrodun sistema baten eztabaida",
  "Enunciado": "Enuntziatua",
  "Discutir, en función de": "Eztabaidatu sistema hau",
  ", el sistema de ecuaciones:": "-ren arabera:",
  "Resolver en los casos de indeterminación, suponiendo que existan.": "Ebatzi indeterminazio-kasuak, halakorik badago.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.1": "A.1 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "Para discutir el sistema necesitamos saber cuándo tiene una solución, infinitas o ninguna. El determinante de la matriz de coeficientes localizará los valores de": "Sistema eztabaidatzeko, soluzio bat, infinitu soluzio edo bat ere ez noiz dituen jakin behar dugu. Koefizienteen matrizearen determinanteak portaera alda dezaketen",
  "en los que puede cambiar el comportamiento. Fuera de esos valores habrá solución única; en cada valor excepcional compararemos el rango de la matriz de coeficientes con el de la matriz ampliada y resolveremos únicamente si aparece un caso compatible indeterminado.": "-ren balioak aurkituko ditu. Balio horietatik kanpo soluzio bakarra egongo da; balio berezi bakoitzean koefizienteen matrizearen heina eta matrize hedatuarena alderatuko ditugu, eta kasu bateragarri indeterminatua agertzen bada soilik ebatziko dugu.",
  "Discusión y resolución del sistema": "Sistemaren eztabaida eta ebazpena",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Matriz de coeficientes y matriz ampliada": "1. Koefizienteen matrizea eta matrize hedatua",
  "Un sistema lineal se escribe como A·X = b. La matriz A contiene los coeficientes de las incógnitas y la matriz ampliada A* añade como última columna los términos independientes.": "Sistema lineal bat A·X = b moduan idazten da. A matrizeak ezezagunen koefizienteak ditu, eta A* matrize hedatuak gai askeen zutabea eransten du amaieran.",
  "2. Determinante y rango": "2. Determinantea eta heina",
  "En una matriz cuadrada de orden 3, det(A) ≠ 0 implica rango(A) = 3. Por tanto, el sistema tiene solución única. Solo hay que estudiar por separado los valores del parámetro que anulan el determinante.": "3. ordenako matrize karratu batean, det(A) ≠ 0 izateak heina(A) = 3 dela esan nahi du. Beraz, sistemak soluzio bakarra du. Determinantea zero egiten duten parametroaren balioak bakarrik aztertu behar dira bereizita.",
  "det(A) ≠ 0 ⇒ rango(A) = 3": "det(A) ≠ 0 ⇒ heina(A) = 3",
  "3. Teorema de Rouché-Frobenius": "3. Rouché-Frobeniusen teorema",
  "Sea n el número de incógnitas. La comparación entre los rangos de A y A* clasifica el sistema:": "Izan bedi n ezezagun kopurua. A-ren eta A*-ren heinen konparazioak sistema sailkatzen du:",
  "rango(A) = rango(A*) = n": "heina(A) = heina(A*) = n",
  "rango(A) = rango(A*) < n": "heina(A) = heina(A*) < n",
  "rango(A) < rango(A*)": "heina(A) < heina(A*)",
  "Solución única": "Soluzio bakarra",
  "Infinitas soluciones": "Infinitu soluzio",
  "Ninguna solución": "Soluziorik ez",
  "4. Parámetros libres": "4. Parametro libreak",
  "Si hay infinitas soluciones y el rango es 2 con 3 incógnitas, queda una incógnita libre. Se le asigna un parámetro, normalmente λ, y las demás incógnitas se expresan en función de él.": "Infinitu soluzio badaude eta 3 ezezaguneko sistemaren heina 2 bada, ezezagun bat libre geratzen da. Parametro bat esleitzen zaio, normalean λ, eta gainerako ezezagunak haren arabera adierazten dira.",
  "Resolución completa": "Ebazpen osoa",
  "Escribimos la matriz de coeficientes": "Koefizienteen matrizea idazten dugu",
  "Tomamos en cada ecuación los coeficientes de x, y, z, en ese orden. Cuando una incógnita no aparece, su coeficiente es 0.": "Ekuazio bakoitzean x, y eta z-ren koefizienteak hartzen ditugu, ordena horretan. Ezezagun bat agertzen ez denean, haren koefizientea 0 da.",
  "La columna de términos independientes es b = (m − 1, m − 2, m − 3)": "Gai askeen zutabea hau da: b = (m − 1, m − 2, m − 3)",
  "Calculamos det(A)": "det(A) kalkulatzen dugu",
  "Desarrollamos por la primera fila, con signos +, −, +:": "Lehen errenkadaren arabera garatzen dugu, +, −, + zeinuekin:",
  "El determinante se anula exactamente para m = 0 y m = 3. Esos son los únicos valores que requieren un estudio separado.": "Determinantea m = 0 eta m = 3 denean bakarrik da zero. Horiek dira bereizita aztertu beharreko balio bakarrak.",
  "Caso m ≠ 0 y m ≠ 3": "m ≠ 0 eta m ≠ 3 kasua",
  "En este caso det(A) ≠ 0, por lo que rango(A) = 3. Como hay tres incógnitas, el sistema es compatible determinado: tiene una única solución.": "Kasu honetan det(A) ≠ 0 da; beraz, heina(A) = 3. Hiru ezezagun daudenez, sistema bateragarri determinatua da: soluzio bakarra du.",
  "Caso m = 0": "m = 0 kasua",
  "Sustituimos m = 0 en el sistema:": "m = 0 sisteman ordezkatzen dugu:",
  "Las dos primeras ecuaciones tienen el mismo lado izquierdo, pero exigen valores distintos. Restando la primera a la segunda se obtiene 0 = −1, una contradicción.": "Lehen bi ekuazioek ezkerreko alde bera dute, baina balio desberdinak eskatzen dituzte. Lehenengoa bigarrenari kenduta 0 = −1 lortzen da, kontraesan bat.",
  "rango(A) = 2": "heina(A) = 2",
  "rango(A*) = 3": "heina(A*) = 3",
  "rango(A*) = 2": "heina(A*) = 2",
  "Los rangos son distintos; por Rouché-Frobenius, el sistema es incompatible y no tiene solución.": "Heinak desberdinak dira; Rouché-Frobeniusen teoremaren arabera, sistema bateraezina da eta ez du soluziorik.",
  "Caso m = 3": "m = 3 kasua",
  "Al sustituir m = 3 obtenemos:": "m = 3 ordezkatuta, hau lortzen dugu:",
  "La primera ecuación es 2 veces la segunda menos 3 veces la tercera, también en los términos independientes. Por tanto, no aporta una condición nueva.": "Lehen ekuazioa bigarrenaren 2 bider ken hirugarrenaren 3 bider da, baita gai askeetan ere. Beraz, ez du baldintza berririk ematen.",
  "Además, el menor formado por las filas 2 y 3 y las columnas 1 y 2 vale −3, que no es cero. Así, los dos rangos son exactamente 2:": "Gainera, 2. eta 3. errenkadek eta 1. eta 2. zutabeek osatutako minoreak −3 balio du, eta ez da zero. Hortaz, bi heinak 2 dira zehazki:",
  "Como 2 < 3, el sistema es compatible indeterminado y tiene una variable libre.": "2 < 3 denez, sistema bateragarri indeterminatua da eta aldagai libre bat du.",
  "Resolvemos el caso indeterminado": "Kasu indeterminatua ebazten dugu",
  "De la tercera ecuación obtenemos y = z. Elegimos z como variable libre y escribimos z = λ.": "Hirugarren ekuaziotik y = z lortzen dugu. z aldagai libre gisa aukeratu eta z = λ idazten dugu.",
  "La primera ecuación queda automáticamente satisfecha, porque depende de las otras dos.": "Lehen ekuazioa automatikoki betetzen da, beste bien mendekoa delako.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Compatible determinado": "Bateragarri determinatua",
  "Una solución.": "Soluzio bat.",
  "Incompatible": "Bateraezina",
  "Ninguna solución.": "Soluziorik ez.",
  "Compatible indeterminado": "Bateragarri indeterminatua",
  "Infinitas soluciones.": "Infinitu soluzio.",
  "Resultado": "Emaitza",
  "Único caso indeterminado: m = 3, con λ ∈ ℝ.": "Kasu indeterminatu bakarra: m = 3, λ ∈ ℝ izanik.",
}));

const originalSystemExerciseText = new WeakMap();

const systemExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-system", attribute: "aria-label", eu: "m parametrodun hiru ekuazioko sistema", es: "Sistema de tres ecuaciones con parámetro m" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applySystemExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalSystemExerciseText.has(node)) {
      originalSystemExerciseText.set(node, node.nodeValue);
    }

    const original = originalSystemExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && systemExerciseTextEu.has(key)) {
      const translation = systemExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applySystemExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Parametrodun sistema lineala · Matematika II"
    : "Sistema lineal con parámetro · Matemáticas II";

  applySystemExerciseText(language);

  systemExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applySystemExerciseLanguage(event.detail.language);
});

applySystemExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

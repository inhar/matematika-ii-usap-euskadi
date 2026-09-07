const extraordinarySystemTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Extraordinaria · Opción A · Problema A.1": "2019 · Ezohikoa · A aukera · A.1 problema",
  "Álgebra · Sistemas lineales · Julio de 2019": "Aljebra · Sistema linealak · 2019ko uztaila",
  "Discusión de un sistema según el parámetro m": "Sistema baten eztabaida m parametroaren arabera",
  "Enunciado": "Enuntziatua",
  "Discutir, en función de los valores de": "Eztabaidatu sistema hau",
  ", el siguiente sistema:": "-ren balioen arabera:",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.1": "A.1 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "Queremos clasificar el sistema según tenga una solución, infinitas o ninguna. Calcularemos el determinante de la matriz de coeficientes porque sus ceros son los únicos valores de m en los que puede cambiar el tipo de sistema. Fuera de esos valores el sistema tendrá solución única; en cada valor excepcional compararemos el rango de la matriz de coeficientes con el de la matriz ampliada mediante el teorema de Rouché-Frobenius.": "Sistema soluzio bakarra, infinitu soluzio edo bat ere ez izatearen arabera sailkatu nahi dugu. Koefizienteen matrizearen determinantea kalkulatuko dugu, haren zeroak baitira sistema mota alda dezaketen m-ren balio bakarrak. Balio horietatik kanpo sistemak soluzio bakarra izango du; balio berezi bakoitzean koefizienteen matrizearen heina eta matrize hedatuarena alderatuko ditugu Rouché-Frobeniusen teoremaren bidez.",
  "Discusión completa del sistema": "Sistemaren eztabaida osoa",
  "Teoría necesaria": "Beharrezko teoria",
  "1. Matriz de coeficientes y matriz ampliada": "1. Koefizienteen matrizea eta matrize hedatua",
  "Un sistema lineal se escribe como A·X = b. La matriz A contiene los coeficientes de x, y, z; la matriz ampliada A* añade la columna b de términos independientes.": "Sistema lineal bat A·X = b moduan idazten da. A matrizeak x, y eta z-ren koefizienteak ditu; A* matrize hedatuak gai askeen b zutabea eransten du.",
  "2. Determinante y valores críticos": "2. Determinantea eta balio kritikoak",
  "Si A es cuadrada y det(A) ≠ 0, entonces A tiene rango máximo. En un sistema de tres ecuaciones con tres incógnitas esto garantiza una única solución. Por eso solo debemos estudiar aparte los valores de m que cumplen det(A) = 0.": "A karratua bada eta det(A) ≠ 0 bada, A-k hein maximoa du. Hiru ekuazio eta hiru ezezaguneko sistema batean, horrek soluzio bakarra bermatzen du. Horregatik, det(A) = 0 betetzen duten m-ren balioak bakarrik aztertu behar ditugu bereizita.",
  "⇒ rango(A) = 3": "⇒ heina(A) = 3",
  "⇒ solución única": "⇒ soluzio bakarra",
  "3. Cómo justificar un rango igual a 2": "3. Heina 2 dela nola justifikatu",
  "Un menor de orden 2 no nulo demuestra que el rango es al menos 2. Si además una fila es combinación lineal de otras dos, no puede haber tres filas independientes y el rango es como máximo 2. Juntas, ambas observaciones fijan el rango exactamente en 2.": "Zero ez den 2. ordenako minore batek heina gutxienez 2 dela frogatzen du. Gainera, errenkada bat beste biren konbinazio lineala bada, ezin dira hiru errenkada independente egon, eta heina gehienez 2 da. Bi behaketek batera heina zehazki 2 dela finkatzen dute.",
  "4. Teorema de Rouché-Frobenius": "4. Rouché-Frobeniusen teorema",
  "Con tres incógnitas, la comparación entre los rangos de A y A* clasifica el sistema:": "Hiru ezezagunekin, A-ren eta A*-ren heinen konparazioak sistema sailkatzen du:",
  "rango(A) = rango(A*) = 3": "heina(A) = heina(A*) = 3",
  "rango(A) = rango(A*) < 3": "heina(A) = heina(A*) < 3",
  "rango(A) < rango(A*)": "heina(A) < heina(A*)",
  "Una solución": "Soluzio bat",
  "Infinitas soluciones": "Infinitu soluzio",
  "Ninguna solución": "Soluziorik ez",
  "Resolución completa": "Ebazpen osoa",
  "Construimos las dos matrices": "Bi matrizeak eraikitzen ditugu",
  "Tomamos los coeficientes de x, y, z en ese orden. La matriz ampliada incorpora además los términos independientes 6, 1 y m.": "x, y eta z-ren koefizienteak ordena horretan hartzen ditugu. Matrize hedatuak 6, 1 eta m gai askeak ere barne hartzen ditu.",
  "Calculamos el determinante de A": "A-ren determinantea kalkulatzen dugu",
  "Desarrollamos por la primera fila. Para cada entrada calculamos su menor 2 × 2 y respetamos los signos +, −, +.": "Lehen errenkadaren arabera garatzen dugu. Sarrera bakoitzerako haren 2 × 2 minorea kalkulatu, eta +, −, + zeinuak errespetatzen ditugu.",
  "Primera entrada": "Lehen sarrera",
  "Segunda entrada": "Bigarren sarrera",
  "Tercera entrada": "Hirugarren sarrera",
  "Sumamos los tres términos y simplificamos sin saltos.": "Hiru gaiak batu eta urratsik gabe utzi gabe sinplifikatzen dugu.",
  "Localizamos el valor excepcional": "Balio berezia aurkitzen dugu",
  "El comportamiento solo puede cambiar cuando el determinante se anula.": "Portaera determinantea zero denean bakarrik alda daiteke.",
  "Corrección de la fuente:": "Iturriaren zuzenketa:",
  "en la página siguiente de la solución aparece dos veces m = 18, pero se ha omitido el signo menos. El determinante y la propia matriz sustituida confirman que el valor correcto es m = −18.": "ebazpenaren hurrengo orrialdean m = 18 bi aldiz agertzen da, baina minus zeinua falta da. Determinanteak eta ordezkatutako matrizeak berak baieztatzen dute balio zuzena m = −18 dela.",
  "Caso m ≠ −18": "m ≠ −18 kasua",
  "Si m no vale −18, entonces det(A) ≠ 0. La matriz A tiene rango 3 y la ampliada no puede tener un rango mayor que 3 porque solo hay tres filas.": "m ez bada −18, det(A) ≠ 0 da. A matrizearen heina 3 da, eta matrize hedatuak ezin du 3 baino hein handiagoa izan, hiru errenkada baino ez baititu.",
  "rango(A) = 3": "heina(A) = 3",
  "rango(A*) = 3": "heina(A*) = 3",
  "Como el rango común coincide con las tres incógnitas, el sistema es compatible determinado: tiene una única solución.": "Hein komuna hiru ezezagunekin bat datorrenez, sistema bateragarri determinatua da: soluzio bakarra du.",
  "Caso m = −18: rango de A": "m = −18 kasua: A-ren heina",
  "Sustituimos el valor crítico. Como det(A) = 0, sabemos que rango(A) < 3. Para probar que no baja de 2 tomamos el menor de las dos primeras filas y las dos primeras columnas.": "Balio kritikoa ordezkatzen dugu. det(A) = 0 denez, badakigu heina(A) < 3 dela. Heina 2tik jaisten ez dela frogatzeko, lehen bi errenkaden eta lehen bi zutabeen minorea hartzen dugu.",
  "det(A) = 0 ⇒ rango(A) < 3": "det(A) = 0 ⇒ heina(A) < 3",
  "menor 2 × 2 no nulo ⇒ rango(A) ≥ 2": "zero ez den 2 × 2 minorea ⇒ heina(A) ≥ 2",
  "rango(A) = 2": "heina(A) = 2",
  "Caso m = −18: rango de A*": "m = −18 kasua: A*-ren heina",
  "Escribimos la matriz ampliada ya sustituida y comparamos sus filas completas, incluida la última columna.": "Ordezkatutako matrize hedatua idatzi eta haren errenkada osoak alderatzen ditugu, azken zutabea barne.",
  "La tercera fila completa se obtiene combinando las dos primeras:": "Hirugarren errenkada osoa lehen biak konbinatuz lortzen da:",
  "Columna 1": "1. zutabea",
  "Columna 2": "2. zutabea",
  "Columna 3": "3. zutabea",
  "Columna ampliada": "Zutabe hedatua",
  "La relación incluye los términos independientes, así que añadir la columna ampliada no aumenta el rango.": "Erlazioak gai askeak barne hartzen ditu; beraz, zutabe hedatua gehitzeak ez du heina handitzen.",
  "rango(A*) = 2": "heina(A*) = 2",
  "Clasificamos el valor excepcional": "Balio berezia sailkatzen dugu",
  "Los rangos son iguales, pero menores que el número de incógnitas.": "Heinak berdinak dira, baina ezezagun kopurua baino txikiagoak.",
  "rango(A) = rango(A*) = 2": "heina(A) = heina(A*) = 2",
  "2 < 3 incógnitas": "2 < 3 ezezagun",
  "Sistema compatible indeterminado": "Sistema bateragarri indeterminatua",
  "Por tanto, para m = −18 el sistema tiene infinitas soluciones. No aparece ningún valor que produzca un sistema incompatible.": "Beraz, m = −18 denean sistemak infinitu soluzio ditu. Ez da sistema bateraezina sortzen duen baliorik agertzen.",
  "Cálculo esencial": "Funtsezko kalkulua",
  "Compatible determinado": "Bateragarri determinatua",
  "Una única solución.": "Soluzio bakarra.",
  "Compatible indeterminado": "Bateragarri indeterminatua",
  "Infinitas soluciones.": "Infinitu soluzio.",
  "Resultado": "Emaitza",
  "m ≠ −18: una solución": "m ≠ −18: soluzio bat",
  "m = −18: infinitas soluciones": "m = −18: infinitu soluzio",
  "No hay ningún caso incompatible.": "Ez dago kasu bateraezinik."
}));

const originalExtraordinarySystemText = new WeakMap();

const extraordinarySystemAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".statement-system", attribute: "aria-label", eu: "m parametrodun hiru ekuazioko sistema", es: "Sistema de tres ecuaciones con parámetro m" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyExtraordinarySystemText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;
    if (!originalExtraordinarySystemText.has(node)) {
      originalExtraordinarySystemText.set(node, node.nodeValue);
    }

    const original = originalExtraordinarySystemText.get(node);
    const key = original.trim();
    if (language === "eu" && extraordinarySystemTextEu.has(key)) {
      const translation = extraordinarySystemTextEu.get(key);
      const leadingSpace = original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyExtraordinarySystemLanguage(language) {
  document.title = language === "eu"
    ? "Parametrodun sistema linealaren eztabaida · Matematika II"
    : "Discusión de un sistema lineal con parámetro · Matemáticas II";

  applyExtraordinarySystemText(language);

  extraordinarySystemAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyExtraordinarySystemLanguage(event.detail.language);
});

applyExtraordinarySystemLanguage(window.I18n?.getLanguage() ?? "eu");

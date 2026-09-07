const tangentExerciseTextEu = new Map(Object.entries({
  "← Volver a ejercicios": "← Itzuli ariketetara",
  "2019 · Ordinaria · Opción A · Problema A.3": "2019 · Ohikoa · A aukera · A.3 problema",
  "Análisis · Derivadas · Junio de 2019": "Analisia · Deribatuak · 2019ko ekaina",
  "Tangentes a una parábola desde un punto exterior": "Kanpoko puntu batetik parabola bati egindako ukitzaileak",
  "Enunciado": "Enuntziatua",
  "Dada la función y el punto exterior a su gráfica:": "Funtzio hau eta haren grafikotik kanpoko puntua emanda:",
  "Encontrar la recta o rectas tangentes a f que pasan por P.": "Aurkitu P-tik igarotzen diren f-ren zuzen ukitzaileak.",
  "Qué quieres ver": "Zer ikusi nahi duzu",
  "Idea": "Ideia",
  "Esencial": "Funtsezkoa",
  "Paso a paso": "Urratsez urrats",
  "Con teoría": "Teoriarekin",
  "Problema A.3": "A.3 problema",
  "Idea de resolución": "Ebazpenaren ideia",
  "Llamaremos a a la coordenada x del punto desconocido de tangencia. Como ese punto está en la parábola, será T = (a, f(a)); además, la pendiente de la tangente allí es f′(a). Con esos dos datos escribiremos la ecuación general de la tangente y exigiremos que pase por P = (6, 0). Obtendremos una ecuación de segundo grado para a: cada una de sus soluciones determinará una recta tangente.": "Ukitze-puntu ezezagunaren x koordenatuari a deituko diogu. Puntu hori parabolan dagoenez, T = (a, f(a)) izango da; gainera, puntu horretako ukitzailearen malda f′(a) da. Bi datu horiekin ukitzailearen ekuazio orokorra idatzi eta P = (6, 0) puntutik igarotzeko baldintza ezarriko dugu. a-rentzako bigarren mailako ekuazio bat lortuko dugu: haren soluzio bakoitzak zuzen ukitzaile bat zehaztuko du.",
  "Rectas tangentes que pasan por P": "P-tik igarotzen diren zuzen ukitzaileak",
  "Teoría necesaria": "Beharrezko teoria",
  "1. La derivada da la pendiente de la tangente": "1. Deribatuak ukitzailearen malda ematen du",
  "Si una función es derivable en x = a, la pendiente de su recta tangente en ese punto es el valor de la derivada.": "Funtzio bat x = a puntuan deribagarria bada, puntu horretako zuzen ukitzailearen malda deribatuaren balioa da.",
  "2. Ecuación punto-pendiente": "2. Puntu-malda ekuazioa",
  "La recta de pendiente m que pasa por (x₀, y₀) se escribe:": "m malda duen eta (x₀, y₀) puntutik igarotzen den zuzena honela idazten da:",
  "En una tangente, el punto conocido es T = (a, f(a)) y la pendiente es f′(a).": "Ukitzaile batean, puntu ezaguna T = (a, f(a)) da eta malda f′(a) da.",
  "3. Condición de paso por un punto": "3. Puntu batetik igarotzeko baldintza",
  "Una recta pasa por P = (6, 0) si, al sustituir x = 6 e y = 0 en su ecuación, la igualdad se cumple. Esta condición permitirá encontrar a.": "Zuzen bat P = (6, 0) puntutik igarotzen da bere ekuazioan x = 6 eta y = 0 ordezkatzean berdintza betetzen bada. Baldintza horri esker a aurkituko dugu.",
  "4. Ecuación de segundo grado": "4. Bigarren mailako ekuazioa",
  "Para una ecuación mónica u² + bu + c = 0, las soluciones se calculan con:": "u² + bu + c = 0 ekuazio moniko baten soluzioak formula honekin kalkulatzen dira:",
  "Si aparecen dos soluciones distintas, habrá dos puntos de tangencia y, por tanto, dos rectas.": "Bi soluzio desberdin agertzen badira, bi ukitze-puntu eta, beraz, bi zuzen egongo dira.",
  "Resolución completa": "Ebazpen osoa",
  "Representamos el punto de tangencia": "Ukitze-puntua adierazten dugu",
  "Sea a la coordenada x del punto donde la recta toca la parábola. Como el punto pertenece a la gráfica de f, su coordenada y es f(a).": "Izan bedi a zuzenak parabola ukitzen duen puntuaren x koordenatua. Puntua f-ren grafikokoa denez, haren y koordenatua f(a) da.",
  "Calculamos la pendiente de la tangente": "Ukitzailearen malda kalkulatzen dugu",
  "Derivamos f(x) = x² + 64. La derivada de x² es 2x y la de una constante es 0.": "f(x) = x² + 64 deribatzen dugu. x²-ren deribatua 2x da, eta konstante batena 0.",
  "Por tanto, la pendiente de la tangente en T es m = 2a.": "Beraz, T puntuko ukitzailearen malda m = 2a da.",
  "Escribimos la tangente en función de a": "Ukitzailea a-ren arabera idazten dugu",
  "Usamos la ecuación punto-pendiente con T = (a, a² + 64) y m = 2a:": "Puntu-malda ekuazioa T = (a, a² + 64) eta m = 2a datuekin erabiltzen dugu:",
  "Esta fórmula representa la tangente para cualquier posible punto de contacto a.": "Formula horrek a ukitze-puntu posible bakoitzari dagokion ukitzailea adierazten du.",
  "Imponemos que la recta pase por P": "Zuzenak P-tik igarotzeko baldintza ezartzen dugu",
  "Sustituimos las coordenadas P = (6, 0), es decir, x = 6 e y = 0:": "P = (6, 0) koordenatuak ordezkatzen ditugu, hau da, x = 6 eta y = 0:",
  "Resolvemos la ecuación de segundo grado": "Bigarren mailako ekuazioa ebazten dugu",
  "Sus coeficientes son 1, −12 y −64. Calculamos primero el discriminante:": "Haren koefizienteak 1, −12 eta −64 dira. Lehenik diskriminatzailea kalkulatzen dugu:",
  "Construimos las dos rectas": "Bi zuzenak eraikitzen ditugu",
  "Sustituimos cada valor de a en y = 2ax − a² + 64.": "a-ren balio bakoitza y = 2ax − a² + 64 ekuazioan ordezkatzen dugu.",
  "Comprobamos el resultado": "Emaitza egiaztatzen dugu",
  "Las dos rectas pasan por P porque al sustituir x = 6 se obtiene y = 0. Además, sus pendientes coinciden con la derivada en sus respectivos puntos de tangencia.": "Bi zuzenak P-tik igarotzen dira, x = 6 ordezkatzean y = 0 lortzen delako. Gainera, haien maldak bat datoz dagozkien ukitze-puntuetako deribatuarekin.",
  "T₁ = (16, 320), pendiente 32 = f′(16)": "T₁ = (16, 320), malda 32 = f′(16)",
  "T₂ = (−4, 80), pendiente −8 = f′(−4)": "T₂ = (−4, 80), malda −8 = f′(−4)",
  "Cálculo esencial": "Funtsezko kalkulua",
  "P(6, 0) ⇒ a² − 12a − 64 = 0 ⇒ a = 16 o a = −4": "P(6, 0) ⇒ a² − 12a − 64 = 0 ⇒ a = 16 edo a = −4",
  "Resultado": "Emaitza",
  "Las dos rectas son tangentes a f y pasan por P.": "Bi zuzenak f-ren ukitzaileak dira eta P-tik igarotzen dira.",
}));

const originalTangentExerciseText = new WeakMap();

const tangentExerciseAttributes = [
  { selector: ".exercise-nav", attribute: "aria-label", eu: "Ariketaren nabigazioa", es: "Navegación del ejercicio" },
  { selector: ".function-data", attribute: "aria-label", eu: "f x berdin x ber bi gehi hirurogeita lau funtzioa eta P berdin sei koma zero puntua", es: "Función f de x igual a x al cuadrado más sesenta y cuatro y punto P igual a seis coma cero" },
  { selector: ".level-switch", attribute: "aria-label", eu: "Soluzioaren ideia edo sakontasun-maila", es: "Idea o nivel de profundidad de la solución" },
];

function applyTangentExerciseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) continue;

    if (!originalTangentExerciseText.has(node)) {
      originalTangentExerciseText.set(node, node.nodeValue);
    }

    const original = originalTangentExerciseText.get(node);
    const key = original.trim();

    if (language === "eu" && tangentExerciseTextEu.has(key)) {
      const translation = tangentExerciseTextEu.get(key);
      const leadingSpace = translation.startsWith("-") ? "" : original.match(/^\s*/)?.[0] ?? "";
      const trailingSpace = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leadingSpace}${translation}${trailingSpace}`;
    } else {
      node.nodeValue = original;
    }
  }
}

function applyTangentExerciseLanguage(language) {
  document.title = language === "eu"
    ? "Parabolaren ukitzaileak · Matematika II"
    : "Tangentes a una parábola · Matemáticas II";

  applyTangentExerciseText(language);

  tangentExerciseAttributes.forEach(({ selector, attribute, eu, es }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, language === "eu" ? eu : es);
    });
  });
}

document.addEventListener("languagechange", (event) => {
  applyTangentExerciseLanguage(event.detail.language);
});

applyTangentExerciseLanguage(window.I18n?.getLanguage() ?? "eu");

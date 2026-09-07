const contentTree = [
  {
    id: "algebra",
    label: "Álgebra lineal",
    children: [
      {
        id: "algebra.matrices",
        label: "Matrices",
        children: [
          { id: "algebra.matrices.tipos", label: "Tipos, dimensión e igualdad" },
          { id: "algebra.matrices.operaciones", label: "Suma y producto por escalares" },
          { id: "algebra.matrices.producto", label: "Producto de matrices" },
          { id: "algebra.matrices.potencias", label: "Potencias de matrices" },
          { id: "algebra.matrices.identidad", label: "Matriz identidad" },
          { id: "algebra.matrices.inversa", label: "Matriz inversa" },
          { id: "algebra.matrices.ecuaciones", label: "Ecuaciones matriciales" },
          { id: "algebra.matrices.rango", label: "Rango de una matriz" },
          { id: "algebra.matrices.parametros", label: "Matrices con parámetros" },
        ],
      },
      {
        id: "algebra.determinantes",
        label: "Determinantes",
        children: [
          { id: "algebra.determinantes.orden", label: "Determinantes de orden 2 y 3" },
          { id: "algebra.determinantes.menores", label: "Menores y cofactores" },
          { id: "algebra.determinantes.laplace", label: "Desarrollo de Laplace" },
          { id: "algebra.determinantes.propiedades", label: "Propiedades de los determinantes" },
          { id: "algebra.determinantes.invertibilidad", label: "Determinante e invertibilidad" },
          { id: "algebra.determinantes.inversa", label: "Cálculo de la inversa" },
          { id: "algebra.determinantes.rango", label: "Determinante y rango" },
          { id: "algebra.determinantes.parametros", label: "Determinantes con parámetros" },
        ],
      },
      {
        id: "algebra.sistemas",
        label: "Sistemas de ecuaciones lineales",
        children: [
          { id: "algebra.sistemas.matricial", label: "Expresión matricial" },
          { id: "algebra.sistemas.gauss", label: "Método de Gauss" },
          { id: "algebra.sistemas.cramer", label: "Regla de Cramer" },
          { id: "algebra.sistemas.rouche", label: "Teorema de Rouché-Frobenius" },
          { id: "algebra.sistemas.parametros", label: "Discusión con parámetros" },
          { id: "algebra.sistemas.modelizacion", label: "Problemas y modelización" },
        ],
      },
    ],
  },
  {
    id: "analisis",
    label: "Análisis",
    children: [
      {
        id: "analisis.funciones",
        label: "Funciones",
        children: [
          { id: "analisis.funciones.dominio", label: "Dominio, recorrido y simetrías" },
          { id: "analisis.funciones.operaciones", label: "Operaciones y composición" },
          { id: "analisis.funciones.inversa", label: "Función inversa" },
          { id: "analisis.funciones.elementales", label: "Funciones elementales" },
        ],
      },
      {
        id: "analisis.limites",
        label: "Límites y continuidad",
        children: [
          { id: "analisis.limites.calculo", label: "Cálculo de límites" },
          { id: "analisis.limites.indeterminaciones", label: "Indeterminaciones" },
          { id: "analisis.limites.laterales", label: "Límites laterales e infinitos" },
          { id: "analisis.limites.asintotas", label: "Asíntotas" },
          { id: "analisis.limites.continuidad", label: "Continuidad" },
          { id: "analisis.limites.teoremas", label: "Teoremas de continuidad" },
        ],
      },
      {
        id: "analisis.derivadas",
        label: "Derivadas",
        children: [
          { id: "analisis.derivadas.definicion", label: "Definición e interpretación geométrica" },
          { id: "analisis.derivadas.reglas", label: "Reglas de derivación" },
          { id: "analisis.derivadas.tangente", label: "Recta tangente y normal" },
          { id: "analisis.derivadas.derivabilidad", label: "Derivabilidad" },
          { id: "analisis.derivadas.lhopital", label: "Regla de L’Hôpital" },
        ],
      },
      {
        id: "analisis.estudio",
        label: "Estudio y optimización de funciones",
        children: [
          { id: "analisis.estudio.crecimiento", label: "Crecimiento y extremos" },
          { id: "analisis.estudio.concavidad", label: "Concavidad e inflexión" },
          { id: "analisis.estudio.representacion", label: "Representación completa" },
          { id: "analisis.estudio.teoremas", label: "Rolle y valor medio" },
          { id: "analisis.estudio.optimizacion", label: "Problemas de optimización" },
        ],
      },
      {
        id: "analisis.integrales",
        label: "Integrales",
        children: [
          { id: "analisis.integrales.inmediatas", label: "Primitivas inmediatas" },
          { id: "analisis.integrales.sustitucion", label: "Cambio de variable" },
          { id: "analisis.integrales.partes", label: "Integración por partes" },
          { id: "analisis.integrales.racionales", label: "Funciones racionales" },
          { id: "analisis.integrales.definida", label: "Integral definida y regla de Barrow" },
        ],
      },
      {
        id: "analisis.aplicaciones-integral",
        label: "Aplicaciones de la integral",
        children: [
          { id: "analisis.aplicaciones-integral.bajo-curva", label: "Área bajo una curva" },
          { id: "analisis.aplicaciones-integral.entre-curvas", label: "Área entre curvas" },
          { id: "analisis.aplicaciones-integral.recintos", label: "Recintos delimitados" },
          { id: "analisis.aplicaciones-integral.volumenes", label: "Volúmenes de revolución" },
        ],
      },
    ],
  },
  {
    id: "geometria",
    label: "Geometría en el espacio",
    children: [
      {
        id: "geometria.vectores",
        label: "Vectores",
        children: [
          { id: "geometria.vectores.operaciones", label: "Operaciones y dependencia lineal" },
          { id: "geometria.vectores.escalar", label: "Producto escalar" },
          { id: "geometria.vectores.vectorial", label: "Producto vectorial" },
          { id: "geometria.vectores.mixto", label: "Producto mixto" },
        ],
      },
      {
        id: "geometria.rectas-planos",
        label: "Rectas y planos",
        children: [
          { id: "geometria.rectas-planos.recta", label: "Ecuaciones de la recta" },
          { id: "geometria.rectas-planos.plano", label: "Ecuaciones del plano" },
          { id: "geometria.rectas-planos.posiciones", label: "Posiciones relativas" },
          { id: "geometria.rectas-planos.intersecciones", label: "Intersecciones" },
          { id: "geometria.rectas-planos.parametros", label: "Problemas con parámetros" },
        ],
      },
      {
        id: "geometria.metrica",
        label: "Geometría métrica",
        children: [
          { id: "geometria.metrica.angulos", label: "Ángulos" },
          { id: "geometria.metrica.distancias", label: "Distancias" },
          { id: "geometria.metrica.perpendicularidad", label: "Perpendicularidad" },
          { id: "geometria.metrica.proyecciones", label: "Proyecciones" },
          { id: "geometria.metrica.simetria", label: "Simetrías" },
          { id: "geometria.metrica.areas-volumenes", label: "Áreas y volúmenes" },
        ],
      },
    ],
  },
  {
    id: "probabilidad",
    label: "Probabilidad",
    children: [
      {
        id: "probabilidad.sucesos",
        label: "Probabilidad",
        children: [
          { id: "probabilidad.sucesos.operaciones", label: "Operaciones con sucesos" },
          { id: "probabilidad.sucesos.condicionada", label: "Probabilidad condicionada" },
          { id: "probabilidad.sucesos.independencia", label: "Independencia" },
          { id: "probabilidad.sucesos.diagramas", label: "Tablas y diagramas de árbol" },
          { id: "probabilidad.sucesos.total", label: "Probabilidad total" },
          { id: "probabilidad.sucesos.bayes", label: "Teorema de Bayes" },
        ],
      },
      {
        id: "probabilidad.variables",
        label: "Variables aleatorias",
        children: [
          { id: "probabilidad.variables.tipos", label: "Variables discretas y continuas" },
          { id: "probabilidad.variables.funciones", label: "Funciones de probabilidad" },
          { id: "probabilidad.variables.esperanza", label: "Esperanza" },
          { id: "probabilidad.variables.varianza", label: "Varianza y desviación típica" },
        ],
      },
      {
        id: "probabilidad.distribuciones",
        label: "Distribuciones",
        children: [
          { id: "probabilidad.distribuciones.binomial", label: "Distribución binomial" },
          { id: "probabilidad.distribuciones.normal", label: "Distribución normal" },
          { id: "probabilidad.distribuciones.tipificacion", label: "Tipificación" },
          { id: "probabilidad.distribuciones.aproximacion", label: "Aproximación binomial por la normal" },
        ],
      },
    ],
  },
];

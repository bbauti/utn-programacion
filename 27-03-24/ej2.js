// * Funciones para obtener promedios, agregar notas y alumnos

// Declaro el objeto de alumnos
const alumnos = {
  // Agrego las propiedades de los alumnos
  'Ana': {
    'notas': [7, 8, 9]
  },
  'Juan': {
    'notas': [6, 7, 8]
  },
  'Pedro': {
    'notas': [8, 9, 10]
  }
};

/**
 * Arrow function que obtiene el promedio de las notas de un alumno.
 * @see [Diferencias entre arrow functions y funciones normales]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions}
 * @see [Documentar codigo con JSDocs]{@link https://www.gradiweb.com/es/marketing-digital/documentacion-de-codigo-para-javascript-con-jsdoc/}
 * @param alumno
 * @returns {string}
 */
const obtenerPromedio = (alumno) => {
  // Obtengo las notas del alumno
  const notas = alumno.notas;
  // Creo un contador
  let suma = 0;
  // Recorro las notas y las sumo
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  const promedio = suma / notas.length;
  if (promedio >= 7) {
    return 'Aprobaste con ' + promedio;
  } else {
    return 'Desaprobaste con ' + promedio;
  }
}

// Muestro el promedio de Ana
console.log(obtenerPromedio(alumnos['Ana']));

/**
 * Arrow function que agrega una nota a un alumno.
 * Si la arrow function es de una sola línea, no son necesarias las llaves
 * @param alumno
 * @param nota
 */
const agregarNota = (alumno, nota) => alumno.notas.push(nota);

agregarNota(alumnos['Ana'], 10); // Le agrego un 10 a Ana

const agregarAlumno = (nombre, notas) => {
  if (alumnos[nombre]) {
    // Lanzo una excepcion si el alumno ya existe
    throw new Error('El alumno ya existe')
  }
  alumnos[nombre] = {
    'notas': notas
  };
}

agregarAlumno('Carlos', [5, 6, 7]);

console.log(alumnos);
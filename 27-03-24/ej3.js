// * 50 numeros al azar

// Declaro una constante con un array vacio
const numeros = [];

/**
 * Funcion que llena un array con numeros al azar
 * @param {Array} array
 * @param {number} length
 */
const fillArray = (array, length) => {
  // Si un if, o for, es de una sola línea, no son necesarias las llaves
  for (let i = 0; i < length; i++)
    // Math.random() devuelve un numero entre 0 y 99
    array.push(Math.floor(Math.random() * 99));
}

// Relleno el array
fillArray(numeros, 50);

// Muestro el array
console.log(numeros)

/*
  Muestro el número mas grande
  Math.max() devuelve el numero más grande de un array

  Para pasar un array como argumento, se usa el operador de propagacion (spread syntax)

  EJ: Math.max toma varios numeros, Math.max(1,2,3).
  Entonces, se puede usar spread syntax; Math.max(...[1, 2, 3]) devuelve 3.
*/

console.log(Math.max(...numeros))

const esPrimo = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// Devuelvo la cantidad de numeros primos filtrando el array
console.log(numeros.filter(esPrimo).length)

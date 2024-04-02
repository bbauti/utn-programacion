// * Generar array indexado a partir de multiples arrays

// Declaro los arrays como constantes, ya que no los voy a modificar
const nombres = ['Ana', 'Juan', 'Pedro'];
const edades = [23, 34, 45];
const vehiculos = ['auto', 'moto', 'bici'];

// Declaro la constante personas, que es el objeto al que le voy a agregar mis arrays
const personas = {};

// Como que los arrays tienen la misma longitud, puedo usar un solo ciclo para recorrerlos
for (let i = 0; i < nombres.length; i++) {
    // Agrego al objeto personas una propiedad con el nombre
    // y le asigno un objeto con las propiedades edad y vehículo
    personas[nombres[i]] = {
        edad: edades[i],
        vehiculo: vehiculos[i]
    };
}

// Muestro el objeto personas
console.log(personas);
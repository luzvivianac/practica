const {estudiante, obtenerPromedio} = require ('./calculos')
const fs = require('fs');


console.log("El nombre del estudiante es: " + estudiante.nombre);
console.log("El promedio del estudiante es: " + obtenerPromedio(
    estudiante.notas.matematicas, 
    estudiante.notas.ingles, 
    estudiante.notas.programacion));

let {nombre, edad: anos, notas: {matematicas:math, ingles, programacion}} = estudiante;
console.log("El nombre del estudiante es: " + nombre);
console.log("La nota de math es: " + math);
console.log("El promedio del estudiante es: " + obtenerPromedio(
    math, ingles, programacion));

console.log('La edad del estudiante es: ' + anos)

let crearArchivo = (estudiante) =>{
    texto ='el nombre del estudiante es ' + estudiante.nombre + '\n' +
        'ha obtenido un promedio de ' + obtenerPromedio(math, ingles, programacion);

    fs.writeFile('promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo')
    });
};

crearArchivo(estudiante);



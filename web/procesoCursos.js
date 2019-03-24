//const cursos = require('./datosCursos')
let cursos = [{
    id: 1,
    nombre: 'Node JS',
    duracion: 4,
    valor: 50000
},{
    id: 2,
    nombre: 'Python',
    duracion: 8,
    valor: 120000
},{
    id: 3,
    nombre: 'JS',
    duracion: 2,
    valor: 25000
},{
    id: 4,
    nombre: 'React',
    duracion: 4,
    valor: 35000
}
];

let listarCursosWeb=()=>{
    mostrar = '=== Cursos ofertados por educación continua ===<br>';
    for (i=0; i<cursos.length; i++){
        //Criterio: Al mostrar cada curso debe indicar el id, el nombre, la duración y el valor
        mostrar += '<br>Id: ' + cursos[i].id.toString() + ',' +
            ' Nombre del curso: ' + cursos[i].nombre.toString() + ',' +
            ' Duración: ' + cursos[i].duracion.toString() + ' semanas,' +
            ' Valor: ' + cursos[i].valor.toString() + ' pesos.';
    }
    return (mostrar);
}


let listarCursosConsola=()=>{
    console.log('=== Cursos ofertados por educación continua ===');
    for (i=0; i<cursos.length; i++){
        //Criterio: Al mostrar cada curso debe indicar el id, el nombre, la duración y el valor
        mostrar = 'Id: ' + cursos[i].id.toString() + ',' +
            ' Nombre del curso: ' + cursos[i].nombre.toString() + ',' +
            ' Duración: ' + cursos[i].duracion.toString() + ' semanas,' +
            ' Valor: ' + cursos[i].valor.toString() + ' pesos.';
        //Criterio: Al momento de listar los cursos, debe transcurrir un intervalo de tiempo de 2 segundos entre cada curso
        mostrarCurso(mostrar, 2000 *i);
    }
}

let mostrarCurso=(texto, tiempo)=>{
    setTimeout(function(){
        console.log(texto);
    },tiempo);
}


const fs = require('fs');
let guardarInscripcion=(estudiante, cedula, curso)=>{
    //Criterio: Debe generar en un archivo de texto con la información del curso en conjunto con la mía
    texto = 'El estudiante "'+ estudiante +
        '" con cédula ' + cedula +
        ' se ha matriculado en el curso con id número ' + curso.id +
        ' llamado "'+ curso.nombre +
        '" el cual tiene una duración de ' + curso.duracion + 
        ' semanas y un valor de ' + curso.valor + ' pesos.';

    fs.writeFile('inscripcion.txt', texto, (err) =>{
        if (err) throw (err);
        console.log('\n¡Felicitaciones! Se ha realizado la inscripción satisfactoriamente en el archivo de texto.\n');
    });

}

let inscribirEnCurso=(nombre, cedula, posInscrip)=>{
    
    texto = '';
    if (posInscrip >=0 && posInscrip < cursos.length){

        //Criterio: Debe buscar la información del curso y retonarme la información del mismo
        var texto = 'Hola ' + nombre + '. El curso en el cual te deseas inscribir es: ';
        texto += 'Id: ' + cursos[posInscrip].id;
        texto += ' Nombre: ' + cursos[posInscrip].nombre;
        texto += 'Duración (semanas): ' + cursos[posInscrip].duracion;
        texto += 'Valor (pesos): ' + cursos[posInscrip].valor;

        //Se comenta esta línea para que no genere arhivo sino que siga el txt para web.
        //guardarInscripcion(nombre, cedula, cursos[posInscrip]);
    }else{
        //Criterio: Generar un mensaje de alerta en caso de no encontrar un id.
        texto = 'El código del curso solictado no existe. Verifique por favor.';
        //console.log(texto);
    }
    return (texto);
}

module.exports = {
    listarCursosWeb,
    listarCursosConsola,
    mostrarCurso,
    inscribirEnCurso
};
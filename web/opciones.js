const opciones={
    idCurso:{
        //Criterio: Debe obligatoriamente ingresar el id del curso, nombre del interesado y cedula
        demand: true,
        alias: 'i'
    },
    nombreEst:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('inscribir', 'Inscribirse a un curso', opciones)
    .argv


module.exports = {
    opciones,
    argv
};
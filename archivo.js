const opciones  = {
    matematicas:{
        default: 0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias: 'i'
    },
    programacion:{
        demand : true,  //argumento requerido
        alias:'p'
    }
}

const argv = require('yargs')
.command('promedio', 'Calcular el promedio', opciones)
.argv

console.log(argv.matematicas);
//console.log('El nombre del estudiante es ' + argv.nombre);
console.log('los argumentos son: ');
console.log(argv);

console.log('El promedio es '+ (argv.m + argv.i + argv.p)/3);
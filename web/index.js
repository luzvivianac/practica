const cursos = require('./datosCursos')
const {opciones,argv} = require('./opciones')
const proceso = require('./procesoCursos')

const express = require('express')
const app = express()


resultado='sin proceso';
if(argv._[0]=='inscribir'){
  //la posición en el vector es una menos que el id ingresado
  posInscrip = parseInt(argv.i) -1;
  resultado = proceso.inscribirEnCurso(argv.n, argv.c,posInscrip);
  console.log(resultado);
}else{
  console.log('No es un comando reconocible.');
  resultado = proceso.listarCursosWeb();
  console.log('resultado x web' + resultado);
}


//Escribir en la página web
app.get('/', function (req, res) {
  res.send(resultado)
})
 
app.listen(3000)

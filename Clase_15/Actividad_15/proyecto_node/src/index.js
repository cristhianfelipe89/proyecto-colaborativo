/*const { obtenertitulo, obtenerdocente } = require('../src/funciones') //se importo descostruyendo
const { boot} = require('../src/objectos')
/* const fun = require('../src/funciones') */
//const obt = require('../src/objetos')

//importacion ES6

import { obtenertitulo, obtenerdocente } from "./funciones.js"
import { boot } from "./objectos.js"


const {cursoboot, dificultad, nivel} = boot

console.log(obtenertitulo())
console.log(obtenerdocente('Jhonathan', 'Devrier'))
console.log(cursoboot)
console.log("La dificultad del curso es ", dificultad)
console.log("el nivel es ",nivel)
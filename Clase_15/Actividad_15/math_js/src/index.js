// version common
/*
const math = require('./math');

console.log('Suma de 10 y 5:', math.sumar(10, 5));
console.log('Resta de 20 y 8:', math.restar(20, 8));
console.log('Multiplicación de 6 y 7:', math.multiplicar(6, 7));
console.log('División de 15 y 3:', math.dividir(15, 3));
console.log('División de 15 y 0:', math.dividir(15, 0));
*/

//version destructurada

const { sumar, restar, multiplicar, dividir } = require('./math');

console.log('Suma de 10 y 5:', sumar(10, 5));
console.log('Resta de 20 y 8:', restar(20, 8));
console.log('Multiplicación de 6 y 7:', multiplicar(6, 7));
console.log('División de 15 y 3:', dividir(15, 3));
console.log('División de 15 y 0:', dividir(15, 0));

function suma(a, b){
    return a+b
}

console.log(suma(5,6))

const multi = function name(x, x1) {
    return x*x1
}
console.log(multi(5,5))


const  dividir = (a,b) => a/b;

console.log(dividir(9,3));
alert(dividir(9,3))


function saludar(nombre = "Cristhian"){
    console.log("Mi nombre es:"+nombre)
}
saludar("Didier");

//bloque
/*
function ejemplob(){
    let dev = "Solo hasta aqui";
    console.log(dev);
}
console.log(dev);
*/
//global




//funciones anidadas

function saludo(edad){
    function mensaje(){
        console.log("Mi edad es:"+edad)
    }
    mensaje();
}

saludo(15);



function operN(a,b){
    function suma(){
        return a+b;
    }
    function resta(){
        return a-b;
    }
    function multiplica(){
        return a*b;
    }
    function divide(){
        return a/b;
    }
    return {
        suma: suma(),
        resta: resta(),
        multiplica: multiplica(),
        divide: divide()
    }
}

const resultado = operN(5,6)

console.log("El resultado de la suma es:",resultado.suma)
console.log("El resultado de la resta es:",resultado.resta)
console.log("El resultado de la multiplicación es:",resultado.multiplica)
console.log("El resultado de la divición es:",resultado.divide)



function calculadora(){
    let op = prompt("Ingrese el operador (+, -, *, /):"); 
    let n1 = parseFloat(prompt("Ingrese el primer número:")); 
    let n2 = parseFloat(prompt("Ingrese el segundo número:"));

    switch (op) {
        case "+":
            return sumar(n1, n2);

        case "-":
            return restar(n1, n2);

        case "*":
            return multiplicar(n1, n2);
        
        case "*":
            return dividir(n1, n2);
    
        default:
            return ("operador invalido");
    }
    function sumar(a,b){
        return a+b;
    }
    function restar(a,b){
        return a-b;
    }
    function multiplicar(a,b){
        return a*b;
    }
    function divider(a,b){
        if(b==0){
            return ("Error división por cero")
        }
        return a/b;
    }
}

let resultadoc=calculadora()
alert("El resultado de la operacion es: "+resultadoc)


function contarYSumarPares() {
    let totalPares = 0;
    let sumaPares = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingrese un número \n(presione 0 para salir):"));
        if (numero === 0) {
            break;
        }
        if (numero % 2 === 0) {
            totalPares++;
            sumaPares += numero;
        }
    } while (numero !== 0);

    alert("Cantidad de números pares ingresados: " + totalPares);
    alert("Suma de los números pares ingresados: " + sumaPares);
}

contarYSumarPares();


function esPrimo(numero) {
    if (numero < 2) {
        return ("El numero no es primo");
    }
    
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return ("el numero no es primo");
        }
    }
    return ("el número es primo");
}


console.log(esPrimo(2));
console.log(esPrimo(3));
console.log(esPrimo(4));
console.log(esPrimo(17));
console.log(esPrimo(20));

//con el método Math.max() y el operador de propagación
/*
function encontrarMaximo(arr) {
    return Math.max(...arr);
}

let numeros = [3, 7, 2, 9, 5];
console.log("El número más grande es: " + encontrarMaximo(numeros));  
*/

function encontrarMaximo(arr) {
    let maximo = arr[0]; // 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i]; 
        }
    }

    return maximo;
}

let numeros = [10, 7, 15, 9, 20];
console.log("El número más grande es: " + encontrarMaximo(numeros)); 


function verificarNumeroEnArreglo(arr, numero) {
    let encontrado = false;
    arr.forEach(elemento => {
        if (elemento === numero) {
            encontrado = true;
        }
    });
    return encontrado;
}


let nums = [3, 7, 2, 9, 5];
console.log(verificarNumeroEnArreglo(nums, 7));
console.log(verificarNumeroEnArreglo(nums, 4));




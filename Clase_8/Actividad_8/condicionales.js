/*1*/
function votacion(event){
    event.preventDefault();
    let edadv = prompt("ingrese su edad");

    if(edadv>=18){
        alert("Usted es elegible para votar");
    }else{
        alert("Usted no tiene la edad suficiente para votar");
    }
}

/*2*/
function conducion(event){
    event.preventDefault();
    let edadv = prompt("ingrese su edad");

    if(edadv>=18){
        alert("Usted tiene edad para conducir");
    }else{
        alert("Usted no tiene la edad suficiente para conducir");
    }
}

/*3*/
function parimpar(event){
    event.preventDefault();
    let num = parseInt(prompt("ingrese un numero a verificar"));

    if(num % 2===0){
        alert("El número es par");
    }else{
        alert("El numero es impar");
    }
}

/*4*/
function mayoredad(event){
    event.preventDefault();
    let edadv = prompt("ingrese su edad");

    if(edadv>=18){
        alert("Usted es mayor de edad en Colombia");
    }else{
        alert("Usted es menor de edad en Colombia");
    }
}

/*5*/
function apre(event){
    event.preventDefault();
    let nota = prompt("ingrese su nota");

    if(nota>=6 && nota<=10){
        alert("usted aprobó la asignatura");
    }else{
        alert("Usted suspende la asignatura");
    }
}

/*6*/
function posoneg(event){
    event.preventDefault();
    let num = prompt("ingrese un numero");

    if(num>0){
        alert("el numero es positivo");
    }
        else if (num < 0) {
            alert("el numero es negativo");
        } else {
            alert("el numero es 0");
        }
}
/*7*/
function descuento(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad para saber si tiene derecho a un descuento");

    if(edad < 18 || edad > 65){
        alert("usted tiene derecho al descuento");
    }else {
            alert("usted no tiene descuento al descuento");
        }
}

/*8*/
function estacion(event){
    event.preventDefault();
    let mes = prompt("ingrese el mes entre 1-12");

    if(mes >= 1 && mes <= 3){
        alert("De acuerdo al mes usted esta en la estación: Primavera");
    }
    else if(mes >= 4 && mes <= 6){
            alert("De acuerdo al mes usted esta en la estación: Verano");
        }
        else if(mes >=7  && mes <= 9){
            alert("De acuerdo al mes usted esta en la estación: Otoño");
        }
        else if(mes >= 10 && mes <= 12){
            alert("De acuerdo al mes usted esta en la estación: Invierno");
        }
        else{
            alert("ingrese un numero valido");
        }      
}

/*9*/
function fiesta(event){
    event.preventDefault();
    let q = prompt("¿Tienes entrada para la fiesta? \n 1. S=Sí \n 2. N=No");

    // Convertir la entrada a mayúsculas para estandarizar
    q = q.toUpperCase();

    if(q === "S") {
        alert("Puede asistir");
    } else if (q === "N") {
        alert("No puede asistir");
    } else {
        alert("Ingrese una opción válida");
    }
}

/*10*/
function bisiesto(event){
    event.preventDefault();
    let y = parseInt(prompt("Ingresa el año que quieres validar"));

    if((y % 4 === 0 && y % 100 !== 0)||(y % 400===0)) {
        alert("El año es bisiesto");
    }else {
        alert("El año es bisiesto");
    }
}

/*11*/
function compraal(event){
    event.preventDefault();
    let edadv = prompt("ingrese su edad");

    if(edadv>=18){
        alert("Usted puede comprar alcohol");
    }else{
        alert("Usted no tiene la edad suficiente para comprar alcohol");
    }
}

/*12*/
function rango(event){
    event.preventDefault();
    let edadv = parseInt(prompt("ingrese su edad"));

    if(edadv>=18 && edadv<=35){
        alert("Usted es un: Adulto Joven");
    }else if(edadv >=36 && edadv<=64){
        alert("Usted es un: Adulto");
    }
    else if(edadv >=65){
        alert("Usted es un: Adulto Mayor");
    }
    else{
        alert("Usted es un: No hay categoria para la edad ingresada"); 
    }
}
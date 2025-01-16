function ciclos(event){
    event.preventDefault();

    for(let i = 5; i>=0;i--){
        alert(i);
        console.log(i)
    }
}

/*
for(let i=0; i<5; i++){
Alert(i);
}
*/

function ciclow(event){
    event.preventDefault();

    
   let menu=0; 
    while (menu!=3){
        let menu = prompt("Menu \n 1. Suma \n 2. Resta \n 3. Salir");
        if (menu==1){
            alert("suma");
        }
        else if (menu==2){
            alert("resta");
            
        }else if(menu==3){
            alert("Gracias por utilizar nuestro programa");
            break;
        }else{
            alert ("Opcion Incorrecta");
            
        }

        
    }
}

function sumatoria(event){
    event.preventDefault();

    let n = parseInt(prompt("Ingrese el numero a saber la sumatoria"))
    let resultado = 0
    for( let i=0; i<= n; i++){
        resultado = resultado+i 
    }
    alert("La sumatoria del \n numero: "+n+" es: "+resultado)
}

function m10(event){
    event.preventDefault();
    for(i=1; i<=10; i++)
        alert(i)
        console.log(i)
}

function conteo_18(event) {
    event.preventDefault();
    let cont = 0;
    let edad;

    do {
        edad = parseInt(prompt("Ingrese la edad o \n 0 para salir"));
        if (edad >= 18) {
            cont = cont + 1;
        }
    } while (edad != 0);

    alert("La cantidad de personas que son mayores de 18 es(son): " + cont);
}


function impar5 (event){
    event.preventDefault();
    let n= 1
    let cont = 0
    while(cont < 5){
        alert(n)
        n=n+2
        cont ++
    }
}

function mostrarTablaMultiplicar(event) {
    event.preventDefault();
    
    let numero = parseInt(prompt("Ingrese el número para mostrar su tabla de multiplicar"));
    let limite = parseInt(prompt("Ingrese el límite hasta el cual desea ver la tabla de multiplicar"));

    if (isNaN(numero) || isNaN(limite)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    let resultado = `Tabla de multiplicar del ${numero} hasta ${limite}:\n`;
    for (let i = 0; i <= limite; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(resultado);
}

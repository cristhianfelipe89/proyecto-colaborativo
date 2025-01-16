function ingreso(event) {
    event.preventDefault();
    let edad = prompt("Digite la edad"); 
    let tieneInvitacion = prompt("Tiene invitación"); 
    let acompananteTieneInvitacion = prompt("El acompañante tiene invitación?"); 
    
    if (edad >= 18 && tieneInvitacion=="si") {
        alert("Puedes ingresar al club.");
      console.log("Puedes ingresar al club.");
    } else if (edad < 18) {
        alert("No puedes ingresar, eres menor de edad.");
      console.log("No puedes ingresar, eres menor de edad.");
    } else if (edad >= 18 && edad <= 21 && tieneInvitacion=="no" && acompananteTieneInvitacion=="si") {
        alert("Puedes ingresar porque tu acompañante tiene invitación.");
      console.log("Puedes ingresar porque tu acompañante tiene invitación.");
    } else {
        alert("No puedes ingresar.")
      console.log("No puedes ingresar.");
    }
}

function conduccion(event){
    event.preventDefault();
    let edad = prompt("Digite la edad"); 


    if (edad >= 18) {
        alert("Puede Conducir.");
}else{
    alert("No puede Conducir.");
}
}


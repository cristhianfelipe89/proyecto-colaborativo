fetch('datos.json')
.then(response => response.json())
.then(data => {
    console.log(typeof (data));
    const datos = JSON.stringify(data)
    console.log(datos)
    console.log(typeof (datos))
    const datos1 = JSON.parse(datos)
    console.log(datos)
    console.log(typeof (datos1))
    console.log(datos1.nombre)

})
.catch(error => console.log('Error: ',error));


function obtener(event){
    event.preventDefault();

fetch('datos.json')
.then(response => response.json()) // Convertimos la respuesta a JSON
.then(elementos => {
    const data = document.getElementById('datos'); // Seleccionamos el contenedor


    
    elementos.forEach(element => {

        const tabla = document.createElement('tr') // Recorremos la lista de usuarios y creamos un listado HTML
        
        const direccion = element.direccio[0]; // Tomamos el primer objeto del array
        
        tabla.innerHTML = ` <td> ${element.nombre } </td> 
                            <td>${element.apellido }</td> 
                            <td>${element.edad }</td> 
                            <td>${direccion.Ciduad}` 
        data.appendChild(tabla);
    });

})
.catch(error => console.log('Error: ',error));
}



    
  
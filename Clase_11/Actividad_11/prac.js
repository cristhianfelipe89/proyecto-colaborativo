fetch('inventario.json')
.then(res => res.json())
.then(datos =>{
    console.log(datos)

    datos.forEach(element => {
        console.log(element.nombre)
    });
})

.catch(error =>{
    console.log("error al cargar los datos ",error)
})
function obtener(event){
    event.preventDefault();

let url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
.then (res => res.json())
.then (data => {
    
    const odatos= document.getElementById('datos')

    data.forEach(e => {

        console.log(e.userId, e.id,e.title, e.body)

        const obtener = document.createElement('tr')
obtener.innerHTML= `<td> ${e.userId} </td>
                            <td> ${e.id} </td>
                            <td> ${e.title} </td>
                            <td> ${e.body} </td>`

        odatos.appendChild(obtener)
        
    });
})
.catch(Error => {
    console.error("Error al obtener los datos")
})
}


function filtrouser(event){
    event.preventDefault();

let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then (res => res.json())
.then (data => {
    
    let farray = data.filter(u => u.name.includes("Leanne"));

    const odatos= document.getElementById('datos')

    farray.forEach(e => {

        console.log(e.name, e.username,)

        const obtener = document.createElement('tr')
        obtener.innerHTML= `<td> ${e.name} </td>
                            <td> ${e.email} </td>`

        odatos.appendChild(obtener)
        
    });
})
.catch(Error => {
    console.error("Error al obtener los datos")
})
}
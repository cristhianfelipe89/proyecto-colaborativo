const fs = require('fs')

//const lectura_archivo = fs.readFileSync('doc_1.txt','utf-8') // lectura de archivo sincronico, es decir esta a la mano

//fs.writeFileSync('introduccion_a_node.txt', `Bievenido nuestro curso \N INTRODUCCION \N En este curso aprenderas muchas`)

const intronode = fs.readFileSync('introduccion_a_node.txt','utf-8')
const archivo_modif = intronode.replace(/muchas/ig, 'muchas herramientas y buenas practicas');

fs.writeFileSync('introduccion_a_node.txt', archivo_modif)
//console.log(lectura_archivo)


const fs = require('fs')

fs.writeFileSync('datos.txt', `Bievenido al manejo de archivos en Node.js`)

const lectura_archivo = fs.readFileSync('datos.txt', 'utf-8');


const filePath = 'datos.txt';
try {
    fs.accessSync(filePath, fs.constants.F_OK);
    console.log('El archivo existe.');
} catch (err) {
    console.log('El archivo no existe. Por favor valida');
    }

const dataAppend = `Este archivo ha sido actualizado exitosamente`
fs.appendFileSync('datos.txt', dataAppend)

fs.renameSync('datos.txt', 'datos_2.txt');
console.log("renombra el archivo")

fs.writeFileSync('datos1.txt', `Bievenido al manejo de archivos en Node.js`)

fs.unlinkSync('datos_2.txt')

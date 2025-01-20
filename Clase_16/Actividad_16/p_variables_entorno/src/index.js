import { config } from 'dotenv';
import env from 'env-var';

config(); // Cargar variables de entorno desde el archivo .env

// Asegurarse de que la variable PORT esté definida
/*
const PORT = process.env.PORT;

console.log(`El servidor está corriendo en el puerto: ${PORT}`);
console.log(process.env.BD_USER);
console.log(process.env.BD_PASSWORD);
*/

config();

// Leer y validar las variables de entorno
const PORT = env.get('PORT').required().asPortNumber();
const BD_USER = env.get('BD_USER').required().asString();
const BD_PASSWORD = env.get('BD_PASSWORD').required().asIntPositive();


//imprimir por consola la informacion de la configuración
console.log(`El servidor está corriendo en el puerto: ${PORT}`);
console.log(`Usuario de la base de datos: ${BD_USER}`);
console.log(`Contraseña de la base de datos: ${BD_PASSWORD}`);


const readline = require('readline');
const chalk = require('chalk');
const {
    agregarTarea,
    listarTareas,
    marcarCompletada,
    eliminarTarea
} = require('./gestorTareas');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = [];

function mostrarMenu() {
    console.log(`
        1: Agregar tarea.
        2: Listar tareas.
        3: Marcar tarea como completada.
        4: Eliminar tarea.
        0: Salir de la aplicación.
        `);

        rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    rl.question('Título: ', (titulo) => {
                        rl.question('Descripción: ', (descripcion) => {
                            agregarTarea(tareas, titulo, descripcion);
                            console.log(chalk.green('Tarea agregada'));
                            mostrarMenu();
                        });
                    });
                    break;
                case '2':
                    listarTareas(tareas);
                    mostrarMenu();
                    break;
                case '3':
                    rl.question('ID de la tarea a completar: ', (id) => {
                        marcarCompletada(tareas, parseInt(id, 10));
                        console.log(chalk.green('Tarea completada'));
                        mostrarMenu();
                    });
                    break;
                case '4':
                    rl.question('ID de la tarea a eliminar: ', (id) => {
                        const eliminada = eliminarTarea(tareas, parseInt(id, 10));
                        if (eliminada) {
                            console.log(chalk.red('Tarea eliminada'));
                        } else {
                            console.log(chalk.red('Tarea no encontrada'));
                        }
                        mostrarMenu();
                    });
                    break;
                case '0':
                    console.log('Saliendo de la aplicación...');
                    rl.close();
                    break;
                default:
                    console.log(chalk.red('Opción no válida'));
                    mostrarMenu();
            }
        });
    }

rl.on('close', () => {
    console.log('Aplicación cerrada.');
    process.exit(0);
});

mostrarMenu();

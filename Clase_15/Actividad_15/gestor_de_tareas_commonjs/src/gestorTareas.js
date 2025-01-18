const chalk = require('chalk');
let tareasId = 1;

function agregarTarea(tareas, titulo, descripcion) {
    const nuevaTarea = {
        id: tareasId++,
        titulo,
        descripcion,
        completada: false,
    };
tareas.push(nuevaTarea);
}

function listarTareas(tareas) {
    if (tareas.length === 0) {
        console.log(chalk.yellow('No hay tareas'));
    } else {
        tareas.forEach(tarea => {
            console.log(`${tarea.id}. ${tarea.titulo} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
        });
    }
}

function marcarCompletada(tareas, id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
    } else {
        console.log('Tarea no encontrada');
    }
}

function eliminarTarea(tareas, id) {
    const index = tareas.findIndex(t => t.id === id); 
    if (index !== -1) {
        tareas.splice(index, 1); 
        return true; 
    } else {
        return false;
    }
}

module.exports = {
    agregarTarea,
    listarTareas,
    marcarCompletada,
    eliminarTarea,
};
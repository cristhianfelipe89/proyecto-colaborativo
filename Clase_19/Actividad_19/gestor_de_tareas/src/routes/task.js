import express from 'express'
import Tareas from '../models/task.js'

const appi = express.Router();


appi.post('/', async (req, res) =>{
    try{
        const {titulo, descripcion,estado}= req.body
        const nuevaTarea = new Tareas({titulo, descripcion,estado})
        await nuevaTarea.save();
        res.status(201).json({
            message:'La tarea se ha creado exitosamente',tarea: nuevaTarea
        })
    } catch (error){
        res.status(500).json({
            message:'Error al crear la tarea',error
            })
        }
    })


appi.get('/', async (req, res) => {
    try {
        const tareas = await Tareas.find();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


appi.put('/:id', async (req, res) => {
    try {
        const actualizarTarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(actualizarTarea);
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar La tarea', error
        });
    }
});

appi.delete('/:id', async (req, res) => {
    try {
        await Tareas.findByIdAndDelete(req.params.id);
        res.status(204).json({
            message: 'Tarea eliminida con exito'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar la tarea', error
        });
    }
});

appi.patch('/:id', async (req, res) => {
    try {
        const actEstTarea = await Tareas.findById(req.params.id);
        if (!actEstTarea) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    if (actEstTarea.estado === 'Pendiente') {
        actEstTarea.estado = 'Completada';
        await actEstTarea.save();
        res.status(200).json({
            message: 'Estado de la tarea actualizado a Completado',actEstTarea,
        });
    } else {
        res.status(400).json({
            message: 'Solo las tareas con estado Pendiente pueden ser completadas',
        });
    }
    } catch (error) {
        res.status(500).json({
        message: 'Error al actualizar el estado de la tarea',
        error,
    });
    }
});

export default appi;
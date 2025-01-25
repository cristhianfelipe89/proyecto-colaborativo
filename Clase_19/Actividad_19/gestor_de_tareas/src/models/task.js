import mongoose from "mongoose" 

const tareaSchema = new mongoose.Schema({
titulo:{type:String, required:true},
descripcion:{type:String, required:true},
estado:{type:String, default:'Pendiente'},
})

const Tareas = mongoose.model('Tareas', tareaSchema)

export default Tareas
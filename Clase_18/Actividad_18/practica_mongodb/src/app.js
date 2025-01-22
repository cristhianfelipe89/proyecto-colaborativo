const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const Usuarios = require('./models/user')

const app = express()

app.use(express.json())

mongoose.connect(process.env.BD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() =>console.log('Conectado a MongoDB'))

.catch((error)=>console.log('Error de conexion a MongoDB', error))

app.post('/Usuarios', async (req, resp) =>{
    try{
        const {nombre, email,telefono, edad}= req.body
        const nuevoUsuario = new Usuarios({nombre, email,telefono, edad})
        await nuevoUsuario.save();
        resp.status(201).json({
            message:'El ususario se ha creado exitosamente',usuario: nuevoUsuario
        })
    } catch (error){
        resp.status(500).json({
            message:'Error al crear el usuario',error
        })
    }
})

app.get('/Usuarios', async (req, resp) =>{
    try{
        const user = await Usuarios.find()
        resp.status(200).json(user)
    }catch(error){
        message:'Error al obtener la informacion del usuario',error
    }
})


const PORT =process.env.PORT

app.listen(PORT, ()=>{console.log(`El servidor esta escuchando en el puerto ${PORT}`)})
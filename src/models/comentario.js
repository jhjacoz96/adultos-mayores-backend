const mongoose=require('mongoose')
const {Schema}=mongoose;

const path= require('path')

const ComentarioSchema =new Schema({
    nombre: {
        type:String,
        required:true
    },
    titulo: {
        type:String,
        required:true
    },
    descripcion: {
        type:String,
        required:true
    },
    fecha: {
        type:Date,
        default:Date.now
    },
    respuesta: {
        fecha: {
            type:Date,
        },
        descripcion: {
            type:String,
        },
    }
});

module.exports=mongoose.model('Comentario',ComentarioSchema);
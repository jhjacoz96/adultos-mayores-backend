const mongoose=require('mongoose')
const {Schema}=mongoose;

const path= require('path')

const CitaSchema =new Schema({
    nombre : {
        type: String,
        required:true,
    },
    provincia: {
        type: String,
        required:true,
    },
    especialidad: {
        type: String,
        required:true,
    },
    canton: {
        type: String,
        required:true,
    },
    descripcion : {
        type: String,
        required:true,
    },
});

module.exports=mongoose.model('Cita',CitaSchema);
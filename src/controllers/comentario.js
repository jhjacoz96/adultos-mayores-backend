const Comentario = require("../models/comentario");
const ctrl = {};

ctrl.getAll = async (req, res) => {
    try {
        const comentario = await Comentario.find()
        return res.status(200).json({
            message: 'Solicitud exitosa',
            comentario,
            ok: true,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Ha ocurrido un error",
            error,
        });
    }
}
ctrl.generar = async (req, res) => {
    try {
        console.log(req.body)
        const {nombre, titulo, descripcion} = req.body;
        const newComentario = new Comentario({
            nombre,
            titulo,
            descripcion,
        })
        await newComentario.save();
        return res.status(200).json({
            message: 'Comentario agregado con exito',
            comentario: newComentario,
            ok: true
          });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Ha ocurrido un error",
            error,
        });
    }
}

ctrl.modificar = async (req, res) => {
    try {
         var id = req.params.id
         var { respuesta } = req.body
         var d = new Date()
         var comentario = await Comentario.findOneAndUpdate({
            _id: id
         }, {
            respuesta:{fecha: d,
            descripcion: respuesta}
         }, {new: true})
         res.status(200).json({
            ok: true,
            message: 'Respuesta enviada con éxito',
            comentario
         })
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error',
            err,
        })
    } 
}

module.exports = ctrl;
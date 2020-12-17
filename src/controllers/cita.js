const Cita = require("../models/cita");
const ctrl = {};

ctrl.getAll = async (req, res) => {
    try {
        const cita = await Cita.find()
        return res.status(200).json({
            message: 'Solicitud exitosa',
            cita,
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
        const {nombre, provincia, especialidad, canton, descripcion} = req.body;
        const newCita = new Cita({
            nombre,
            provincia,
            especialidad,
            canton,
            descripcion,
        })
        await newCita.save();
        return res.status(200).json({
            message: 'Cita solicitada con exito',
            cita: newCita,
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

module.exports = ctrl;
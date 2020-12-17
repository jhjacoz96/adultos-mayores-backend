var express = require("express");
var router = express.Router();

const CitaController = require('../controllers/cita')
const ComentarioController = require('../controllers/comentario')

module.exports = (app) => {

    const ap ='/api';
    router.route(ap+'/comentario').get(ComentarioController.getAll).post(ComentarioController.generar);
    router.route(ap+'/comentario/:id').put(ComentarioController.modificar);
    router.route(ap+'/cita').get(CitaController.getAll).post(CitaController.generar);

    app.use(router);
  
};
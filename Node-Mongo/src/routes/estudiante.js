'use strict'
const express = require('express');

const {EstudianteControlador} = require('../controllers/estudiante');

const router = express.Router();

module.exports.EstudianteAPI = (app) => {
    router
        .get('/', EstudianteControlador.getEstudiantes)
        .get('/:id', EstudianteControlador.getEstudianteById) // http://localhost:3800/api/aspirantes
        .post('/', EstudianteControlador.saveEstudiante)
        .put('/:id', EstudianteControlador.updateEstudiante)
        .delete('/:id', EstudianteControlador.deleteEstudiante)
    app.use('/api/estudiantes', router)
};
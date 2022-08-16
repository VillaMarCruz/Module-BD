'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
    cedula: String,
    apellidos: String,
    nombres: String,
    semestre: String,
    carrera: String,
    facultad: String
});

module.exports = mongoose.model('Estudiante', estudianteSchema);
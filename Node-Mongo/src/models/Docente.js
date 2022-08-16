'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docenteSchema = Schema({
    cedula: String,
    nombre: String,
    titulo: String
});

module.exports = mongoose.model('Docente', docenteSchema);
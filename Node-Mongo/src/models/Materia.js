const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materiaSchema = Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('Materia', materiaSchema);
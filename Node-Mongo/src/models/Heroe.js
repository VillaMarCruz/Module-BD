'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroeSchema = Schema({
    nombre: String,
    bio: String,
    img:String,
    aparicion: String,
    casa:String
});

module.exports = mongoose.model('Heroe', heroeSchema);
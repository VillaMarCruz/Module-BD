'use strict'
const express = require('express');
const cors = require('cors');
const app = express();

//Cargar rutas
const {EstudianteAPI} = require('./src/routes/estudiante');
/* const docente_routes = require('./routes/docente');
const materia_routes = require('./routes/materia');
const heroe_routes = require('./routes/heroe'); */

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

EstudianteAPI(app);

module.exports = app;
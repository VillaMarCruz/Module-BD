'use strict'
const express = require('express');
const materiaController = require('../controllers/materia');

const router = express.Router();

router.get('/materiaPrueba', materiaController.pruebas);
router.post('/materia', materiaController.saveMateria);
router.get('/materia', materiaController.getMaterias);
router.get('/materia/:id', materiaController.getMateria);
router.put('/materia/:id', materiaController.updateMateria);
router.delete('/materia/:id', materiaController.deleteMateria);
module.exports = router;
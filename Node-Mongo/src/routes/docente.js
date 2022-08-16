'use strict'
const express = require('express');
const docenteController = require('../controllers/docente');

const router = express.Router();

router.get('/docentePrueba', docenteController.pruebas);
router.post('/docente', docenteController.saveDocente);
router.get('/docente', docenteController.getDocentes);
router.get('/docente/:id', docenteController.getDocente);
router.put('/docente/:id', docenteController.updateDocente);
router.delete('/docente/:id', docenteController.deleteDocente);

module.exports = router;
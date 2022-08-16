'use strict'
const express = require('express');
const HeroeController = require('../controllers/heroe');

const router = express.Router();

router.post('/heroe', HeroeController.saveHeroe);
router.get('/heroe', HeroeController.getHeroes);
router.get('/heroe/:id', HeroeController.getHeroe);
router.put('/heroe/:id', HeroeController.updateHeroe);
router.delete('/heroe/:id', HeroeController.deleteHeroe);

module.exports = router;
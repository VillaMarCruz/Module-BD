'use strict'
const Heroe = require('../models/Heroe');

//Metodo para guardar documentos en la coleccion Heroe
function saveHeroe(req, res) {
    let heroe = new Heroe();
    let params = req.body;

    if (params.nombre) {
        heroe.nombre = params.nombre;
        heroe.bio = params.bio;
        heroe.img = params.img;
        heroe.aparicion = params.aparicion;
        heroe.casa = params.casa;

        heroe.save((err, heroeStored) => {
            if (err) {
                res.status(500).send({
                    mensaje: 'Error de servidor'
                });
            } else {
                if (heroeStored) {
                    res.status(201).send({
                        mensaje: 'Heroe insertado',
                        heroe: heroeStored
                    });
                } else {
                    res.status(400).send({
                        mensaje: 'No se ha guardado el heroe'
                    });
                }
            }
        });

    } else {
        res.status(400).send({
            mensaje: 'El nombre del heroe es obligatorio'
        });
    }
}

// Metodo para listar heroes
function getHeroes(req, res) {
    Heroe.find({}).exec((err, heroes) => {
        if (err) {
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        } else {
            if (heroes) {
                res.status(200).send({
                    mensaje: 'Lista de heroes',
                    heroes
                });
            } else {
                res.status(404).send({
                    mensaje: "No hay heroes"
                });
            }
        }
    });
}

function getHeroe(req, res) {
    let { id } = req.params;
    Heroe.find({ 'nombre': { $regex: id } }).exec((err, heroe) => {
        if (err) {
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        } else {
            if (heroe.length > 0) {
                res.status(200).send({
                    heroe
                });
            } else {
                res.status(404).send({
                    mensaje: "No existe el heroe con ese parametro"
                });
            }
        }
    });
};

function updateHeroe(req, res) {
    let { id } = req.params;
    let update = req.body;

    Heroe.findByIdAndUpdate(id, update, {new:true}, (err, heroeUpdate)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(heroeUpdate){
                res.status(200).send({
                    mensaje: 'Heroe actualizado',
                    estudiante:heroeUpdate
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el heroe"
                });
            }
        }
    });
}

function deleteHeroe(req, res){
    let { id } = req.params;
    Heroe.findByIdAndRemove(id, (err, heroeRemoved)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(heroeRemoved){
                res.status(200).send({
                    mensaje: 'Heroe eliminado',
                    estudiante:heroeRemoved
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el heroe"
                });
            }
        }
    });
}

module.exports = {
    saveHeroe,
    getHeroes,
    getHeroe,
    updateHeroe,
    deleteHeroe
}
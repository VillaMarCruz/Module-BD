'use strict'
const Materia = require('../models/Materia');

function pruebas(req, res){
    res.status(200).send({
        mensaje: 'Ruta de prueba (materia) de mi API RESTfull con node y mongo...!'
    })
}

//Metodo para guardar documentos en la coleccion estudiante
function saveMateria(req, res){
    let materia = new Materia();
    var params = req.body;

    if(params.nombre){
        materia.nombre = params.nombre;
        materia.descripcion = params.descripcion;

        materia.save((err, materiaStored)=>{
            if(err){
                res.status(500).send({
                    mensaje: 'Error de servidor'
                });
            }else{
                if(materiaStored){
                    res.status(201).send({
                        materia: materiaStored
                    });
                }else{
                    res.status(400).send({
                        mensaje: 'No se ha guardado la materia'
                    });
                }
            }
        });

    }else{
        res.status(400).send({
            mensaje: 'El nombre de la materia es obligatorio'
        });
    }
}

// Metodo para listar materias
function getMaterias(req, res){
    Materia.find({}).exec((err, materias)=>{
        if(err){
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(materias){
                res.status(200).send({
                    materias
                });
            }else{
                res.status(404).send({
                    mensaje: "No hay materias"
                });
            }
        }
    });
}

//Metodo para listar un materias por ID
function getMateria(req, res){
    var {id} = req.params;
    Materia.findById(id).exec((err, materia)=>{
        if(err){
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(materia){
                res.status(200).send({
                    materia
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe esa materia con ese ID"
                });
            }
        }
    });
};

function updateMateria(req, res) {
    let { id } = req.params;
    let update = req.body;

    Materia.findByIdAndUpdate(id, update, {new:true}, (err, materiaUpdate)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(materiaUpdate){
                res.status(200).send({
                    mensaje: 'Materia actualizado',
                    materia:materiaUpdate
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el materia"
                });
            }
        }
    });
}

function deleteMateria(req, res){
    let { id } = req.params;
    Materia.findByIdAndRemove(id, (err, materiaRemoved)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(materiaRemoved){
                res.status(200).send({
                    mensaje: 'Materia eliminado',
                    materia:materiaRemoved
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el materia"
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveMateria,
    getMaterias,
    getMateria,
    updateMateria,
    deleteMateria
}
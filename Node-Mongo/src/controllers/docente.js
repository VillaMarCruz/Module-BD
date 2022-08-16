'use strict'
const Docente = require('../models/Docente');

function pruebas(req, res){
    res.status(200).send({
        mensaje: 'Ruta de prueba (docente) de mi API RESTfull con node y mongo...!'
    })
}

//Metodo para guardar documentos en la coleccion docente
function saveDocente(req, res){
    let docente = new Docente();
    var params = req.body;

    if(params.nombre){
        docente.cedula = params.cedula;
        docente.nombre = params.nombre;
        docente.titulo = params.titulo;

        docente.save((err, docenteStored)=>{
            if(err){
                res.status(500).send({
                    mensaje: 'Error de servidor'
                });
            }else{
                if(docenteStored){
                    res.status(201).send({
                        docente: docenteStored
                    });
                }else{
                    res.status(400).send({
                        mensaje: 'No se ha guardado el docente'
                    });
                }
            }
        });

    }else{
        res.status(400).send({
            mensaje: 'El nombre del docente es obligatorio'
        });
    }
}

function getDocentes(req, res){
    Docente.find({}).exec((err, docentes)=>{
        if(err){
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(docentes){
                res.status(200).send({
                    docentes
                });
            }else{
                res.status(404).send({
                    mensaje: "No hay docentes"
                });
            }
        }
    });
}

//Metodo para listar un estudiante por ID
function getDocente(req, res){
    var {id} = req.params;
    Docente.findOne({"cedula": id}).exec((err, docente)=>{
        if(err){
            res.status(400).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(docente){
                res.status(200).send({
                    docente
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe ese docente con esa cedula"
                });
            }
        }
    });
};

function updateDocente(req, res) {
    let { id } = req.params;
    let update = req.body;

    Docente.findByIdAndUpdate(id, update, {new:true}, (err, docenteUpdate)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(docenteUpdate){
                res.status(200).send({
                    mensaje: 'Docente actualizado',
                    docente:docenteUpdate
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el docente"
                });
            }
        }
    });
}

function deleteDocente(req, res){
    let { id } = req.params;
    Docente.findByIdAndRemove(id, (err, docenteRemoved)=>{
        if(err){
            res.status(500).send({
                mensaje: "Error de servidor"
            });
        }else{
            if(docenteRemoved){
                res.status(200).send({
                    mensaje: 'Docente eliminado',
                    docente:docenteRemoved
                });
            }else{
                res.status(404).send({
                    mensaje: "No existe el docente"
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveDocente,
    getDocentes,
    getDocente,
    updateDocente,
    deleteDocente
}
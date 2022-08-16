'use-strict'
const CreateError = require('http-errors');

const Estudiante = require('../models/Estudiante');
const { Response } = require('../common/response');

const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({});
        if (estudiantes === 0) {
            Response.error(res, new CreateError.NotFound())
        } else {
            Response.success(res, 200, 'Lista de estudiantes', estudiantes);
        }
    } catch (error) {
        Response.error(res);
    }
}

const getEstudianteById = async (req, res) => {
    try {
        const { params: { id } } = req;
        const estudiante = await Estudiante.findById({ _id: id });
        if (!estudiante) {
            Response.error(res, new CreateError.NotFound());
        } else {
            Response.success(res, 200, 'Estudiante', estudiante);
        }
    } catch (error) {
        Response.error(res);
    }
}

const saveEstudiante = async (req, res) => {
    try {
        const { body } = req;
        if (!body || Object.keys(body).length === 0) {
            Response.error(res, new CreateError.BadRequest());
        } else {
            const newEstudiante = new Estudiante({
                cedula: body.cedula,
                apellidos: body.apellidos,
                nombres: body.nombres,
                semestre: body.semestre,
                carrera: body.carrera,
                facultad: body.facultad
            });
            const estudianteStored = await newEstudiante.save();
            Response.success(res, 201, 'Estudiante agregado', estudianteStored);
        }
    } catch (error) {
        Response.error(res);
    }
}

const updateEstudiante = async (req, res) => {
    try {
        const { body, params: { id } } = req;
        const updatedEstudiante = await Estudiante.findByIdAndUpdate(id, body, { new: true });
        if (!updatedEstudiante) {
            Response.error(res, new CreateError.NotFound());
        } else {
            Response.success(res, 200, 'Estudiante actualizado', updatedEstudiante);
        }
    } catch (error) {
        Response.error(res);
    }
}

const deleteEstudiante = async (req, res) => {
    try {
        const { params: { id } } = req;
        const removedEstudiante = await Estudiante.findByIdAndRemove(id);
        if (!removedEstudiante) {
            Response.error(res, new CreateError.NotFound());
        } else {
            Response.success(res, 200, 'Estudiante eliminado', removedEstudiante);
        }
    } catch (error) {
        Response.error(res);
    }
}

module.exports.EstudianteControlador = {
    getEstudiantes,
    getEstudianteById,
    saveEstudiante,
    updateEstudiante,
    deleteEstudiante
}
const citasService = require('../services/citas.service');

exports.getAllcitass = async (req, res) => {
    const citas = await citasService.getAll();
    res.status(200).json(citas||{});
};

exports.getCitasById = async (req, res) => {
    const citas = await citasService.getById(req.params.id);
    
    res.status(200).json(citas||{});
};

exports.createCitas = async (req, res) => {

    const citas = await citasService.create(req.body);
    res.status(201).json(citas);
};

exports.updateCitas = async (req, res) => {
    const updated = await citasService.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ message: 'cita no encontrada' });
    }
    res.status(200).json(updated);
};

exports.deleteCitas = async (req, res) => {
    const deleted = await citasService.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'cita no encontrada' });
    }
    res.status(204).send();
};


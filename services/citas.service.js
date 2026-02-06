const Citas = require('../models/citas.model');

const getAll = async () => await Citas.findAll();

const getById = async (id) => await Citas.findByPk(id);

const findOne = async (data) => await Citas.findOne({ where: data });

const create = async (data) => await Citas.create(data);

const update = async (id, data) => {
    const cita = await Citas.findByPk(id);
    if (!cita) return null;
    return await cita.update(data);
};

const remove = async (id) => {
    const cita = await Citas.findByPk(id);
    if (!cita) return null;
    await cita.destroy();
    return cita;
};

module.exports = {
    getAll,
    getById,
    findOne,
    create,
    update,
    remove,
};
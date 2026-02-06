const express = require('express');
const { body, param } = require('express-validator');
const validateRequest = require('../middlewares/validate.middleware');
const citasController = require('../controllers/citas.controller');

const router = express.Router();

router.get('/', citasController.getAllCitas);

router.get('/:id',
    validateRequest([param('id').isInt().withMessage('ID must be an integer')]),
    citasController.getCitaById
);

router.post('/',
    validateRequest([
        body('paciente_nombre').isString().withMessage('El nombre es requerido'),
        body('paciente_identidad').isEmail().withMessage('La identidad es requerida'),
        body('paciente_telefono').isInt({ min: 0 }).withMessage('El teléfono debe ser un número entero no negativo'),
        body('paciente_email').optional().isEmail().withMessage('Email inválido'),
        body('especialidad').isIn(['medicina_general', 'pediatria', 'odontologia',
            'ginecologia', 'cardiologia'
        ]).withMessage('Especialidad inválida'),
        body('doctor').isString().withMessage('El nombre del doctor es requerido'),
        body('fecha_cita').isDate().withMessage('Fecha de cita inválida'),
        body('hora_cita').isTime().withMessage('Hora de cita inválida'),
        body('duracion_minutos').isInt({ min: 1 }).withMessage('Duración debe ser un número entero positivo'),
        body('motivo_consulta').optional().isString().withMessage('Motivo de consulta inválido'),
        body('estado').optional().isIn(['pendiente', 'confirmada', 'atendida','cancelada']).withMessage('Estado inválido'),
        body('costo_consulta').isDecimal({ min: 0 }).withMessage('Costo de consulta inválido'),
        body('forma_pago').isIn(['efectivo', 'tarjeta', 'transferencia', 'seguro']).withMessage('Forma de pago inválida'),
        body('observaciones').optional().isString().withMessage('Observaciones inválidas')
    ]),
    citasController.createCita
);

router.put('/:id',
    validateRequest([
        param('id').isInt().withMessage('ID must be an integer'),
        body('paciente_nombre').isString().withMessage('El nombre es requerido'),
        body('paciente_identidad').isEmail().withMessage('La identidad es requerida'),
        body('paciente_telefono').isInt({ min: 0 }).withMessage('El teléfono debe ser un número entero no negativo'),
        body('paciente_email').optional().isEmail().withMessage('Email inválido'),
        body('especialidad').isIn(['medicina_general', 'pediatria', 'odontologia',
            'ginecologia', 'cardiologia'
        ]).withMessage('Especialidad inválida'),
        body('doctor').isString().withMessage('El nombre del doctor es requerido'),
        body('fecha_cita').isDate().withMessage('Fecha de cita inválida'),
        body('hora_cita').isTime().withMessage('Hora de cita inválida'),
        body('duracion_minutos').isInt({ min: 1 }).withMessage('Duración debe ser un número entero positivo'),
        body('motivo_consulta').optional().isString().withMessage('Motivo de consulta inválido'),
        body('estado').optional().isIn(['pendiente', 'confirmada', 'atendida','cancelada']).withMessage('Estado inválido'),
        body('costo_consulta').isDecimal({ min: 0 }).withMessage('Costo de consulta inválido'),
        body('forma_pago').isIn(['efectivo', 'tarjeta', 'transferencia', 'seguro']).withMessage('Forma de pago inválida'),
        body('observaciones').optional().isString().withMessage('Observaciones inválidas')
    ]),
    citasController.updateCita
);

router.delete('/:id',
    validateRequest([param('id').isInt().withMessage('ID must be an integer')]),
    citasController.deleteCita
);

module.exports = router;
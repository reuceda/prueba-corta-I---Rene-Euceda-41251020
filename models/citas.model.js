const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Citas = sequelize.define('Citas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
        len: [0, 100],
    }
    },
    paciente_identidad: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            len: [0, 20],
        },
    },
    paciente_telefono: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            len: [0, 15],
        },
    },
    paciente_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
            isEmail: true,
            len: [0, 100],
        },
    },
    especialidad: {
        type: DataTypes.ENUM('medicina_general', 'pediatria', 'odontologia',
            'ginecologia', 'cardiologia'
        ),
        allowNull: false,
    },
    doctor: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: [0, 100],
        },
    },
    fecha_cita: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hora_cita: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    duracion_minutos: {
        type: DataTypes.INTEGER,
        defaultValue: 30,
        allowNull: false,
    },
    motivo_consulta: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'confirmada', 
            'atendida', 'cancelada'),
        defaultValue: 'pendiente',
        allowNull: false,
    },
    costo_consulta: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    forma_pago: {
        type: DataTypes.ENUM('efectivo', 'tarjeta',
            'transferencia', 'seguro'),
        allowNull: true,
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        virtual: true,
        get() {
            return this.getDataValue('createdAt');
        },
    },
}, {
    tableName: 'citas',
    timestamps: true,
});

module.exports = Citas;
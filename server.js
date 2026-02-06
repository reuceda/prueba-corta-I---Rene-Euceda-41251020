const app = require('./app');
const sequilize = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const conectarDB = require('./db');
const Citas = require('./models/citas.model');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//listar citas
app.get('/api/citas', async (req, res) => {
    try {
        const citas = await Citas.find();

        if (citas.length === 0) {
            return res.status(404).json({ error: 'No se encontraron citas.' });
        }

        res.json(citas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//obtener cita por id
app.get('/api/citas/:id', async (req, res) => {
    try {
        const cita = await Citas.findById(req.params.id);
        if (!cita) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }
        res.json(cita);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

//obtener citas por disponibilidad de fecha
app.get('/api/citas/disponibilidad/:fecha', async (req, res) => {
    try {
        const citas = await Citas.find({ disponibilidad: req.params.fecha });
        if (citas.length === 0) {
            return res.status(404).json({ error: 'No se encontraron citas con esa disponibilidad' });
        }
        res.json(citas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//eliminar cita
app.delete('/api/citas/:id', async (req, res) => {
    try {
        const eliminado = await Citas.findByIdAndDelete(req.params.id);
        if (!eliminado) {
            return res.status(404).json({ error: 'Cita no encontrada' });
        }
        res.json({ mensaje: 'Cita eliminada' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//ruta principal
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la API de la Prueba Corta I</h1>');
});

const startServer = async () => {
    try {
        await sequilize.authenticate();
        await sequilize.sync(); // crea las tablas si no existen
        console.log('Database connected');

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
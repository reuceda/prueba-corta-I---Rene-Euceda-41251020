const express = require('express');
const citasRoutes = require('./routes/citas.routes');

const app = express();

app.use(express.json());
app.use('/api/citas', citasRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
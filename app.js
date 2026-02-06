const express = require('express');
const personRoutes = require('./routes/person.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json());
app.use('/api/citas', citasRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
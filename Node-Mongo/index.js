'use strict'
const mongoose = require('mongoose');
const PORT = 3800;

const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Universidad', {
    useUnifiedTopology: true, useNewUrlParser: true
})
    .then(() => {
        console.log('Conexión exitosa!!');
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en ${PORT}!!`);
        });
    })
    .catch(err => console.log(err));
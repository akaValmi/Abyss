var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    codigo: String,
    correo: String,
    telef: String,
    ciudad: String,
    entregasPend: Array,
    entregasTomad: Array,
    entregasRealizad: Array
})

module.exports = mongoose.model('motoristas', esquema);
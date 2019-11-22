const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaDatos = new Schema(
    {
        Dato: String,
        Correlativo: Number,
        Leido:Number
    }
);

module.exports = mongoose.model('Datos',SchemaDatos);
const mongoose = require("mongoose");

const EsquemaRecordatorio = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "Título es obligatorio."], //Atributo obligatorio
        minLength: [3, "Título debe tener al menos 3 caracteres"]
    },
    contenido: {
        type: String,
        required: [true, "Contenido es obligatorio."],
        minLength: [3, "Contenido debe tener al menos 3 caracteres"]
    },
    prioridad: {
        type: Number,
        min: [1, "Prioridad debe ser un número entre 1-10"],
        max: [10, "Prioridad debe ser un número entre 1-10"]
    }
}, {timestamps: true, versionKey: false});
//timestamps: me crea campos de createdAt y updatedAt
//versionKey: false me elimina el atributo _v

const Recordatorio = mongoose.model("recordatorios", EsquemaRecordatorio);
module.exports = Recordatorio;
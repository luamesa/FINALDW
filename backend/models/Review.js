const mongoose = require("mongoose");

let ReviewSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  calificacion: { type: Number, required: true, min: 1, max: 5 },
  userId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Review", ReviewSchema);

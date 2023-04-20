import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String },
  numeroPaginas: { type: Number, require: true },
}, { versionKey: false });

const livros = mongoose.model('livros', livroSchema);

export default livros;
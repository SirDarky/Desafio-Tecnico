const mongoose = require('mongoose');

// Cria um esquema para a mensagem
const mensagemSchema = new mongoose.Schema({
  texto: String,
  data: String,
  hora: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  protocolo: String,
}, { timestamps: true });

// Cria um modelo para a mensagem
const Mensagem = mongoose.model('Mensagem', mensagemSchema);


module.exports = Mensagem

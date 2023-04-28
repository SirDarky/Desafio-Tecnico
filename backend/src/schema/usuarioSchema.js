const mongoose = require('mongoose');

// Cria um esquema para o usuário
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: {
        type: String,
        unique: true
    },
    senha: String,
    logradouro: String,
    bairro: String,
    numero: String,
    cidade: String,
    tipoUser: String
});

// Cria um modelo para o usuário
const Usuario = mongoose.model('Usuario', usuarioSchema);


module.exports = Usuario
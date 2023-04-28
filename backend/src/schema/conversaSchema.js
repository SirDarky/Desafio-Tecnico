const mongoose = require('mongoose');

const conversaSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    atendente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    protocolo: {
        type: String,
        unique: true
    },
    horario: String
}, { timestamps: true });

// Cria um model para a mensagem
const Conversa = mongoose.model('Conversa', conversaSchema);


module.exports = Conversa
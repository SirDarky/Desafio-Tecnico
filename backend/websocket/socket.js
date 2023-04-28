const Mensagem = require('../src/schema/mensagemSchema');
const { pegarData, pegarHoras } = require('../utility/date');
const secretPass = "bemol"
const jwt = require('jsonwebtoken');

// arquivo websocket.js
const io = require("socket.io")({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

io.on('connection', (socket) => {
    socket.on('join-room',(res)=>{
        socket.join(res)
    })
    // ouve eventos do cliente
    socket.on('enviar-mensagem', ({texto, autor, protocolo, token}) => {
        const tokenCliente = token
        jwt.verify(tokenCliente, secretPass, (error, decoded)=>{
            const mensagem = { texto: texto, autor: autor, protocolo: protocolo}
            if(error){
                socket.emit('error-mensagem', error)
            }
            const autorid = decoded.id;
            const data = pegarData()
            const horas = pegarHoras()
            const novaMensagem = new Mensagem({
                texto: texto,
                autor: autorid,
                data: data,
                hora: horas,
                protocolo: protocolo
            })
            novaMensagem.save()
                .then(conversa => {
                    socket.to(`${protocolo}`).emit('mensagem-recebida', mensagem);
                })
                .catch(error => {
                    socket.emit('error-mensagem', error)
                });
        })
    });
});

// informações necessárias->
/*
    texto -> mensagem
    autor -> id do autor
    data->
    hora ->
    protocolo -> identificação
*/

module.exports = io;
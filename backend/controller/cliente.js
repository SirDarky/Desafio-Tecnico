const router = require('express').Router();
const Conversa = require("../src/schema/conversaSchema");
const Mensagem = require('../src/schema/mensagemSchema');
const Usuario = require('../src/schema/usuarioSchema');
const { pegarDataFull } = require('../utility/date');
const transporter = require('../src/db/email')


//iniciar conversa
router.post('/conversa', (req,res)=>{
    let numProtocolo;
    Conversa.find().sort({ createdAt: -1 }).limit(1).then( (ultimaConversa) => {
      if (ultimaConversa.length ===0) {
        numProtocolo=1;
      } else {
        numProtocolo= parseInt(ultimaConversa[0].protocolo)+ 1;
      }
      const userId = req.userId;
      const data = pegarDataFull();
      const novaConversa = new Conversa({
          cliente: userId,
          protocolo: numProtocolo,
          horario: data
      });

      novaConversa.save()
        .then(conversa => {
            res.status(201).json({ message: 'Conversa criada', numero_protocolo: numProtocolo });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error });
        });
    });

    

});

//todas as conversa
router.get('/conversa', (req, res)=>{
  const tipoUser = req.tipoUser;
  if(tipoUser==="Funcionario"){
    const userId = req.userId;
    Conversa.find({ atendente: userId })
      .then(resultados => {
        const conversas = resultados;
        Mensagem.find({ $or: [ { autor: userId }, { remetente: userId } ] })
          .populate({ path: 'autor', select: 'nome' })
          .sort({ timestamp: 1 })
          .then(mensagens => {
            res.status(200).json({mensagens: mensagens, conversas: conversas});
          })
          .catch(error => {
            console.log(error)
            res.status(500).json({ error: error });
          });
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error: error });
      });
  } else {
    const userId = req.userId;
    Conversa.find({ cliente: userId })
      .then(resultados => {
        const conversas = resultados;
        Mensagem.find({ $or: [ { autor: userId }, { remetente: userId } ] })
          .populate({ path: 'autor', select: 'nome' })
          .sort({ timestamp: 1 })
          .then(mensagens => {
            res.status(200).json({mensagens: mensagens, conversas: conversas});
          })
          .catch(error => {
            console.log(error)
            res.status(500).json({ error: error });
          });
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error: error });
      });
  }
});

//envio de email
router.post('/email', (req, res)=>{
  const {toEmail, tittle, text} = req.body;
  const emailEnviar = {
    from: "marcus1017.mv@gmail.com",
    to: `${toEmail}`,
    subject: `${tittle}`,
    text: `${text}`
  }

  transporter.sendMail(emailEnviar, (err)=>{
    if(err){
      console.log(err)
      return res.status(500)
    }
    return res.status(200)
  })
})


module.exports = router;
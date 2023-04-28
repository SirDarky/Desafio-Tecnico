const router = require('express').Router();
const { error } = require('console');
const Conversa = require("../src/schema/conversaSchema");
const Mensagem = require('../src/schema/mensagemSchema');
const { pegarDataFull } = require('../utility/date');

//ao atender uma pessoa conversa
router.get('/conversa/:protocolo', async (req, res) => {
    const protocolo = req.params.protocolo;
    const userId = req.userId;
    try {
      await Conversa.updateOne({ protocolo: protocolo }, { atendente: userId });
      const resultados = await Mensagem.find({ protocolo: protocolo });
      res.status(200).json({ resultados });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  

router.get('/conversa', async (req, res) => {
    const userId = req.userId;
    try {
        const conversasSemFunc = await Conversa.find({ atendente: { $exists: false }})
            .populate('cliente')
            .exec();
        res.status(200).json({ conversasSemFunc });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
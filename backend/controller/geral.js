const router = require('express').Router();
const Usuario = require('../src/schema/usuarioSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = process.env.ASSINATURA;


//registrar
router.post('/register', (req, res)=>{
    const { nome, email, senha, logradouro, bairro, numero, cidade, tipoUser} = req.body;
    bcrypt.hash(senha, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            return;
        }
        const novoUser = new Usuario({
            nome: nome,
            email: email,
            senha: hash,
            logradouro: logradouro,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            tipoUser: tipoUser
        });
    
        novoUser.save()
            .then((user) => {
                res.status(201).json({ message: 'Usuario criado'});
            })
            .catch((error) => {
                console.log(error);
                if (error.code === 11000 && error.keyPattern.email === 1) {
                    res.status(400).json({ code:11000, message: 'O email já está sendo usado por outro usuário. Por favor, escolha outro email.' });
                } else {
                    res.status(500).json({ error: error });
                }
            });
    });    
})

//entrar
router.post('/entrar', (req, res)=>{
    const { email, senha } = req.body;
    Usuario.findOne({email: email}).select('nome tipoUser senha').exec()
    .then((usuario)=>{
        if(!usuario){
            res.status(400).json({ message: 'Usuario não foi encontrado'});
            return;
        }
        bcrypt.compare(senha, usuario.senha, (err, result) => {
            if (result) {
                usuario.senha = "";
                const nome = usuario.nome;
                const tipousuario = usuario.tipoUser;
                const id = usuario._id.toString()
                const usuarioFinal = {
                    id,
                    tipousuario,
                    nome
                };
                const tokenUser = jwt.sign(usuarioFinal, secret);
                res.status(200).json({token: tokenUser, tipoUser: tipousuario, nome: nome});
            } else {
                res.status(400).json({ message: 'Email ou Senha incorreta'});
            }
        });
    })
    .catch((error)=>{
        res.status(500).json({ error: error });
    })
})

module.exports = router;
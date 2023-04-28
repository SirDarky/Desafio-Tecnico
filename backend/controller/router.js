const router = require('express').Router();
const geralRoute = require('./geral')
const clienteRoute = require('./cliente')
const funcionarioRoute = require('./funcionario');
const authMiddleware = require('./security');

//geral
router.use("/", geralRoute);

//autenticação
router.use(authMiddleware)

//cliente
router.use("/cliente", clienteRoute);

//funcionario
router.use("/funcionario", funcionarioRoute);

module.exports = router;
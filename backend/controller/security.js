const jwt = require('jsonwebtoken');
const secret = process.env.ASSINATURA;

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send({ error: 'Token não fornecido' });
    }

    jwt.verify(token, secret, (error, decoded)=>{
        if(error){
            return res.status(401).send({ error: 'Token inválido' });
        }
        req.userId = decoded.id;
        req.tipoUser = decoded.tipousuario;
        return next();
    })
}

module.exports = authMiddleware;
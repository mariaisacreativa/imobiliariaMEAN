const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) res.send({ "msg": "No hay ningún token en header" })
    token = token.split(' ')[1]
    if (!token) res.send({ "msg": "No hay ningún token en header" })
    try {
        let tokenPayload = jwt.verify(token, "node-house")
        req.asesor = tokenPayload
        next()
    } catch (err) {
        res.send({ "msg": "Token no es correcto!" })
    }
}

module.exports = {
    verificarToken
}
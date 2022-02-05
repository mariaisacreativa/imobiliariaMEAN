const Asesores = require("../models/Asesor")

const login = (req, res) => {
    console.log("me llamaron")
    req.body.usuario && req.body.password ?
        Asesores.findOne({ usuario: req.body.usuario }, (err, user) => {
            console.log(user)
            console.time("test")
            switch (true) {
                case (err):
                    res.send({ "msg": err })
                    break;
                case (user==null):
                    res.send({"msg":"No existe el usuario en la collección"});
                    break;
                case (user?.password == req.body.password):
                    let token = user.generarJWT()
                    res.send({ "msg": "Se puede loggear", token})
                    break;
                case (user?.password != req.body.password):
                    res.send({ "msg": "La contraseña está erronea" })
                    break;
            }
            console.timeEnd("test")
        })
        :
        res.send({ "msg": "Te falta usuario o contraseña" });
}

module.exports = {
    login
}
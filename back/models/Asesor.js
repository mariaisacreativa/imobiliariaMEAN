const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const asesorSchema = new Schema({
    usuario:{
        type: String
    },
    password:{
        type: String
    },
    nombre:{
        type: String
    }
});

asesorSchema.methods.generarJWT = () => {
    return jwt.sign({ _id: this._id, nombre: this.nombre, usuario: this.usuario },"node-house")
}

module.exports = model("Asesor",asesorSchema,"asesores")
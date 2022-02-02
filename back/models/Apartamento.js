const {Schema, model} = require("mongoose");

const apartamentoSchema = new Schema({
    canon:{
        type: Number
    },
    ubicacion:{
        type: String
    },
});

module.exports = model("Apartamento",apartamentoSchema,"apartamentos")
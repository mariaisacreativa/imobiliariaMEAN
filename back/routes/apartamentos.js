const express = require("express");
const apartamentos = express.Router();
const {listApartamentos, searchApartamentos} = require("../controllers/Apartamentos");
const {verificarToken} = require("../middleware/verificarToken")
const {construirBusqueda} = require("../middleware/construirBusqueda")

apartamentos.get('/', listApartamentos)
apartamentos.get('/search', construirBusqueda, searchApartamentos)
//apartamentos.put('/update', verificarToken , actualizarApartamento)

module.exports = {
    apartamentos
}
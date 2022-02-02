const express = require("express");
const asesores = express.Router();
const {login} = require("../controllers/Asesores");

asesores.post('/login', login);

module.exports = {
    asesores
}
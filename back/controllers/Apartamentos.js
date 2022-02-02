const Apartamento = require("../models/Apartamento")

const listApartamentos = (req, res)=>{
    console.log(req.asesor)
    Apartamento.find((err, apartamentos)=>{
        if(err) res.send(err)
        res.send(apartamentos)
    })
}

const searchApartamentos = (req, res)=>{
    console.log("pasó el middleware(next) y por eso me estoy ejecuntando")
    console.log(req.query)
    Apartamento.find(req.query,(err, apartamentos)=>{
        if(err) res.send(err)
        res.send(apartamentos)
    })
    //res.send(req.query)
}
const crearApartamento = (req,res)=>{}
const actualizarApartamento = (req, res)=>{}

module.exports = {
    listApartamentos,
    searchApartamentos
}
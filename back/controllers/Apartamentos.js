const Apartamento = require("../models/Apartamento")

const listApartamentos = (req, res)=>{
    console.log(req.asesor)
    Apartamento.find((err, apartamentos)=>{
        if(err) res.send(err)
        //res.send(apartamentos)
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
const crearApartamento = (req,res)=>{
    const apartamento = req.body;
    console.log(req.body.dir)
    Apartamento.find({"dir":req.body.dir}, (err, apartamentos)=>{
        if(err) res.send(err)
        console.log(apartamentos)
        console.log(apartamentos.length)
        if(apartamentos.length>0) {
            res.status(400).send({"msg":"Ya existe el apartamento!","cod":"400"})
        }else{
            Apartamento.create(req.body).then((info)=>{
                res.status(200).send({"msg":"Ya quedó el apartamento en bd", "cod":"200"})
            }).catch(err=>{
                res.send({"msg":"No se pudo grabar", "cod":"500"})
            })
        }
    })    
}
const actualizarApartamento = (req, res)=>{}

module.exports = {
    listApartamentos,
    searchApartamentos,
    crearApartamento
}
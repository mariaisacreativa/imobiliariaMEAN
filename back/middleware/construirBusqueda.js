const construirBusqueda = (req,res,next)=>{
    try{
        //console.log(req.query)
        req.query.ubicacion? req.query.ubicacion = req.query.ubicacion.split(","): console.log("no se va a buscar por ubicación")
        //req.query.canon? req.query.canon = JSON.parse(req.query.canon) : console.log("no llegó canon, no haré conversión") //si viene el string desde el front ""
        req.query.canon? req.query.canon = {'$lte':req.query.canon} : console.log("no llegó canon, no haré conversión")
        next()
    }catch(err){
        res.status(500).send({"msg":"ocurrió un error: "+err})
    }
}

module.exports = {
    construirBusqueda
}
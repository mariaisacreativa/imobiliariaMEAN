const express = require("express");
const app = express();
const {asesores} = require("./routes/asesores");
const {apartamentos} = require("./routes/apartamentos");
const cors = require('cors')
const mongodb = require("./db/mongo");

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
   console.log("ok")
   res.send({"msg":"ok"})
})
app.use('/asesores', asesores);
app.use('/apartamentos', apartamentos);

app.listen(3000,()=>{
   console.log("Estoy funcionando como servidor http en la ruta http://localhost:3000") 
})
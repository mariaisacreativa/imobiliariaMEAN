const mongoose = require("mongoose");
const connectionString = "mongodb+srv://test:1234@cluster0.ekn6u.mongodb.net/inmobiliaria?retryWrites=true&w=majority";

const connectMongo = async () =>{
    try{
        await mongoose.connect(connectionString).then(()=>{
            console.log("Conectado!");
        });
    }catch(err){
        console.log("Error! "+err);
    }
}

connectMongo();

module.exports = {
    connectMongo
}
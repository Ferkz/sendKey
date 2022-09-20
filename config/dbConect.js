const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost/sistemasenhas").then(()=>{
    console.log("conectado");
}).catch((erro) =>{
    console.log("houve um erro: "+erro);
})
module.exports = mongoose

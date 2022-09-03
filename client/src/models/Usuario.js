const mongoose = require ('../../../server/config/dbConect');
const bcrypt = require ('bcryptjs')
const usuarioSchema = new mongoose.Schema({
    
    nome:{
        type: String,
        require: true,
    },
    usuario:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        //select: false quando der select no usuário a senha não será exibida
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});
usuarioSchema.pre('save', async function(next){
     const hash = await bcrypt.hash(this.password, 10);
     this.password = hash;
     next();
})
const usuario = mongoose.model('usuario', usuarioSchema)
module.exports = usuario;
const mongoose = require ('../dbConect');
const {hashSync, genSaltSync} = require ('bcryptjs');

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

usuarioSchema.pre('save', function(next){
     const hash = hashSync(this.password, genSaltSync(10));
     this.password = hash;
     next();
})
const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;
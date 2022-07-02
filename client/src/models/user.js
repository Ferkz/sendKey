const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
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
const User = mongoose.model('User', UserSchema)

module.exports = User;
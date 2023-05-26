const mongoose = require('../dbConect');

const setorSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        unique: true
    },
    cretedAt:{
        type: Date,
        default: Date.now
    }
});

const setor = mongoose.model('setor', setorSchema);
module.exports = setor;
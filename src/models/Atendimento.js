const mongoose = require('../dbConect')

const atendimentoSchema = new mongoose.Schema({
    tipo:{
        type: String,
        require: true
    },
    prioridade:{
        type: String,
        require: true
    },
    senha:{
        type: Number,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})
const atendimento = mongoose.model('atendimentos', atendimentoSchema);
module.exports = atendimento;
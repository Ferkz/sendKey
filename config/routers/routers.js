const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./index')
})
router.get('/atendimentos', (req,res)=>{
    res.render('./atendimentos/atendimentos');
})
router.get('/webpainel',(req,res)=>{
    res.render('./gerar-senha/gerar-senha',)
})
router.get('/websenha',(req,res)=>{
    res.render('./exibir-senha/exibir-senha')
})
module.exports = router
const express = require('express');
const router = express.Router();
const atendimentosController = require('../controllers/AtendimentosController');

router.get('/admin',atendimentosController.admin)
router.get('/',atendimentosController.index)
router.get('/atendimentos', atendimentosController.pegarAtendimento)
router.get('/atendimento-em-progresso/:id',atendimentosController.updateAtendimento)
router.get('/exibir',atendimentosController.exibirSenha)
router.get('/consultorio',atendimentosController.consultorio)
router.get('/configuracoes',atendimentosController.configuracoes)
router.get('/acesso-negado',atendimentosController.forbiden)
router.post('/atendimento/add',atendimentosController.gerandoAtendimento)
router.post('/configuracoes/setor/add',atendimentosController.criarSetor)
router.delete('/setor/deletar/:id',atendimentosController.deletarSetor)
router.delete('/atendimento/delete/:id',atendimentosController.deletaAtendimento)

router.get('/gerar',(_,res)=>{
    res.render('./gerar-senha/gerar-senha',)
})

module.exports = app => app.use('/dashboard',router)

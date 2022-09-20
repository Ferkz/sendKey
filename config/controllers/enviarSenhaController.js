const Atendimentos = require ('./atendimentosControler')
const gerarSenha = require ('./gerar')
const { BroadcastChannel } = require('broadcast-channel');
const bc = new BroadcastChannel('senhaChannel');

    bc.onmessage = (e)=>{
    const tipo = e.data;
    const prioridade = tipo.chaAt(0).toUppercase() + tipo.slice(1)
    const senha = gerarSenha(tipo)   
 }

const novo = new Atendimentos('teste','teste','teste')
console.log(novo);




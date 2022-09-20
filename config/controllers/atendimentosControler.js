const { BroadcastChannel } = require('broadcast-channel')

module.exports = class Atendimentos{
    constructor(tipo,prioridade,senha){
        this.tipo = tipo
        this.prioridade = prioridade
        this.senha = senha
    }
    adicionarEmEspera(){
        criarLinha(this.tipo,this.prioridade,this.senha,'Chamar Paciente','.atendimentoEmEspera')
        const botao = document.querySelector(`#${this.tipo}-${this.senha}`)
        botao.onclick = ()=> atualizar(botao,this.tipo,this.prioridade,this.senha)
    }
    atualizar(botao,tipo,prioridade,senha){
        this.remover(botao)
        this.adicionarEmEspera(tipo,prioridade,senha)
        const ids = botao.id.split('-');
        this.enviarSenha(...ids);
    }
    remover(botao){
        botao.parentNode.parentNode.remove()
    }
    adicionarEmAndamento(tipo,prioridade,senha){
        criarLinha(tipo,senha,prioridade,'Enviar ao consultorio', '.atendimentoEmprogresso')
    }
    enviarSenha(texto,senha){
       
       bc = new BroadcastChannel('enviarSenhaChannel')
        bc.postMessage({
            senha:senha,
            texto:texto
        })
    }
    criarLinha(senha,tipo,prioridade,texto,seletorTabela){
        const linha = `
        <tr>
            <td>0${senha}</td>
            <td>${prioridade}</td>
            <td><button class="${tipo}-chamadaBtn" id="${tipo}-${senha}" >${texto}</button></td>
        </tr>
        ` 
        const tbody = document.querySelector(seletorTabela);
        tbody.insertAdjacentHTML('beforeend', linha);
    }
}
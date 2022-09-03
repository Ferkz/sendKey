function adicionarLinha(senha, tipo, texto) {
    const linha = `
    <tr>
        <td>0${senha}</td>
        <td>${texto}</td>
        <td><button class="${tipo}-chamadaBtn" id="${tipo}-${senha}" >CHAMAR PACIENTE</button></td>
    </tr>
    `
    const tbody = document.querySelector('table tbody');
    tbody.insertAdjacentHTML('beforeend', linha);
    const botao = document.querySelector(`#${tipo}-${senha}`)
    botao.onclick = atualizar   
}
function atualizar(){
    remover(this)
    adicionar()
    enviarSenha()
}
function remover(e){
    e.parentNode.parentNode.remove()
}
function adicionar(linha){
   const atendimentoEmProgresso = document.querySelector('.atendimentoEmProgresso')
   atendimentoEmProgresso.insertAdjacentHTML('beforeend',linha)
}
function enviarSenha(texto,senha){
    const bc = new BroadcastChannel('enviarSenhaChannel')
    console.log(texto);
    bc.postMessage({
        senha:senha,
        texto:texto
    })
}
module.exports = adicionarLinha

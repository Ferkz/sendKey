const gerarSenha = require ('./gerarSenha')
const adicionarLinha = require('../controllers/atendimentosControler')

const bc = new BroadcastChannel('senhaChannel');
bc.onmessage = (e) => {
    const tipo = e.data;
    const texto = tipo.charAt(0).toUpperCase() + tipo.slice(1)
    const senha = gerarSenha(tipo)
  //  senhaDAO.salvar(senha) DAO DATA ACESS OBjetct
    adicionarLinha(senha, tipo, texto);
}


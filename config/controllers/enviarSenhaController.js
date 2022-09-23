const ws = require("socket.io");
const Atendimentos = require ('./atendimentosControler')
const gerarSenha = require ('./gerar')

function gerandoAtendimento(){
    module.exports = (server)=>{
        const io = ws(server)
        
        io.on("connect", (socket)=>{
            console.log(`Socket conectado ${socket.id}`);
                        socket.on('data',(e)=>{
                            console.log(e);
                        const tipo = e;
                        const prioridade = tipo.charAt(0).toUpperCase() + tipo.slice(1)
                        const senha = gerarSenha(tipo) 
                        const novo = new Atendimentos(tipo,prioridade,senha) 
                        console.log(novo);               
                })
        })
        return io
    }
}
gerandoAtendimento()
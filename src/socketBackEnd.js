const ws = require("socket.io");

module.exports = (server)=>{
    const io = ws(server)
    
    io.on("connection", (socket)=>{
        console.log(`Socket conectado ${socket.id}`);

        socket.on('enviar_senha',({data})=>{
            io.emit('exibir_senha_painel',({data}))
            console.log(`tudo ok ? ${data.senha} ${data.tipo}`);
        })
        socket.on('chamar_novamente',(dados)=>{
            io.emit('exibir_novamente',(dados))
        })
        socket.on('enviar_consultorio',(e)=>{
            io.emit('enviar_consultorio_front',e)
        })
        socket.on('atualizar',()=>{
            io.emit('atualizar')
        })

    })
    return io
}
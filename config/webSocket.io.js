const ws = require("socket.io");

module.exports = (server)=>{
    const io = ws(server)

    // Escuta o evento de conexão   
    io.on("connect", (socket)=>{
        console.log(`Socket conectado ${socket.id}`);

        /**
         * Compreendendo eventos
         * Você irá dá nome a eles e manipular
         * Existe o emissor e o ouvinte
         * ws.on é ouvinte, ele ouve e executa uma função
         * ws.on("teste", (args)=>{ console.log(args) })
         * ws.emit é um emissor de evento 
         * ws.emit("teste", 10)
         * 
         * Ambas as funções funciona no frontend como no backend.
         */

    })


    // Retorna o io para poder executar ele fora da função
    return io
}
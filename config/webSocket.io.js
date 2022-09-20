const io = require("../server");

io.on("connection",(socket) =>{
    console.log('teste',socket.id);
})
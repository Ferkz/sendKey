
const express = require ('express');
const app = express();
const path = require('path')
const port = 3000
 
//public
//app.use(express.static.apply(path.join(__dirname,"public")))
app.set('views', path.join(__dirname,'../client/src/','views'))
app.set('public',path.join(__dirname,'../public','public'))
app.set('view engine','ejs')
app.use('/',require('../client/src/routers/routers'));


app.listen(port,()=>{
    console.log("servidor rodando na porta",port);
})
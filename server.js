const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;
const passport = require('passport');
const flash = require('connect-flash');
// Aqui transforma o server express em http
const server = require('http').createServer(app);
// Aqui chamamos o ws para observar o servidor 
const io = require("./config/webSocket.io")(server)

const session = require('express-session');

app.use(session({
    secret: 'secretkey',
    key: 'skey.sid',
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge: 6048
    }
}))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
require('./config/middleware/passport')(passport);

app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'./public')));
app.set('view engine','ejs')

require('./config/routers/routers')(app)
require('./config/controllers/authenticacaoController')(app)
require ('./config/routers/routers.login')(app)


// Invés do app.listen, usamos o server.listen. Se não dará erro.
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}: http://localhost:${port}`);
})
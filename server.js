const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;
const passport = require('passport');
const flash = require('connect-flash');
const server = require('http').createServer(app);
const io = require("./src/socketBackEnd")(server)
const session = require('express-session');

app.use(session({
    secret: 'secretkey',
    key: 'skey.sid',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

require('./src/middleware/passport')(passport);

app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname,'src/views'));
app.use(express.static(path.join(__dirname,'./public')));
app.set('view engine','ejs')

require('./src/routers/routers')(app)
require('./src/routers/routers.usuarios')(app)
require('./src/controllers/authenticacaoController')(app)
require ('./src/routers/routers.login')(app)

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}: http://localhost:${port}`);
})
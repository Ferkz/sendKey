const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;
const passport = require('passport');
const flash = require('connect-flash')

const session = require('express-session');

app.use(session({
    secret: 'secretkey',
    key: 'skey.sid',
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge: 604800000
    }
}))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
require('../client/src/middleware/passport')(passport);

app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname,'../client/src/','views'));
app.use(express.static(path.join(__dirname,'/../public')));

app.set('view engine','ejs')
app.use('/dashboard',require('../client/src/routers/routers'));

require('../client/src/controllers/authenticacaoController')(app)
require ('../client/src/routers/routers.login')(app)
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}: http://localhost:${port}`);
})
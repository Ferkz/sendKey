const express = require ('express');
const router = express.Router();
const passport = require('passport');
const AtendimentosController = require('./AtendimentosController');

require('../routers/routers.login')

router.post('/login',(req,res,next)=>{
        passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req,res,next)
    if (req.isAuthenticated()) {
        console.log('autenticado',req.user); // deve imprimir o ID do usuário
      } else {
        // o usuário não está autenticado
        console.log('Usuário não autenticado');
      }
})
router.get('/logout',AtendimentosController.logout)
module.exports = app => app.use('/auth',router);

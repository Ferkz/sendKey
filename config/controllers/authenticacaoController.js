const express = require ('express');
const Usuario = require ('../models/Usuario');
const router = express.Router();
const passport = require('passport')

require('../routers/routers.login')
router.post('/register',async (req,res)=>{
    try {
        const usuario = await Usuario.create(req.body);
        return res.send({usuario});
    }catch(err){
        return res.status(400).send ({error: 'Falha na criacao do usuario '+err});
    }
});
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req,res,next)
})
module.exports = app => app.use('/auth',router);

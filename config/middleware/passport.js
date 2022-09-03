const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("../dbConect")
const bcrypt = require("bcryptjs")
require("../models/Usuario")
const Usuario = mongoose.model("usuario");

module.exports = function(passport){
    passport.use('local',new LocalStrategy({usernameField: 'usuario',passwordField: 'password'},(usuario, password, done)=>{
    
        console.log(usuario)

        Usuario.findOne({usuario: usuario}).then((usuario)=> {
            if(!usuario){
                console.log('usuario não find')
                return done(null, false, {message: "Esta conta não existe"})
            }
            bcrypt.compare(password, usuario.password, (erro, batem) => {

                if(batem){
                    return done(null, usuario)
                }else{
                    return done(null, false, {message: "Senha incorreta"})
                }
            })
        })
    }))
    passport.serializeUser((usuario, done)=> {
        done(null, usuario.id)
    })
    passport.deserializeUser((id, done) => {
        Usuario.findById(id, (err, usuario)=> {
            done(err, usuario)
        })
    })
}
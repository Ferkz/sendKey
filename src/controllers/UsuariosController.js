const Usuario = require ('../models/Usuario');
require('../models/Usuario')
const mongoose = require('mongoose');
module.exports = class usuariosController {
    static criarUsuario = async (req,res)=>{
        try {
            //nome usuario password
            const usuario = await Usuario.create(req.body);
            return res.send({usuario});
        }catch(error){
            return res.status(400).send ({error: 'Falha na criacao do usuario ' +error});
        }
    }
}
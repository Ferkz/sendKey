const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/UsuariosController')

router.post('/registro',usuariosController.criarUsuario)
module.exports = app => app.use('/add',router)
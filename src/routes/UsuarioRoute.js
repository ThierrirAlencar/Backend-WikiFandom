const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');

// Usando os métodos do controller nas rotas
router.get('/usuarios', UsuarioController.getAllUsuarios);

router.get('/usuarios:id', UsuarioController.getUsuarioById);

router.post('/usuarios', UsuarioController.createUsuario);

router.put('/usuarios/:id', UsuarioController.updateUsuario);

router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

/*
// adicionando rota de atualizar e deletar
router.put('/usuarios/:id' , UsuarioController.atualizarPerfil);

router.delete('/usuarios/:id' , UsuarioController.atualizarPerfil)*/

module.exports = router;
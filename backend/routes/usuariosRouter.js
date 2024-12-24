const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/auth');

router.post('/', usuariosController.registrarUsuario);
router.post('/login', usuariosController.iniciarSesion);
router.get('/', authMiddleware, usuariosController.obtenerUsuario);

module.exports = router;
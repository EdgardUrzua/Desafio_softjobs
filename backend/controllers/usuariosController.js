const usuariosModel = require('../models/usuariosModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await usuariosModel.registrarUsuario(email, hashedPassword, rol, lenguage);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar el usuario');
  }
};

exports.iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await usuariosModel.obtenerUsuarioPorEmail(email);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = bcrypt.compareSync(password, usuario.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ email }, 'az_AZ');
    res.send(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al iniciar sesión');
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const { email } = req.user;
    const usuario = await usuariosModel.obtenerUsuarioPorEmail(email);
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el usuario');
  }
};
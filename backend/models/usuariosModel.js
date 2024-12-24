const pool = require('../db/database');

exports.registrarUsuario = async (email, password, rol, lenguage) => {
  const query =
    'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4)';
  const values = [email, password, rol, lenguage];
  await pool.query(query, values);
};

exports.obtenerUsuarioPorEmail = async (email) => {
  const query = 'SELECT * FROM usuarios WHERE email = $1';
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows[0];
};
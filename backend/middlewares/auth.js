const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token' });
  }

  try {
    const payload = jwt.verify(token, 'az_AZ');
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).send({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;
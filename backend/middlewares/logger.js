const fs = require('fs');

const logger = (req, res, next) => {
  const now = new Date();
  const logMessage = `${now.toISOString()} - ${req.method} - ${req.originalUrl}\n`;

  fs.appendFile('requests.log', logMessage, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de registro:', err);
    }
  });

  next();
};

module.exports = logger;
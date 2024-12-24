const express = require('express');
const usuariosRoutes = require('./routes/usuariosRoutes');
const logger = require('./middlewares/logger');

const app = express();
const port = 3000;

app.use(express.json());
app.use(logger);

app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
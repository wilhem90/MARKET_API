const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const bodyParser = require('body-parser');
const configDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas públicas (sem autenticação)
app.use('/auth', authRoutes);

// Middleware de autenticação global
app.use(authMiddleware);

// Rotas protegidas (requer autenticação)
app.use('/usuario', usuarioRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
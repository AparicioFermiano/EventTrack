const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
var cors = require('cors');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'et',
  password: '123',
  port: 5432,
});

// Configuração do body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors())

router.post('/validar_login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM clientes WHERE email = $1 AND senha = $2', [email, password]);
    if (result.rows.length === 1) {
      res.json({ status: 200, message: 'Login realizado com sucesso' });
    } else {
      res.json({ status: 401, message: 'E-mail ou senha inválida' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor. Desculpe!' });
  }
});

  module.exports = router;
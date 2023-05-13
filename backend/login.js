const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'et',
  password: '123',
  port: 5432,
});

router.get('/teste', async (req, res) => {
  console.error('teste', pool);
  const result = await pool.query('SELECT * FROM clientes');
  if (result.rowCount === 1) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});

module.exports = router;

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const result = await query('SELECT * FROM clientes');
//     if (result.rowCount === 1) {
//       res.status(200).json({ message: 'Login successful!' });
//       console.log('Login - 200');
//     } else {
//       res.status(401).json({ messaavge: 'Invalid credentials.' });
//       console.log('Login - 401');
//     }
//   });
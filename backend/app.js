const { Pool } = require('pg');
const express = require('express');
var cors = require('cors');

const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'et',
  password: '123',
  port: 5432,
});

// Teste de conexão com o banco de dados
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err.stack);
  } else {
    console.log('Conexão com o banco de dados bem-sucedida');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM clientes');
  if (result.rowCount === 1) {
    res.status(200).json({ message: 'Login successful!' });
    console.log('Login - 200');
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
    console.log('Login - 401');
  }
});

app.get('/teste', async (req, res) => {
  const result = await pool.query('SELECT * FROM clientes');
  if (result.rowCount === 1) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials.' });
  }
});

app.use(cors())
app.listen(port, () => {
  console.log('Rodando na porta 3000');
});
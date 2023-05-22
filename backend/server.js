//const bodyParser = require('body-parser');
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

// Rotas
const ingressoRouter = require('./routes/ingressos');
const loginRouter = require('./routes/login');
const eventoRouter = require('./routes/eventos');
//const perfilRouter = require('./routes/perfil');

app.use('/login', loginRouter);
app.use('/eventos', eventoRouter);
app.use('/ingressos', ingressoRouter);
//app.use('/perfil', perfilRouter);

app.use(cors())
app.listen(port, () => {
  console.log('Rodando na porta 3000');

});
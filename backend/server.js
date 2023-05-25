const { Pool } = require('pg');
const sessions = require('express-session');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
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

// Configuração do middleware express-session
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false 
}));

app.use(cookieParser());

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para verificar a autenticação e armazenar o id_cliente globalmente
app.use((req, res, next) => {
  console.error('middle:', req.session.userId);
  if (req.session.userId) {
    // Se o id_cliente estiver presente na sessão, armazene-o globalmente
    res.locals.id_cliente = req.session.userId;
  }
  
  next();
});

// Rotas
const loginRouter = require('./routes/login');
const ingressoRouter = require('./routes/ingressos');
const eventoRouter = require('./routes/eventos');

app.use('/login', loginRouter);
app.use('/eventos', eventoRouter);
app.use('/ingressos', ingressoRouter);

app.use(cors());
app.listen(port, () => {
  console.log('Rodando na porta 3000');
});

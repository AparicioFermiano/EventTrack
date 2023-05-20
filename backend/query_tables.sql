BEGIN;

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  adm BOOLEAN DEFAULT FALSE,
  senha VARCHAR(30),
  nome_completo VARCHAR(30),
  cpf VARCHAR(11) UNIQUE,
  data_nasc DATE,
  email VARCHAR(30),
  bloqueado BOOLEAN DEFAULT FALSE
);

CREATE TABLE enderecos (
  id SERIAL PRIMARY KEY,
  logradouro VARCHAR(30),
  numero INT,
  bairro VARCHAR (30),
  cidade VARCHAR (30),
  estado VARCHAR (2),
  cep VARCHAR (8),
  complemento VARCHAR (30)
);

CREATE TABLE administradores (
  id SERIAL PRIMARY KEY,
  id_cliente INT REFERENCES clientes(id),
  id_endereco INT REFERENCES enderecos(id),
  cnpj VARCHAR(14) UNIQUE,
  razao_social VARCHAR(50)
);

CREATE TABLE eventos (
  id SERIAL PRIMARY KEY,
  id_administrador INT REFERENCES administradores(id),
  id_endereco INT REFERENCES enderecos(id),
  nome VARCHAR(30),
  dt_inicio TIMESTAMP,
  dt_fim TIMESTAMP,
  preco NUMERIC(4,2),
  descricao VARCHAR(50),
  idade_minima INT
);

CREATE TABLE ingressos (
  id SERIAL PRIMARY KEY,
  id_evento INT REFERENCES eventos(id),
  id_cliente INT REFERENCES clientes(id),
  hora_entrada DATE,
  hora_saida DATE,
  valor_consumido NUMERIC(5,2),
  pago_consumo BOOLEAN DEFAULT FALSE
);

INSERT INTO clientes(adm, senha, nome_completo, cpf, data_nasc, email)
VALUES (
  TRUE,
  '12345678',
  'Rodrigo Vinícius Amaral',
  '12345678910',
  '2000-01-01',
  'rodrigo@gmail.com.br'
),(
  FALSE,
  '12345679',
  'Aparício Fermiano',
  '12345678911',
  '2000-02-02',
  'aparicio@gmail.com.br'
);

INSERT INTO enderecos(logradouro, numero, bairro, cidade, estado, cep, complemento)
VALUES (
  'Rua Um',
  10,
  'Bairro Unidade',
  'São Paulo',
  'SP',
  '01001000',
  'Próximo ao Mercado do José'
);

INSERT INTO administradores(id_cliente, id_endereco, cnpj, razao_social)
VALUES (
  1,
  1,
  '49079676000101',
  'Avançar'
);

INSERT INTO eventos(id_administrador, id_endereco, nome, dt_inicio, dt_fim, preco, descricao, idade_minima)
VALUES (
  1,
  1,
  'Festa TOP',
  '2023-05-20 20:00:00',
  '2023-06-20 23:59:00',
  80.00,
  'Festa em Balada de Sao Paulo com duração de 2 dias',
  18
);

INSERT INTO eventos(id_administrador, id_endereco, nome, dt_inicio, dt_fim, preco, descricao, idade_minima)
VALUES (
  1,
  1,
  'Festa TOP',
  '2023-05-20 20:00:00',
  '2023-06-20 23:59:00',
  80.00,
  'Festa em Balada de Sao Paulo com duração de 2 dias',
  18
);

INSERT INTO ingressos(id_evento, id_cliente, hora_entrada, hora_saida, valor_consumido, pago_consumo)
VALUES (
  1,
  2,
  '2023-05-20 21:00:00',
  '2023-06-20 19:00:0',
  100.00,
  TRUE
);

SELECT * FROM clientes;
SELECT * FROM enderecos;
SELECT * FROM administradores;
SELECT * FROM eventos;
SELECT * FROM ingressos;

COMMIT;
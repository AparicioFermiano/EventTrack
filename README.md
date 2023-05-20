# Criação de uma catraca para festas com validações e compra de ingressos

### O projeto consiste em desenvolver uma catraca equipada com um leitor de QR Code para validação de ingressos em festas e eventos. A compra dos ingressos será realizada por meio de uma aplicação web desenvolvida em JS, que se comunicará com o hardware da catraca por meio de uma API.

## Tecnologias Utilizadas
- Arduino Uno;
- Shield Ethernet;
- Node.js;
- PostgreSQL;
- Funcionalidades;
- Leitura de QR Code para validação de ingressos;
- Comunicação com aplicação web por meio de API;
- Display LCD para exibição de informações;
- Leitor de cartões RFID para expansão de funcionalidades.

## Objetivo
O objetivo do projeto é criar uma solução eficiente e segura para a validação de ingressos em festas e eventos, oferecendo aos organizadores maior controle e segurança no acesso do público.

## Configuração do Ambiente
- Baixe o repositório:
```bash
git clone https://github.com/AparicioFermiano/EventTrack.git
```

- Baixe e instale o SGBD PostgreSQL.

- Instale o Node.js e o NPM.
```
$ pip install node
$ pip install npm
```

- Crie o banco de dados:
```sql
CREATE DATABASE et;
```
Após a criação do banco de dados, rode o arquivo de querys para poder criar as tabelas necessárias juntamente com alguns dados testes, o arquivo se encontra em "backend/query_tables.sql".

- Instale as dependências do projeto:
```
$ npm install
```

- No arquivo do servidor (app.js), altere as variáveis de conexão do banco de dados (user, host, database, password, port) de acordo com as configurações do seu ambiente.
```js
const pool = new Pool({
  user: '<Seu usuario>',
  host: '<Seu host>',
  database: 'et',
  password: '<Sua senha>',
  port: '<Sua porta>',
});
```

Para iniciar o Node, faça:

```
$ node backend/server.js
```

Para iniciar o Angular, faça:

```
$ ng serve
```

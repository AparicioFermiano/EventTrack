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

//Queries
router.get('/consultar_eventos', async (req, res) => {
  // const date = new Date()
  // let minute = date.getMinutes();
  // let hour = date.getHours();
  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();
  const result = await pool.query(
    `SELECT *
    FROM eventos
    WHERE dt_fim >= NOW()
    ORDER BY id DESC`
  );
  try {
    if (result.rowCount > 0) {
      res.status(200).json(result.rows);
      res
    } else {
      res.status(401).json({message: 'Sem eventos disponíveis.'});
    }
  } catch(err) {
    res.status(500).json({message: 'Erro no servidor. Desculpe!'});
  }
});

router.get('/consultar_eventos_por_nome', async(request, response) => {
  let name_event = request.body
  const result = await pool.query(
    `SELECT *
    FROM eventos
    WHERE nome LIKE '%${name_event['nome']}%'
    ORDER BY id DESC`
  );
  try {
    if (result.rowCount > 0) {
      response.status(200).json(result.rows);
    } else {
      response.status(401).json({message: 'Evento não encontrado'});
    }
  } catch(err) {
    res.status(500).json({message: 'Erro no servidor. Desculpe!'});
  }
});

router.post('/criar_evento', async(request, response) => {
  const {
    id_administrador,
    id_endereco,
    nome,
    dt_inicio,
    dt_fim,
    preco,
    descricao,
    idade_minima
  } = request.body

  const result = await pool.query(`
    INSERT INTO eventos (id_administrador, id_endereco, nome, dt_inicio, dt_fim, preco, descricao, idade_minima)
    VALUES (${id_administrador},
            ${id_endereco},
            '${nome}',
            '${dt_inicio}',
            '${dt_fim}',
            ${preco},
            '${descricao}',
            ${idade_minima})`,
  );
  try {
    if (result.rowCount === 1) {
      response.status(200).json({message: 'Evento criado!'});
    } else {
      response.status(401).json({message: 'Erro ao criar evento!'});
    }
  } catch(err) {
    res.status(500).json({message: 'Erro no servidor. Desculpe!'});
  }
});


// v INCOMPLETO/NÃO FUNCIONANDO v

// const atualizar_evento = (request, response) => {
//     const id_evento = parseInt(request.params.id)
//     const {
//         name_event,
//         date_event,
//         start_time_event,
//         end_time_event,
//         price_event,
//         adress_event,
//         cep_event,
//         description_event,
//         minimum_age_event,
//         organizer_user_id, 
//         comments_event
//     } = request.body

//     pool.query(`UPDATE tb_events
//                 SET ${name_event},
//                     ${date_event},
//                     ${start_time_event},
//                     ${end_time_event},
//                     ${price_event},
//                     ${adress_event},
//                     ${cep_event},
//                     ${description_event},
//                     ${minimum_age_event},
//                     ${organizer_user_id}, 
//                     ${comments_event}
//                 WHERE id_event = ${id_evento}`,
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).send(`Evento atualizado com ID: ${results.insertId}`)
//             console.log('Evento atualizado com sucesso')
//         }
//     )
// }

// const remover_evento = (request, response) => {
//     const id_evento = parseInt(request.params.id)
//     pool.query(`DELETE FROM tb_events
//                 WHERE id_event = ${id_evento}`,
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).send(`Evento removido com ID: ${results.insertId}`)
//             console.log('Evento removido com sucesso')
//             pool.end()
//         }
//     )
// }

module.exports = router;
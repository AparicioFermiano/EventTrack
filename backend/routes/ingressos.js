const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var cors = require('cors');
const qrcode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

const pgp = require('pg-promise')();
// Configuração da conexão com o banco de dados
const connectionString = 'postgres://postgres:123@localhost:5432/et';
const db = pgp(connectionString);

// Configuração do body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors())

router.post('/', async (req, res) => {
    const { id_cliente } = req.body;
    try {
        const result = await db.any(buscar_meus_ingressos(id_cliente));
        if (result) {
          res.json({status: 200, query: result});
        } else {
          res.json({status: 401, msg: "Nenhum ingresso comprado!"});
        }
    } catch (error) {
        res.json({status: 500, msg: 'Erro ao executar a consulta:', error: error});
    }  
});

router.get('/:id_ingresso', async (req, res) => {
    const id_ingresso = req.params.id_ingresso;
    try {
        const result = await db.one(buscar_ingresso_por_id(id_ingresso));
        res.json({status: 200, query: result});
    } catch (error) {
        res.json({status: 500, msg: 'Erro ao executar a consulta:', error: error});
    }  
});

router.post('/teste', async (req, res) => {
    const { id_ingresso, tipo } = req.body;
    res.json(await validar_qrcode(id_ingresso, tipo))
});

async function validar_qrcode(id_ingresso, tipo) {
    // tipo: entrada = 0, saida = 1
    try {
        var ingresso = await db.one(validar_ingresso(id_ingresso));
    } catch (error) {
        return { status: 500, msg: "O ingresso é inválido", error: error };
    }
    console.error(ingresso)
    if(tipo == 0 & !ingresso.pago_consumo) {
        return { status: 203, msg: "É necessário pagar o consumo para sair."};
    } else {
        try {
            db.none(inserir_entrada_saida(id_ingresso, tipo));
            return { status: 200, msg: "Liberado!"};
        } catch (error) {
            return { status: 500, msg: "Problema para validar.", error: error };
        }
    }
}

async function generateQRCode(data) {
    const qrCode = await qrcode.toDataURL(data);
    return qrCode;
}

async function processar_compra(id_evento, id_cliente) {
    const token = uuidv4();
    const data = {
      id_evento: id_evento,
      id_cliente: id_cliente,
      token: token
    };
  
    try {
      const qr_code = await generateQRCode(JSON.stringify(data));
      const ingresso = await db.one(inserir_ingresso(id_evento, id_cliente, qr_code));
      return { status: 200, ingresso: ingresso, msg: "Ingresso comprado com sucesso!" };
    } catch (error) {
      return { status: 500, msg: "Problema para comprar o ingresso.", error: error };
    }
  }

//querys
function buscar_meus_ingressos(id_cliente) {
    return `
        SELECT * FROM ingressos i
        INNER JOIN eventos e ON i.id_evento = e.id
        WHERE id_cliente = ${id_cliente} ORDER BY e.dt_inicio DESC`
}

function inserir_ingresso(id_evento, id_cliente, qr_code) {
    return {
        text: 'INSERT INTO ingressos(id_evento, id_cliente, qr_code) ' +
        'VALUES ($1, $2, $3) RETURNING id',
        values: [id_evento, id_cliente, qr_code]
    }    
}

function buscar_ingresso_por_id(id_ingresso) {
    return `
        SELECT * FROM ingressos i
        INNER JOIN eventos e ON i.id_evento = e.id
        WHERE i.id = ${id_ingresso}`
}

function validar_ingresso(id_ingresso) {
    return {
        text: 'SELECT i.id, i.id_evento, i.pago_consumo FROM ingressos i ' +
        'INNER JOIN eventos e ON i.id_evento = e.id ' +
        'WHERE i.id = $1 AND e.dt_inicio < CURRENT_TIMESTAMP AND e.dt_fim ' +
        '> CURRENT_TIMESTAMP AND (hora_saida is null or hora_entrada is null)',
        values: [id_ingresso]
    }
}

function inserir_entrada_saida(id_ingresso, tipo) {
    if(tipo == 0) {
        return {
            text: 'UPDATE ingressos set hora_entrada = CURRENT_TIMESTAMP where id = $1',
            values: [id_ingresso]
        }
    } else {
        return {
            text: 'UPDATE ingressos set hora_saida = CURRENT_TIMESTAMP where id = $1',
            values: [id_ingresso]
        }
    }
}

module.exports = router;
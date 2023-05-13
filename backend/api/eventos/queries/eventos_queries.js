const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'et',
    password: '123',
    port: 5432,
});

//Queries
const consultar_eventos = (request, response) => {
    pool.query(`SELECT * 
                FROM tb_events 
                ORDER BY id_event ASC`, 
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
            console.log('Eventos listados com sucesso')
            pool.end()
        }
    )
}

const consultar_eventos_por_nome = (request, response) => {
    const name_event = request.query.search
    pool.query(`SELECT * 
                FROM tb_events 
                WHERE name_event LIKE '%${name_event}%'
                ORDER BY id_event ASC`, 
        (error, results) => {
            if (error) {
                throw error
            } else {
                response.status(200).json(results.rows)
                console.log('Eventos buscados com sucesso')
            }
            pool.end()
        }
    )
}

const criar_evento = (request, response) => {
    console.log('funciona')
    const {
        name_event,
        date_event,
        start_time_event,
        end_time_event,
        price_event,
        adress_event,
        cep_event,
        description_event,
        minimum_age_event,
        organizer_user_id, 
        comments_event
    } = request.body

    // Verificar insert do id do usuário. Não sei se está certo o jeito que faz.
    pool.query(`INSERT INTO tb_events(name_event,
                                      date_event,
                                      start_time_event,
                                      end_time_event,
                                      price_event,
                                      adress_event,
                                      cep_event,
                                      description_event,
                                      minimum_age_event,
                                      organizer_user_id, 
                                      comments_event)
                VALUES (${name_event},
                        ${date_event},
                        ${start_time_event},
                        ${end_time_event},
                        ${price_event},
                        ${adress_event},
                        ${cep_event},
                        ${description_event},
                        ${minimum_age_event},
                        ${organizer_user_id},
                        ${comments_event})`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Evento inserido com ID: ${results.insertId}`)
            console.log('Evento criado com sucesso')
            pool.end()
        }
    ) 
}

const atualizar_evento = (request, response) => {
    const id_evento = parseInt(request.params.id)
    const {
        name_event,
        date_event,
        start_time_event,
        end_time_event,
        price_event,
        adress_event,
        cep_event,
        description_event,
        minimum_age_event,
        organizer_user_id, 
        comments_event
    } = request.body

    pool.query(`UPDATE tb_events
                SET ${name_event},
                    ${date_event},
                    ${start_time_event},
                    ${end_time_event},
                    ${price_event},
                    ${adress_event},
                    ${cep_event},
                    ${description_event},
                    ${minimum_age_event},
                    ${organizer_user_id}, 
                    ${comments_event}
                WHERE id_event = ${id_evento}`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Evento atualizado com ID: ${results.insertId}`)
            console.log('Evento atualizado com sucesso')
        }
    )
}

const remover_evento = (request, response) => {
    const id_evento = parseInt(request.params.id)
    pool.query(`DELETE FROM tb_events
                WHERE id_event = ${id_evento}`,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Evento removido com ID: ${results.insertId}`)
            console.log('Evento removido com sucesso')
            pool.end()
        }
    )
}

module.exports = {
    consultar_eventos,
    consultar_eventos_por_nome,
    criar_evento,
    atualizar_evento,
    remover_evento
}
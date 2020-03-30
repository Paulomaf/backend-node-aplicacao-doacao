const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/** 
 *  Metodos HTTP
 * 
 * get: Buscar/Listar uma informação no back-end
 * post: Criar uma alteração no back-end
 * put: Alterar uma informação no back-end
 * delete: Deletar uma alteração no back-end
*/

/**
 * Tipos de parametros
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)... /users?page2&nome=Paulo
 * conseguindo concatenar com o &
 * 
 * Route Params: Parâmetros utilizados para identificar recursos  /users/:id
 * 
 */


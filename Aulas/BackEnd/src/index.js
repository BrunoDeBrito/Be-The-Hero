const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rotas  / Recursos
 */

/**
 *Metodo Http
 *
 *GET: Busca uma informação no backEnd
 *POST: Cria uma informação no backEnd
 *PUT: Altera uma informação no backEnd
 *DELETE: Deleta uma informação no backEnd
 */

/*
 *Tipos de Parâmetros:
 *
 * Query Params: Parâmetros noemados na rotas após "?" servem para (filtros, paginação)
 * Route Params: Parâmetro ultilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recurso
 */
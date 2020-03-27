Métodos HTTP

GET: Buscar listar informações do back-end
POST: Criar uma informação no back-end
PUT: Alterar informações no back-end
DELETE: Deletar informações no back-end


TIPOS DE PARAMETROS:

Query Params: Parâmetros nomeados enviados na rota após "?". Geralmente usados para filtros e paginações

O 'request' guarda todos os parametros que vem com a requisiçao

BACKEND
app.get('/users', (request, response) => {
    const params = request.query
})

BROWSER
http://localhost:3333/users?page=2,idade=25

Route Params: Parâmetros utilizados para identificar recursos. Nesse caso a rota deve ser fiel a quantidade de parametros. Se você enviar uma quantidade incorreta de parâmetros levantará um erro.

BACKEND
app.get('/users/:id', (request, response) => {
    const id = request.params.id
})

BROWSER
http://localhost:3333/users/21


Request Body

É o corpo de uma requisição que deve ser enviado normalmente no formato json. Geralmente é usado com o metodo post.

BACKEND

const express = require("express")

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
    const body = req.body

    return response.json({
        id: body.id
        name: body.name
    })
})

FRONTEND

http://localhost:3333/users

//corpo da requisição

{
    "id": 21,
    "name": "Wellington"
}
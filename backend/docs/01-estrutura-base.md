
estrutura base de um projeto com express:

const express = require("express")

const app = express()


app.get('/', (request, response)=> {
    return response.json({evento: 'semana omni stack 11.0', aluno: 'wellington de sousa'})
})

app.listen(3333)
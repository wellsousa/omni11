const express = require("express")

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const OngProfileController = require('./controllers/OngProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/ong/profile', OngProfileController.index)

routes.post('/session', SessionController.create)

module.exports = routes
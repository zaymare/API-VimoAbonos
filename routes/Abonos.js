const { Router } = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router()

//Importar métodos del controlador
const { AbonosGet, AbonosPost, AbonosPut, AbonosDelete } = require('../controllers/Abonos')

route.get('/', AbonosGet) //Listar Datos

route.post('/', AbonosPost) //Insertar Datos

route.put('/', AbonosPut) //Insertar Datos

route.delete('/', AbonosDelete)

module.exports = route
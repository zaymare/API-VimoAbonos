const { Schema, model } = require('mongoose')

const abonoSchema = Schema({
        cliente: String,
        fecha: String,
        estado: String,
        valor: String
})

//Exportar la función UsuarioSchema
module.exports = model('Abonos', abonoSchema)


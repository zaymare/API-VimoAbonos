const { response } = require('express')

//Importación de los modelos
const abonos = require('../models/Abonos')

//Método GET de la API
const AbonosGet = async (req, res = response) => {
    //const {nombre} = req.body //Desestructuración

    //Consultar todos los usuarios
    const Abonos = await abonos.find()

    res.json({  //Respuesta en JSON
        Abonos
    })
}

//Método POST de la api
const AbonosPost = async (req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const Abonos = new abonos(body) //Instanciando el objeto
        await Abonos.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


//Modificación
const AbonosPut = async (req, res) => {
    const { _id, cliente, fecha, estado, valor } = req.body
    let mensaje = 'Modificación exitosa'
    const clientesAbonos = await abonos.findOne({ _id: _id })
    if (!clientesAbonos) {
        mensaje = "Cliente no encontrado"
    } else {
        try {
            clientesAbonos.cliente = cliente !== undefined ? cliente :  clientesAbonos.cliente;
            clientesAbonos.fecha = fecha !== undefined ? fecha : clientesAbonos.fecha;
            clientesAbonos.estado = estado !== undefined ? estado : clientesAbonos.estado;
            clientesAbonos.valor = valor !== undefined ? valor : clientesAbonos.valor;
            await clientesAbonos.save();
        } catch (error) {
            mensaje = "Problemas al modificar"
            console.log(error)
        }
    }
    res.json({
        msg: mensaje
    })
}

//DELETE - ELIMINAR
const AbonosDelete = async (req, res) => {
    const { _id } = req.body
    let mensaje = 'Eliminación exitosa'
    try {
        await abonos.deleteOne({ _id: _id })
    } catch (error) {
        mensaje = "Problemas al eliminar"
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


module.exports = {
    AbonosGet,
    AbonosPost,
    AbonosPut,
    AbonosDelete
}
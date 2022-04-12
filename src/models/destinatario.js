const { DataTypes } = require('sequelize/types')
const conexaoBD = require('../service/conection')


const Destinatario = conexaoBD.define('destinatario',{
    nome:DataTypes.STRING,
    resposavel:DataTypes.STRING
},{
    timestamps:false
})

Destinatario.sync()
module.exports = Destinatario
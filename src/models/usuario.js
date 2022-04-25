const { DataTypes } = require('sequelize/types')
const conexaoBD = require('../service/conection')


const Usuario = conexaoBD.define('usuario',{
    nome:DataTypes.STRING,
    email:DataTypes.STRING,
    senha:DataTypes.STRING,
    nivel:DataTypes.INTEGER
},{
    timestamps:false
})

Destinatario.sync()
module.exports = Usuario
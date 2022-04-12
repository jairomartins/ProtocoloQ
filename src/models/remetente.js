const {Sequelize, Model, DataTypes} = require('sequelize')
const conexaoBD = require('../service/conection')

const Protocolo = require('../models/protocolo')

const Remetente = conexaoBD.define('remetente',{
    nome:DataTypes.STRING,
    responsavel:DataTypes.STRING
},{
    timestamps:false
})

Remetente.sync({alter:true})

module.exports = Remetente
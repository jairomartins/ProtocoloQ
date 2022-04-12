const {Sequelize, Model, DataTypes} = require('sequelize')
const conexaoBD = require('../service/conection')

const Remetente = require('../models/remetente')
const Item = require('../models/item')

const Protocolo = conexaoBD.define('protocolo',{
    nome:DataTypes.STRING,
    descricao:DataTypes.STRING
},{
    timestamps:false
})


// relacionamentos 1-N
Remetente.hasMany(Protocolo,{foreignKey:'remetenteId', })
Protocolo.belongsTo(Remetente)


Protocolo.hasMany(Item,{foreignKey:'protocoloId'})
Item.belongsTo(Protocolo)


Protocolo.sync();

module.exports= Protocolo
const { DataTypes } = require('sequelize')
const conexaoBD = require('../service/conection')

const Item = conexaoBD.define('item',{
    nome:DataTypes.STRING,
    file:DataTypes.STRING //path of file
},{
    timestamps:false
})

Item.sync({alter:true})

module.exports = Item
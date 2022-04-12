const res = require('express/lib/response')
const async = require('hbs/lib/async')
const Item = require('../models/item')



exports.novoItem = async (req,res,next)=>{
    
    for (i = 0; i < req.files.length; i++) {

        const nome = Object.values(req.body)
        // console.log(req.body.nome[i])
        // console.log(req.files[i].originalname)
        const novoItem = Item.create({
            nome:nome[i],
            file:req.files[i].originalname
        })
        console.log('ok inserido  com sucesso')
       
    } 
    
}

exports.listaItens = async()=>{
    const listaDeItens = await Item.findAll({order:[['id','desc']]})
    console.log(listaDeItens)
    return listaDeItens
}
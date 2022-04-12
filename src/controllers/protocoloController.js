
const Protocolo = require('../models/protocolo')
const Remetente = require('../models/remetente')

exports.castrarProtocolo = async (req,res,next)=>{
    console.log(req.body)
    const novoProtocolo = await Protocolo.create(req.body)
    return novoProtocolo
}

exports.protocoloList = async()=>{
    const listaProtocolos = await Protocolo.findAll({include:Remetente})
    return listaProtocolos
}

exports.protocoloPorID = async (data)=>{
    const protocolo = await Protocolo.findOne({where:{id:data}})
    return protocolo
}

exports.removeProtocolo = async(id)=>{
    const protocolo = await Protocolo.destroy({where:{id:id}})
    return protocolo
}

exports.atualizarProtocolo = async(req,res)=>{
    const protocolo = await Protocolo.update(req.body)
    return protocolo
}
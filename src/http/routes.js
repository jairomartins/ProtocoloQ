const conexaoBD = require('../service/conection')
const {engine} = require('express-handlebars')
const controleProtocolo = require('../controllers/protocoloController')
const controleItem = require('../controllers/itemController')
path = require('path')


const r = require('../models/remetente')
const p = require('../models/protocolo')
const Remetente = require('../models/remetente')
const async = require('hbs/lib/async')
const res = require('express/lib/response')

conexaoBD.sync({alter:true})

const routes = async (app)=>{
   
  app.engine('hbs',engine({extname:'hbs', defaultLayout:'main'}))//extenção '.hbs' pro handlebars
  app.set('view engine','hbs')
  app.set('views',path.join(__dirname, '../public/views'))//diretorio das view usada pelo handlebars-express
  
  
  

   // const remt = r.create({nome:'T.I'})
   // const prot = p.create({nome:'oficio de apresentação',remetenteId:1})

  // p.update({remetenteId:2},{where:{id:10}})
 //const data = await p.findOne({where:{id:2}})
 //console.log('node do remetente '+data.remetente.nome)
 //   const rem  = await  data.getRemetente()
//   data.descricao = 'é isso ai !'

//console.log(rem.nome)
//    data.save()

    app.get('/',async(req,res)=>{
      res.render('login')
    })

    app.get('/protocolo/lista', async(req, res)=>{
        res.send(await controleProtocolo.protocoloList())
    })

    app.get('/protocolo/novo',async(req,res)=>{
        // console.log(req.body)
        // const protocoloCadastrado = await controleProtocolo.castrarProtocolo(req)
        res.render('protocolo/index')
    })



    //multer

    const multer = require('multer')
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'src/public/uploads')
        },
        filename: function (req, file, cb) {
          cb(null,file.originalname)
        }
      })
    
    const anexo = multer({storage:storage})

    app.post('/item/novo',anexo.any(), async(req,res,next)=>{
    //  console.log(req.files.length)
    //  console.log(req.body)

      controleItem.novoItem(req,res)
      res.render('index')
    })

    app.get('/item/lista',async(req,res)=>{
      const listaDeItens = await controleItem.listaItens()
      res.render('lista',{listaDeItens:listaDeItens})
    })

    //Usuário

    app.get('/usuario/novo', async(req,res)=>{
      res.render('usuario/cadastro')
    })
}

module.exports = routes;
 const {Sequelize} = require('sequelize')

 //configuraçoes de conexao
  const sequelize = new Sequelize('protocoloq','jota','root',{
    dialect:'mysql',
    host:'192.168.0.100',
    logging:false
  })

  try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
  
  

module.exports = sequelize;
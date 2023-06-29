const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite'
});

async function testeDatabase(){
    try{
        await sequelize.authenticate()
        console.log('Banco conectado')
    }catch(error){
        console.log('falhou')
    }      
}

testeDatabase().then();

module.exports = sequelize
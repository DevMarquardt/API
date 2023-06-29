const { DataTypes, Model } = require('sequelize')
const connection = require('../../database/connection')

class User extends Model{

}
User.init({
    id: {
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    }
}, {
    sequelize: connection,
    modelName: '_users'
})

User.sync()
.then(()=>{
    console.log("Usuario sincronizado")
})
.catch((e)=>{
    console.log("Usuario sincronizado", e)
})

module.exports = User

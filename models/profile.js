module.exports=(sequelize, DataType)=>{
    return Profile = sequelize.define("profile",{
        job:{
            type:DataType.STRING,
            allowNull:false
        }
    })

    
}
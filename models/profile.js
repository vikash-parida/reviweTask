module.exports=(sequelize, DataType)=>{
    const Profile = sequelize.define("profile",{
        job:{
            type:DataType.STRING,
            allowNull:false
        }
    },
    {freezeTableName: true})

    Profile.associate = function(module){
        Profile.belongsTo(module.user,{foreignKey:"user_id"})
    }

   return Profile; 
}
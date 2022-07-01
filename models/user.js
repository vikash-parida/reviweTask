
module.exports = (sequelize,datatype) => {
    const user = sequelize.define("user",{
    name:{
        type: datatype.STRING,
        allowNull: false
    },
    email:{
        type: datatype.STRING,
        allowNull: false,
        unique: true,
        lowercase: true
    },
    password:{
        type: datatype.STRING,
        allowNull: false
    },
    contact:{
        type: datatype.STRING,
        allowNull: false
    },
    gender:{
        type: datatype.STRING,
    }
     },{ freezeTableName: true,})

   user.associate = function(models){
     user.hasOne(models.profile, {
        foreignKey: 'user_id' });
     }

    return user;
}
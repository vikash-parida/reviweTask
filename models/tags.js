module.exports=(sequelize,DataTypes)=>{
    const tag = sequelize.define("tag",{
        tags:{
            type:DataTypes.STRING,
            set(value){
                this.setDataValue("tags",value);
            }
        }
    });
    return tag;
}
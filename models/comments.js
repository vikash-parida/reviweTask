module.exports = (sequelize,Datatype) => {
    const comments = sequelize.define("comments",{
        massage:{
            type: Datatype.STRING,
            allowNull:false
        }
    },
    { freezeTableName: true});

return comments;
}
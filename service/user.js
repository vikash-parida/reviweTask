const models = require('../models')

const createUser = async(name,email,password,contact)=>{
    return user = await models.user.create({
        name:name,
        email:email,
        password:password,
        contact:contact
    });
}



const Update = async(name,email,password,contact)=>{
    return data = await models.users.update({ name, email, password, contact }, { where: { id } })
}

module.exports = {createUser:createUser,Update:Update}
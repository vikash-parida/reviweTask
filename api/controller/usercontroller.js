const models = require('../../models');


exports.AddUser = async(req,res)=>{
    const {name,email,password,contact,gender} = req.body;

 try{  
    const createused =  await models.user.create({
        name:name,
        email:email,
        password:password,
        contact:contact,
        gender:gender,
    });
    res.status(201).json({data:createused})
}catch(err){
        console.log(err);
    }
}




exports.getUsers = async (req, res) =>{
    const users = await models.user.findAll({
        attributes:['name','email','password','contact','gender']

    });

    res.status(200).json({users});
}


exports.updateuser = async (req, res) => {
    const {name,email,password,contact,gender} = req.body;
    const {id} = req.params
    try {
        const userExist = await models.user.findOne({
        // attributes:['name','contact'],
        where:{id} 
        })
        if (!userExist) {
           return res.status(404).json({message:"no user found"})
        }

        const user = await models.users.update({
            name:name,
            email:email,
            password:password,
            contact:contact,
            gender:gender,

        },{where:{id}}
        )
        console.log(user.length)
        res.json({result:"update success"})
    } catch (error) {
        console.log(error);
        return res.json({result:"err"})
    }

}

exports.getById = async  (req, res)=>{
    try{
        const id = req.params.id
    const user = await models.user.findOne({
        attributes:['name','email','password','contact','gender'],
       
        where:{id}
    })
    res.status(201).json({user});
}catch(err){
    console.log(err);
}
}

exports.deleteusers = async  (req, res)=>{
    try{
        const id = req.params.id
    const user = await models.user.destroy({
        where:{id}
    })
    res.status(200).json('delete suss');
}catch(err){
    console.log(err);
}
}

exports.oneToOne = async (req, res)=>{
const result = await models.user.findAll({attribute:['name','email','password','contact','gender']})
res.status(200).status(result);
}
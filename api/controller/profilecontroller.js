
const models = require('../../models');

exports.getprofile = async (req, res) =>{
  try { const profile = await models.profile.findAll({
        attributes:['job','user_id']
    });

    res.status(200).json({profile});
}catch(error) {
    console.error(error);
}
}

exports.addprofile = async(req, res)=>{
  try{ const {job,user_id} = req.body;
    const profile = await models.profile.create({
        job:job,
        user_id:user_id
    })
    res.status(200).json({job});
}catch(error) {
    console.log(error)
}

}

exports.updateprofile = async (req, res) => {
    const {job,user_id} = req.body;
    const {id} = req.params
    try {
        const profileExist = await models.profile.findOne({
        where:{id} 
        })
        if (!profileExist) {
           return res.status(404).json({message:"no profle found"})
        }

        const profile = await models.profile.update({
            job:job,
            user_id
        },{where:{id}}
        )
        res.json({result:"update success"})
    } catch (error) {
        console.log(error);
        return res.json({result:error.message})
    }

}

exports.findprofile = async  (req, res)=>{
    try{
        const id = req.params.id
    const profile = await models.profile.findOne({
        attributes:['job','user_id'],
        where:{id},
        include:[{
            model: models.users,
                attributes:['name']
        }]
    })
    res.status(201).json({profile});
}catch(err){
    console.log(err);
}
}

exports.deleteprofile = async  (req, res)=>{
    try{
        const id = req.params.id
    const profile = await models.profile.destroy({
        where:{id}
    })
    res.status(200).json('delete suss');
}catch(err){
    console.log(err);
}
}
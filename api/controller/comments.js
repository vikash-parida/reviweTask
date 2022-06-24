const models = require('../models');

exports.getcomments = async (req, res) =>{
    const comments = await models.comments.findAll({
        attributes:['massage']

    });

    res.status(200).json({comments});
}

exports.addcomments = async (req, res) =>{
    const {massage} = req.body;
    const comments = await models.comments.create({
        massage:massage
    })
    res.status(201).json({comments})
}

exports.updatecomments = async (req, res) => {
    const {massage} = req.body;
    const {id} = req.params
    try {
        const commentsExist = await models.comments.findOne({
        where:{id} 
        })
        if (!commentsExist) {
           return res.status(404).json({message:"no profle found"})
        }

        const comments = await models.comments.update({
           massage:massage
        },{where:{id}}
        )
        res.json({result:"update success"})
    } catch (error) {
        console.log(error);
        return res.json({result:error.message})
    }

}

exports.getByIdcomments = async  (req, res)=>{
    try{
        const id = req.params.id
    const comments = await models.comments.findOne({
        where:{id},
        attributes:['massage']
      
    })
    res.status(201).json({comments});
}catch(err){
    console.log(err);
}
};

exports.deletemassage = async  (req, res)=>{
    try{
        const id = req.params.id
    const comments = await models.comments.destroy({
        where:{id}
    })
    console.log(comments);
    res.status(200).json('delete suss');
}catch(err){
    console.log(err);
}
};
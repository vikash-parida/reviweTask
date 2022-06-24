
const models = require('../models');

exports.getTags = async (req, res, next) =>{
   try{const tag = await models.tag.findAll({
    attribute:['tags']
});
res.status(200).json({tag});
}catch(error){
console.log(error);}
}

exports.addTag = async (req, res, next)=>{
  try{ const {tags} = req.body;
    console.log(tags)
    const tag = await models.tag.create({
        tags:tags
    });

    res.status(201).json({tag});
}catch(error){
    console.log(error);
}
}

exports.getTagsId= async (req, res, next) =>{
    try{ const id = req.params.id;
    const tagsExist = await models.tag.findOne(
     {attribute:['tags'],
     where:{id}
    })
    res.status(200).json({tagsExist});
     }catch(error){
        console.log(error);
    }
    }

    exports.tagUpdate = async (req, res, next)=>{
        const {id} = req.params;
        const {tag} = req.body;
        try{
            const tagsExist = await models.tag.findOne({where: {id}})
            if (!tagsExist){
                res.status(404).json({message:"no id exist"})
            }
            const tags = await models.tag.update(
                {tags:tags})
            res.status(200).json({tags});
        
        }catch(error){
      console.log(error);
        }
    }

    exports.tagDelete= async (req, res, next) =>{
     try{
            const id = req.params.id
        const tag = await models.tag.destroy({
            where:{id}
        })
        res.status(200).json('delete suss');
    }catch(err){
        console.log(err);
    }
    }

    exports.createfind = async (req, res, next) =>{
        try{ 
            const [Data, created] =  await models.tag.findOrCreate({
                where:{ tags:"hello world"},
                
                defaults: {
                  tags: 'Technical Lead JavaScript'
                }
              });
        let response = {
                        Data:Data,
                        add:created
                    };
       res.status(200).json({response});     
        }catch(err){
            console.log(err);
        }
    }
const models = require('../../models');
const {userService,Update} =  require('../../service/user')

exports.AddUser = async(req,res)=>{
    const {name,email,password,contact} = req.body;

 try{  
    const createused = await userService.createUser(name,email,password,contact)
    res.status(201).json({data:createused})
}catch(err){
        console.log(err);
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    let { name, email,password, contact } = req.body
try{
    const updateUser = await Update.findone(id)
    if (updateUser == 0) {
        return res.status(401).json({ success: false, message: "Failed." })
    } else {
        return res.status(201).json({ success: true, message: "User updated successfully." })
    }}catch(err) {
        console.error(err);
    }

}



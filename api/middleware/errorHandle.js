exports.checkId = function(req, res, next) {
    const {id} = req.params;
    if(id == 1){
        next();
    }else{
        return res.send("error");
    }
}
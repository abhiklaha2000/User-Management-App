const User  = require("../model/user");

const getUser = async(req,res) =>{
    try{

        userData = await User.find();
        res.send(userData);

    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getUser
}
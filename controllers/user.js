const User = require('../model/user');
const bcrypt =  require("bcrypt");

const nodemailer = require("nodemailer");

const securePassword = async(password) =>{
    try{

        const passwordHash = await bcrypt.hash(password,10);
        return passwordHash;

    }catch(err){
        console,log(err,message);
    }
}

//for send mail

const sendVerifyMail = async(name,email,user_id) =>{
    try{

     const transpoter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
           user:'abhiklaha2000@gmail.com',
           pass:'abhiklaha123'         // giving the dummy password 
        }
     });
     const mailOptions = {
        from:"abhiklaha2000gmail.com",
        to:email,
        subject:'For verification mail',
        html:'<p>Hii '+name+',please click here to <a href="localhost:3000/verify?id='+user_id+'">Verify </a> your mail.</p>'
     }
     transpoter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }
        else{
            console.log("Email has been sent:- ",info.response);
        }
     })

    }catch(err){
        console.log(err.message);
    }
}

const loadRegister = async(req,res) =>{
    try{

        res.render('registration');

    }
    catch(err){
        console.log(err.message);
    }
}

const insertUser = async(req,res) =>{
    try{
         const sPassword = await securePassword(req.body.password);
         const user = new User({
            name: req.body.name,
            email: req.body.eamil,
            mobile: req.body.mno,
            image: req.file.filename,
            password: req.body.password,
            is_admin:0
         })

         const userData = await user.save();

         if(userData){

        sendVerifyMail(req.body.name, req.body.email, userDate._id);
            res.render('registration',{message:"Your registration has been sucessfull,please verify your mail."});
         }
            else{
                res.render('registration',{message:"Your registration has been failed"});
            }
    }
    catch(err){

        console.log(err.message);

    }
}

const verifyMail = async(req,res) =>{
   try{

     const updateInfo = await User.updateOne({_id:req.query.id},{$set:{is_verified:1 }});
     console.log(updateInfo);
     res.render('email-verified');

   }catch(err){
    console.log(err.message);
   }
}

module.exports = {
    loadRegister,
    insertUser,
    verifyMail
}

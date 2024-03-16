const express =  require('express');
const user_router = new express.Router();


user_router.set('view engine','ejs');
user_router.set('views','./views/users');

const bodyParser = require('body-parser');
user_router.use(bodyParser.json())
user_router.use(bodyParser.urlencoded({extented:true}))

const multer = require('multer');
const path =  require("path");

const storage = multer.diskStorage({
    destination:function(req,file,cb){
cb(null,path.join(__dirname,'../public/userImages'))
    },
    filename:function(req,file,cb){
    const name = Date.now()+'-'+file.originalname;
    cb(null,name)
    }
})

const upload = multer({storage:storage})

const userController = require('../controllers/user');

user_router.get('/register',userController.loadRegister);
user_router.post('/register',upload.single('image'),userController.insertUser);
user_router.get('/verify',userController.verifyMail);




module.exports = user_router;


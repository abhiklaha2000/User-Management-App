const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Node-assigment").then(() => {
    console.log('Connected to Mongodb!!!');
}
).catch((err) =>{
    console.log(err);
})

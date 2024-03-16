const express = require('express');
require('./db/conn');
const app = express();
const port = process.env.Port || 3000;
const userRouter =  require('./routes/user');
const adminRoute =  require('./routes/admin');

// for User Routes
app.use('/',userRouter);

//for Adin Routes
app.use(adminRoute);


app.listen(port,() =>{
    console.log(`listening on ${port}`);
})
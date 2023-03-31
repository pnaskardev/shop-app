const express=require('express');
const body=require('body-parser');
const bodyParser = require('body-parser');
const expressApp=express();


const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop');
expressApp.use(bodyParser.urlencoded({extended:false}));

expressApp.use('/admin',adminRoute);
expressApp.use(shopRoute);

expressApp.use((req,res,next)=>
{
    res.status(404).send('<h1>page not found</h1>')
});
// we dont really need this if we are using express
// const server = http.createServer(expressApp);

expressApp.listen(3000);

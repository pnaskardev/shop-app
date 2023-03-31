const express=require('express');
const body=require('body-parser');
const bodyParser = require('body-parser');
const expressApp=express();
const path=require('path');


const errorController=require('./controllers/error');

expressApp.set('view engine','pug');
expressApp.set('views','views');
const adminRoutes=require('./routes/admin');
const shopRoute=require('./routes/shop');


expressApp.use(bodyParser.urlencoded({extended:false}));
expressApp.use(express.static(path.join(__dirname,'public')));


expressApp.use('/admin',adminRoutes);
expressApp.use(shopRoute);

expressApp.use(errorController.get404);

expressApp.listen(3000);

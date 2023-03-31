const express=require('express');
const router=express.Router();
const path=require('path');

const rootDir=require('../utils/path_provider');
const adminData=require('./admin');
router.get('/',(req,res,next)=>
{
    // console.log("In / middleware");
    // // res.send('<h1>Hello from Express</h1>');
    // console.log('shopJs',adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const product=adminData.products;
    res.render('shop',{prods:product,docTitle:'Shop',path:'/'});
});

module.exports=router;

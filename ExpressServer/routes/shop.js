const express=require('express');
const router=express.Router();
const path=require('path');

const rootDir=require('../utils/path_provider');

router.get('/',(req,res,next)=>
{
    console.log("In / middleware");
    // res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;

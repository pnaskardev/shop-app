const express=require('express');
const path=require('path')
const router=express.Router();


const rootDir=require('../utils/path_provider');

const products=[];

router.get('/add-product',(req,res,next)=>
{
    console.log("In add-product middleware");
    // res.send
    // (   `<form action="/admin/product" method="POST">
    //         <input type="text" name="title">
    //         <button type="submit"> Add Product</button>
    //     </form>`
    // );
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

// .post only handles post requests 
router.post('/add-product',(req,res,next)=>
{
    console.log(req.body);
    products.push
    ({
        title:req.body.title
    });
    res.redirect('/');
});

exports.routes=router;
exports.products=products;
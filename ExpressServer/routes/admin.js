const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>
{
    console.log("In add-product middleware");
    res.send
    (   `<form action="/admin/product" method="POST">
            <input type="text" name="title">
            <button type="submit"> Add Product</button>
        </form>`
    );
});

// .post only handles post requests 
router.post('/product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;
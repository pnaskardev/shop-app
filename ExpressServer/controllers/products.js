const Product=require('../Models/product_model');

exports.getAddProduct=(req,res,next)=>
{
    console.log("In add-product middleware");
    // res.send
    // (   `<form action="/admin/product" method="POST">
    //         <input type="text" name="title">
    //         <button type="submit"> Add Product</button>
    //     </form>`
    // );
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'});
};

exports.postAddProduct=(req,res,next)=>
{
    console.log(req.body);
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>
{
    // console.log("In / middleware");
    // // res.send('<h1>Hello from Express</h1>');
    // console.log('shopJs',adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    Product.fetchAll((products)=>{
        res.render('shop',{prods:products,docTitle:'Shop',path:'/'});
    });
    
};
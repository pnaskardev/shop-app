const fs=require('fs');
const path=require('path');
const path_provider=require('../utils/path_provider');
const p=path.join
(
    path_provider,
    'data',
    'cart.json'
);
module.exports=class Cart
{
    static addProduct(id,productPrice)
    {
        fs.readFile(p,(err,fileContent)=>
        {
            let cart=
            {
                products:[],
                totalPrice:0,
            };
            // FETCH THE PREVIOUS CART
            if(!err)
            {
                cart=JSON.parse(fileContent);
            }
            // ANALYZE THE CART=> Find the existing product
            const existingProductIndex=cart.products.findIndex(prod=>prod.id===id);
            const existingProduct=cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct)
            {
                updatedProduct={...existingProduct};
                updatedProduct.qty++;
                cart.products=[...cart.products];
                cart.products[existingProduct]=updatedProduct;
            }
            else
            {
                updatedProduct={id:id,qty:1};
                cart.products=[...cart.products,updatedProduct];
            }
            cart.totalPrice=cart.totalPrice+ +productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>
            {
                console.log(err);
            });
        });
    }
}
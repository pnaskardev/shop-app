const fs = require('fs');
const path = require('path');
const path_provider=require('../utils/path_provider');
const p = path.join(
  path_provider,
  'data',
  'products.json'
);

const Cart=require('../models/cart');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product 
{
  constructor(id,title, imageUrl, description, price) 
  {
    this.id=id,
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() 
  {
    getProductsFromFile(products => 
    {
      if(this.id)
      {
        const existingProduct=products.findIndex(prod=>prod.id===this.id);
        const updatedProducts=[...products];
        updatedProducts[existingProduct]=this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      }
      else
      {
        this.id=Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(productId)
  {
    getProductsFromFile(products=>
    {
      const product=products.find(prod=>prod.id===productId);
      const updatedProducts=products.filter(prod=>prod.id!==productId);
      fs.writeFile(p,JSON.stringify(updatedProducts),err=>
      {
        if(!err)
        {
          Cart.deleteProduct(productId,product.price);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb)
  {
    getProductsFromFile(products=>
      {
        const product=products.find((p)=>p.id===id);
        cb(product);
      });
  }
};

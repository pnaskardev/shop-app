const mysql=require('mysql2');

const pool=mysql.createPool
({
    host:'localhost',
    user:'root',
    database:'shop_app',
    password:'#FuckModi6969#',
});

module.exports=pool.promise();
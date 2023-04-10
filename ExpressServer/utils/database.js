const Sequelize=require('sequelize');
const seq=new Sequelize
(
    'shop_app',
    'root',
    '#FuckModi6969#',
    {
        dialect:'mysql',
        host:'localhost'
    }
);

module.exports=seq;
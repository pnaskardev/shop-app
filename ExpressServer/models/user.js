const Sequelize=require('sequelize');

const seq=require('../utils/database');

const User=seq.define
(
    'user',
    {
        id:
        {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        name:Sequelize.STRING,
        email:Sequelize.STRING,
    }
);

exports.module=User;
const dotenv = require('dotenv');
const mongoDb=require('mongodb');

const MongoClient=mongoDb.MongoClient;
dotenv.config();


let _db;
const mongoConnect=callback=>
{
    MongoClient.connect
    (
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@shop.7snf3mh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(client=>
    {
        console.log('Connected!');
        _db=client.db();
        callback();
    })
    .catch(err=>
    {
        console.log(err);
        throw err;
    });
}


const getDb=()=>
{
    if(_db)
    {
        console.log('db connected');
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
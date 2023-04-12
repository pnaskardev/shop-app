const dotenv = require('dotenv');
const mongoDb=require('mongodb');

const MongoClient=mongoDb.MongoClient;
dotenv.config();
let _db;
// let _db;
// const mongoConnect=(callback)=>
// {
//     MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@shopapp.w1bzvyc.mongodb.net/?retryWrites=true&w=majority`)
//     .then
//     (
//         client=>
//         {
//             console.log("Connected");
//             _db=client.db();
//             callback(client);
//         }
//     ).catch
//     (
//         err=>
//         {
//             console.log(err);
//             throw(err);
//         }
//     );
// }
async function mongoConnect() 
{
    const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@shopapp.w1bzvyc.mongodb.net/?retryWrites=true&w=majority`);
    try 
    {
        await client.connect();
        _db=client.db();
        await listDatabases(client);
    } catch (error) 
    {
        console.log(error);    
    }
    finally 
    {
        await client.close();
    }
}

async function listDatabases(client)
{
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const getDb=()=>
{
    if(_db)
    {
        return db;
    }
    throw 'No database found';
}

mongoConnect().catch(console.error);
// module.exports=mongoConnect;
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
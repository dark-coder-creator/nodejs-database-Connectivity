// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017/ecommerce"

// //create a new MongoClient
// const client = new MongoClient(uri)

// async function run() {
//     try {
//         //Connect the client to server 
//         await client.connect();

//         //Establish and verify connection
//         //await client.db("admin").command({ ping:1})
//         console.log(client)
//         console.log("Connected successfully to server")
       
//     }
//     finally {
//         await client.close()
//     }
// }

// run().catch(console.dir);


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const url ="mongodb://localhost:27017/test"




MongoClient.connect(url,(err,client) =>{
    if(err) throw err;
     var db=client.db("test")
    //  db.createCollection("inventory",(err,res) =>{
    //      if(err) throw err;
    //      console.log("collection created");
    //      client.close();

    //  })
    // db.collection('inventorys').insertOne({
    //     item:"canvas",
    //     qty:100,
    //     tags:["cotton"],
    //     size:{h:28,w:35.5,uom:"cm"}
    // })
    // .then(function(result) {
    //     console.log(result)
    // })
     db.collection('inventory').insertMany([
         { 
             item:"journal",qty:25,size:{h:14,w:21,uom:"cm"},status:"A"
          },{
              item:"notebook",qty:50,size
             }
     ])
    var cursor = db.collection('fdfss').find({})

    function iterateFunc(doc) {
        console.log(JSON.stringify(doc,null,4))
    }
    
    function errorFunc(error) {
        console.log(error)
    }

    cursor.forEach(iterateFunc,errorFunc)
})
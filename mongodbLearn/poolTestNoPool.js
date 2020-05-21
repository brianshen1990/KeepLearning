const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express')

const url = 'mongodb://localhost:27017';
const dbName = 'poolTest';
const collectionName = 'sample';


const app = express();
let ERR_NUM = 0;
app.get("/blog", async (req, res) => {
  let CLIENT;
  try {
    CLIENT = new MongoClient(url);
    await CLIENT.connect();
    const db = CLIENT.db(dbName);
    for ( let i = 0; i < 6; i++ ) {
      let data = await db.collection(collectionName).find({}).toArray();
      console.log(data.length);
    } 
    res.send({message: "OK"})
  } catch(err) {
    console.log(ERR_NUM++);
    res.status(500);
    res.send("error")
  } finally {
    CLIENT && await CLIENT.close();
  }
})

app.get("/blogError", async (req, res) => {
  try {
    const CLIENT = new MongoClient(url);
    await CLIENT.connect();
    const db = CLIENT.db(dbName);
    for ( let i = 0; i < 6; i++ ) {
      let data = await db.collection(collectionName).find({}).toArray();
      // handle(data); 
      console.log(data.length);
    } 
    CLIENT.close();
    res.send({message: "OK"})
  } catch(err) {
    res.status(500).send("error")
  }
})

const SERVER = app.listen(8888, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Now browse to localhost:8888')
  }
});

// ab -n 10000 -c 50 localhost:8888/blog
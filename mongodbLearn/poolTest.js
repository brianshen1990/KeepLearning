const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express')

const url = 'mongodb://localhost:27017';
const dbName = 'poolTest';
const collectionName = 'sample';

const pool = process.argv.length >= 3 ? parseInt( process.argv[2]) : 1;
console.log(`pool size ${pool}`);
const CLIENT = new MongoClient(url, {
  poolSize: pool
});

// Use connect method to connect to the Server
CLIENT.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
});

const app = express();
app.get("/blog", async (req, res) => {
  const db = CLIENT.db(dbName);
  for ( let i = 0; i < 5; i++ ) {
    let data = await db.collection(collectionName).find({}).toArray();
    let len = data.length;
    // console.log(data.length);
  } 
  res.send({message: "OK"})
})

const SERVER = app.listen(8888, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Now browse to localhost:8888')
  }
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  SERVER.close(() => {
    CLIENT && CLIENT.close();
    console.log('Http server closed.');
  });
});
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'poolTest';
const collectionName = 'sample';

const addData = async () => {
  const CLIENT = new MongoClient(url);

  // Use connect method to connect to the Server
  await CLIENT.connect();

  const db = CLIENT.db(dbName);
  for ( let i = 0; i < 5000; i++ ) {
    await db.collection(collectionName).insertOne({
      data: i,
      str: `some meaningless string ${i}`
    });
  } 
  CLIENT.close()
}

addData().then( () => {
  console.log("Done")
}).catch( (err) => {
  console.error(err);
})




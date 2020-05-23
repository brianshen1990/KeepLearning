const express = require('express')
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.post("/feedback", (req, res) => {
  console.log(req.body);
  res.send({message: "OK"})
})
app.post("/fruits", (req, res) => {
  console.log(req.body);
  res.send({message: "OK"})
})
app.post("/upload", (req, res) => {
  console.log(req.body);
  res.send({message: "OK"})
})

app.listen(80, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Now browse to localhost:80')
  }
});

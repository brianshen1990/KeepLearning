const express = require('express')
const app = express();

app.get("/content/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send({
    message: req.params.id
  })
})

app.listen(8888, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Now browse to localhost:8888')
  }
});

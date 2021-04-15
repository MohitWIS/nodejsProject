const express = require('express');
const app = express();


app.get('/', (req,res)=>{
  res.send("hello world");
});

app.get('/getData', (req,res)=>{
  res.send("hello world get data");
});

app.listen(3000,() => console.log("listening port 3000"));
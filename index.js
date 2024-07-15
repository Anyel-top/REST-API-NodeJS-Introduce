let app = require('express')(); // manager function 
const http = require('node:http').Server(app);
const express = require('express'); // manager data

const hostname = '127.0.0.1';
const port = 3000;

// cabecera d elos CORS
app.use(function (res, nex){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");

  next();

})

/* manager responses 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});*/

// route 
app.use(require('./routes/cliente'));

app.use(express.json)
http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
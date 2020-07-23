const express = require('express');
const data = require('./data');

const app = express();
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get("/api/products" , (req, res) => {
   res.send(data.products); 
});

app.listen(5002, () => {console.log("Server started at http://localhost:5002")})
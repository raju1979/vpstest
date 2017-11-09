const express = require("express");
const app = express();

app.set("port",(5000 || process.env.PORT));

const cors = require('cors');
// app.use(cors());

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/",(req,res) => {
  res.json({"result":"success"});
})


app.listen(app.get('port'),function(){
  console.log(`App running on ${app.get('port')}`);
})

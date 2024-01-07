const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  
  let firstNumber = Number(req.body.num1);
  let secondNumber = Number(req.body.num2);
  let total = firstNumber + secondNumber;
  //res.sendFile(__dirname + "/result.html");
  res.write("<h2>The Output is: </h2>" + total);
  res.send();
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});

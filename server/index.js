var express = require("express");
var app = express();
const cors = require("cors");
var fs = require("fs");
var corsOptions = {
  origin: ["http://localhost:3000", "*"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/read", async function (req, res) {
  console.log("Got a GET request for the homepage s");
  fs.readFile("../public/user/data.json", (err, data) => {
    res.send(JSON.parse(data));
    return;
  });
});

app.post("/write", async function (req, res) {
  console.log(req.body);
  let products = [];
  fs.readFile("../public/user/data.json", (err, data) => {
    if (data != null) {
      products = JSON.parse(data);
    }
    products.push(req.body);
    fs.writeFile(
      "../public/user/data.json",
      JSON.stringify(products),
      (err) => {
        console.log(err);
      }
    );
  });

  res.send("Success");
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at ", host, port);
});

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let item = "";
let items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let day = date();
    res.render("list", {todayDate: day, newItems: items});
});

app.post("/", function(req, res){
    item = req.body.newItems;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(req, res){
    console.log("server is running on port 3000");
})
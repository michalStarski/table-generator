const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get("/", function(req, res) {
	res.render("form");
});

app.post("/api/generate-table", function(req, res) {
	res.render("table", { table_data: req.body });
});

server.listen(8111, console.log("Listening on 8111"));

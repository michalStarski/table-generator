const express = require("express");
const http = require("http");
const { resolve } = require("path");

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("form");
});

app.post("/api/generate-document", function(req, res) {
	console.log("Working!");
});

server.listen(8111, console.log("Listening on 8111"));

var express = require("express");
var app = express();
var request = require('request');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require('dotenv').config();

var api = ["https://eu.api.battle.net/wow/guild/", "?fields=members&locale=en_GB&apikey="];
var apiKey = process.env.WOW_API_KEY;

app.get("/bnet", function(req, res) {
  var server = req.query.server;
  var guild = req.query.guild;
  var requestApi = api[0] + server + "/" + guild + api[1] + apiKey;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", requestApi, false ); // false for synchronous request
  xmlHttp.send( null );
  var jsonObj = JSON.parse(xmlHttp.responseText);
  res.send(jsonObj);
});

app.listen(3000);
console.log("Server running on http://localhost:3000");
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/tonka', function(req, res){
	console.log('Waheguru')
})

app.listen('3000');
console.log('Listening on port 3000!')
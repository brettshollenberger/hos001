/*
Install connect with NPM

$ npm install connect
Create server.js file with this content:

var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);
Run with NodeJS

$ node server.js
You can now go to http://localhost:8080/yourfile.html
*/
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);
const express = require('express');
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,'./public')));

 app.use('/api',require('./Route'));

module.exports = app;

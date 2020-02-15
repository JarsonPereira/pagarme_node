const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


var server = require('http').Server(app);


server.listen(3000,function(){
    console.log('Start is  success!');
});




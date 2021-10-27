const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

// create the server
const app = express();

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria');

//Enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable routing
app.use('/', routes());

// port and start the server
app.listen(4000, () => {
  console.log('Servidor funcionando');
});

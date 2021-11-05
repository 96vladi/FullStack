const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// create the server
const app = express();

//Enable cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some( dominio => dominio === origin );
    if( existe ){
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'))
    }
  }
};
// app.use(cors(corsOptions));
app.use(cors());

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

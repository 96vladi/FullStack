const express = require('express');
const mongoose = require('mongoose');

// create the server
const app = express();

// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewurlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// port and start the server
app.listen(4000, () => {
  console.log('Servidor funcionando');
});

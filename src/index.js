const express = require('express');
const config = require('./server/config');
const bodyParser = require("body-parser");
require('./database');

const app = config(express());

const server =  app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
}) 


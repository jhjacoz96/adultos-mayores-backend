const path = require('path');
const morgan=require('morgan');
const express=require('express');
const cors = require('cors');

const routes = require('../routes/index')

module.exports = app => {

    app.set('port',process.env.PORT||3004);

    //--------middleware------//
    app.use(morgan('dev'));
    app.use(cors());
  
    
    app.use(express.urlencoded({
        extended:false,
        useUnifiedTopology: true
    }))
    app.use(express.json());
                
    //---------route---------//
    routes(app);
    
    // Middleware para Vue.js router modo history
    const history = require('connect-history-api-fallback');
    app.use(history());

    app.use(express.static(path.join(__dirname, 'public')));

    return app;
}
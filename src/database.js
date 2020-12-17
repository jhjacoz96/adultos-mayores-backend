const mongoose = require('mongoose');

const {database} = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     useFindAndModify: false 
} )
    .then(db=> console.log('DB is connected'))
    .catch(err=>console.error('error al ejecutar la base de datos '+ errs)); 
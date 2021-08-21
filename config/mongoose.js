//require the library
const mongoose = require ('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost:27017/To_do_app')

//acquire the connection to check if it is successfull
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('successfully connected to the database');
});

module.exports = db;
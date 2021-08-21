//require the library
const mongoose = require('mongoose');

//creating schema for the tasks
const todoappSchema = mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    duedate:{
        type:Date,
        require:true 
    }
});

const Todoapp = mongoose.model('Todoapp',todoappSchema);

//exporting the schema
module.exports = Todoapp;
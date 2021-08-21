//require express for setting up the express server
const express = require('express');

//set up the port number
const port = 8000;

//importing the database
const db = require ('./config/mongoose');

//importing the schema for the tests
const Todoapp =require('./models/todoapp') ;

//using express
const app = express();

//using static file
app.use(express.static('./asset'));

//to use encrypted data
app.use(express.urlencoded());




//app.use('/',require('./routes'));

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');


//rendering the app page
app.get('/',function(req,res){

    Todoapp.find({},function(err,todoapp){
        if(err){
            console.log('Error in fetching list from db');
            return;
        }
       
    return res.render('home',{
        title: "To Do List App!!",
        todoapp: todoapp  
    });
 });

});

//creating tasks
app.post('/Todoapp',function(req,res){    // /create-task : /todo_app
    
   // console.log(req.body);
   //contactList.push(req.body);

   //console.log("creating task")'
   Todoapp.create({
       description:req.body.description,
       category:req.body.category,
       duedate:req.body.duedate
   },function(err, newEntry){
       if(err){console.log(`error in creating a new task : ${err}`);
    return;}

    console.log('********',newEntry);
    return res.redirect('back');

   });
   
});


//deleting task
app.get("/delete-todoapp/",function(req,res) {
    //get the id from query

    let id = req.query.id;

    
         // finding and deleting tasks from the DB one by one using id
          Todoapp .findByIdAndDelete(id,function(err){
               if(err){
                   console.log('error in deleting an object from database');
                   return;
                }
       //})
       return res.redirect('back');

   });
       

   });









//firing up our server using the express app
app.listen(port,function(err){
    if(err){
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is up and running fine on port: ${port}`);
});
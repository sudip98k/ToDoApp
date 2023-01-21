//set up express server
const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const Todo = require('./models/todo_task');
const app = express();
app.use(express.urlencoded());
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assest'));


app.get('/delete-contact',function(req,res){
    const id = req.query.id;
    Todo.findByIdAndDelete(id,function(err){
      if(err){
        console.log('error for deleting data from database');
        return;
      }
      return res.redirect('back');

    });
   });



app.listen(port,function(err){
    if(err){
        console.log('Error occures to run the server:',err);
        return;
    }
    console.log('server is run and up on port:',port);
});
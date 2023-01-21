const Todo =require('../models/todo_task');
module.exports.home=function(req,res){

    Todo.find({},function(err,data){
        if(err){
            console.log('error in creating',err);
            return;
        }
        console.log(data);
        return res.render('home',{
            title:"ToDoApp",
            todoArray:data
        });
    });
    
}
module.exports.addTask=function(req,res){
    console.log(req.body);
    Todo.create(req.body,(err,data)=>{
    if(err){
        console.log('error in creating',err);
        return;
    }
    console.log(data);
})
return res.redirect('back');
}
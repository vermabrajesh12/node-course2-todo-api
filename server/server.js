// var mongoose=require('mongoose');
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');

var {User}=require('./models/user');

var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
//  console.log(req.body);

var todo=new Todo({
  text:req.body.text
});

todo.save().then((doc)=>{
res.send(doc);
},(e)=>{
  res.status(400).send(e);
});
});

app.listen(3000,()=>{
  console.log('started on port 3000');
});
// var Todo=mongoose.model('Todo',{
//   text:{
//     type:String,
//     required:true,
//     mimlength:1,
//     trim:true
//   },completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default:null
//   }
// });
// var newTodo=new Todo({
//   text:"cook dinner"
// });
// newTodo.save().then((doc)=>{
//   console.log('saved Todo',doc);
// },(e)=>{
//   console.log('unable to save Todo');
// });

// var otherTodo=new Todo({
//   text:' edit this vedio '
// });
// //   text:'feed the cat',
// //   completed:true,
// //   completedAt:123
// // });
// otherTodo.save().then((res)=>{
//   console.log(JSON.stringify(res,undefined,2));
// },(e)=>{
//   console.log('unable to save',e);
// });


// var User=mongoose.model('User',{
//   email:{
//     type:String,
//     required:true,
//     trim:true,
//     mimlength:1
//   }
// });
// var user =new User({
// email:' vermabrajesh12@gmail.com '
// });
// user.save().then((doc)=>{
//   console.log('user saved',doc);
// },(err)=>{
//   console.log('unable to save user',err);
// });
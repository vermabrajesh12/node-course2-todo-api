// var mongoose=require('mongoose');
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');

var {User}=require('./models/user');

var app=express();


const port=process.env.PORT||3000;
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
app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
res.send({todos});
},(e)=>{
  res.status(400).send(e);
});
});

app.get('/todos/:id',(req,res)=>{
var id=req.params.id;
  // res.send(req.params);
if(!ObjectID.isValid(id)){
  return res.status(404).send();
}
Todo.findById(id).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }
  res.send({todo});
}).catch((e)=>{
  res.status(400).send();
});

});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});
app.patch('/todos/:id',(req,res)=>{
    var id =req.params.id;
    var body=_.pick(req.body,['text','completed']);
    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }
    if(_.isBoolean(body.completed)&&body.completed){
      body.completedAt=new Date().getTime();
    } else{
      body.completed=false;
      body.completedAt=null;
    }
Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
if(!todo){
return res.status(404).send();
}
res.send({todo});
}).catch((e)=>{
  res.status(400).send();
})
});
app.listen(port,()=>{
  console.log(`started on port ${port}`);
});
module.exports={app};
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
//})

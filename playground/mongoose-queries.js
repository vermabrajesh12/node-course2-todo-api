const{ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
 //var id ='5b23ac152e35b738040a0c8211';
//var id='5b238c0b5df67c62021828ce';

//  if(!ObjectID.isValid(id)){
//    console.log('id not valid');
//  }
//  // Todo.find({
//  //   _id:id
//  // }).then((todos)=>{
//  //   console.log('Todos',todos);
//  // });
//  // Todo.findOne({
//  //   _id:id
//  // }).then((todo)=>{
//  //   console.log('Todo',todo);
//  // });
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));
User.findById('5b238c0b5df67c62021828ce').then((user)=>{
  if(!user){
  return console.log('User Id not found');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{console.log(e);
});

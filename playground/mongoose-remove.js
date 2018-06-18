const{ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });
// Todo.findByIdAndRemove('5b27c35345de0b9720f93581').then((todo)=>{
//   console.log(todo);
// });
Todo.findOneAndRemove({_id:'5b27c35345de0b9720f93581'}).then((todo)=>{
  console.log(todo);
});

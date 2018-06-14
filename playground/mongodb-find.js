// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);
// var user={name:'brajesh',age:23};
// var {name}=user;
// console.log(name);
//
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
return console.log('unable to connect to mongodb server');

  }
  console.log('connected to mongodb server');

// db.collection('Todos').find({
// _id:new ObjectID('5b2014879478b30295f0be0d')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });
//
// // db.close();
//
//
//
//
// });

// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count:${count}`);
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });
// });

db.collection('Users').find({name:'brajesh'}).count().then((count)=>{
  console.log(`Users count:${count}`);
 },(err)=>{
   console.log('unable to fetch todos',err);
 });
 });

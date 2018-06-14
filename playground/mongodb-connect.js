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
});
  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

//   db.collection('Users').insertOne({
//
//     name:'brajesh',
//     age:23
//
//   },(err,result)=>{
//     if(err){
//       return console.log('unable to insert users',err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   });
//
//
//
//
//
//
//
// db.close();
// });

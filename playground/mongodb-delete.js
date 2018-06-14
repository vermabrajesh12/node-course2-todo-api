// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
return console.log('unable to connect to mongodb server');

  }
  console.log('connected to mongodb server');
//   //deleteMany
// db.collection('Todos').deleteMany({text:'eat lunch'}).then((res)=>{
//   console.log(res);
//deleteOne
// db.collection('Todos').deleteOne({text:'eat lunch'}).then((res)=>{
//   console.log(res);
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
//  console.log(res);
//
//
//
// });

// db.collection('Users').deleteMany({name:'brajesh'}).then((res)=>{
//  console.log(res);



db.collection('Users').findOneAndDelete({_id:new ObjectID("5b221633a5720b02e4abe19c")}).then((res)=>{
 console.log(res);

});
});

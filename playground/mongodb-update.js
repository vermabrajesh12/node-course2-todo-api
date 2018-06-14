// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
return console.log('unable to connect to mongodb server');

  }
  console.log('connected to mongodb server');

// db.collection('Todos').findOneAndUpdate({
// _id:new ObjectID("5b222b8f83f2f96920e685c5")
// },{
//   $set:{
//     completed:true
//   }
//   },{
//     returnOriginal:false
//   }).then((res)=>{
//     console.log(res);
//   });
// });


db.collection('Users').findOneAndUpdate({
_id:new ObjectID("5b2016d16745a202a329200d")
},{
  $set:{
    name:'Brajesh'
  },
  $inc:{
    age:6
  }
},{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });
});

const jwt=require('jsonwebtoken');
const{ObjectID}=require('mongodb');
const{Todo}=require('./../../models/todo');
const{User}=require('./../../models/user');
const useroneid=new ObjectID();
const usertwoid=new ObjectID();
const users=[{
  _id:useroneid,
  email:'vermabrajesh10@gmail.com',
  password:'vvvhvvhvbkjbj',
  tokens:[{
    access:'auth',
    token:jwt.sign({_id:useroneid,access:'auth'},'abc123').toString()
  }]
},{
  _id:usertwoid,
  email:'vermabrajesh11@gmail.com',
  password:'vvvhvvhvbkjbjhvhv'
}];

const todos=[{
  _id:new ObjectID(),
  text:'first test todo',

},{
  _id:new ObjectID(),
  text:'second test todo',
  completed:true,
  completedAt:333
}];
const populateTodos=(done)=>{
  Todo.remove({}).then(()=>{
  return Todo.insertMany(todos);
}).then(()=>done());
};

const populateUsers=(done)=>{
  User.remove({}).then(()=>{
  var userone=new User(users[0]).save();
var usertwo=new User(users[1]).save();
return Promise.all([userone,usertwo])

}).then(()=>done());
};

module.exports={todos,populateTodos,users,populateUsers};

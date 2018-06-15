var mongoose=require('mongoose');

var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    mimlength:1
  }
});
// var user =new User({
// email:' vermabrajesh12@gmail.com '
// });
// user.save().then((doc)=>{
//   console.log('user saved',doc);
// },(err)=>{
//   console.log('unable to save user',err);
// });
module.exports={User};

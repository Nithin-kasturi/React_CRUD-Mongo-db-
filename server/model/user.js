const mongoose=require('mongoose');
const userSchema=mongoose.model('User',{
    Id:String,
    Name:String,
    Email:String,
});
module.exports=userSchema;
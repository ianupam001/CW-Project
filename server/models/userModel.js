const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    loginId:{
        type:String,
        required:[true,'Please Provide a Login Id'],
        unique:[true,'Login Id, exist']
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        unique:false
    }
})
module.exports = mongoose.model("Users", UserSchema);
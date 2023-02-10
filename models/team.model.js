const mongoose=require("mongoose") 

const team=new mongoose.Schema({
   
    name:{type:String, unique: true
    }

}, { timestamps: true })

module.exports=mongoose.model("team",team) 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
     
    },
    designation: {
        type: String,
     
    },
    team: {
        type:mongoose.Schema.Types.ObjectId,required:true,ref: 'team'
        
    },
   
    manager: {
        type:mongoose.Schema.Types.ObjectId,required:true,ref: 'manager'
    
    },
    
},{timestamps:true});

module.exports = mongoose.model("user", userSchema);
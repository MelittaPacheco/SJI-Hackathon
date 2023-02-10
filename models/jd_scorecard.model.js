const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jd_scoreCardSchema = new Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,required:true,ref: 'user'
    },
    designation: {
        type: String,
    },
    month: {
        type: String,
    },
    criteria_one:{
        type: Map,
        of: String
    },
    criteria_two:{
        type: Map,
        of: String
    },
    criteria_three:{
        type: Map,
        of: String
    },
    criteria_four:{
        type: Map,
        of: String
    },
    criteria_five:{
        type: Map,
        of: String
    }
    
    
    
    
},{timestamps:true});

module.exports = mongoose.model("JDscoreCard", jd_scoreCardSchema);
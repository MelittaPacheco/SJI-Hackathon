const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ml_scoreCardSchema = new Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,required:true,ref: 'user'
    },
    designation: {
        type: String,
    },
    month: {
        type: String,
    },
    communication:{
        type: Map,
        of: String
    },
    marketing:{
        type: Map,
        of: String
    },
    skill_dev:{
        type: Map,
        of: String
    },
    billable_utilisation:{
        type: Map,
        of: String
    },
    team_contribution:{
        type: Map,
        of: String
    }

    
},{timestamps:true});

module.exports = mongoose.model("MLscoreCard", ml_scoreCardSchema);
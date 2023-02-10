const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sd_scoreCardSchema = new Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,required:true,ref: 'user'
    },
    designation: {
        type: String,
    },
    month: {
        type: String,
    },
    estimate:{
        type: Map,
        of: String
    },
    BD_estimate:{
        type: Map,
        of: String
    },
    code_standard:{
        type: Map,
        of: String
    },
    OKR:{
        type: Map,
        of: String
    },
    team_contribution:{
        type: Map,
        of: String
    }

    
},{timestamps:true});

module.exports = mongoose.model("SDscoreCard", sd_scoreCardSchema);
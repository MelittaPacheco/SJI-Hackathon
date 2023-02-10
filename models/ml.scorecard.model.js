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
    year:{
        type:Number
    },
    communication:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    marketing:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    skill_dev:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    billable_utilisation:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    team_contribution:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    average:{
        type: Number,
    required: true,}
    
    
},{timestamps:true});

module.exports = mongoose.model("MLscoreCard", ml_scoreCardSchema);
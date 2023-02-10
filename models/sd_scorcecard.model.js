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
    year:{
        type:Number
    },
    estimate:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    
    BD_estimate:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    
    code_standard:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
   
    okr:{
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

module.exports = mongoose.model("SDscoreCard", sd_scoreCardSchema);
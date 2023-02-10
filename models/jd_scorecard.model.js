const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ratingSchema = new Schema({
//     rating: {
//       type: Number,
//       required: true
//     },
//     review: {
//       type: String,
//       required: true
//     }
//   });
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
    year:{
        type:Number
    },
    criteria_one:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    criteria_two:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    criteria_three:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    criteria_four:{
        rating: {
            type: Number,
            required: true
          },
          review: {
            type: String,
            required: true
          }
    },
    criteria_five:{
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
    required: true,
    // default: function() {
    //   return (this.criteria_one.rating + this.criteria_two.rating + this.criteria_three.rating + this.criteria_four.rating + this.criteria_five.rating) / 5
    // }
    },
    
    
    
    
},{timestamps:true});

module.exports = mongoose.model("JDscoreCard", jd_scoreCardSchema);
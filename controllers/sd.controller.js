const SDScore = require('../models/sd_scorcecard.model')


// create
exports.addSDScore = async (req, res) => {
    try {
        console.log(req.body.user)
        const score = new SDScore(
            {
                user:req.body.user,
                month: req.body.month,
                year: req.body.year,
                estimate: {
                    rating: req.body.estimate.rating,
                    review: req.body.estimate.review
                  },
                  BD_estimate: {
                    rating: req.body.BD_estimate.rating,
                    review: req.body.BD_estimate.review
                  },
                  code_standard: {
                    rating: req.body.code_standard.rating,
                    review: req.body.code_standard.review
                  },
                  okr: {
                    rating: req.body.okr.rating,
                    review: req.body.okr.review
                  },
                  team_contribution: {
                    rating: req.body.team_contribution.rating,
                    review: req.body.team_contribution.review
                  },
                  average:
                    (req.body.estimate.rating + req.body.BD_estimate.rating + req.body.code_standard.rating + req.body.okr.rating + req.body.team_contribution.rating) / 5,
                  
            });
    console.log(score.average)
        await score.save();
        const result = await SDScore.findById(score._id).populate('user');
        res.status(200).send(result);
      } catch (err) {
        res.send(err);
      }

      
}

//find overall average
// exports.getAvgSDScore= async (req, res) => {
    
//     try {
//         const score = await SDScore.find({user:req.params.id}).populate('user');
//         const count = await SDScore.find({user:req.params.id}).countDocuments()
//         console.log(count)
//         let average=0;
//         while(count!==0)
//         {
//             average+=score[count].average
//             count--;
//         }
//        console.log(average)
//         console.log(score[0].average)
//         res.status(200).send(score);
//        }
//        catch (err){
//            res.send(err);
//        }}   
// delete
exports.deleteSDScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score= await SDScore.findByIdAndDelete(req.params.id);

         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getSDScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score = await SDScore.findById(req.params.id).populate('user');
         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getSDScores = async (req, res) => {
    console.log("get all service")
     try {
         const score = await SDScore.find().populate('user');
         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}
//update
// exports.updatePost = async (req, res) => {
//     console.log("update post")
//      try {
//          const post = await Post.findByIdAndUpdate(req.params.id, req.body,);
//          res.status(200).send("updated");
//         }
//         catch (err){
//             res.send(err);
//         }}
   
 //get posts of a particular user
 exports.getUserSDScore= async (req, res) => {
    
     try {
         const score = await SDScore.find({user:req.params.id}).populate('user');
         res.status(200).send(score);
        }
        catch (err){
            res.send(err);
        }}   
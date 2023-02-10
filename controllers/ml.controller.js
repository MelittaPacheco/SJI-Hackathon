const MLScore = require('../models/ml.scorecard.model')


// create
exports.addMLScore = async (req, res) => {
    try {
        
        const score = new MLScore(
          {
              user:req.body.user,
              month: req.body.month,
              year: req.body.year,
              communication: {
                  rating: req.body.communication.rating,
                  review: req.body.communication.review
                },
                marketing: {
                  rating: req.body.marketing.rating,
                  review: req.body.marketing.review
                },
                skill_dev: {
                  rating: req.body.skill_dev.rating,
                  review: req.body.skill_dev.review
                },
                billable_utilisation: {
                  rating: req.body.billable_utilisation.rating,
                  review: req.body.billable_utilisation.review
                },
                team_contribution: {
                  rating: req.body.team_contribution.rating,
                  review: req.body.team_contribution.review
                },
                average:
                  (req.body.communication.rating + req.body.marketing.rating + req.body.skill_dev.rating + req.body.billable_utilisation.rating + req.body.team_contribution.rating) / 5,
                
          });
  
      await score.save();
      const result = await MLScore.findById(score._id).populate('user');
      res.status(200).send(result);
      } catch (err) {
        res.send(err);
      }

}
// delete
exports.deleteMLScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score= await MLScore.findByIdAndDelete(req.params.id);

         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getMLScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score = await MLScore.findById(req.params.id).populate('user');
         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getMLScores = async (req, res) => {
    console.log("get all service")
     try {
         const score = await MLScore.find().populate('user');
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
 exports.getUserMLScore= async (req, res) => {
    
     try {
         const score = await MLScore.find({user:req.params.id}).populate('user');
         res.status(200).send(score);
        }
        catch (err){
            res.send(err);
        }}   
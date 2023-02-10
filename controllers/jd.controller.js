const JDScore = require('../models/jd_scorecard.model')


// create
exports.addJDScore = async (req, res) => {
    try {
        console.log(req.body)
          const score = new JDScore(req.body);
    
        await score.save();
        res.status(200).send(score);
      } catch (err) {
        res.send(err);
      }

}
// delete
exports.deleteJDScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score= await JDScore.findByIdAndDelete(req.params.id);

         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getJDScore = async (req, res) => {
    console.log(req.params.id)
     try {
         const score = await JDScore.findById(req.params.id).populate('user');
         res.status(200).send(score);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getJDScores = async (req, res) => {
    console.log("get all service")
     try {
         const score = await JDScore.find().populate('user');
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
 exports.getUserJDScore= async (req, res) => {
    
     try {
         const score = await JDScore.find({user:req.params.id}).populate('user');
         res.status(200).send(score);
        }
        catch (err){
            res.send(err);
        }}   
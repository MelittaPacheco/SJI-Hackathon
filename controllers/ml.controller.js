const MLScore = require('../models/ml.scorecard.model')


// create
exports.addMLScore = async (req, res) => {
    try {
        console.log(req.body)
          const score = new MLScore(req.body);
    
        await score.save();
        res.status(200).send(score);
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
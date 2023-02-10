const SDScore = require('../models/sd_scorcecard.model')


// create
exports.addSDScore = async (req, res) => {
    try {
        console.log(req.body)
          const score = new SDScore(req.body);
    
        await score.save();
        res.status(200).send(score);
      } catch (err) {
        res.send(err);
      }

}
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
         const score = await SDScore.findById(req.params.id).populate('user',[]);
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
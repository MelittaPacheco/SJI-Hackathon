const Team = require('../models/team.model')


// create
exports.addTeam = async (req, res) => {
    try {
        console.log(req.body)
          const team = new Team({
            name: req.body.name,
            
        });
        
        await team.save();
        res.status(200).send(team);
      } catch (err) {
        res.send(err);
      }

}
// delete
exports.deleteTeam = async (req, res) => {
    console.log(req.params.id)
     try {
         const team= await Team.findByIdAndDelete(req.params.id);

         res.status(200).send(team);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getTeam = async (req, res) => {
    console.log(req.params.id)
     try {
         const team = await Team.findById(req.params.id);
         res.status(200).send(team);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getTeams = async (req, res) => {
    console.log("get all service")
     try {
         const team = await Team.find();
         res.status(200).send(team);
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
   
//  //get posts of a particular user
//  exports.getUserPosts= async (req, res) => {
    
//      try {
//          const posts = await Post.find({UserID:req.params.id}).populate('UserID', ['first_name','last_name','profile_pic']);
//          res.status(200).send(posts);
//         }
//         catch (err){
//             res.send(err);
//         }}   
const Manager = require('../models/manager.model')


// create
exports.addManager = async (req, res) => {
    try {
        console.log(req.body)
          const manager = new Manager({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        });
        
        await manager.save();
        res.status(200).send(manager);
      } catch (err) {
        res.send(err);
      }

}
//signin
exports.login = async (req, res) => {
    const email = req.body.name;
    const password = req.body.password;

    try {
        let result = await Manager.findOne(email).lean();
        console.log(result)
        if (result) {
            //compare passwords       
            if (result.password===password) {
                res.status(200).send(result)
             
            } else {
               
                res.send("Invalid Username or Password. Please try again")
            }
        } else {
         
            res.status(404).send("Account cannot be found. Try signing up")
        }
    }
     catch (err) {
        console.log(err)
     
    res.send(err)
}
}
// delete
exports.deleteManager = async (req, res) => {
    console.log(req.params.id)
     try {
         const manager= await Manager.findByIdAndDelete(req.params.id);

         res.status(200).send(manager);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getManager = async (req, res) => {
    console.log(req.params.id)
     try {
         const manager = await Manager.findById(req.params.id);
         res.status(200).send(manager);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getManagers = async (req, res) => {
    console.log("get all managers")
     try {
         const manager = await Manager.find();
         res.status(200).send(manager);
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
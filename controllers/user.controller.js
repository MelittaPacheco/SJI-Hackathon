const User = require('../models/user.model')


// create
exports.addUser = async (req, res) => {
    try {
        console.log(req.body)
          const user= new User({
            name: req.body. name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            designation:req.body.designation,
            team:req.body.team,
            manager:req.body.manager
        });
        
        await user.save();
        res.status(200).send(user);
      } catch (err) {
        res.send(err);
      }

}

//signin
exports.login = async (req, res) => {
    const email = req.body.name;
    const password = req.body.password;

    try {
        let result = await User.findOne(email).lean();
        console.log(result)
        if (result) {
            //compare passwords       
            if (result.password===password) {
                res.status(200).send("success")
              
                
                    
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
exports.deleteUser = async (req, res) => {
    console.log(req.params.id)
     try {
         const user= await User.findByIdAndDelete(req.params.id);

         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}

//get     
exports.getUser = async (req, res) => {
    console.log(req.params.id)
     try {
         const user = await User.findById(req.params.id).populate('team');
         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}

//get all
exports.getUsers = async (req, res) => {
    console.log("get all ")
     try {
        // const user = await User.find();
         const user = await User.find().populate('team');
         res.status(200).send(user);
     }
     catch (err){
         res.send(err);
     }}
//update
exports.updateUser = async (req, res) => {
    ocnsole.log("update")
     try {
         const user = await User.findByIdAndUpdate(req.params.id, req.body);
         res.status(200).send(user);
        }
        catch (err){
            res.send(err);
        }}
   
//  //get posts of a particular user
//  exports.getUserPosts= async (req, res) => {
    
//      try {
//          const posts = await Post.find({UserID:req.params.id}).populate('UserID', ['first_name','last_name','profile_pic']);
//          res.status(200).send(posts);
//         }
//         catch (err){
//             res.send(err);
//         }}   
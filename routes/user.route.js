const express =require("express")
const router=express.Router();

const UserController=require("../controllers/user.controller");

router.get("/", async (req, res) => {
    await UserController.getUsers(req, res);
});
router.get("/:id", async(req,res)=> {
    await UserController.getUser(req, res);
});
router.post("/", async(req,res)=> {
    await UserController.addUser(req, res);
});
router.post("/login", async (req, res) => {
    await UserController.login(req, res);
});
router.put("/", async(req,res)=> {
    await UserController.updateUser(req, res);
});



module.exports = router;
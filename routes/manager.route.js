const express =require("express")
const router=express.Router();

const ManagerController=require("../controllers/manager.controller");

router.get("/", async (req, res) => {
    await ManagerController.getManagers(req, res);
});
router.get("/:id", async(req,res)=> {
    await ManagerController.getManager(req, res);
});
router.post("/", async(req,res)=> {
    await ManagerController.addManager(req, res);
});


module.exports = router;
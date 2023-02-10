const express =require("express")
const router=express.Router();

const SDController=require("../controllers/sd.controller");

router.get("/", async (req, res) => {
    await SDController.getSDScores(req, res);
});
router.get("/:id", async(req,res)=> {
    await SDController.getSDScore(req, res);
});
router.post("/", async(req,res)=> {
    await SDController.addSDScore(req, res);
});
router.get("/user/:id", async(req,res)=> {
    await SDController.getUserSDScore(req, res);
});

module.exports = router;
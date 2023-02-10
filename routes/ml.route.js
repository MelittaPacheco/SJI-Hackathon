const express =require("express")
const router=express.Router();

const MLController=require("../controllers/ml.controller");

router.get("/", async (req, res) => {
    await MLController.getMLScores(req, res);
});
router.get("/:id", async(req,res)=> {
    await MLController.getMLScore(req, res);
});
router.post("/", async(req,res)=> {
    await MLController.addMLScore(req, res);
});
router.get("/user/:id", async(req,res)=> {
    await MLController.getUserMLScore(req, res);
});

module.exports = router;
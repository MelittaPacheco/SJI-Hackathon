const express =require("express")
const router=express.Router();

const JDController=require("../controllers/jd.controller");

router.get("/", async (req, res) => {
    await JDController.getJDScores(req, res);
});
router.get("/:id", async(req,res)=> {
    await JDController.getJDScore(req, res);
});
router.post("/", async(req,res)=> {
    await JDController.addJDScore(req, res);
});
router.get("/user/:id", async(req,res)=> {
    await JDController.getUserJDScore(req, res);
});

module.exports = router;
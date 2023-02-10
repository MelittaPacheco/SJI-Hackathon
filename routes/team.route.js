const express =require("express")
const router=express.Router();

const TeamController=require("../controllers/team.controller");

router.get("/", async (req, res) => {
    await TeamController.getTeams(req, res);
});
router.get("/:id", async(req,res)=> {
    await TeamController.getTeam(req, res);
});
router.post("/", async(req,res)=> {
    await TeamController.addTeam(req, res);
});


module.exports = router;
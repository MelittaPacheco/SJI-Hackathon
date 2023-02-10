const express = require("express");

const router = express.Router();

const managerRoutes=require("./manager.route")
const teamRoutes=require("./team.route")
const userRoutes= require("./user.route")
const sdRoutes= require("./sd.route")
const mlRoutes =require("./ml.route")
const jdRoutes = require("./jd.route")



router.use("/team",teamRoutes)
router.use("/user",userRoutes);
router.use("/manager",managerRoutes);
router.use("/sd",sdRoutes);
router.use("/ml",mlRoutes)
router.use("/jd",jdRoutes)
//all apis will come here






module.exports = router;
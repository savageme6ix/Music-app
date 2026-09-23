import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("User profile details");
})

router.get("/album", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
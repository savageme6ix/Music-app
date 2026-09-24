import express from "express";
const router = express.Router();

router.get("/auth", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
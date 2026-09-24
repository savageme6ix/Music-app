import express from "express";
const router = express.Router();

router.get("/dashboard", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
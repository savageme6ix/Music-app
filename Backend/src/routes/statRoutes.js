import express from "express";
const router = express.Router();

router.get("/stats", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
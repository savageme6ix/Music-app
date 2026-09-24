import express from "express";
const router = express.Router();

router.get("/songs", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
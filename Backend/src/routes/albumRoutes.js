import express from "express";
const router = express.Router();

router.get("/albums", (req,res)=>{
    res.json({Album: "Friday Night Lights"})
})

export default router;
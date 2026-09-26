import { clerkMiddleware, getAuth } from '@clerk/express'
import express from "express";
const router = express.Router();
const app = express();

app.use(clerkMiddleware()); //provides authentication state to routes

router.post("/sign-up", (req,res)=>{
    //`getAuth()` to protect a route based on authorization status
    const auth = getAuth(req)

    if(!auth.isAuthenticated){
        res.status(401).send('Unauthorized')
        return
    }
    res.json(auth)
})

export default router;
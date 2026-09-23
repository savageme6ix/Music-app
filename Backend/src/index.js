import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Server is working!");
});


app.listen(PORT, ()=>{
    console.log("Server running", PORT);
})

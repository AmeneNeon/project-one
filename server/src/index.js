import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors())
app.use("/auth",userRouter)


mongoose.connect("mongodb+srv://recipe:recipe@recipes-one.blwivjc.mongodb.net/recipes-one?retryWrites=true&w=majority").then(()=>{console.log("Connected!")})


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});

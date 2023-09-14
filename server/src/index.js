import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipes.js";

const app = express();
app.use(express.json());
app.use(cors("http://localhost:3000","https://stunning-bublanina-281324.onrender.com))
app.use("/auth",userRouter)
app.use("/recipes",recipeRouter)


mongoose.connect("mongodb+srv://recipe:recipe@recipes-one.blwivjc.mongodb.net/recipes-one?retryWrites=true&w=majority").then(()=>{console.log("Connected!")})


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});

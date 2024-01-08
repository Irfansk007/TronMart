import express from "express";
import cors from "cors";

import UserRoute from "./Routes/UserRoute.js";

import cookieParser from "cookie-parser";

//app initialization
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use("/static", express.static("images"));

//routes
app.use("/auth", UserRoute);

//server initialization
const port = process.env.PORT || 8000;
app.get('/',async(req,res)=>{
res.json({messege:"server is running"})
})
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});

import express,{Request,Response} from "express";
import authRouter from "./AdminAuthRoute";

let servertwo=express();
let rootRouter=express.Router();
rootRouter.get("/",(req:Request,res:Response)=>{
    res.send("<h1>welcome to my api restFul</h1>")
});
servertwo.use("/",rootRouter)
 servertwo.use("/auth",authRouter)


export default servertwo;
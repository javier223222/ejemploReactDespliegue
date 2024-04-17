import express, { Express,Request,Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors"
import helmet from "helmet";
import "dotenv/config"
// import router from "../routes"
import mongoose from "mongoose";
import servertwo from "../routes";


const server:Express=express();

server.use(helmet())
server.use(cors())
server.use(express.urlencoded({extended:true,limit:"50mb"}))
server.use(express.json({limit:"50mb"}))
mongoose.connect(process.env.MONGODB_URI||"")
server.use("/api",servertwo)
server.use(express.static("public"))
server.use("/docs",
swaggerUi.serve,
swaggerUi.setup(undefined,{
    swaggerOptions:{
        url:"/swagger.json",
        explorer:true
    }
}))
server.get("/",(req:Request,res:Response)=>{
    res.redirect("/api")
})


export default server;
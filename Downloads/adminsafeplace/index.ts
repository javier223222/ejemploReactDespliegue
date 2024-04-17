import { createServer } from "http"
import server from "./src/server"
import "dotenv/config"
const httpserver=createServer(server)
httpserver.listen(process.env.PORT||3000,()=>{
    console.log("Server is running " + 'http://localhost:' + process.env.PORT||3000)
})
import express,{Request,Response} from "express"
import AuthAdminController from "../controller/AuthAdmin.controller"
import bodyParser from "body-parser"
let jsonParser = bodyParser.json()
let authRouter=express.Router()

authRouter.route("/login")
          .post(jsonParser,async (req:Request,res:Response)=>{
              try{
                    let authAdminController=new AuthAdminController()
                    let token=await authAdminController.login(req.body.username,req.body.password)
                    return res.status(200).json({success:false,token:token})
              }catch(e:any){
                  console.log(e.message)
                  return res.status(500).json({success:false,message:"Error al inicar sesion"})
              }
          })


export default authRouter
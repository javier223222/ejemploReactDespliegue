import AdminAuthOrm from "../domain/orm/AdminAuth.orm";
import IAuthController from "./interfaces/IAuthController";
import bcrypt from "bcrypt"
import { generateToken } from "../middlewares";
export default class AuthAdminController implements IAuthController {
   public async login(username: string, password: string): Promise<string> {
       try{
                let adminAuthOrm=new AdminAuthOrm()
                let admin=await adminAuthOrm.login(username)
                 if(bcrypt.compareSync(password,admin.password)){
                   const token=await generateToken(admin)
                     return token
                 }


                    throw new Error("Password incorrect")
                
       }catch(e:any){
        console.log(e.message)
        throw new Error("El usuario no existe")
       }
   }
}
import mongoose from "mongoose";
import IAdmin from "../interfaces/IAdmin.interface";

import { IAdminAuthOrm } from "../interfaces/IAdminAuthOrm";
import { adminEntity } from "../entities/Admin.entity";

export default class AdminAuthOrm implements IAdminAuthOrm {
   public async login(username: string): Promise<IAdmin> {
       try{
             let adminAuth=adminEntity()
                let admin=await adminAuth.findOne({username:username})
                if(!admin){
                    throw new Error("User not found")
                }
                return admin

       }catch(e:any){
        throw new Error(e)
       }
   }
}
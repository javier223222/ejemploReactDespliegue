import mongoose from "mongoose";
import { IAdmin } from "../interfaces/IAdmin.interface";
export const adminEntity=()=>{
    let adminSchema=new mongoose.Schema<IAdmin>(
        {
            name:{type:String,required:true},
            lastName:{type:String,required:true},
            email:{type:String,required:true},
            password:{type:String,required:true},
            role:{type:String,required:true},
            createdAt:{type:Date,required:true,default:new Date()},
            createdBy:{type:String,required:false},
            updatedBy:{type:String,required:false},
            updatedAt:{type:Date,required:false},
            deletedAt:{type:Date,required:false},
            deletedBy:{type:String,required:false},
            isDeletd:{type:Boolean,required:true,default:false}
            
        }
        
    )
    return mongoose.models.admin||mongoose.model<IAdmin>('admin',adminSchema)
}
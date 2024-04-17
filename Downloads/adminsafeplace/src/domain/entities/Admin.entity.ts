import mongoose from "mongoose";
import IAdmin from "../interfaces/IAdmin.interface";

export const adminEntity=()=>{
    let adminSchema = new mongoose.Schema<IAdmin>({
        username:{type:String,required:true,unique:true},
        name:{type:String,required:true},
        lastname:{type:String,required:true},
        password:{type:String,required:true},
        email:{type:String,required:true},
        isSuperAdmin:{type:Boolean,required:true,default:false},
        isActive:{type:Boolean,required:true,default:false},
        created_at:{type:Date,required:true,default:Date.now()},
        updated_at:{type:Date,required:false},
        deleted_at:{type:Date,required:false},
        deleted:{type:Boolean,required:true,default:false},
        created_by:{type:String,required:true},
        updated_by:{type:String,required:false},
        deleted_by:{type:String,required:false},
        urlImage:{type:String,required:false},
        publicurlImage:{type:String,required:false},
        phonenumber:{type:String,required:true},

    })

    return mongoose.models.Admin || mongoose.model<IAdmin>("Admin",adminSchema)
}
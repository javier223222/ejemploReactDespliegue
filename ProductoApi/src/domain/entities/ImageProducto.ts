import mongoose from "mongoose";
import IImageProducto from "../interfaces/IImageProducto";

export const ImageProducto=()=>{
    let imageProductoSchema= new mongoose.Schema<IImageProducto>({
        url:{type:String,required:true},
    })

    return mongoose.models.ImageProducto ||mongoose.model<IImageProducto>('ImageProducto',imageProductoSchema)
}
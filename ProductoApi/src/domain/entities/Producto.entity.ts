import mongoose from "mongoose";
import IProducto from "../interfaces/IProducto";
export const productoEntity=()=>{
    let productoSchema= new mongoose.Schema<IProducto>({
        codigoProducto:{type:String,required:true,unique:true},
        paramterdis:{type:Number},
        imagenes:[{type:mongoose.Schema.Types.ObjectId,ref:'ImageProducto'}]
    })

    return mongoose.models.productos ||mongoose.model<IProducto>('productos',productoSchema)
}

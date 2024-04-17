import { productoEntity } from "../entities/Producto.entity"

export default class ProductoOrm{
    public async createProducto(productId:string,parameter:number){
        try{
           let producto=productoEntity()
           let create=await producto.create({codigoProducto:productId,paramterdis:parameter})
           return create
        }catch(e:any){
            throw new Error(e.message)
        }
    }
    public async updateParameter(productId:string,parameter:number){
        try{
            let producto=productoEntity()
            let update=await producto.findOneAndUpdate({codigoProducto:productId},{paramterdis:parameter})
            return parameter
        }catch(e:any){
            throw new Error(e.message)
        }
    }

    public async getproducto(productId:string){
        try{
            let producto=productoEntity()
            let get=await producto.findById(productId)
            return get
        }catch(e:any){
            throw new Error(e.message)
        }
    }
}
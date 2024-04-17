import ProductoOrm from "../domain/orm/Producto.orm";
import IProducto from "../domain/interfaces/IProducto";
import IProductoController from "./interfaces/IProductoController";

export default class ProductoController implements IProductoController{
   public async  createProducto(productId: string, parameter: number): Promise<IProducto> {
        try{
          const productorm=new ProductoOrm()
          const create=await productorm.createProducto(productId,parameter)
            return create 
        }catch(e:any){
            throw new Error(e.message)
        }
    }

   public async  updateParameter(productId: string, parameter: number): Promise<number> {
        try{
            const productorm=new ProductoOrm()
            const update=await productorm.updateParameter(productId,parameter)
            return update
        }catch(e:any){
            throw new Error(e.message)
        }
    }

    public async getproducto(productId: string): Promise<IProducto> {
      try{
        let productorm=new ProductoOrm()
        let get=await productorm.getproducto(productId)
        return get
      }catch(e:any){
            throw new Error(e.message)
      }
    }
    
}
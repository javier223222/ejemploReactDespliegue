import IProducto from "../../domain/interfaces/IProducto";

export default interface IProductoController {
     createProducto(productId: string, parameter: number): Promise<IProducto>;
     updateParameter(productId: string, parameter: number): Promise<number>;
     getproducto(productId: string): Promise<IProducto>;
     
}
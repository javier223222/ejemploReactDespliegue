import express,{Request,Response} from "express"
import bodyParser from "body-parser"
import ProductoController from "../controller/Producto.controller"

let jsonParser=bodyParser.json()
let routerprod = express.Router()
routerprod.route("/")
          .patch(jsonParser,async(req:Request,res:Response)=>{
            try{

                const {productId,parameter}=req.body
                const productController=new ProductoController()
                const update=await productController.updateParameter(productId,parameter)

                res.status(200).json({message:"Producto actualizado",status:200,succes:true})

            }catch(e:any){
                res.status(500).json({message:"Error en el servidor",status:500,succes:false})
            }
          })
          .post(jsonParser,async(req:Request,res:Response)=>{
            try{
                const {productId,parameter}=req.body
                const productController=new ProductoController()
                const create=await productController.createProducto(productId,parameter)
                res.status(200).json({message:"Producto creado",status:200,succes:true,data:create})
            }catch(e:any){
                res.status(500).json({message:"Error en el servidor",status:500,succes:false})
            }
          }).get(jsonParser,async(req:Request,res:Response)=>{

            try{
                const {productId}=req.params
                const productController=new ProductoController()
                const get=await productController.getproducto(productId)
                res.status(200).json({message:"Producto encontrado",status:200,succes:true,data:get})
            }catch(e:any){
                res.status(500).json({message:"Error en el servidor",status:500,succes:false})
            }
          })



export default routerprod
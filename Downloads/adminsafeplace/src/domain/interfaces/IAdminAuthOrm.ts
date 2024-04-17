import IAdmin from "./IAdmin.interface"

export interface IAdminAuthOrm {
       login(username:string):Promise<IAdmin>
      
}
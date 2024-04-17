export default interface IAuthController {
    login(username:string,password:string):Promise<string>
    
}
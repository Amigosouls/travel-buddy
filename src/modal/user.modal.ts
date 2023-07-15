export interface Users{
    id:number,
    role:string,
    username:string,
    password:string,
    isLogged : boolean,
    useremail:string,
    
}

export interface LoginUser{
    useremail:string,
    password:string
}
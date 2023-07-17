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

export interface Tasks{
    id:number,
    task_name:string,
    task_code:string,
    start_date:string,
    end_date:string,
    priority:string
}
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

export interface AssignedTask{
    id:number,
    userid:number,
    selectedtask:string,
    taskid:number,
    startdate:string,
    enddate:string,
    taskcode:string,
    taskpriority:string,
    task_completed:boolean

}
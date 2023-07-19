import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignedTask, Tasks } from 'src/modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<Tasks[]>('http://localhost:3000/Tasks');
  }

  posttTasks(itemToPut:AssignedTask){
    this.http.post<AssignedTask>('http://localhost:3000/Task_List',itemToPut).subscribe();
  }
  getAssignedTasks(){
    return this.http.get<AssignedTask[]>('http://localhost:3000/Task_List');
  }
  putTask(task:AssignedTask){
    this.http.put<AssignedTask[]>('http://localhost:3000/Task_List/'+task.id,task).subscribe();
  }
  getUserTasks(id:number){
    return this.http.get<AssignedTask[]>('http://localhost:3000/Task_List?username_like='+id);
  }
}

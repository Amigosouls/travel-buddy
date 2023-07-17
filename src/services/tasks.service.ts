import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from 'src/modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<Tasks[]>('http://localhost:3000/Tasks');
  }
}

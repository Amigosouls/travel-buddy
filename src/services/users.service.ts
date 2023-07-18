import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/modal/user.modal';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  value:boolean=false;
  public confirmLogin = new Subject<boolean>();

  constructor(private httpClient : HttpClient) { }
  
   getUsersActive(){
   return this.httpClient.get<Users[]>('http://localhost:3000/Users?isLogged_like=true');
  }

  getUsers(){
    return this.httpClient.get<Users[]>('http://localhost:3000/Users')
  }
  getAuthStatus():boolean{
    this.confirmLogin.subscribe(
      data =>{
        this.value=data;

      }
    )
    console.log(this.value);
    return this.value;
  }
  updateUsers(userObj:Users,id:number){
    this.httpClient.put<Users[]>('http://localhost:3000/Users/'+id,userObj).subscribe()
  }
  postUsers(user:Users){
    this.httpClient.post<Users[]>('http://localhost:3000/Users',user).subscribe();
  }

}


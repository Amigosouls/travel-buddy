import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/modal/user.modal';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }
  
   getUsersActive(){
   return this.httpClient.get<Users[]>('http://localhost:3000/Users?isLogged_like=true');
  }

  activeUsers():any {
    
    return this.getUsersActive().subscribe(
      (response)=>{
       
      }
    )
    
  }
  
  
}


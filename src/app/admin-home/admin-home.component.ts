import { Component, OnInit } from '@angular/core';
import { Users } from 'src/modal/user.modal';
import { UsersService } from 'src/services/users.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  userList:Users[]=[];
  filteredUsers:Users[]=[];
  constructor(private userObj:UsersService){
  }
  ngOnInit(): void {
    this.userObj.getUsers().subscribe(
      (res)=>{
        this.userList=res;
        for (const 
          user of this.userList) {
            console.log(user);
          if(user.role==='customer'){
            this.filteredUsers.push(user);
          }
        }
      }
    );
    
  }
  assignTask(user:Users){
    
  }
}

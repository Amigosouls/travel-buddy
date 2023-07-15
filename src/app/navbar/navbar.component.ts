import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as $ from 'jquery';
import { UsersService } from 'src/services/users.service';
import { Users } from 'src/modal/user.modal';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userObj : UsersService , private messages: MessageService){}

  items?: MenuItem[];
  activeUser:Users[]=[];
  userLogged:boolean=false;
  title ="";
  renderData(){
    
    
  }
  ngOnInit() {
      this.items = [
          { label: 'Customer', icon: 'pi pi-fw pi-home', routerLink:'customer'},
          { label: 'Admin', icon: 'pi pi-fw pi-calendar',routerLink:'admin' },
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'home'},
          { label: 'Rides', icon: 'pi pi-fw pi-calendar',routerLink:'rides' },
        
      ];

    this.userObj.getUsersActive().subscribe(
      (res)=>{
        this.activeUser=res;
        if(this.activeUser.length>=1){
          console.log('hi')
          this.userLogged=true;
          $('#loginbtn').attr('hidden','true');
          $('.dropbtn').text(this.activeUser[0].username)
          this.messages.add({ severity: 'success', summary: 'Welcome', detail:'Hi'+this.activeUser[0].username })
        }
        else{
          //$('.dropbtn').attr('hidden','true');
        }
      }
      
    );  
    this.userObj.confirmLogin.subscribe(
      res=>{
          if(res==true){
            console.log(res)
            this.ngOnInit();
          }
      }
    )
    }

  logout(){
        console.log('logged out')
  }
}

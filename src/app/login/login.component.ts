import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser, Users } from 'src/modal/user.modal';
import { UsersService } from 'src/services/users.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userObj : UsersService, private router:Router, private messages:MessageService){
    
  }
  signupform !: FormGroup;
  regusername : FormControl | any;
  userregemail : FormControl | any;
  confirmpassword : FormControl | any;
  userpassword : FormControl | any;
  role : FormControl | any;
  isLogged : FormControl | any;
 
  
  userList : Users[]=[]
  static loggedUser:Users={
    id:0,
    useremail:'',
    password:'',
    isLogged:false,
    username:'',
    role:''
  }


  loginForm !:FormGroup;
  useremail !: FormControl;
  password !: FormControl;  
  ngOnInit(): void {
    this.userObj.getUsers().subscribe(
      (res)=>{
        this.userList= res;
      }
    )
    
    this.useremail = new FormControl('', [Validators.required]);
    this.password = new FormControl('',[Validators.required]);

    this.loginForm= new FormGroup({
      useremail : this.useremail,
      password : this.password
    });
    this.regusername = new FormControl('', [Validators.required]);
    this.useremail = new FormControl('', [Validators.required, Validators.email,]);
    this.confirmpassword = new FormControl('', [Validators.required]);
    this.role = new FormControl('', [Validators.required]);
    this.isLogged = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required,  Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)]);
    this.signupform = new FormGroup(
      {
        firstname : this.regusername,
        useremail: this.useremail,
        confirmpassword : this.confirmpassword,
        companytype : this.role,
        gstnumber : this.isLogged,
        password :this.userpassword
      }
    )

  }
  public registerUser(userForm : FormGroup){
    userForm.value.isLogged=false;
    this.messages.add({ severity: 'success', summary: 'Registration', detail:'Registered Successfully' });
    this.userObj.postUsers(userForm.value);
  }


  public onSubmission(form:FormGroup){
   var userFound = false;
    for (const user of this.userList) {
      if(user.useremail=== form.value.useremail && user.password=== form.value.password)
      {
        this.messages.add({ severity: 'success', summary: 'Logged In', detail:'Login Successful' });
        user.isLogged=true;
        this.userObj.updateUsers(user,user.id);
        LoginComponent.loggedUser = user;
        userFound=true;
        setTimeout(()=>{this.router.navigateByUrl('home'),this.userObj.confirmLogin.next(true)},2000);
        
      }
    }
    if(!userFound){
      alert("No user Found, try again");
      this.loginForm.reset();
    }
  }
}


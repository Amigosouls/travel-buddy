import { Component } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {

  userName= "";
  userEmail = "";
  userAge = "";
  msg =""
  dblclick(){
    this.msg="You Double Clicked me";
    return this.msg
  }
  click(){
    this.msg="You Clicked me";
    return this.msg
  }

  mouseover(){
    this.msg="You Ran over me and i DIES";
    return this.msg
  }

  mouseenter(){
    this.msg="You wanna kill ME!";
    return this.msg
  }

  mouseleave(){
    this.msg="Thanks! for saving me";
    return this.msg
  }
}

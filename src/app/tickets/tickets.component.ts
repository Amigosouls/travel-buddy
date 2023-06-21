import { Component,OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  {

  destinationPlace = ['Ooty','Coonoor','Kothagiri','Gudalur'];
  
  ticketObj = new TicketForm();

  onSubmit(form:any){
    alert("Thank You for confirming Ticket")
    console.log(form.value);
  }

}



export class TicketForm{
 public customerName !: string 
  public customerAge !: string 
  public customerEmail !: string 
  public destination !: string 
}

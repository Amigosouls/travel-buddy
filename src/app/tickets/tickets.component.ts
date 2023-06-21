import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit  {

  destinationPlace = ['Ooty','Coonoor','Kothagiri','Gudalur'];
  
  ticketObj = new TicketForm();

  onSubmit(form:any){
    alert("Thank You for confirming Ticket")
    console.log(form.value);
  }

  constructor (){}

  reviewForm : FormGroup | any;
  reviewerName : FormControl  | any;
  placeVisited : FormControl | any;
  modeOfTravel : FormControl | any;
  rangeOfTravel : FormControl | any;


  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      
    })
  }


}



export class TicketForm{
 public customerName !: string 
  public customerAge !: string 
  public customerEmail !: string 
  public destination !: string 
}

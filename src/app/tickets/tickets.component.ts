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

  
  onSubmission(form : any){
    console.log(form.value)
  }

  onSubmit(form:any){
    alert("Thank You for confirming Ticket")
    console.log(form.value);
  }
  reviewForm! : FormGroup ;
  reviewerName : FormControl  | any;
  placeVisited : FormControl | any;
  modeOfTravel : FormControl | any;
  rangeOfTravel : FormControl | any;
   gender: FormControl | any;
 


  ngOnInit() {

    this.reviewerName = new FormControl('',[Validators.required]);
    this.placeVisited = new FormControl('');
    this.gender = new FormControl('',[Validators.required]);
    this.reviewForm = new FormGroup({
      reviewerName : this. reviewerName,
      placeVisited : this.placeVisited,
      gender :this.gender
     
    });
  }


}



export class TicketForm{
 public customerName !: string 
  public customerAge !: string 
  public customerEmail !: string 
  public destination !: string 
}

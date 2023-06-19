import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  placeName="";
  placeId="";
  ticketCount = 0
  @Input()
  placeListParent:PlaceList[]=[];

  @Output()

  ticketEmitter = new EventEmitter();

  getSelectPlace(selectedPlaceID : any){
    this.showPlaceDetails(selectedPlaceID);
  }
  showPlaceDetails(id:string)
  {
    for (const place of this.placeListParent) {
      if(place.id==id)
      {
        this.placeName=place.name;
        this.placeId = place.id;
        this.ticketCount = place.ticket
      }
  }

  }

  increaseTicket(id:string){
    this.ticketEmitter.emit(id+"+");
    for (const place of this.placeListParent) {
      if(place.id==id)
      {
        this.ticketCount = place.ticket
      }
  }
  }

  decreaseTicket(id:string){
    this.ticketEmitter.emit(id+"-");
    for (const place of this.placeListParent) {
      if(place.id==id)
      {
        this.ticketCount = place.ticket
      }
  }
  }
  
}
interface PlaceList{
  id:string
  name:string,
  ticket:number
}

import { Component } from '@angular/core';
import { TravelComponent } from '../travel/travel.component';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent {
  placeList = [
    {
      id:"1",
      name: 'Ooty',
      ticket: 0,
    },
    {
      id:"2",
      name: 'Kodaikanal',
      ticket: 0,
    },

    {
      id:"3",
      name: 'Conoor',
      ticket: 0,
    },

    { id:"4",
      name: 'Kothagiri',
      ticket: 0,
    },
  ];
  

  increeorDecreeTicket(val:string) {
   if(val.substring(1)=="+")
   {
    for (const place of this.placeList ) {
      if(val.substring(0,1)==place['id'])
      {
        if(place['ticket']>100){
          alert('can\'t go above 100');
          break;
        }
        place['ticket']+=1;
      }
    }
    console.log(val)
   }
   else if(val.substring(1)=="-")
   {
    for (const place of this.placeList ) {
      
      if(val.substring(0,1)==place['id'])
      {
        if(place['ticket']<=1){
          alert('can\'t go below 1');
          break;
        }
        place['ticket']-=1;
      }
    }
    console.log(val)
   }
  }
  
}

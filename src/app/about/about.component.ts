import { Component } from '@angular/core';
import * as data from 'src/assets/json/product.json';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

 


export class AboutComponent {
    empList : Employee[]=[
      {
        empName:"ArunJoseph",
        empAge:20,
        empEmail:"amigosouls022@gmail.com",
        empPhone:"67236735422"
      },
      {
        empName:"Srikanth",
        empAge:29,
        empEmail:"srikanth@gmail.com",
        empPhone:"67236735422"
      }
    ];

    prodList: Products[] = data
   
}

interface Employee{
  empName : string|any;
  empAge : number|any;
  empEmail : string|any;
  empPhone : string|any;
}

interface Products{
  id:number;
  p_name : string;
  p_lock : boolean;
}


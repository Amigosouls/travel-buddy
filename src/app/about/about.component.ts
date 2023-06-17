import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as data from 'src/assets/json/product.json';
import * as traineesData from 'src/assets/json/trainee.json';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

 


export class AboutComponent  {
  // constructor(private http:HttpClient){
  // }

  // getProducts():Observable<Products[]>{
  //   return this.http.get<Products[]>('src/assets/json/products.json')
  //   }
    
  //   ngOnInit(): void {
  //     this.getProductList();
  //   }
  //   getProductList(){
  //     this.getProducts().subscribe(
  //       response => {
  //         console.log(response)
  //       }
  //     )
  //   }
  isHidden=true;
  value =1;

  hideToggle(id:number){
      this.isHidden = !this.isHidden
   this.value+=id;
  }

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



    prodList:any= (data as any).default 
    traineeList : any= (traineesData as any).default 
   
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


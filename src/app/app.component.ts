import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    items: MenuItem[]|any;
    title =""
    ngOnInit() {
        this.items = [
            { label: 'Customer', icon: 'pi pi-fw pi-home', routerLink:'customer'},
            { label: 'Admin', icon: 'pi pi-fw pi-calendar',routerLink:'admin' },
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'guest'},
            { label: 'Rides', icon: 'pi pi-fw pi-calendar',routerLink:'rides' },
          
        ];
    }
 
  }

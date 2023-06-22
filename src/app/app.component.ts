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
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'home'},
            { label: 'Rides', icon: 'pi pi-fw pi-calendar',routerLink:'rides' },
            { label: 'About', icon: 'pi pi-fw pi-pencil', routerLink:'about' },
            { label: 'Travel', icon: 'pi pi-fw pi-car', routerLink:'travel' },
            { label: 'Tickets', icon: 'pi pi-fw pi-car', routerLink:'ticket' },
            { label: 'Products', icon: 'pi pi-fw pi-shopping-cart', routerLink:'products'},
            { label: 'Common', icon: 'pi pi-fw pi-shopping-cart', routerLink:'commonproduct'}
        ];
    }
 
  }

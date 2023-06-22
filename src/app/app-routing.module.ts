import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidesComponent } from './rides/rides.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TravelProductsComponent } from './travel-products/travel-products.component';
import { MenComponent } from './travel-products/men/men.component';
import { KidsComponent } from './travel-products/kids/kids.component';
import { WomenComponent } from './travel-products/women/women.component';
import { MenClothingComponent } from './travel-products/men/men-clothing/men-clothing.component';
import { MenFootwearComponent } from './travel-products/men/men-footwear/men-footwear.component';
import { WomenFootwearComponent } from './travel-products/women/women-footwear/women-footwear.component';
import { WomenClothingComponent } from './travel-products/women/women-clothing/women-clothing.component';
import { KidsClothingComponent } from './travel-products/kids/kids-clothing/kids-clothing.component';
import { KidsFootwearComponent } from './travel-products/kids/kids-footwear/kids-footwear.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'rides', component:RidesComponent},
  {path:'home', component:HomeComponent},
  {path:'travel', component:PlacesComponent},
  {path:'ticket', component:TicketsComponent},
  {path:'commonproduct/:id', component:ProductsComponent},
  {path:'commonproduct', component:ProductsComponent},
  {path:'products', component:TravelProductsComponent,
    children:[
      {path:'men',component:MenComponent, children:[
        {path:'men-clothing', component:MenClothingComponent},
        {path:'men-footwear',component:MenFootwearComponent}
      ]},
      {path:'women',component:WomenComponent, children:[
        {path:'women-clothing', component:WomenClothingComponent},
        {path:'women-footwear',component:WomenFootwearComponent}
      ]},
      {path:'kid',component:KidsComponent, children:[
        {path:'kids-clothing', component:KidsClothingComponent},
        {path:'kids-footwear', component:KidsFootwearComponent}
      ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

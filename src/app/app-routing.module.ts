import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidesComponent } from './rides/rides.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'rides', component:RidesComponent},
  {path:'home', component:HomeComponent},
  {path:'travel', component:PlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

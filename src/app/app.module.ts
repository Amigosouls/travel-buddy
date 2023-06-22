import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule} from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { AboutComponent } from './about/about.component';
import { RidesComponent } from './rides/rides.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TravelComponent } from './travel/travel.component';
import { PlacesComponent } from './places/places.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TicketsComponent } from './tickets/tickets.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelProductsComponent } from './travel-products/travel-products.component';
import { MenComponent } from './travel-products/men/men.component';
import { WomenComponent } from './travel-products/women/women.component';
import { KidsComponent } from './travel-products/kids/kids.component';

import { MenFootwearComponent } from './travel-products/men/men-footwear/men-footwear.component';
import { MenClothingComponent } from './travel-products/men/men-clothing/men-clothing.component';
import { WomenFootwearComponent } from './travel-products/women/women-footwear/women-footwear.component';
import { WomenClothingComponent } from './travel-products/women/women-clothing/women-clothing.component';
import { KidsFootwearComponent } from './travel-products/kids/kids-footwear/kids-footwear.component';
import { KidsClothingComponent } from './travel-products/kids/kids-clothing/kids-clothing.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RidesComponent,
    HomeComponent,
    TravelComponent,
    PlacesComponent,
    TicketsComponent,
    TravelProductsComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    MenFootwearComponent,
    MenClothingComponent,
    WomenFootwearComponent,
    WomenClothingComponent,
    KidsFootwearComponent,
    KidsClothingComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    CardModule,
    TabMenuModule,
     InputTextModule,
     CheckboxModule,
     RadioButtonModule,
     TableModule,
    ButtonModule,
    OverlayPanelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

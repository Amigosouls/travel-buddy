import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RidesComponent,
    HomeComponent
  ],
  imports: [
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
    ButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

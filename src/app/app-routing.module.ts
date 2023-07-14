import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [

  {
    path:'admin',
    component:AdminHomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'customer',
    component:CustomerComponent,
    canActivate:[authGuard]
  },
  {
    path:'guest',
    component:ContactUsComponent,
    canActivate:[authGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'forbidden',
    component : ForbiddenComponent,
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { inject } from '@angular/core';
import { CanActivateFn, Route } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageService } from 'primeng/api';


export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router =inject(Router)
  const messages = inject(MessageService)

 
  //the following object will be replaced by service
  const {role}= LoginComponent.loggedUser;
  const {routeConfig} = route;
  const {path} = routeConfig as Route
  if((path?.includes('admin') ) && role ==='admin'){
    return true
  }
  if(path?.includes('customer')&& role === 'customer'){
    return true;
  }
  if(role===''|| role==null)
  {
    router.navigateByUrl('/login');
    messages.add({ severity: 'warn', summary: 'Alert', detail: 'Please Login First' })
    return false
  }

  if((path?.includes('guest') || path?.includes('home')) && (role === 'customer' || role ==='admin')){
    router.navigateByUrl(role ==='customer' ? '/customer':'/admin');
    return true;
  }
 
  router.navigateByUrl('/forbidden');
  return false;
};

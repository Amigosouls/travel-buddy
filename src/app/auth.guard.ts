import { inject } from '@angular/core';
import { CanActivateFn, Route } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Users } from 'src/modal/user.modal';
import { UsersService } from 'src/services/users.service';
var dataset:any;
class ActiveUsers{
  constructor(private userObj : UsersService){
    userObj.getUsersActive().subscribe(
      (response)=>{
        dataset = response;
      }
    )
  }
  
 

  }




export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router =inject(Router)
  var userObj = inject (UsersService)
  console.log(dataset)
  console.log(userObj.activeUsers())
  const user={
    role:'admin'
  }

 
  //the following object will be replaced by service
 
  const {role} = user;
  const {routeConfig} = route;
  const {path} = routeConfig as Route
  if((path?.includes('admin') ) && role ==='admin'){
    return true
  }
  if(path?.includes('customer')&& role === 'customer'){
    return true;
  }
  if((path?.includes('guest') || path?.includes('home')) && (role === 'customer' || role ==='admin')){
    router.navigateByUrl(role ==='customer' ? '/customer':'/admin');
    return true;
  }

  router.navigateByUrl('/forbidden');
  return false;
};

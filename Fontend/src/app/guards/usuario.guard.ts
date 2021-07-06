import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(private _userService : UserService,
    private _router : Router){}
/* 
  canActivate():boolean {

      if(this._userServ.userRole()){
        alert('no tienes permisos para ingresar');
        this._router.navigateByUrl('/admin/home');
        return false;
      }else{
        
        return true;
      }
  } */

  
  canActivate(): boolean {
    
    if (this._userService.userRole()) {
      alert('no tiene acceso a esta ruta')
      this._router.navigateByUrl('/home');
      this._userService.logout();
      return false;
    } else {      
      return true;
    }
  }
  
}

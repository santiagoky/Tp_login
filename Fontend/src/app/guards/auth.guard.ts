import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { UserService } from '../Service/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _userServ : UserService,
              private _router : Router){}

  canActivate():boolean{
    
    if(this._userServ.logeado()){
      return true;
    }else {
      this._router.navigateByUrl('/login');
      return false;
    }

 /*    return this._userServ.isLogin.pipe(
      take(1),
      map((isLogin : boolean)=> !isLogin )
      
    ) */
  }
  
}

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (this._userService.userRole()) {
      return true;
    } else {
      alert('no tiene acceso a esta ruta');
      this._router.navigateByUrl('/login');
      this._userService.logout();
      return false;
    }
  }

/*   canActivate(): boolean {
    debugger
    console.log('AdminGuard');
    if(this._userService.usuario.dataUser.role === 'Administrador'){
      return true;
    }else{
      alert('no es un admin');
      return false;
    }
  } */
}

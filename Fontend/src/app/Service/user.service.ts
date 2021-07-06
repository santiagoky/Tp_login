import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap  } from 'rxjs/operators';

import { IJwtResponse } from '../Models/IJwtResponse';
import { IUser } from '../Models/IUser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  AUTH_SERVER: string = 'http://localhost:3000';

  token: string;
  role: string;
  userData: IJwtResponse;


  constructor(private _http: HttpClient,
              private _router: Router) {
    this.leerToken();
    this.leerRol();
  }

  login(user: IUser): Observable<IJwtResponse | void> {
   
    return this._http
    .post<IJwtResponse>(`${this.AUTH_SERVER}/login`, user)
    .pipe(
      tap((res: IJwtResponse) => {
        
        if (res) {
          // guardar token 
          this.userData = res;
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn, res.dataUser.role);
        }

      }), catchError(this.handlerError)
      
    );
   
  }

  register(user: IUser): Observable<IJwtResponse> {
    return this._http
      .post<IJwtResponse>(`${this.AUTH_SERVER}/register`, user)
      .pipe(
        tap((res: IJwtResponse) => {
          if (res) {
            // guardar en localStorage
            this.userData = res;            
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn,res.dataUser.role);
          }
        }), catchError(this.handlerError)
      );
  }

  logout(): void {
    localStorage.removeItem('AUTH_ROL');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    this._router.navigateByUrl('/login')
  }

  private saveToken(token: string, expiresIn: string, role: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    localStorage.setItem('AUTH_ROL', role);
  }

  leerToken() {
    
    if (localStorage.getItem('ACCESS_TOKEN')) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    } else {
      this.token = '';
    }
    return this.token;
  }

  leerRol(){
      
    if(localStorage.getItem('AUTH_ROL')){
      this.role= localStorage.getItem('AUTH_ROL');
    }else {
      this.role = '';
    }
    return this.role;
  }

  logeado(): boolean {

    if (localStorage.getItem('ACCESS_TOKEN')) {
      return true;
    }
  }

  userRole(): boolean {
  
    if (this.role === 'Administrador') {
      return true;
    }else {
      return false;
    }

    
  }
  
  //manejo de errores

  handlerError(error : HttpErrorResponse){
    return throwError(error.error.message);
  }



}

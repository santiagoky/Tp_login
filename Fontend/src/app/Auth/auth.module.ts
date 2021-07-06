import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterialModule } from '../components/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [    
    LoginComponent,
    RegistroComponent
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { PagesComponent } from './pages.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MaterialModule } from '../components/material/material.module';
import { InfoComponent } from '../components/info/info.component';
import { NombrePipe } from '../components/pipes/nombre.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    PagesComponent,
    UserHomeComponent,
    AdminHomeComponent,
    InfoComponent,
    NombrePipe,
    
  ],

  exports: [
    HomeComponent,
    NavBarComponent,
    PagesComponent,
    UserHomeComponent,
    AdminHomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }

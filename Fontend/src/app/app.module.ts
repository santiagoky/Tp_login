import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules 
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './components/material/material.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './Auth/auth.module';

//components
import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

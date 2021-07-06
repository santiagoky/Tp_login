import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './Auth/auth.routing';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

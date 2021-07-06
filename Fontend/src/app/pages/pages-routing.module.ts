import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioGuard } from '../guards/usuario.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'user',
        component: UserHomeComponent,
        canActivate: [UsuarioGuard],
      },
      {
        path: 'admin',
        component: AdminHomeComponent,
        canActivate: [AdminGuard],
      },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

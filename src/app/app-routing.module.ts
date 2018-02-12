import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';

import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TouristComponent } from './tourist/tourist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'home', component:
    TouristComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

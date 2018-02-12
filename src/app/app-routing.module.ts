import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { TouristComponent } from './tourist/tourist.component';

const routes: Routes = [
  { path: '', redirectTo: 'tourist', pathMatch: 'full' },
  { path: 'tourist', component: TouristComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'login', component: LoginComponent }
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

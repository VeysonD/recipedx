import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { RecipeService } from './services/api/recipe.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { TouristComponent } from './tourist/tourist.component';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TouristComponent,
    CallbackComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

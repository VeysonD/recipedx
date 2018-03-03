import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ViewComponent } from './view/view.component';
import { UploadComponent } from './upload/upload.component';
import { UploadModalFailComponent } from './upload-modal-fail/upload-modal-fail.component';
import { UploadModalSuccessComponent } from './upload-modal-success/upload-modal-success.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TouristComponent,
    CallbackComponent,
    DashboardComponent,
    NavbarComponent,
    ViewComponent,
    UploadComponent,
    UploadModalFailComponent,
    UploadModalSuccessComponent
  ],
  entryComponents: [
    UploadModalFailComponent,
    UploadModalSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

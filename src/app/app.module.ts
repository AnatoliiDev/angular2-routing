import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdListService } from './shared/prodList.service';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './productsAll/products.module';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers: [
    ProdListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

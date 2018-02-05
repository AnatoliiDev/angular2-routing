import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdListService } from './shared/prodList.service';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './productsAll/products.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule    
  ],
  providers: [ProdListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

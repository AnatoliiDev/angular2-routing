
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { AdminComponent } from "./admin/admin.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";

export const routes: Routes = [
    
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent },
        { path: "products", component: ProductsComponent },
        { path: "product/:id", component: ProductsDetailsComponent },
        { path: "admin", component: AdminComponent }
      
];
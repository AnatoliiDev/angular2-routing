import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductsComponent,
        ProductsDetailsComponent,
        
    ]
})
export class ProductsModule{}
import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent } from "../productsAll/products-details/products-details.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "products",
                pathMatch: "full"
            },            
            {
                path: "products",
                component: ProductsComponent,
                children: [
                    {
                        path: ":id",
                        component: ProductsDetailsComponent
                    },
                    {
                        path: "",
                        component: ProductsDetailsComponent
                    }
                ]
            },            
        ])
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule{}
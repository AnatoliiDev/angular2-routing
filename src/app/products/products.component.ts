import { Component } from "@angular/core";
import { ProdListService } from "../shared/prodList.service";
import { Product } from "../shared/product";
import { Router, Params, ActivatedRoute } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: "products",
    templateUrl: "products.component.html",
    styleUrls: ["products.component.css"]
})
export class ProductsComponent {

    products: Product[];
    selectedId: number;

    constructor(private prodListService: ProdListService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];
        })
        this.products = this.prodListService.getData();
    }

    onSelect(product) {
        this.router.navigate(["product", product.id])
    }

    isSelected(product) {
        return product.id == this.selectedId;
    }

}
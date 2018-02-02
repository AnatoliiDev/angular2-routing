import { Component, OnInit } from "@angular/core";
import { ProdListService } from "../shared/prodList.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Product } from "../shared/product";


@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html"
})
export class ProductsDetailsComponent implements OnInit {

    product;

    constructor(private prodListService: ProdListService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.forEach( (params: Params)=>{
            let id = +params["id"];
            this.product = this.prodListService.getData()[id-1];        
        } )
    }

    goToProducts() {
        let pId = this.product ? this.product.id : null;
        this.router.navigate(["products", {id: pId}]);
    }

    
}
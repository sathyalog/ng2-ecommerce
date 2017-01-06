import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;
    getId:number;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        /* get product id in URL of PDP page */
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id']; // add a + at the beginning. + is a javascript shortcut to convert parameter string to numeric id
                this.getProduct(id);
        });
        /* get product name in URL of PDP page 
        this.sub = this._route.params.subscribe(
            params => {
                let name = params['name']; 
                this.getProductName(name);
        });
        */
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    //get product id to show up in URL of pdp page
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
    //get product name to show up in URL of pdp page
    getProductName(name: string) {
        this._productService.getProductName(name).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

    addToCart(){
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id']; // add a + at the beginning. + is a javascript shortcut to convert parameter string to numeric id
                this.getProduct(id);
                this.getId =id;
        });
        // alert("You added"+this.getId);
    }
}

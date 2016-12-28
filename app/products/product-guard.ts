import { Injectable,OnInit } from '@angular/core';
//import {IProduct} from './product';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
//import {ProductService} from './product.service'
@Injectable()
export class ProductDetailGuard implements CanActivate {
   // products:IProduct[];
    // errorMessage:string;
    constructor(private _router: Router,
        //private _productService:ProductService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        // this._productService.getIds()
        //                     .subscribe(products => this.products = products,
        //                     error => this.errorMessage = <any>error);
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            // abort current navigation
            return false;
        };
         
        return true;
    }
    
}

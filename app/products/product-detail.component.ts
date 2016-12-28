import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute, Router } from '@angular/router'; // to get the parameter from the URL we use this
@Component({
    moduleId: module.id,
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle:string = 'Product Detail';
    product: IProduct;
    constructor(private _route:ActivatedRoute, private _router:Router){

    }
    ngOnInit():void{
        let id = +this._route.snapshot.params['id']; //to read the parameter(id) from url using snapshot. Because the parameter is provided as string, we will
        // add a + at the beginning. + is a javascript shortcut to convert parameter string to numeric id
        this.pageTitle+=`:${id}`;
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
}
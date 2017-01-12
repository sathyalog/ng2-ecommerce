import {Component,OnInit, OnChanges} from '@angular/core';
import {CartService} from './../home/cart.service';
@Component({
    selector:'show-cart',
    moduleId:module.id,
    templateUrl:'cart-floating.component.html',
    styleUrls:['cart-floating.component.css'],
    providers: [CartService]
})

export class CartButtonComponent implements OnInit,OnChanges{
    cartCount:number;
    constructor(private _cartService:CartService){
        this.getCount();
    }
    getCount(){
        return this.cartCount = this._cartService.count;
    }
    ngOnInit():void{
        this.getCount();
    }
    ngOnChanges():void{
        this.getCount();
    }

}
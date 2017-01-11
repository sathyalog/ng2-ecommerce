import {Component} from '@angular/core';
import {CartService} from './../home/cart.service';
@Component({
    selector:'show-cart',
    moduleId:module.id,
    templateUrl:'cart-floating.component.html',
    styleUrls:['cart-floating.component.css'],
    providers: [CartService]
})

export class CartButtonComponent{
    cartCount:number;
    constructor(private _cartService:CartService){
        this.getCount();
    }
    getCount(){
        this.cartCount = this._cartService.count;
    }
}
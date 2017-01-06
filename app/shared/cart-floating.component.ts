import {Component} from '@angular/core';
@Component({
    selector:'show-cart',
    moduleId:module.id,
    templateUrl:'cart-floating.component.html',
    styleUrls:['cart-floating.component.css']
})

export class CartButtonComponent{
    cartCount:number=12;
}
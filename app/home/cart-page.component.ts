import {Component,OnInit,OnChanges} from '@angular/core';
import {ICart} from './cart';
import {CartService} from './cart.service';
@Component({
    moduleId:module.id,
    templateUrl:'cart-page.component.html',
    providers: [CartService],
    styleUrls:['cart-page.component.css']
})
export class CartPageComponent implements OnInit{
    cart:ICart[];
    errorMessage:string;
    constructor(private _cartService:CartService){
        
    }
    ngOnInit():void{
        this._cartService.getCart()
                            .subscribe(cart => this.cart = cart,
                            error => this.errorMessage = <any>error);
    }
    ngOnChanges():void{
        this._cartService.getCart()
                            .subscribe(cart => this.cart = cart,
                            error => this.errorMessage = <any>error);
    }
    deleteProduct(id:number){
        this._cartService.deleteFromCart(id)
                            .subscribe(cart => this.cart = cart,
                            error => this.errorMessage = <any>error);
              
    }
    
//     addCart (id: number) {
//     if (!id) { return; }
//     this._cartService.addCart(id)
//                      .subscribe(
//                        cart  => this.cart.push(id),
//                        error =>  this.errorMessage = <any>error);
//   }
}
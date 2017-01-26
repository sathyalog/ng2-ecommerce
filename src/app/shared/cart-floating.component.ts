import { Component } from '@angular/core';
import { CartService } from './../home/cart.service';
@Component({
  selector: 'show-cart',
  moduleId: module.id,
  templateUrl: '../../assets/static/template/cart-floating.component.html',
  styleUrls: ['../../assets/static/assets/stylesheet/cart-floating.component.css'],
  providers: [CartService]
})

export class CartButtonComponent {

  cartCount: number;
  errorMessage: any;

  constructor(private _cartService: CartService) {
    this._getCount();
  }

  private _getCount() {
    this._cartService.getCart()
      .subscribe(cart => this.cartCount = cart.length, error => this.errorMessage = <any>error);
  }

}

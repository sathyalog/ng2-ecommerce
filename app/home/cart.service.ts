import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {ICart} from './cart';

@Injectable()
export class CartService{
    private _cartUrl = 'api/cart/cart.json';

    constructor(private _http:Http){

    }
    addCart (id:number): Observable<ICart[]> {
        let bodyString = JSON.stringify(id); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._cartUrl, {productId:id}, options) // ...using post request
                         .map((res:Response) => res.json())// ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    getCart():Observable<ICart[]>{
         return this._http.get(this._cartUrl)
                .map((response:Response)=><ICart[]>response.json())
                .do(data=>console.log('All:'+JSON.stringify(data)))
                //.do(this.checkIds)
                .catch(this.handleError);         
    
    }   
    
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
    
    
}
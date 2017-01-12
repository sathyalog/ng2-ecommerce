import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {ICart} from './cart';

@Injectable()
export class CartService{
    private _cartUrl = 'http://127.0.0.1:3004/cartProducts';
    count:number;
    constructor(private _http:Http){
        this.count = 1;
    }
    
    addCart(product:Object): Observable<ICart[]> {
        let bodyString = JSON.stringify(product); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._cartUrl, product,options) // ...using post request,options
                         .map((res:Response) => <ICart[]>res.json())// ...and calling .json() on the response to return data
                         .do(data=>{this.count = data.length;
                                console.log(this.count);
                                console.log('All:'+JSON.stringify(data))})
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    getCart():Observable<ICart[]>{
         return this._http.get(this._cartUrl)
                .map((response:Response)=><ICart[]>response.json())
                .do(data=>{this.count = data.length;
                    console.log(this.count);
                    console.log('All:'+JSON.stringify(data))})
                //.do(this.checkIds)
                .catch(this.handleError);         
    
    }   
    deleteFromCart(id):Observable<ICart[]>{
        return this._http.delete(`${this._cartUrl}/${id}`).map((response:Response)=><ICart[]>response.json())
                .do(data=>{this.count = data.length;
                    console.log(this.count);
                    console.log('All:'+JSON.stringify(data))})
                 .catch(this.handleError); 
    }

    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
    
}
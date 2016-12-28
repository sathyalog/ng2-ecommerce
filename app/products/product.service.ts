import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProduct} from './product';

@Injectable()
export class ProductService{
    private _productUrl = 'api/products/products.json';

    constructor(private _http:Http){

    }
    getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
                .map((response:Response)=><IProduct[]>response.json())
                .do(data=>console.log('All:'+JSON.stringify(data)))
                //.do(this.checkIds)
                .catch(this.handleError);         
    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
    // private checkIds(data){
    //     console.log(data.length);
    //     var Ids = [];
    //     for(var i=0;i<data.length;i++){
    //         Ids.push(data[i].productId);
    //         console.log(Ids);
    //     }
    // }
    // getIds():Observable<IProduct[]>{
    //     return this._http.get(this._productUrl)
    //             .map((response:Response)=><IProduct[]>response.json())
    //             //.do(data=>console.log('All:'+JSON.stringify(data)))
    //             .do(this.checkIds)
    //             .catch(this.handleError);
    // }
}
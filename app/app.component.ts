import { Component } from '@angular/core';
import {ProductService} from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
        <div><h3>{{pageTitle}}</h3>
           <pm-products></pm-products>
        </div>   
    `,
    providers:[ProductService]
})
export class AppComponent { 
    pageTitle: string = 'Product Management'
}

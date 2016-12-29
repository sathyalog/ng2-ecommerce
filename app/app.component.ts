import { Component } from '@angular/core';
import {ProductService} from './products/product.service';


@Component({
    selector: 'pm-app',
    template: `
        <div>
        <header></header>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>  
    `,
    styles:['.logo-dimensions{ width:"25px";height:"25px" }'],  
    providers:[ProductService]
})
export class AppComponent { 
    pageTitle: string = 'Product Management'

   

    /* unnecessary code
    <a class='navbar-brand logo-dimensions'><img alt="Brand" style="width:25px;vertical-align: middle; display: inline-block;
    height: 100%;" src="./app/assets/images/sapient-logo.jpg"></a>
    */
}

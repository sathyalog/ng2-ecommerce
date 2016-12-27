import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h3>{{pageTitle}}</h3>
           <pm-products></pm-products>
        </div>   
    `
})
export class AppComponent { 
    pageTitle: string = 'Product Management'
}

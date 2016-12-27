import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started</h1>
        <div><h3>{{pageTitle}}</h3>
            <div>My First Component </div>
        </div>   
    `
})
export class AppComponent { 
    pageTitle: string = 'Product Management'
}

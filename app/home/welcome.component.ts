import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styles: ['.align-center { text-align: center; }']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from './../auth/auth.service';
@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls: ['app/home/welcome.component.css'],
    providers: [ Auth ]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    showLoginForm: boolean;
    constructor(private auth: Auth) {
        
        if(localStorage.getItem('id_token')){
            this.showLoginForm = false;
        }else{
            this.showLoginForm = true;
        }
    }
    
    
}

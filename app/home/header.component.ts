import { Component } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router, ActivatedRoute } from '@angular/router';
declare var Auth0Lock: any;
@Component({
  selector: 'header',
  templateUrl: 'app/home/header.component.html',
  styles: ['.small{font-size:15px;}']
})
export class HeaderComponent {
  public pageTitle: string = 'Product Management';
  lock = new Auth0Lock('xe58JBwAHV5D6C68MfCYFlLWdo7yVJcW', 'sathyalog.auth0.com', {});

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult, profile) => {
      console.log(profile);
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  jwtHelper: JwtHelper = new JwtHelper();

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
    //var self = this;
    // this.lock.show((err:string, profile:string, id_token:string)=>{
    //         if(err){
    //             throw new Error(err);
    //         }
    //         //this._router.navigate(['/products']);
    //         localStorage.setItem('profile',JSON.stringify(profile));
    //         localStorage.setItem('id_token',id_token);
    //         console.log("Logged In");
    //         console.log(
    //             this.jwtHelper.decodeToken(id_token),
    //             this.jwtHelper.getTokenExpirationDate(id_token),
    //             this.jwtHelper.isTokenExpired(id_token)
    //         );
    //         //self.authenticated();
    //     });

  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');

  }

}

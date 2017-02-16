"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
var core_1 = require("@angular/core");
var angular2_jwt_1 = require("angular2-jwt");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
  function HeaderComponent(_route, _router) {
    this._route = _route;
    this._router = _router;
    this.pageTitle = 'Product Management';
    this.lock = new Auth0Lock('xe58JBwAHV5D6C68MfCYFlLWdo7yVJcW', 'sathyalog.auth0.com', {});
    this.jwtHelper = new angular2_jwt_1.JwtHelper();
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", function (authResult, profile) {
      console.log(profile);
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  HeaderComponent.prototype.authenticated = function () {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return angular2_jwt_1.tokenNotExpired();
  };
  HeaderComponent.prototype.login = function () {
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
  };
  HeaderComponent.prototype.logout = function () {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
  return HeaderComponent;
}());
HeaderComponent = __decorate([
  core_1.Component({
    selector: 'header',
    templateUrl: '../../assets/static/template/header.component.html',
    styles: ['.small{font-size:15px;}']
  }),
  __metadata("design:paramtypes", [router_1.ActivatedRoute,
    router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map

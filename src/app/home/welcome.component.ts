import { Component } from '@angular/core';
import { Auth } from './../auth/auth.service';

@Component({
  templateUrl: '../../assets/static/template/welcome.component.html',
  styleUrls: ['../../assets/static/assets/stylesheet/welcome.component.css'],
  providers: [Auth]
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';
  showLoginForm: boolean;

  constructor(private auth: Auth) {
    this.showLoginForm = !localStorage.getItem('id_token');
  }

}

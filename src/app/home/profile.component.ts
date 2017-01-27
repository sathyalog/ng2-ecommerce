import { Component } from '@angular/core';

@Component({
  templateUrl: '../../assets/static/template/profile.component.html'
})

export class ProfileComponent {
  profile: any;

  constructor() {
    //this.profile = JSON.parse(localStorage.getItem('profile'));

  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';


@IonicPage({
    name: 'login',
    segment: 'login'    
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(public navCtrl: NavController) {

  }

  gotoNext() {
    this.navCtrl.push('signupinfo');
  }

}
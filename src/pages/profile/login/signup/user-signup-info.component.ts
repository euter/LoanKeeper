import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';


@IonicPage({
    name: 'signupinfo',
    segment: 'signupinfo'    
})

@Component({
  selector: 'page-signup-info',
  templateUrl: 'user-signup-info.component.html'
})
export class UserSignupInfoComponent {

  constructor(public navCtrl: NavController) {

  }

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserInfoComponent } from './account/user-info.component';
import { UpqradeMemberComponent } from './account/upqrade-member.component';
import { AccountDetailComponent } from './account/account-detail.component';
import { UserProfileService } from '../../components/user/services/user-profile.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  constructor(private userProfileService: UserProfileService, public navCtrl: NavController) {

  }

  editUserinfo(){
    this.navCtrl.push(UserInfoComponent);
  }

  goToMemberUpqrade() {
    this.navCtrl.push(UpqradeMemberComponent);
  }

  goToAccountDetail() {
    this.navCtrl.push(AccountDetailComponent);
  }

}
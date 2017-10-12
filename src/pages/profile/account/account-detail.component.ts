import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProfileService,  UserProfile } from '../../../components/user/services/user-profile.service';
import { MemberService, MemberCategoryStruct } from '../../../components/services/member.service';

@Component({
    selector: 'page-account-detail',
    templateUrl: 'account-detail.component.html'
  })
export class AccountDetailComponent implements OnInit {

    

    ngOnInit(){

    }
}
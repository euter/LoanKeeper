import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProfileService,  UserProfile } from '../../../components/user/services/user-profile.service';
import { MemberService, MemberCategoryStruct } from '../../../components/services/member.service';

@Component({
    selector: 'page-upqrade-member',
    templateUrl: 'upqrade-member.component.html'
  })
export class UpqradeMemberComponent implements OnInit {
    userProfile?:  UserProfile;
    memberCategory: MemberCategoryStruct[];
    checkedStates: boolean[];

    constructor (private userProfileService: UserProfileService, 
        private memberService: MemberService, 
        public navCtrl: NavController) {
        
    }

    ngOnInit() {
        this.userProfile = this.userProfileService.getUserProfile();      
        this.memberCategory = this.memberService.getMembersWithFee();
        //console.log('start set checked 2....');
        if (this.memberCategory) {
            this.checkedStates = Array.apply(false, Array(this.memberCategory.length));       
            this.checkedStates.every((val, index, array)=> array[index]=false);
        }
    }

    getMemberCategoryWithFee(): MemberCategoryStruct[] {
        return this.memberCategory;
    }

    updateSelect(i:number) {
        if(this.checkedStates[i]) {
            this.checkedStates.every((val, index, array): boolean => {
                    if(i != index)
                        array[index]=false;
                    return true;
            });
        }
    }





}
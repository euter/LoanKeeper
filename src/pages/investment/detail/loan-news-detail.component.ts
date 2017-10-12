import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoanNewsService } from '../../../components/loanNews/service/loan-news.service';
import { LoanNews } from '../../../components/loanNews/service/loan-news';
import { UserProfileService,  UserProfile } from '../../../components/user/services/user-profile.service';
import { MemberService, MemberCategoryStruct } from '../../../components/services/member.service';
import { UpqradeMemberComponent } from '../../profile/account/upqrade-member.component';

@Component({
    selector: 'page-loan-news-detail',
    templateUrl: 'loan-news-detail.component.html'
})
export class LoanNewsDetailComponent implements OnInit {
    @Input() loanNews: LoanNews;
    private userProfile: UserProfile;


    constructor(private userProfileService: UserProfileService,
        private loanNewsService: LoanNewsService, 
        private memberService:MemberService,
        private navParams: NavParams, 
        private navCtrl: NavController){
        this.loanNews = navParams.data;
    }

    ngOnInit() {
        this.userProfile = this.userProfileService.getUserProfile(); 
      //this.loanProducts = this.loanProService.getLoanProductsWithTopic(this.topicName);
    }

    hasReadPermission():boolean {

        if( this.loanNews.isFree || !this.loanNews.requireMemGrade) {
            return true;
        }
        
        return this.memberService.hasPermission(this.userProfile.member, this.loanNews.requireMemGrade)
    }
    goToUpqradeMemberPage(){
        this.navCtrl.push(UpqradeMemberComponent);
    }

}
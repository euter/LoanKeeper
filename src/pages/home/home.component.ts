import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoanProductService } from '../../components/loanProduct/service/loan-product.service';
import { LoanProduct, LOADTOPICS } from '../../components/loanProduct/service/loan-product';
import { LoanTopicComponent } from '../loan/topic/loan-topic.component';
import { LoginService } from '../../components/user/services/login.service';
//import { LoanComponent } from '../loan/loan.component';
//import { InvestmentComponent } from '../investment/investment.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(private loginService: LoginService,
    private loanProductService: LoanProductService,  
    public navCtrl: NavController) {
      
  }

  getLoanTopics() : string[] {
    return LOADTOPICS;
  }

  getLoanProductsSumWithTopic(topic: string) {
    return this.loanProductService.getLoanProductsSumWithTopic(topic);
  }

  getRecommendedLoans() {
    return this.loanProductService.getRecommendedLoans();
  }

  onLoginPage(){
    this.navCtrl.push('login');
  }

  goToLoanTopicPage(topic: string){
    this.navCtrl.push(LoanTopicComponent,{
      topicName: topic
    });
  }

  goToLoanComponent() {
    this.navCtrl.parent.select(1);
  }

  goToInvestmentComponent() {
    this.navCtrl.parent.select(2);
  }

}

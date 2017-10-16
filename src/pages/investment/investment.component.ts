import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoanNewsService } from '../../components/loanNews/service/loan-news.service'
import { LoanNews } from '../../components/loanNews/service/loan-news'

@Component({
  selector: 'page-investment',
  templateUrl: 'investment.component.html'
})
export class InvestmentComponent {

  constructor(private loanNewsService: LoanNewsService, public navCtrl: NavController) {

  }

  getLoanNewsForStock(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForType("股票资讯");

  }

  getLoanNewsForFund(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForType("基金资讯");
  }

  getLoanNewsForForeignCurrency (): LoanNews[] {
    return this.loanNewsService.getLoanNewsForType("外汇资讯");
  }

  getLoanNewsForFutures(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForType("期货资讯");
  }

}
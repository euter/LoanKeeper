import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreditCardService } from '../../components/creditCard/service/credit-card.service';
import { CreditCard } from '../../components/creditCard/service/credit-card';
import { LoanNewsService } from '../../components/loanNews/service/loan-news.service'
import { LoanNews } from '../../components/loanNews/service/loan-news'

@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.component.html'
})
export class DiscoveryComponent {
  private sortedCreditCards: CreditCard[];

  constructor(private cerditCardService: CreditCardService,
    private loanNewsService: LoanNewsService,
    public navCtrl: NavController) {

  }

  getCerditCardsForRecommend(): CreditCard[] {
    this.sortedCreditCards = this.cerditCardService.creditCards();
    if (!this.sortedCreditCards) return;
    this.sortCreditCardsByScope();
    var num = this.sortedCreditCards.length > 2 ? 2 : this.sortedCreditCards.length;
    return this.sortedCreditCards.slice(0, num);
  }

  sortCreditCardsByScope() {
    this.sortedCreditCards.sort((a: CreditCard, b: CreditCard) => {
      if (a.sortScope < b.sortScope)
        return -1;
      else if (a.sortScope > b.sortScope)
        return 1;
      else
        return 0;
    });
  }

  getLoanNewsForNet(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForNet();

  }

  getLoanNewsForLarge(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForLarge();
  }

  getLoanNewsForInvest(): LoanNews[] {
    return this.loanNewsService.getLoanNewsForInvest();
  }



}
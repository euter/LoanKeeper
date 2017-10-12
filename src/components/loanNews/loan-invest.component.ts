import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoanNews } from './service/loan-news'
import {LoanNewsDetailComponent} from '../../pages/investment/detail/loan-news-detail.component';

@Component({
    selector: 'loan-invest',
    templateUrl: './loan-invest.component.html'

})
export class LoanInvestComponent {
    @Input() loanNews: LoanNews;

    constructor(public navCtrl:NavController) {

    }

    goToNewsDetail() {
        this.navCtrl.push(LoanNewsDetailComponent, this.loanNews);

    }


}
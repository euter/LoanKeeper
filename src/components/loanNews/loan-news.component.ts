import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoanNews } from './service/loan-news'
import {LoanNewsDetailComponent} from '../../pages/investment/detail/loan-news-detail.component';

@Component({
    selector: 'loan-news',
    templateUrl: './loan-news.component.html'

})
export class LoanNewsComponent {
    @Input() loanNews: LoanNews;

    constructor(public navCtrl:NavController ) {

    }

    goToNewsDetail() {
        this.navCtrl.push(LoanNewsDetailComponent, this.loanNews);

    }

}
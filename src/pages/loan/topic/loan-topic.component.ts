import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoanProductService } from '../../../components/loanProduct/service/loan-product.service';
import { LoanProduct } from '../../../components/loanProduct/service/loan-product';

@Component({
    selector: 'page-loan-topic',
    templateUrl: 'loan-topic.component.html'
})
export class LoanTopicComponent implements OnInit {
    topicName: string;
    private loanProducts: LoanProduct[] = [];


    constructor(private loanProService: LoanProductService, private navParams: NavParams, navCtrl: NavController){
        this.topicName = navParams.get('topicName');
    }

    ngOnInit() {
      //this.loanProducts = this.loanProService.getLoanProductsWithTopic(this.topicName);
    }

    getLoanProductsInTopic(): LoanProduct[] {
        return this.loanProService.getLoanProductsWithTopic(this.topicName);
    }




}
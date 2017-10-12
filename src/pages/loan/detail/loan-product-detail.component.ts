import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoanProductService } from '../../../components/loanProduct/service/loan-product.service';
import { LoanProduct } from '../../../components/loanProduct/service/loan-product';

@Component({
    selector: 'page-loan-product-detail',
    templateUrl: 'loan-product-detail.component.html'
})
export class LoanProductDetailComponent implements OnInit {
    @Input() loanProduct;


    constructor(private loanProService: LoanProductService, private navParams: NavParams, private navCtrl: NavController){
        this.loanProduct = navParams.data;
    }

    ngOnInit() {
      //this.loanProducts = this.loanProService.getLoanProductsWithTopic(this.topicName);
    }

}

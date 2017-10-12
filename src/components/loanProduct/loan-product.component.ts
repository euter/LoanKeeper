import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoanProduct } from './service/loan-product'
import { LoanProductDetailComponent } from '../../pages/loan/detail/loan-product-detail.component';

@Component({
    selector: 'loan-product',
    templateUrl: './loan-product.component.html'

})
export class LoanProductComponent {
    @Input() loanProduct: LoanProduct;

    constructor(private navCtrl: NavController) {

    }

    goToLoanProductDetail(){
        this.navCtrl.push(LoanProductDetailComponent, this.loanProduct);
    }

}
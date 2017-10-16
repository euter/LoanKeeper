import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoanProductService } from '../../components/loanProduct/service/loan-product.service';
import { LoanProduct } from '../../components/loanProduct/service/loan-product';

@Component({
  selector: 'page-loan',
  templateUrl: 'loan.component.html'
})
export class LoanComponent implements OnInit {
  private target: string;
  private minQuota: number;
  targetIdx: number = 0;
  minQuotaIdx: number = 0;
  targetPrevIdx: number = 0;
  minQuotaPervIdx: number = 0;
  searchedResults: LoanProduct[];


  constructor(private loanProductService: LoanProductService, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.target = '全部';
    this.minQuota = 0;
    this.searchedResults = this.loanProductService.searchLoanProducts();

  }

  update() {
    if (this.minQuotaIdx != this.minQuotaPervIdx || this.targetIdx != this.targetPrevIdx) {
      if (this.targetIdx == 0) {
        this.searchedResults = this.loanProductService.searchLoanProducts(this.minQuota);
        return;
      }
      this.searchedResults = this.loanProductService.searchLoanProducts(this.minQuota, this.target);
    }
  }

  selectTGroupAll() {
    this.target = '全部';
    this.targetPrevIdx = this.targetIdx;
    this.targetIdx = 0;
    this.update();
  }

  selectTGroupWork() {
    this.target = '上班族';
    this.targetPrevIdx = this.targetIdx;
    this.targetIdx = 1;
    this.update();
  }

  selectTGroupFirm() {
    this.target = '企业主';
    this.targetPrevIdx = this.targetIdx;
    this.targetIdx = 2;
    this.update();
  }

  selectTGroupHouseholds() {
    this.target = '个体户';
    this.targetPrevIdx = this.targetIdx;
    this.targetIdx = 3;
    this.update();
  }

  selectMinQuotaAll() {
    this.minQuota = 0;
    this.minQuotaPervIdx = this.minQuotaIdx;
    this.minQuotaIdx = 0;
    this.update();
  }

  selectMinQuotaThree() {
    this.minQuota = 3000;
    this.minQuotaPervIdx = this.minQuotaIdx;
    this.minQuotaIdx = 1;
    this.update();
  }

  selectMinQuotaThirty() {
    this.minQuota = 30000;
    this.minQuotaPervIdx = this.minQuotaIdx;
    this.minQuotaIdx = 2;
    this.update();
  }

  selectMinQuotaTen() {
    this.minQuota = 100000;
    this.minQuotaPervIdx = this.minQuotaIdx;
    this.minQuotaIdx = 3;
    this.update();
  }

}
import { Component, Input, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';

import { LoanProductService } from './service/loan-product.service';
import { LoanProduct} from './service/loan-product';

@Component({
  selector: 'lk-loan-list',
  templateUrl: 'loan-list.component.html'
})
export class LoanListComponent implements OnInit, OnChanges {
  @Input() searchedResults: LoanProduct[];
  searchedResultSum: number;


  constructor() {

  }

  ngOnInit() {
    this.searchedResultSum = this.searchedResults.length;

  }

  ngOnChanges(changes){
    this.searchedResultSum = this.searchedResults.length;
  }


}
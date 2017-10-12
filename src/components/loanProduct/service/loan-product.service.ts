import { Injectable } from '@angular/core';

import { LoanProduct } from './loan-product';

import { LOANPRODUCTS } from '../../../test/mock/mock-loan-products';

@Injectable()
export class LoanProductService {

    searchLoanProducts(minQuota: number = 0, target?: string) : LoanProduct[] {
        return LOANPRODUCTS.filter((item, idx, arr)=> {
            if(minQuota > item.maxQuota)
                return false;
            if(target && item.targetGroup && ! item.targetGroup.find((item, idx, arr)=>item === target))
                return false;
            return true;
            })
   }

   getRecommendedLoans(){
    return LOANPRODUCTS.filter((item, idx, arr)=> item.isDisplayInHome);
   }

   getLoanProductsWithTopic(topic:string) {
    return LOANPRODUCTS.filter((item, idx, arr)=> {
        if(!item.topics ||(item.topics && item.topics.find((item, idx, arr)=>item === topic))) {
            return true;
        }
        return false;
    });
   }

   getLoanProductsSumWithTopic(topic:string): number {
    return this.getLoanProductsWithTopic(topic).length;

   }

}
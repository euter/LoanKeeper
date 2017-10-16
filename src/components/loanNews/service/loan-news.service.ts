import { Injectable } from '@angular/core';

import { LoanNews } from './loan-news';

import { LOANNEWSES } from '../../../test/mock/mock-loan-news';

@Injectable()
export class LoanNewsService {

    public allLoanNews(): LoanNews[] {
        return LOANNEWSES;
    }

    public getLoanNews(id: number): LoanNews {
        return this.allLoanNews().find(loanNewsTemp => loanNewsTemp.id === +id);
    }

    public getLoanNewsForNet(): LoanNews[] {
        return this.allLoanNews().filter((item, idx, arr)=> item.loanType === '网贷资讯');

    }

    public getLoanNewsForLarge(): LoanNews[] {
        return this.allLoanNews().filter((item, idx, arr)=> item.loanType === '大额贷款资讯');
    }

    public getLoanNewsForInvest(): LoanNews[] {
        return this.allLoanNews().filter((item, idx, arr)=> item.loanType === '投资资讯');
        
    }

    public getLoanNewsForType(loanType: string): LoanNews[] {
        return this.allLoanNews().filter((item, idx, arr)=> item.loanType === loanType);
    }

}
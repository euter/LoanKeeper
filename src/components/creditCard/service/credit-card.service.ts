import { Injectable } from '@angular/core';

import { CreditCard } from './credit-card';

import { CREDITCARDS } from '../../../test/mock/mock-credit-cards';

@Injectable()
export class CreditCardService {

    public creditCards(): CreditCard[] {
        return CREDITCARDS;
    }

    public getCreditCard(id: number): CreditCard {
        return this.creditCards().find(creditCard => creditCard.id === +id);
    }

}
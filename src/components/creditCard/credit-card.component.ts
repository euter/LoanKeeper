import { Component, Input } from '@angular/core';

import { CreditCard } from './service/credit-card'

@Component({
    selector: 'credit-card',
    templateUrl: './credit-card.component.html'

})
export class CreditCardComponent {
    @Input() creditCard: CreditCard;

    constructor() {

    }

}
import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';

@Pipe({name:'SignCurrency'})
export class SignCurrencyPipe implements PipeTransform {
    constructor(@Inject(LOCALE_ID) private _locale: string) {};

    transform(value: number|string): string {
        if(value=== null) return null;
        // Convert strings to numbers
        value = typeof value === 'string' && this.isNumeric(value) ? +value : value;
        if (typeof value === 'number' && value > 0) {
            return '+'+value;
        }
        return ''+value;

    }
    //copy from angular/number_pipe.ts.
    isNumeric(value: any): boolean { 
        return !isNaN(value - parseFloat(value)); 
    } 
}


    
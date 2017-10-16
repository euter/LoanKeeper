
export class CreditCard {
    public id: number;
    public name: string;
    public briefDescription: string;
    public appliedNumInCurMonth: number;
    public imageUrl: string;
    public sortScope: number; //smaller scope, higher priority.
}
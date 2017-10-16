export class LoanNews {
    id: number;
    title: string;
    slogan: string;
    isFree: boolean;
    requireMemGrade?: string;
    imageUrl: string;
    loanType: string;
    publishTime: Date;
    publishOrg: string;
    keyWords: string[];
    content: string;
}
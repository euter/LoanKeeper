
export const OCCUPATIONDICT = {
    0: '全部',
    1: '上班族',
    2: '企业主',
    3: '个体户',
  };

export const LOADTOPICS = ['最新', '极速放款', '快速审查', '校园贷']

export class LoanProduct {
    id: number;
    name: string;
    slogan: string;
    minQuota: number;
    maxQuota: number;
    minMonth: number;
    maxMonth: number;
    dayRateInPercent?: number;
    monthRateInPercent?: number;
    imageUrl: string;
    loanCondition:string[];
    requiredStuff:string[];
    loanFlow: string[];
    brief:string;

    targetGroup?: string[];
    topics?: string[];

    isDisplayInHome?:boolean = false;


}
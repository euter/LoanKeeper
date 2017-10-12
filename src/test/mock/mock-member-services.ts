import { MemberCategoryStruct } from '../../components/services/member.service';

export const MEMBERSERVICES: MemberCategoryStruct[] = [
    {
        id: 1,
        name:'普通会员',
        hasFee: false,
        membershipFee:0,
        grade: 1,
        feeUnit:'年',
        privileges:['查阅普通会员文章'],
    },
    {
        id: 2,
        name:'白银会员',
        hasFee: true,
        membershipFee:99,
        grade: 2,
        feeUnit:'年',
        privileges:['查阅白银会员文章','定制会员内容专栏推送','白银会员专属权限'],
    },
    {
        id: 3,
        name:'黄金会员',
        hasFee: true,
        membershipFee:199,
        grade: 3,
        feeUnit:'年',
        privileges:['查阅黄金会员文章','定制会员内容专栏推送','黄金会员专属权限'],
    },
    {
        id: 4,
        name:'白金会员',
        hasFee: true,
        membershipFee:399,
        grade: 4,
        feeUnit:'年',
        privileges:['查阅白金会员文章','定制会员内容专栏推送','白金会员专属权限']
    }
]
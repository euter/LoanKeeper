import { Injectable } from '@angular/core';

import { MEMBERSERVICES } from '../../test/mock/mock-member-services';

export class MemberCategoryStruct {
    id: number;
    name: string;
    hasFee:boolean;
    grade:number;// bigger number, higher right,
    membershipFee: number;
    feeUnit: string;
    privileges: string[];
}

@Injectable()
export class MemberService {

    getMembersWithFee(): MemberCategoryStruct[] {
        return MEMBERSERVICES.filter((value, index, array)=>value.hasFee === true);
    }

    /**
     * compare grade between the member category called memberName1 and other member category called memberName2.
     * @param memberName1 name of member category
     * @param memberName2 name of member category
     * @return -1 if the grade of member category called memberName1 is less than the grade of member category called memberName2,
     *          1 if the grade of member category called memberName1 is greater than the grade of member category called memberName2,
     *          0 if the grade of member category called memberName1 is equal to the grade of member category called memberName2,
     */
    compareMemberGrade(memberName1: string, memberName2: string):number {
        if(memberName1 == memberName2)
            return 0;
        var memberCategory1 = MEMBERSERVICES.find((value, index, array)=>value.name === memberName1);
        var memberCategory2 = MEMBERSERVICES.find((value, index, array)=>value.name === memberName2);

        if(typeof memberCategory1 === 'undefined' || typeof memberCategory2 === 'undefined')
            return -1; //?
        if(memberCategory1.grade == memberCategory2.grade) {
            return 0;
        }
        else if (memberCategory1.grade > memberCategory2.grade) {
            return 1;
        }
        else
            return -1;
    }

    /**
     * 
     * @param userCurrMember name of member category which user currently belong to.
     * @param requireMember name of member category required by controlled object.
     * @return true if the grade of member category called userCurrMember is greater than or  equal to the grade of member category called requireMember,
     *         otherwise false.
     */
    hasPermission(userCurrMember: string, requireMember: string): boolean {
        if(this.compareMemberGrade(userCurrMember, requireMember) >= 0)
            return true;
        return false;


    }

}
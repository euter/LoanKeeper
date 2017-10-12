import { Injectable } from '@angular/core';

import { LoginService } from './login.service'

export class UserProfile {
    id: number;
    userId: string;
    nickname: string;
    location: string;
    headPortraitUrl: string;
    occupationalIdentity: string;
    member: string;
    memberIntegral:number;
    assetsInYuan: number;
    YesterdayGainsInYuan:number;
    hailFellowNum: number;
    hailFellowGroupNum:number;
    myCollectIds: number[];
    myRequestIds:number[];
    alipayAccount?: string;
    weixinAccount?:string;

    
}

export const MOCK_USER_PROFILE: UserProfile = {
    id:1,
    userId: 'star100@163.com',
    nickname:'大雅',
    location: '北京东城',
    headPortraitUrl: 'assets/img/avatar-poe.png',
    occupationalIdentity: '上班族',
    member: '普通会员',
    memberIntegral: 1002,
    assetsInYuan: 20098,
    YesterdayGainsInYuan: -223,
    hailFellowNum: 89,
    hailFellowGroupNum: 2023,
    myCollectIds: [1,3,4],
    myRequestIds: [2,4],
    weixinAccount: 'CoCo'
}

@Injectable()
export class UserProfileService {
    userProfile: UserProfile;

    constructor(public loginService: LoginService) {
        this.userProfile = MOCK_USER_PROFILE;
    }


    getIsLoggedIn(): boolean{
        return this.loginService.getIsLoggedIn();
    }

    getUserProfile(): UserProfile {
        if(this.getIsLoggedIn())
            return this.userProfile;
    }

    setNickname(nick: string) {
        this.userProfile.nickname = nick;
    }

    getNickname() {
        return this.userProfile.nickname;
    }

    setLocation(location: string) {
        this.userProfile.location = location;
    }

    setHeadPortraitUrl(url: string) {
        this.userProfile.headPortraitUrl = url;
    }

    setOccupationalIdentity(occupationalId: string) {
        this.userProfile.occupationalIdentity = occupationalId;
    }

    updateMember(membership: string) {
        this.userProfile.member = membership;
    }

    getMember(): string {
        return this.userProfile.member;
    }

    updateCollects(collectId: number, isCollect: boolean) {
        if(!isCollect) {
            this.userProfile.myCollectIds = this.userProfile.myCollectIds.filter((value, index, array) => value === collectId)
        }
        else if(!this.userProfile.myCollectIds.find((value, index, array) => value === collectId)) {
            this.userProfile.myCollectIds[this.userProfile.myCollectIds.length] = collectId;
        }
    }


}
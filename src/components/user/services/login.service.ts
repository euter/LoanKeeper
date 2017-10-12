import { Injectable } from '@angular/core';

import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

@Injectable()
export class LoginService {
    private userId: string;
    private loginCredential: string;
    private token: string;

    private isLoggedIn: boolean = true;//mock

    loginWithPwd(userLoginId: string, loginPwd: string): boolean {
        this.userId = userLoginId;
        this.loginCredential = Base64.stringify(sha256(userLoginId+loginPwd));
        this.isLoggedIn = true;
        return this.isLoggedIn;
    }

    getIsLoggedIn(){
        return this.isLoggedIn;
    }

    getUserId(): string {
        if (this.isLoggedIn)
            return this.userId;
    }

    logout(){
        this.isLoggedIn = false;
    }


}
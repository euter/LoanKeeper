import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { UserSignupInfoComponent } from './user-signup-info.component';


@NgModule({
    declarations: [
        UserSignupInfoComponent
    ],
    imports: [
        IonicPageModule.forChild(UserSignupInfoComponent)
    ],
    entryComponents: [
        UserSignupInfoComponent
    ]
})
export class UserSignupInfoComponentModule { }
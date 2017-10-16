import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoanComponent } from '../pages/loan/loan.component';
import { InvestmentComponent } from '../pages/investment/investment.component';
import { DiscoveryComponent } from '../pages/discovery/discovery.component';
import { ProfileComponent } from '../pages/profile/profile.component';
//import { LoginComponent } from '../pages/profile/login/login.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { LoginComponentModule } from '../pages/profile/login/login.component.module';
import { UserSignupInfoComponentModule } from '../pages/profile/login/signup/user-signup-info.component.module';

import { CreditCardComponent } from '../components/creditCard/credit-card.component';
import { CreditCardService } from '../components/creditCard/service/credit-card.service';
import { LoanNewsComponent } from '../components/loanNews/loan-news.component';
import { LoanInvestComponent } from '../components/loanNews/loan-invest.component';
import { LoanNewsService } from '../components/loanNews/service/loan-news.service';
import { LoanProductComponent } from '../components/loanProduct/loan-product.component';
import { LoanListComponent } from '../components/loanProduct/loan-list.component';
import { LoanProductService } from '../components/loanProduct/service/loan-product.service';
import { LoanTopicComponent } from '../pages/loan/topic/loan-topic.component';
import { LoanProductDetailComponent } from '../pages/loan/detail/loan-product-detail.component';
import { LoginService } from '../components/user/services/login.service';
import { UserProfileService } from '../components/user/services/user-profile.service';
import { MemberService } from '../components/services/member.service';
import { UserInfoComponent } from '../pages/profile/account/user-info.component';
import { UpqradeMemberComponent } from '../pages/profile/account/upqrade-member.component';
import { AccountDetailComponent } from '../pages/profile/account/account-detail.component';
import {LoanNewsDetailComponent} from '../pages/investment/detail/loan-news-detail.component';

import { SignCurrencyPipe } from '../components/pipes/sign-currency.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    LoanNewsComponent,
    LoanInvestComponent,
    LoanProductComponent,
    LoanTopicComponent,
    LoanProductDetailComponent,
    UserInfoComponent,
    UpqradeMemberComponent,
    LoanListComponent,
    HomeComponent,
    LoanComponent,
    InvestmentComponent,
    AccountDetailComponent,
    LoanNewsDetailComponent,
    DiscoveryComponent,
    ProfileComponent,
    TabsComponent,
    SignCurrencyPipe

  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginComponentModule,
    UserSignupInfoComponentModule,
    IonicModule.forRoot(AppComponent)
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    LoanTopicComponent,
    LoanProductDetailComponent,
    UserInfoComponent,
    UpqradeMemberComponent,
    InvestmentComponent,
    LoanNewsDetailComponent,
    DiscoveryComponent,
    AccountDetailComponent,
    ProfileComponent,
    TabsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CreditCardService,
    LoanNewsService,
    LoanProductService,
    LoginService,
    UserProfileService,
    MemberService
  ]
})
export class AppModule {}
